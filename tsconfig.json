import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Grid, LayoutGrid, Columns, X } from 'lucide-react';
import { engineRoomTerms, EngineRoomTerm } from '../../data/engineRoomTerms';
import MachineryDiagram from './MachineryDiagram';

const TermsOverview: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [layout, setLayout] = useState<'sm' | 'lg' | 'xl'>('sm');
  const [selectedTerm, setSelectedTerm] = useState<EngineRoomTerm | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(engineRoomTerms.map(t => t.rawCat));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredTerms = useMemo(() => {
    return engineRoomTerms.filter(term => {
      const matchesSearch = term.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           term.short.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           term.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All' || term.rawCat === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const getGridCols = () => {
    if (layout === 'sm') return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    if (layout === 'lg') return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 xl:grid-cols-2';
  };

  return (
    <div className="flex flex-col h-full bg-[#0f1724] text-white overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 bg-gradient-to-r from-[#0a1931] to-[#112240] border-b-2 border-[#1d5fdb] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold tracking-wider">⚙️ ENGINE ROOM — SYSTEM DIAGRAMS</h1>
            <p className="text-[10px] font-mono text-slate-400 tracking-[0.2em] mt-1 uppercase">
              Virtual Engine Room v5 · {engineRoomTerms.length} Animated Systems
            </p>
          </div>
          <div className="bg-[#1d5fdb]/10 border border-[#1d5fdb]/30 rounded-full px-4 py-1 text-xs font-mono text-blue-400">
            {filteredTerms.length} SYSTEMS SHOWN
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex-shrink-0 bg-[#0a1931] border-b border-white/5 p-4 sticky top-0 z-10 flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search systems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#030712] border border-[#1d5fdb]/30 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all ${
                activeFilter === cat 
                ? 'bg-[#1d5fdb] text-white shadow-lg shadow-blue-500/20' 
                : 'bg-[#1d5fdb]/5 text-slate-400 border border-[#1d5fdb]/20 hover:bg-[#1d5fdb]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="ml-auto flex gap-2">
          <button 
            onClick={() => setLayout('sm')}
            className={`p-2 rounded-lg transition-colors ${layout === 'sm' ? 'bg-[#1d5fdb]/20 text-white border border-blue-500/50' : 'text-slate-500 hover:text-white'}`}
            title="Small Grid"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setLayout('lg')}
            className={`p-2 rounded-lg transition-colors ${layout === 'lg' ? 'bg-[#1d5fdb]/20 text-white border border-blue-500/50' : 'text-slate-500 hover:text-white'}`}
            title="Large Grid"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setLayout('xl')}
            className={`p-2 rounded-lg transition-colors ${layout === 'xl' ? 'bg-[#1d5fdb]/20 text-white border border-blue-500/50' : 'text-slate-500 hover:text-white'}`}
            title="2-Column"
          >
            <Columns className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {filteredTerms.length > 0 ? (
          <div className={`grid gap-6 ${getGridCols()}`}>
            {filteredTerms.map((term) => (
              <motion.div
                key={term.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedTerm(term)}
                className="group bg-[#0d1e38] border border-[#1d3a60] rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 flex flex-col"
              >
                <div className="h-1 w-full bg-blue-500/30 group-hover:bg-blue-500 transition-colors" />
                <div className="aspect-[19/10] relative overflow-hidden bg-black/20">
                  <MachineryDiagram
                    id={term.id}
                    name={term.name}
                    short={term.short}
                    icon={term.icon}
                    color={term.color}
                    status={term.status}
                    rawCat={term.rawCat}
                    size="sm"
                  />
                </div>
                <div className="p-4 flex items-center gap-3 border-t border-white/5">
                  <div className="text-xl">{term.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-slate-100 truncate group-hover:text-blue-400 transition-colors">
                      {term.name}
                    </h3>
                    <p className="text-[9px] font-mono text-slate-500 truncate mt-0.5">
                      {term.short}
                    </p>
                  </div>
                  <div className="text-[8px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                    {term.rawCat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 py-20">
            <Search className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-lg font-medium">No systems match your search</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveFilter('All');}}
              className="mt-4 text-blue-400 hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTerm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTerm(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0d1e38] border-2 border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex-shrink-0 bg-[#0a1931] border-b border-white/10 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{selectedTerm.icon}</div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{selectedTerm.name}</h2>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">{selectedTerm.id}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTerm(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="aspect-[19/9] w-full bg-black/40 border-b border-white/5">
                  <MachineryDiagram
                    id={selectedTerm.id}
                    name={selectedTerm.name}
                    short={selectedTerm.short}
                    icon={selectedTerm.icon}
                    color={selectedTerm.color}
                    status={selectedTerm.status}
                    rawCat={selectedTerm.rawCat}
                    size="lg"
                  />
                </div>
                
                <div className="p-8 space-y-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider">
                      {selectedTerm.rawCat}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                      {selectedTerm.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/20 text-[10px] font-bold uppercase tracking-wider">
                      {selectedTerm.short}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <section>
                        <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2">Purpose</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{selectedTerm.purpose}</p>
                      </section>
                      <section>
                        <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2">Role</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{selectedTerm.role}</p>
                      </section>
                      <section>
                        <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2">Importance</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{selectedTerm.importance}</p>
                      </section>
                    </div>
                    <div className="space-y-6">
                      <section>
                        <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2">Technical Details</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{selectedTerm.technical}</p>
                      </section>
                      <section>
                        <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2">Key Components</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {selectedTerm.components.map((c, i) => (
                            <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex-shrink-0 bg-[#0a1931] border-t border-white/10 p-6 flex justify-between items-center">
                <div className="text-[10px] font-mono text-slate-500">
                  REF ID: {selectedTerm.id.toUpperCase()}
                </div>
                <button 
                  onClick={() => setSelectedTerm(null)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TermsOverview;
