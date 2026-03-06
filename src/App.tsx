import React, { useState, useMemo, useEffect, useDeferredValue } from 'react';
import { 
  Search, Anchor, Ship, Navigation, BookOpen, Menu, X, 
  ArrowLeft, Info, Compass, Waves, FileText, ShieldCheck, 
  Cpu, Leaf, Box, Users, History, Calendar, ChevronDown, 
  ExternalLink, Share2, Bookmark, Globe, MessageSquare, Mail, Shield, Scale, Cookie, CloudRain,
  Sun, Moon, Linkedin, Twitter, MessageCircle, Volume2, Brain, Layers, Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
  Routes, Route, Link, useNavigate, useParams, useLocation 
} from 'react-router';
import { List } from 'react-window';
import { terms, type Term } from './data/terms';
import { maritimeHistoryEvents } from './data/maritimeHistory';
import { useAuth } from './lib/AuthContext';
import { cn } from './lib/utils';
import { AuthModal } from './components/AuthModal';
import { ContributionModal } from './components/ContributionModal';
import { ModerationDashboard } from './components/ModerationDashboard';
import { VesselDiagram3D } from './components/VesselDiagram3D';
import { BridgeDiagram3D } from './components/BridgeDiagram3D';
import { Quiz } from './components/Quiz';
import { db } from './lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const HistoryPage = React.memo(({ onShowHistory }: any) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const filteredEvents = useMemo(() => {
    return maritimeHistoryEvents
      .filter(e => e.month === selectedMonth)
      .sort((a, b) => a.day - b.day);
  }, [selectedMonth]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <SEO title="Maritime History" description="Explore significant events in maritime history through our interactive timeline." />
      
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl mb-4">
          <History size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Maritime History Timeline</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          From ancient voyages to modern maritime law, explore the events that shaped the world's oceans.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {months.map((month, i) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(i + 1)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
              selectedMonth === i + 1
                ? "bg-amber-600 text-white border-amber-600 shadow-md"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-amber-500"
            )}
          >
            {month}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <motion.button
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => onShowHistory(event)}
              className="w-full text-left p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all group flex items-start gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="text-2xl font-black text-amber-600 dark:text-amber-400">{event.day}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{months[event.month - 1].slice(0, 3)}</div>
                <div className="mt-2 h-full w-px bg-slate-100 dark:bg-slate-800 group-hover:bg-amber-200 dark:group-hover:bg-amber-800 transition-colors" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/50 px-2 py-0.5 rounded">Year {event.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{event.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">{event.description}</p>
              </div>
              <div className="self-center p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-amber-50 dark:group-hover:bg-amber-900 group-hover:text-amber-600 transition-all">
                <ArrowLeft className="rotate-180" size={16} />
              </div>
            </motion.button>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <History size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
            <p className="text-slate-500 dark:text-slate-400">No events recorded for {months[selectedMonth - 1]} yet.</p>
          </div>
        )}
      </div>
    </div>
  );
});

// Highlight component for search results
const Highlight = React.memo(({ text, query }: { text: string; query: string }) => {
  if (!query.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-blue-100 text-blue-900 px-0.5 rounded font-bold">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
});

// --- Components ---

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar text-slate-600 dark:text-slate-400 leading-relaxed">
              {children}
            </div>
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SEO = ({ title, description, slug }: { title: string; description: string; slug?: string }) => {
  const baseUrl = "https://arislek123.github.io/maritime-lexicon";
  const url = slug ? `${baseUrl}/term/${slug}/` : baseUrl;
  const ogImage = `${baseUrl}/og.png`;
  
  return (
    <Helmet>
      <title>{title} – Maritime Lexicon</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content="Maritime Lexicon" />
      <meta property="og:title" content={`${title} – Maritime Lexicon`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} – Maritime Lexicon`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

const TermPage = React.memo(() => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const term = terms.find(t => t.slug === slug);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!term) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Term Not Found</h2>
        <p className="text-slate-500 mb-8">The maritime term you are looking for does not exist in our database.</p>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto p-6 md:p-12"
    >
      <SEO 
        title={term.title} 
        description={term.definition.slice(0, 160)} 
        slug={term.slug} 
      />
      
      <div className="mb-8 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Index
        </Link>
        <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-full uppercase tracking-widest">
          {term.category}
        </span>
      </div>

      <header className="mb-10">
        <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-4">
          {term.title}
          <button 
            onClick={() => speak(term.title)}
            className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all hover:scale-110 active:scale-95"
            title="Listen to pronunciation"
          >
            <Volume2 size={24} />
          </button>
        </h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-8" />
        
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Share this term:</span>
            <div className="flex gap-2">
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white rounded-lg transition-all"
                title="Share on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out the definition of ${term.title} on Maritime Lexicon: `)}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg transition-all"
                title="Share on X"
              >
                <Twitter size={16} />
              </a>
              <a 
                href={`https://wa.me/?text=${encodeURIComponent(`Check out the definition of ${term.title} on Maritime Lexicon: ${currentUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 dark:hover:text-white rounded-lg transition-all"
                title="Share on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
          <button
            onClick={() => user ? setIsEditModalOpen(true) : setIsAuthModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl text-sm font-bold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all"
          >
            <MessageSquare size={16} />
            Propose Edit
          </button>
        </div>
      </header>

      <ContributionModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        type="edit"
        termId={term.id}
        initialData={{
          title: term.title,
          definition: term.definition,
          category: term.category,
          context: term.context
        }}
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <section className="prose prose-slate dark:prose-invert prose-lg max-w-none">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 leading-relaxed text-slate-700 dark:text-slate-300 text-xl font-light italic">
          {term.definition}
        </div>
        
        {term.context && (
          <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Info size={14} /> Context
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-base">{term.context}</p>
          </div>
        )}
      </section>

      {term.relatedSlugs && term.relatedSlugs.length > 0 && (
        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-6">
            Related Concepts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {term.relatedSlugs.map(rSlug => {
              const related = terms.find(t => t.slug === rSlug);
              if (!related) return null;
              return (
                <Link
                  key={related.slug}
                  to={`/term/${related.slug}/`}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all text-left group"
                >
                  <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-400 dark:text-slate-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
                      {related.definition}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </footer>
      )}
    </motion.article>
  );
});

const HomePage = React.memo(({ searchQuery, setSearchQuery, filteredTerms, categories, activeCategory, setActiveCategory, onShowHistory }: any) => {
  const today = useMemo(() => new Date(), []);
  const formattedDate = useMemo(() => today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }), [today]);
  const todayEvents = useMemo(() => {
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return maritimeHistoryEvents.filter(e => e.month === month && e.day === day);
  }, [today]);

  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <SEO 
        title="Home" 
        description="Explore the vast world of nautical terminology with our comprehensive Maritime Lexicon. Search over 1,400 terms." 
      />
      
      {searchQuery || activeCategory !== 'All' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto p-8"
        >
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {searchQuery ? `Search Results for "${searchQuery}"` : `${activeCategory} Terms`}
              </h2>
              <p className="text-slate-500 dark:text-slate-400">{filteredTerms.length} terms found</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map((term: Term) => (
              <Link
                key={term.id}
                to={`/term/${term.slug}/`}
                className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all text-left group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md uppercase tracking-wider group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {term.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <Highlight text={term.title} query={searchQuery} />
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">
                  <Highlight text={term.definition} query={searchQuery} />
                </p>
              </Link>
            ))}
          </div>
          
          {filteredTerms.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No matches found</h3>
              <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or category filters.</p>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-full flex flex-col items-center justify-center p-8 text-center"
        >
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="relative bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 text-blue-600 dark:text-blue-400">
              <Compass size={64} className="animate-spin-slow" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Welcome to the Maritime Lexicon
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
            Explore the vast world of nautical terminology. Select a term from the index or search for specific maritime concepts.
          </p>

          {todayEvents.length > 0 ? (
            <div className="w-full max-w-md mb-12 group">
              <button 
                onClick={() => onShowHistory(todayEvents[0])}
                className="w-full bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-200 dark:hover:border-amber-500 transition-all flex items-center gap-4 text-left overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <History size={40} />
                </div>
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <Calendar size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Today in History</h3>
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/50 px-1.5 py-0.5 rounded">{formattedDate}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                    {todayEvents[0].title}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
                    <Info size={10} /> Click for more info
                  </p>
                </div>
              </button>
            </div>
          ) : (
            <div className="w-full max-w-md mb-12 group">
              <Link 
                to="/history"
                className="w-full bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-200 dark:hover:border-amber-500 transition-all flex items-center gap-4 text-left overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <History size={40} />
                </div>
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <History size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Maritime History</h3>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                    Explore the Timeline
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
                    <Info size={10} /> View all historical events
                  </p>
                </div>
              </Link>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            {categories.filter((c: string) => c !== 'All').map((cat: string, i: number) => (
              <button 
                key={i}
                onClick={() => setActiveCategory(cat)}
                className="p-4 rounded-2xl flex flex-col items-center gap-3 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700 transition-all shadow-sm group"
              >
                <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {categoryIcons[cat] || <Ship size={20} />}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-300">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
});

// --- Main App ---

const categoryIcons: Record<string, React.ReactNode> = {
  'All': <Anchor size={14} />,
  'Terminology': <BookOpen size={14} />,
  'Vessel Parts': <Ship size={14} />,
  'Navigation': <Compass size={14} />,
  'Operations': <Waves size={14} />,
  'Regulations': <FileText size={14} />,
  'Technical': <Cpu size={14} />,
  'Safety': <ShieldCheck size={14} />,
  'Crew': <Users size={14} />,
  'Cargo': <Box size={14} />,
  'Environment': <Leaf size={14} />,
  'History': <History size={14} />,
  'Meteorology': <CloudRain size={14} />,
};

export default function App() {
  const { user, isAdmin, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isContributionModalOpen, setIsContributionModalOpen] = useState(false);
  const [dynamicTerms, setDynamicTerms] = useState<Term[]>([]);
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const navigate = useNavigate();
  const location = useLocation();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // If it's a single letter, just stay on home page and show results
      if (searchQuery.trim().length === 1) {
        if (location.pathname !== '/') navigate('/');
        setShowSuggestions(false);
        return;
      }
      
      const firstResult = filteredTerms[0];
      if (firstResult) {
        navigate(`/term/${firstResult.slug}/`);
        setShowSuggestions(false);
      }
    }
  };

  // Scroll sidebar to top on search
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (searchQuery && sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;
    }
  }, [searchQuery]);
  
  const allTerms = useMemo(() => {
    const base = terms.length > 0 ? terms : [];
    const combined = dynamicTerms.length > 0 ? [...base, ...dynamicTerms] : base;
    
    // De-duplicate by ID to ensure a clean list
    const uniqueMap = new Map<string, Term>();
    combined.forEach(term => {
      if (!uniqueMap.has(term.id)) {
        uniqueMap.set(term.id, term);
      }
    });
    
    return Array.from(uniqueMap.values()).map(term => ({
      ...term,
      searchable: `${term.title} ${term.definition} ${term.category}`.toLowerCase()
    }));
  }, [dynamicTerms]);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('maritime-lexicon-dark-mode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('maritime-lexicon-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'terms'), (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
      setDynamicTerms(docs);
    });
    return () => unsubscribe();
  }, []);

  const showPolicy = (type: 'privacy' | 'terms' | 'cookies') => {
    const policies = {
      privacy: {
        title: 'Privacy Policy',
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-600 mb-4">
              <Shield size={32} />
              <h4 className="text-xl font-bold">Your Privacy on the High Seas</h4>
            </div>
            <p>At Maritime Lexicon, we are committed to protecting your privacy while you navigate our digital waters. This policy outlines how we handle information.</p>
            <section className="space-y-2">
              <h5 className="font-bold text-slate-900">1. Data Collection</h5>
              <p>We do not collect personal identification information (PII) such as names, addresses, or phone numbers unless you explicitly provide them via contact forms.</p>
            </section>
            <section className="space-y-2">
              <h5 className="font-bold text-slate-900">2. Usage Data</h5>
              <p>We may collect non-personal data about how the lexicon is accessed and used. This helps us improve our definitions and search functionality.</p>
            </section>
            <section className="space-y-2">
              <h5 className="font-bold text-slate-900">3. Third-Party Services</h5>
              <p>Our site is hosted on GitHub Pages. Any data collection performed by GitHub is subject to their own privacy policies.</p>
            </section>
            <p className="text-sm italic mt-6">Last updated: March 2026</p>
          </div>
        )
      },
      terms: {
        title: 'Terms of Service',
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-600 mb-4">
              <Scale size={32} />
              <h4 className="text-xl font-bold">Rules of the Road</h4>
            </div>
            <p>By accessing Maritime Lexicon, you agree to abide by these terms of service.</p>
            <section className="space-y-2">
              <h5 className="font-bold text-slate-900">1. Educational Use Only</h5>
              <p>The information provided on this site is for educational and informational purposes only. It is NOT intended for navigation or safety-critical operations.</p>
            </section>
            <section className="space-y-2">
              <h5 className="font-bold text-slate-900">2. Accuracy of Information</h5>
              <p>While we strive for accuracy, maritime terminology is vast and evolving. We make no warranties regarding the completeness or accuracy of the definitions.</p>
            </section>
            <section className="space-y-2">
              <h5 className="font-bold text-slate-900">3. Limitation of Liability</h5>
              <p>Maritime Lexicon and its contributors shall not be held liable for any errors, omissions, or any actions taken based on the information provided herein.</p>
            </section>
          </div>
        )
      },
      cookies: {
        title: 'Cookie Policy',
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-600 mb-4">
              <Cookie size={32} />
              <h4 className="text-xl font-bold">Cookie Usage</h4>
            </div>
            <p>We use cookies to ensure you have the best experience on our website.</p>
            <section className="space-y-2">
              <h5 className="font-bold text-slate-900">What are cookies?</h5>
              <p>Cookies are small text files stored on your device that help us remember your preferences, such as your last searched term or selected category.</p>
            </section>
            <section className="space-y-2">
              <h5 className="font-bold text-slate-900">How we use them</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>To remember your UI preferences (sidebar state, etc.)</li>
                <li>To analyze traffic patterns and improve search results</li>
              </ul>
            </section>
            <p>You can choose to disable cookies in your browser settings, though some features of the site may not function as intended.</p>
          </div>
        )
      }
    };
    setModalContent(policies[type]);
  };

  const showHistoryDetail = (event: any) => {
    setModalContent({
      title: `History: ${event.title} (${event.year})`,
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 mb-6">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400 mb-2">
              <Calendar size={24} />
              <span className="font-bold">{new Date(2000, event.month - 1, event.day).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, {event.year}</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{event.title}</h4>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{event.description}</p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-400 dark:text-slate-500 italic">Part of our daily maritime history archives.</p>
          </div>
        </div>
      )
    });
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredTerms = useMemo(() => {
    const query = deferredSearchQuery.toLowerCase().trim();
    
    let result = allTerms;
    if (activeCategory !== 'All') {
      result = result.filter(t => t.category === activeCategory);
    }
    
    if (!query) {
      return [...result].sort((a, b) => a.title.localeCompare(b.title));
    }
    
    // 1. Filter terms that match title, definition or category
    const filtered = result.filter(term => 
      (term as any).searchable.includes(query)
    );

    // 2. Sort by relevance score
    return filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      const getScore = (title: string) => {
        if (title === query) return 10000;
        if (title.startsWith(query)) return 5000 - title.length;
        // Simple word boundary check (faster than regex)
        if (title.includes(' ' + query)) return 2000 - title.length;
        if (title.includes(query)) return 1000 - title.length;
        return 0;
      };

      const scoreA = getScore(aTitle);
      const scoreB = getScore(bTitle);

      if (scoreA !== scoreB) return scoreB - scoreA;
      
      return a.title.localeCompare(b.title);
    });
  }, [searchQuery, activeCategory, allTerms]);

  const categories = useMemo(() => [
    'All', 
    'Terminology', 
    'Vessel Parts', 
    'Navigation', 
    'Operations', 
    'Regulations', 
    'Technical', 
    'Safety', 
    'Crew', 
    'Cargo', 
    'Environment', 
    'History', 
    'Meteorology'
  ], []);

  const handleShare = () => {
    const shareData = {
      title: 'Maritime Lexicon',
      text: 'Explore the vast world of nautical terminology.',
      url: typeof window !== 'undefined' ? window.location.origin : 'https://www.maritimelexicon.com'
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share(shareData).catch(() => {
        // Fallback to clipboard if share fails
        navigator.clipboard.writeText(shareData.url);
        setToast('Link copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(shareData.url);
      setToast('Link copied to clipboard!');
    }
  };

  const handleRandomTerm = () => {
    const randomIndex = Math.floor(Math.random() * allTerms.length);
    const randomTerm = allTerms[randomIndex];
    navigate(`/term/${randomTerm.slug}/`);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleBookmark = () => {
    setToast('Bookmarks feature coming soon!');
  };

  return (
    <div className={cn(
      "min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300",
      darkMode && "dark"
    )}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3 w-1/4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors md:hidden"
              aria-label="Toggle Menu"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link 
              to="/"
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setShowSuggestions(false);
              }}
            >
              <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
                <Anchor size={20} />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block">
                Maritime Lexicon
              </h1>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl px-4 flex items-center justify-center gap-2 search-container">
            <div className="relative w-full max-w-lg group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search 3,700+ maritime terms..."
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                  setShowSuggestions(true);
                  if (location.pathname !== '/') navigate('/');
                }}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={handleKeyDown}
                className="w-full pl-12 pr-12 py-3.5 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:ring-8 focus:ring-blue-500/5 rounded-2xl transition-all outline-none text-base shadow-inner font-medium dark:text-white"
                aria-label="Search terms"
              />
              {searchQuery && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setShowSuggestions(false);
                  }}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}

              {/* Suggestions */}
              <AnimatePresence>
                {showSuggestions && searchQuery.trim().length > 0 && filteredTerms.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-[100]"
                  >
                    <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                      {filteredTerms.slice(0, 8).map((term) => (
                        <Link
                          key={term.id}
                          to={`/term/${term.slug}/`}
                          onClick={() => setShowSuggestions(false)}
                          className="w-full px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 flex items-center gap-3 transition-colors border-b border-slate-50 dark:border-slate-800 last:border-0 text-left"
                        >
                          <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-lg text-slate-400">
                            <Ship size={14} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-900 dark:text-white truncate">
                              <Highlight text={term.title} query={deferredSearchQuery} />
                            </div>
                            <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">{term.category}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button 
              onClick={handleRandomTerm}
              className="p-3.5 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl transition-all hover:bg-white dark:hover:bg-slate-900 border-2 border-transparent hover:border-blue-500 hidden md:flex"
              title="Random Term"
            >
              <Compass size={20} />
            </button>
          </div>

          <div className="flex items-center justify-end gap-1 sm:gap-2 w-1/4">
            <div className="flex items-center gap-1 sm:gap-4">
              {user ? (
                <div className="flex items-center gap-2">
                  {isAdmin && (
                    <Link 
                      to="/moderation" 
                      className="p-2 text-amber-500 hover:text-amber-600 transition-all"
                      title="Moderation Dashboard"
                    >
                      <Shield size={20} />
                    </Link>
                  )}
                  <button 
                    onClick={() => logout()}
                    className="p-2 text-slate-400 hover:text-red-500 transition-all"
                    title="Logout"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="p-2 text-slate-400 hover:text-blue-600 transition-all"
                  title="Login"
                >
                  <Users size={20} />
                </button>
              )}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110 active:scale-95"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={handleBookmark}
                className="p-2 text-slate-400 hover:text-blue-600 transition-all hover:scale-110 active:scale-95 hidden sm:flex" 
                aria-label="Bookmarks"
              >
                <Bookmark size={20} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 text-slate-400 hover:text-blue-600 transition-all hover:scale-110 active:scale-95" 
                aria-label="Share"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </header>

        <div className="flex h-[calc(100vh-65px)] overflow-hidden">
          {/* Sidebar */}
          <aside 
            className={cn(
              "fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 pt-[65px] md:pt-0",
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Categories
                  </h2>
                  <ChevronDown size={14} className="text-slate-300 dark:text-slate-700" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        if (location.pathname !== '/') navigate('/');
                      }}
                      className={cn(
                        "text-[10px] font-bold px-2.5 py-1 rounded-full transition-all uppercase tracking-tight border flex items-center gap-1.5",
                        activeCategory === cat 
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                          : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800"
                      )}
                    >
                      {categoryIcons[cat] || <Anchor size={10} />}
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-blue-50/30 dark:bg-blue-900/10">
                <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Learn & Explore
                </h2>
                <div className="space-y-1">
                  <Link
                    to="/diagram"
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm",
                      location.pathname === '/diagram'
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <Layers size={18} />
                    Vessel Diagram
                  </Link>
                  <Link
                    to="/bridge"
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm",
                      location.pathname === '/bridge'
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <Navigation size={18} />
                    Navigation Room
                  </Link>
                  <Link
                    to="/history"
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm",
                      location.pathname === '/history'
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <History size={18} />
                    Maritime History
                  </Link>
                  <Link
                    to="/quiz"
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm",
                      location.pathname === '/quiz'
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <Brain size={18} />
                    Knowledge Quiz
                  </Link>
                </div>
              </div>

              <div className="flex-1 overflow-hidden">
                {filteredTerms.length > 0 ? (
                  <List
                    rowCount={filteredTerms.length}
                    rowHeight={48}
                    rowComponent={({ index, style }) => {
                      const term = filteredTerms[index];
                      const isActive = location.pathname === `/term/${term.slug}/`;
                      return (
                        <div style={style} className="px-2 py-0.5">
                          <Link
                            to={`/term/${term.slug}/`}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-xl transition-all group flex items-center justify-between h-full",
                              isActive
                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium shadow-sm ring-1 ring-blue-200 dark:ring-blue-800" 
                                : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                            )}
                          >
                            <span className="truncate text-sm">
                              <Highlight text={term.title} query={deferredSearchQuery} />
                            </span>
                            <span className={cn(
                              "text-[9px] opacity-0 group-hover:opacity-100 transition-opacity px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400",
                              isActive && "opacity-100 bg-blue-200 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
                            )}>
                              {term.category[0]}
                            </span>
                          </Link>
                        </div>
                      );
                    }}
                    rowProps={{}}
                    style={{ height: 500, width: '100%' }}
                    className="custom-scrollbar"
                  />
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-sm text-slate-400 italic">No terms found.</p>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => user ? setIsContributionModalOpen(true) : setIsAuthModalOpen(true)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  Contribute Term
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-slate-950 relative flex flex-col">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={
                  <HomePage 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery}
                    filteredTerms={filteredTerms}
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    onShowHistory={showHistoryDetail}
                  />
                } />
                <Route path="/term/:slug" element={<TermPage />} />
                <Route path="/term/:slug/" element={<TermPage />} />
                <Route path="/diagram" element={<div className="max-w-6xl mx-auto p-8"><VesselDiagram3D /></div>} />
                <Route path="/bridge" element={<div className="max-w-6xl mx-auto p-8"><BridgeDiagram3D /></div>} />
                <Route path="/history" element={<HistoryPage onShowHistory={showHistoryDetail} />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/moderation" element={isAdmin ? <ModerationDashboard /> : <HomePage />} />
              </Routes>
            </div>

            {/* Footer / Disclaimer */}
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6 mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <Anchor size={20} />
                      <span className="font-bold tracking-tight">Maritime Lexicon</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      The most comprehensive digital dictionary for maritime professionals, sailors, and enthusiasts.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Legal</h4>
                    <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <button onClick={() => showPolicy('privacy')} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</button>
                      <button onClick={() => showPolicy('terms')} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</button>
                      <button onClick={() => showPolicy('cookies')} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie Policy</button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Connect</h4>
                    <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <a href="https://www.maritimelexicon.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                        <Globe size={14} />
                        www.maritimelexicon.com
                      </a>
                      <a href="mailto:info@maritimelexicon.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                        <Mail size={14} />
                        info@maritimelexicon.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed text-center italic">
                    Disclaimer: This lexicon is for educational purposes only. Maritime terms and definitions may vary by region and context. 
                    Always refer to official maritime regulations and authorities for safety-critical information. 
                    This site uses cookies for analytics and to improve your experience.
                  </p>
                  <p className="text-[10px] text-slate-300 dark:text-slate-600 uppercase tracking-[0.2em] text-center">
                    &copy; {new Date().getFullYear()} Maritime Lexicon. Designed for the high seas.
                  </p>
                </div>
              </div>
            </footer>
          </main>
        </div>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #E2E8F0;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #CBD5E1;
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <Modal 
          isOpen={!!modalContent} 
          onClose={() => setModalContent(null)} 
          title={modalContent?.title || ''}
        >
          {modalContent?.content}
        </Modal>

        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <ContributionModal isOpen={isContributionModalOpen} onClose={() => setIsContributionModalOpen(false)} type="new" />
      
      {/* Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-2xl shadow-2xl font-bold flex items-center gap-3 border border-slate-800 dark:border-slate-200"
            >
              <Info size={18} className="text-blue-400" />
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}
