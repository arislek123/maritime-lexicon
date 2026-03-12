
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, Calendar, ChevronRight, ChevronLeft, 
  Anchor, Shield, Compass, Clock, MapPin, 
  Search, Info, BookOpen, Waves
} from 'lucide-react';
import { cn } from '../lib/utils';
import { MARITIME_HISTORY, MaritimeEvent, getEventsForDay } from '../data/maritimeHistory';

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const MaritimeHistoryTimeline: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [searchQuery, setSearchQuery] = useState('');

  const monthEvents = useMemo(() => {
    const events: MaritimeEvent[] = [];
    const daysInMonth = new Date(2024, selectedMonth + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDay(selectedMonth + 1, day);
      events.push(...dayEvents);
    }

    return events;
  }, [selectedMonth]);

  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return monthEvents;
    const q = searchQuery.toLowerCase();
    return monthEvents.filter(e => 
      e.title.toLowerCase().includes(q) || 
      e.description.toLowerCase().includes(q)
    );
  }, [monthEvents, searchQuery]);

  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'discovery': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'disaster': return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
      case 'innovation': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'war': return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      default: return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest">
              <History size={14} />
              Maritime Almanac
            </div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Chronicles of <span className="text-blue-600">the Deep</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg">
              Explore pivotal maritime events organized by the calendar year. Discover discoveries, disasters, and innovations that shaped the seas.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Month Selector Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 px-2">Select Month</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {MONTHS.map((month, idx) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(idx)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all group",
                      selectedMonth === idx 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn(
                        "w-6 h-6 rounded-lg flex items-center justify-center text-[10px]",
                        selectedMonth === idx ? "bg-white/20" : "bg-slate-100 dark:bg-slate-800"
                      )}>
                        {idx + 1}
                      </span>
                      {month}
                    </span>
                    <ChevronRight size={16} className={cn(
                      "transition-transform",
                      selectedMonth === idx ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    )} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/20 relative overflow-hidden">
              <Waves className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 rotate-12" />
              <h4 className="text-xs font-black uppercase tracking-widest mb-2 opacity-80">Month Summary</h4>
              <div className="text-4xl font-black mb-1">{monthEvents.length}</div>
              <p className="text-sm font-medium opacity-80">Recorded events in {MONTHS[selectedMonth]}</p>
            </div>
          </aside>

          {/* Events List */}
          <main className="lg:col-span-9">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                <span className="text-blue-600">{MONTHS[selectedMonth]}</span>
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-slate-400 dark:text-slate-600">Events</span>
              </h2>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {filteredEvents.length > 0 ? (
                  <motion.div
                    key={selectedMonth + searchQuery}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {filteredEvents.map((event, idx) => (
                      <div 
                        key={`${event.date}-${event.year}-${idx}`}
                        className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all group relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                          <History size={120} />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                          {/* Date Column */}
                          <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-1">
                            <div className="text-3xl font-black text-blue-600 uppercase tracking-tighter">
                              {MONTHS[parseInt(event.date.split('-')[0]) - 1]} {parseInt(event.date.split('-')[1])}
                            </div>
                            <div className="text-xl font-bold text-slate-400 dark:text-slate-600">
                              {event.year}
                            </div>
                          </div>

                          {/* Content Column */}
                          <div className="flex-1 space-y-4">
                            <div className={cn(
                              "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest",
                              getCategoryStyles(event.category)
                            )}>
                              {event.category}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                              {event.title}
                            </h3>
                            
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                              {event.description}
                            </p>

                            <div className="pt-4 flex items-center gap-6 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
                              <span className="flex items-center gap-2">
                                <MapPin size={14} />
                                Global Waters
                              </span>
                              <span className="flex items-center gap-2">
                                <Clock size={14} />
                                Historical Record
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-24 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800"
                  >
                    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                      <Search size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No events found</h3>
                    <p className="text-slate-500 dark:text-slate-400">Try selecting a different month or clearing your search.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
