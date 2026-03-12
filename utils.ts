import React, { useState } from 'react';
import { X, Upload, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { db, storage } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface ContributionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'new' | 'edit';
  termId?: string;
  initialData?: {
    title: string;
    definition: string;
    category: string;
    context?: string;
  };
}

export const ContributionModal: React.FC<ContributionModalProps> = ({ 
  isOpen, 
  onClose, 
  type, 
  termId, 
  initialData 
}) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    definition: initialData?.definition || '',
    category: initialData?.category || 'Terminology',
    context: initialData?.context || '',
  });
  const [media, setMedia] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setError(null);

    try {
      let mediaUrl = '';
      if (media) {
        const storageRef = ref(storage, `contributions/${user.uid}/${Date.now()}_${media.name}`);
        const snapshot = await uploadBytes(storageRef, media);
        mediaUrl = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, 'submissions'), {
        ...formData,
        type,
        termId: termId || null,
        userId: user.uid,
        userEmail: user.email,
        mediaUrl,
        status: 'pending',
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({ title: '', definition: '', category: 'Terminology', context: '' });
        setMedia(null);
      }, 2000);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {type === 'new' ? 'Submit New Term' : 'Propose Edit'}
              </h3>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-400">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Submission Received!</h4>
                  <p className="text-slate-500 dark:text-slate-400">Our moderators will review your contribution soon.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Term Title</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl outline-none dark:text-white"
                      placeholder="e.g. Starboard"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Definition</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.definition}
                      onChange={(e) => setFormData({ ...formData, definition: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl outline-none dark:text-white resize-none"
                      placeholder="Provide a clear definition..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl outline-none dark:text-white"
                      >
                        <option>Terminology</option>
                        <option>Vessel Parts</option>
                        <option>Navigation</option>
                        <option>Operations</option>
                        <option>Regulations</option>
                        <option>Technical</option>
                        <option>Safety</option>
                        <option>Crew</option>
                        <option>Cargo</option>
                        <option>Environment</option>
                        <option>History</option>
                        <option>Meteorology</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Media (Optional)</label>
                      <label className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                        <Upload size={16} className="text-slate-400" />
                        <span className="text-sm text-slate-500 truncate">{media ? media.name : 'Upload image'}</span>
                        <input type="file" className="hidden" onChange={(e) => setMedia(e.target.files?.[0] || null)} accept="image/*" />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Context (Optional)</label>
                    <input
                      type="text"
                      value={formData.context}
                      onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl outline-none dark:text-white"
                      placeholder="e.g. Used in commercial shipping..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl text-sm">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Submit Contribution'
                    )}
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
