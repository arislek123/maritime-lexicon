import React, { useState, useMemo, useEffect } from 'react';
import { Search, Anchor, Ship, Navigation, BookOpen, Menu, X, ArrowLeft, Info, Compass, Waves, FileText, ShieldCheck, Cpu, Leaf, Box, Users, History, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { maritimeTerms, type MaritimeTerm } from './data/maritimeTerms';
import { maritimeHistoryEvents } from './data/maritimeHistory';
import { linkify } from './utils/linkify';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [legalTab, setLegalTab] = useState<'terms' | 'privacy' | 'disclaimer' | 'cookies'>('disclaimer');
  const [showHistory, setShowHistory] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredTerms = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) {
      return [...maritimeTerms].sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return maritimeTerms.filter(term => 
      term.title.toLowerCase().includes(query) || 
      term.description.toLowerCase().includes(query) ||
      term.category.toLowerCase().includes(query)
    ).sort((a, b) => {
      // Prioritize exact title matches
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      if (aTitle === query && bTitle !== query) return -1;
      if (bTitle === query && aTitle !== query) return 1;
      
      // Prioritize title starts with
      if (aTitle.startsWith(query) && !bTitle.startsWith(query)) return -1;
      if (bTitle.startsWith(query) && !aTitle.startsWith(query)) return 1;
      
      return a.title.localeCompare(b.title);
    });
  }, [searchQuery]);

  // Auto-select if there's an exact title match
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query.length > 2) {
      const exactMatch = maritimeTerms.find(t => t.title.toLowerCase() === query);
      if (exactMatch && exactMatch.id !== selectedTermId) {
        setSelectedTermId(exactMatch.id);
      }
    }
  }, [searchQuery, selectedTermId]);

  const selectedTerm = useMemo(() => 
    maritimeTerms.find(t => t.id === selectedTermId) || null
  , [selectedTermId]);

  const handleTermSelect = (id: string) => {
    setSelectedTermId(id);
    setSearchQuery('');
    setShowLegal(false);
    if (isMobile) setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = Array.from(new Set(maritimeTerms.map(t => t.category)));

  const today = useMemo(() => new Date(), []);
  const formattedDate = useMemo(() => {
    return today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  }, [today]);

  const todayEvents = useMemo(() => {
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return maritimeHistoryEvents.filter(e => e.month === month && e.day === day);
  }, [today]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3 w-1/4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors md:hidden"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => {
              setSelectedTermId(null);
              setSearchQuery('');
              setShowSuggestions(false);
            }}
          >
            <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Anchor size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
              Maritime Lexicon
            </h1>
          </div>
        </div>

        <div className="flex-1 max-w-2xl px-4 flex justify-center search-container">
          <div className="relative w-full max-w-lg group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search 300+ maritime terms..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full pl-12 pr-12 py-3.5 bg-slate-100 border-2 border-transparent focus:bg-white focus:border-blue-500 focus:ring-8 focus:ring-blue-500/5 rounded-2xl transition-all outline-none text-base shadow-inner font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                }}
                className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            )}

            {/* Search Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && searchQuery.trim().length > 0 && filteredTerms.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-[100]"
                >
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {filteredTerms.slice(0, 8).map((term) => (
                      <button
                        key={term.id}
                        onClick={() => {
                          handleTermSelect(term.id);
                          setShowSuggestions(false);
                        }}
                        className="w-full px-4 py-3 hover:bg-blue-50 flex items-center gap-3 transition-colors border-b border-slate-50 last:border-0 text-left"
                      >
                        <div className="bg-slate-100 p-1.5 rounded-lg text-slate-400">
                          <Ship size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-slate-900 truncate">{term.title}</div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">{term.category}</div>
                        </div>
                      </button>
                    ))}
                    {filteredTerms.length > 8 && (
                      <button 
                        onClick={() => setShowSuggestions(false)}
                        className="w-full py-3 text-center text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors uppercase tracking-widest"
                      >
                        View all {filteredTerms.length} results
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 w-1/4">
          <a 
            href="mailto:info@maritimelexicon.com"
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 rounded-xl border border-slate-200 hover:border-blue-200 transition-all group hidden sm:flex"
          >
            <div className="bg-white p-1 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
              <Info size={16} className="text-blue-600" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors">Contact Us</span>
              <span className="text-[11px] font-bold lowercase tracking-tight">info@maritimelexicon.com</span>
            </div>
          </a>
        </div>
      </header>

      <div className="flex h-[calc(100vh-65px)] overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 pt-[65px] md:pt-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Terminology Index
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSearchQuery(cat)}
                    className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors uppercase tracking-tight"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-2 space-y-0.5 custom-scrollbar">
              {filteredTerms.length > 0 ? (
                filteredTerms.map((term) => (
                  <button
                    key={term.id}
                    onClick={() => handleTermSelect(term.id)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-xl transition-all group flex items-center justify-between",
                      selectedTermId === term.id 
                        ? "bg-blue-50 text-blue-700 font-medium shadow-sm ring-1 ring-blue-200" 
                        : "hover:bg-slate-50 text-slate-600"
                    )}
                  >
                    <span className="truncate">{term.title}</span>
                    <span className={cn(
                      "text-[10px] opacity-0 group-hover:opacity-100 transition-opacity px-1.5 py-0.5 rounded bg-slate-200 text-slate-500",
                      selectedTermId === term.id && "opacity-100 bg-blue-200 text-blue-600"
                    )}>
                      {term.category[0]}
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-sm text-slate-400 italic">No terms found matching your search.</p>
                </div>
              )}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50 relative custom-scrollbar">
          <AnimatePresence mode="wait">
            {selectedTerm ? (
              <motion.article
                key={selectedTerm.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-3xl mx-auto p-6 md:p-12"
              >
                <div className="mb-8 flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedTermId(null)}
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
                  >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Index
                  </button>
                  <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-full uppercase tracking-widest">
                    {selectedTerm.category}
                  </span>
                </div>

                <header className="mb-10">
                  <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                    {selectedTerm.title}
                  </h2>
                  <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-8" />
                </header>

                <section className="prose prose-slate prose-lg max-w-none">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 leading-relaxed text-slate-700 text-xl font-light italic">
                    {linkify(selectedTerm.description, handleTermSelect)}
                  </div>
                </section>

                <footer className="mt-16 pt-8 border-t border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                    Related Concepts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {maritimeTerms
                      .filter(t => t.category === selectedTerm.category && t.id !== selectedTerm.id)
                      .slice(0, 4)
                      .map(related => (
                        <button
                          key={related.id}
                          onClick={() => handleTermSelect(related.id)}
                          className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all text-left group"
                        >
                          <div className="bg-slate-100 p-2 rounded-lg text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                            <BookOpen size={18} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {related.title}
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                              {related.description}
                            </p>
                          </div>
                        </button>
                      ))}
                  </div>
                </footer>
              </motion.article>
            ) : searchQuery ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto p-8"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Search Results for "{searchQuery}"</h2>
                  <p className="text-slate-500">{filteredTerms.length} terms found</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTerms.map(term => (
                    <button
                      key={term.id}
                      onClick={() => handleTermSelect(term.id)}
                      className="p-6 bg-white rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all text-left group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-md uppercase tracking-wider group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                          {term.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {term.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                        {term.description}
                      </p>
                    </button>
                  ))}
                </div>
                
                {filteredTerms.length === 0 && (
                  <div className="text-center py-20">
                    <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                      <Search size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">No matches found</h3>
                    <p className="text-slate-500">Try adjusting your search or category filters.</p>
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
                  <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-slate-100 text-blue-600">
                    <Compass size={64} className="animate-spin-slow" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  Welcome to the Maritime Lexicon
                </h2>
                <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
                  Explore the vast world of nautical terminology. Select a term from the index or search for specific maritime concepts.
                </p>

                {/* On This Day Section - Compact Version */}
                {todayEvents.length > 0 && (
                  <button 
                    onClick={() => setShowHistory(true)}
                    className="w-full max-w-md mb-12 group"
                  >
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all flex items-center gap-4 text-left overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                        <History size={40} />
                      </div>
                      <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600 group-hover:scale-110 transition-transform">
                        <Calendar size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Today in History</h3>
                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">{formattedDate}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 truncate group-hover:text-amber-700 transition-colors">
                          {todayEvents[0].title}
                        </p>
                      </div>
                      <div className="text-slate-300 group-hover:text-amber-400 transition-colors">
                        <ArrowLeft size={16} className="rotate-180" />
                      </div>
                    </div>
                  </button>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                  {[
                    { icon: <Ship size={20} />, label: "Vessel Parts", color: "bg-emerald-50 text-emerald-600" },
                    { icon: <Navigation size={20} />, label: "Navigation", color: "bg-blue-50 text-blue-600" },
                    { icon: <Waves size={20} />, label: "Operations", color: "bg-amber-50 text-amber-600" },
                    { icon: <FileText size={20} />, label: "Regulations", color: "bg-purple-50 text-purple-600" },
                    { icon: <ShieldCheck size={20} />, label: "Safety", color: "bg-rose-50 text-rose-600" },
                    { icon: <Cpu size={20} />, label: "Technical", color: "bg-cyan-50 text-cyan-600" },
                    { icon: <Leaf size={20} />, label: "Environment", color: "bg-green-50 text-green-600" },
                    { icon: <Box size={20} />, label: "Cargo", color: "bg-orange-50 text-orange-600" },
                    { icon: <Users size={20} />, label: "Crew", color: "bg-indigo-50 text-indigo-600" }
                  ].map((item, i) => (
                    <button 
                      key={i}
                      onClick={() => setSearchQuery(item.label)}
                      className={cn("p-4 rounded-2xl flex flex-col items-center gap-3 hover:scale-105 transition-transform shadow-sm border border-transparent hover:border-current/10", item.color)}
                    >
                      {item.icon}
                      <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Legal Links below categories */}
                <div className="mt-12 pt-8 border-t border-slate-100 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                  <button 
                    onClick={() => { setLegalTab('disclaimer'); setShowLegal(true); }}
                    className="text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest flex items-center gap-2"
                  >
                    <ShieldCheck size={12} />
                    Disclaimer
                  </button>
                  <button 
                    onClick={() => { setLegalTab('terms'); setShowLegal(true); }}
                    className="text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
                  >
                    Terms
                  </button>
                  <button 
                    onClick={() => { setLegalTab('privacy'); setShowLegal(true); }}
                    className="text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
                  >
                    Privacy
                  </button>
                  <button 
                    onClick={() => { setLegalTab('cookies'); setShowLegal(true); }}
                    className="text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
                  >
                    Cookies
                  </button>
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest ml-auto">
                    © 2026 Maritime Lexicon
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Legal Modal */}
      <AnimatePresence>
        {showLegal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLegal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2 text-blue-600">
                  <ShieldCheck size={20} />
                  <h2 className="font-bold uppercase tracking-wider text-sm">Legal Information</h2>
                </div>
                <button 
                  onClick={() => setShowLegal(false)}
                  className="p-2 hover:bg-white rounded-xl transition-colors text-slate-400 hover:text-slate-600 shadow-sm border border-transparent hover:border-slate-200"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex border-b border-slate-100 overflow-x-auto no-scrollbar bg-white">
                {[
                  { id: 'disclaimer', label: 'Disclaimer' },
                  { id: 'terms', label: 'Terms' },
                  { id: 'privacy', label: 'Privacy' },
                  { id: 'cookies', label: 'Cookies' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setLegalTab(tab.id as any)}
                    className={cn(
                      "px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap",
                      legalTab === tab.id 
                        ? "border-blue-600 text-blue-600 bg-blue-50/30" 
                        : "border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white">
                {legalTab === 'disclaimer' && (
                  <div className="space-y-6">
                    <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
                      <h3 className="text-amber-800 font-bold uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                        <Info size={14} />
                        Important Notice
                      </h3>
                      <p className="text-amber-900/80 leading-relaxed italic font-medium">
                        "The information provided in this Lexicon is for educational and informational purposes only. It is not intended to be a substitute for professional maritime training, official regulations, or expert advice. Always refer to official IMO, SOLAS, or local port authority documentation for operational safety."
                      </p>
                    </div>
                    <div className="prose prose-slate prose-sm max-w-none">
                      <h4 className="text-slate-900 font-bold">No Warranties</h4>
                      <p className="text-slate-600">
                        While we strive for accuracy, the maritime industry is constantly evolving. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the website for any purpose.
                      </p>
                      <h4 className="text-slate-900 font-bold">Professional Reliance</h4>
                      <p className="text-slate-600">
                        Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                      </p>
                    </div>
                  </div>
                )}

                {legalTab === 'terms' && (
                  <div className="prose prose-slate prose-sm max-w-none">
                    <h3 className="text-slate-900 font-bold">1. Acceptance of Terms</h3>
                    <p className="text-slate-600">
                      By accessing and using Maritime Lexicon, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                    <h3 className="text-slate-900 font-bold">2. Intellectual Property</h3>
                    <p className="text-slate-600">
                      The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
                    </p>
                    <h3 className="text-slate-900 font-bold">3. Limited License</h3>
                    <p className="text-slate-600">
                      You are granted a non-exclusive, non-transferable, revocable license to access and use the Site strictly in accordance with these terms of use.
                    </p>
                    <h3 className="text-slate-900 font-bold">4. User Conduct</h3>
                    <p className="text-slate-600">
                      You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site.
                    </p>
                  </div>
                )}

                {legalTab === 'privacy' && (
                  <div className="prose prose-slate prose-sm max-w-none">
                    <h3 className="text-slate-900 font-bold">Privacy Policy</h3>
                    <p className="text-slate-600">
                      Your privacy is important to us. It is Maritime Lexicon's policy to respect your privacy regarding any information we may collect while operating our website.
                    </p>
                    <h4 className="text-slate-900 font-bold">Information We Collect</h4>
                    <p className="text-slate-600">
                      We do not collect any personally identifiable information unless you voluntarily provide it to us. We may collect non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request.
                    </p>
                    <h4 className="text-slate-900 font-bold">How We Use Information</h4>
                    <p className="text-slate-600">
                      Our purpose in collecting non-personally identifying information is to better understand how our visitors use the website.
                    </p>
                    <h4 className="text-slate-900 font-bold">Data Security</h4>
                    <p className="text-slate-600">
                      We use commercially acceptable means to protect your personal information, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
                    </p>
                    <h4 className="text-slate-900 font-bold">Contact Us</h4>
                    <p className="text-slate-600">
                      If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@maritimelexicon.com" className="text-blue-600 hover:underline font-bold">info@maritimelexicon.com</a>.
                    </p>
                  </div>
                )}

                {legalTab === 'cookies' && (
                  <div className="prose prose-slate prose-sm max-w-none">
                    <h3 className="text-slate-900 font-bold">Cookie Policy</h3>
                    <p className="text-slate-600">
                      Maritime Lexicon uses "Cookies" and similar technologies to enhance your experience.
                    </p>
                    <h4 className="text-slate-900 font-bold">What are Cookies?</h4>
                    <p className="text-slate-600">
                      Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                    </p>
                    <h4 className="text-slate-900 font-bold">How We Use Cookies</h4>
                    <p className="text-slate-600">
                      We use cookies to remember your preferences and to understand how you interact with our site. This helps us provide a better experience for you.
                    </p>
                    <h4 className="text-slate-900 font-bold">Managing Cookies</h4>
                    <p className="text-slate-600">
                      Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setShowLegal(false)}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* History Modal */}
      <AnimatePresence>
        {showHistory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHistory(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-amber-50/50">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-2xl text-amber-600">
                    <History size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Maritime History</h2>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">On This Day: {formattedDate}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowHistory(false)}
                  className="p-2 hover:bg-white rounded-xl transition-colors text-slate-400 hover:text-slate-600 shadow-sm"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="space-y-8">
                  {todayEvents.map((event) => (
                    <div key={event.id} className="relative pl-8 border-l-2 border-amber-100 pb-2 last:pb-0">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-sm" />
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-black text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg font-light italic">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setShowHistory(false)}
                  className="px-6 py-2.5 bg-amber-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-amber-700 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                >
                  Close History
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
      `}</style>
    </div>
  );
}
