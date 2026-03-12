import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { Check, X, ExternalLink, User, Clock, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ModerationDashboard = () => {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'submissions'), where('status', '==', 'pending'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSubmissions(docs);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleApprove = async (submission: any) => {
    try {
      // 1. Add to terms collection (or update existing)
      // For now, we'll add to a 'dynamic_terms' collection
      await addDoc(collection(db, 'terms'), {
        title: submission.title,
        definition: submission.definition,
        category: submission.category,
        context: submission.context,
        mediaUrl: submission.mediaUrl,
        slug: submission.title.toLowerCase().replace(/ /g, '-'),
        id: submission.id, // Or generate a unique one
        createdAt: new Date().toISOString()
      });

      // 2. Mark submission as approved
      await updateDoc(doc(db, 'submissions', submission.id), {
        status: 'approved',
        moderatedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error('Approval error:', err);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await updateDoc(doc(db, 'submissions', id), {
        status: 'rejected',
        moderatedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error('Rejection error:', err);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading submissions...</div>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Moderation Dashboard
        </h2>
        <p className="text-slate-500 dark:text-slate-400">Review and approve user contributions to the lexicon.</p>
      </header>

      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {submissions.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800"
            >
              <Check className="mx-auto mb-4 text-green-500" size={48} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">All caught up!</h3>
              <p className="text-slate-500 dark:text-slate-400">No pending submissions to review.</p>
            </motion.div>
          ) : (
            submissions.map((sub) => (
              <motion.div
                key={sub.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest",
                        sub.type === 'new' ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      )}>
                        {sub.type === 'new' ? 'New Term' : 'Proposed Edit'}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded-full uppercase tracking-widest">
                        {sub.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{sub.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{sub.definition}</p>
                    
                    {sub.context && (
                      <div className="text-sm text-slate-500 dark:text-slate-500 italic mb-4">
                        Context: {sub.context}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <User size={14} /> {sub.userEmail}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} /> {sub.createdAt?.toDate().toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 justify-center min-w-[140px]">
                    {sub.mediaUrl && (
                      <a 
                        href={sub.mediaUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2 px-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors"
                      >
                        View Media <ExternalLink size={14} />
                      </a>
                    )}
                    <button 
                      onClick={() => handleApprove(sub)}
                      className="flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-colors shadow-sm"
                    >
                      Approve <Check size={16} />
                    </button>
                    <button 
                      onClick={() => handleReject(sub.id)}
                      className="flex items-center justify-center gap-2 py-2 px-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold hover:bg-red-100 transition-colors"
                    >
                      Reject <X size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
