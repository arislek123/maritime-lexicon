import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, 
  Activity, 
  Zap, 
  Droplets, 
  Thermometer, 
  ShieldAlert, 
  Info, 
  ArrowRight, 
  X, 
  LayoutGrid, 
  Map as MapIcon,
  Search,
  ChevronRight,
  Wind,
  Waves,
  Target,
  Cpu,
  Flame,
  Anchor,
  Globe,
  LifeBuoy,
  Cog,
  ShieldCheck,
  ClipboardList,
  Wrench,
  AlertTriangle,
  GraduationCap,
  Network
} from 'lucide-react';
import { machineryData, CAT_MAP, CATS, MachinerySystem } from '../data/machinery';
import SystemFlows from './EngineRoom/SystemFlows';
import Assessments from './EngineRoom/Assessments';
import MachineryDiagram from './EngineRoom/MachineryDiagram';
import TermsOverview from './EngineRoom/TermsOverview';

const EngineRoomPlatform: React.FC = () => {
  const [selId, setSelId] = useState<string | null>('main-engine');
  const [curTab, setCurTab] = useState<'Map' | 'Library' | 'Flows' | 'Assessments' | 'Terms'>('Map');
  const [infoTab, setInfoTab] = useState<'Overview' | 'Technical' | 'Watchkeeping'>('Overview');
  const [libCat, setLibCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Enrich data with category mapping
  const enrichedData = useMemo(() => {
    return machineryData.map(item => ({
      ...item,
      cat: CAT_MAP[item.rawCat] || 'Other'
    })) as MachinerySystem[];
  }, []);

  const selectedItem = useMemo(() => 
    enrichedData.find(m => m.id === selId), 
  [selId, enrichedData]);

  const filteredLibrary = useMemo(() => {
    return enrichedData.filter(m => {
      const matchesCat = libCat === 'All' || m.cat === libCat;
      const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           m.short.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [enrichedData, libCat, searchQuery]);

  // Auto-scroll to top when selecting item in library
  useEffect(() => {
    if (selId && curTab === 'Library') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selId, curTab]);

  const getCatIcon = (cat: string) => {
    switch (cat) {
      case 'Propulsion': return <Settings className="w-4 h-4" />;
      case 'Electrical & Control': return <Zap className="w-4 h-4" />;
      case 'Fuel & Lubrication': return <Droplets className="w-4 h-4" />;
      case 'Cooling & Utilities': return <Thermometer className="w-4 h-4" />;
      case 'Safety & Environment': return <ShieldAlert className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-[#0f1724] font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e4e7ed] px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-lg border border-blue-600/20">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-[#0f1724] uppercase">Engine Room Platform</h1>
              <p className="text-[10px] text-[#8694a8] font-mono uppercase tracking-widest">Technical Management System • v4.2.0</p>
            </div>
          </div>

          <div className="flex bg-[#f0f2f6] p-1 rounded-xl border border-[#e4e7ed] overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setCurTab('Map')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${curTab === 'Map' ? 'bg-white text-blue-600 shadow-sm border border-[#e4e7ed]' : 'text-[#8694a8] hover:text-[#0f1724]'}`}
            >
              <MapIcon className="w-4 h-4" />
              Map View
            </button>
            <button 
              onClick={() => setCurTab('Library')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${curTab === 'Library' ? 'bg-white text-blue-600 shadow-sm border border-[#e4e7ed]' : 'text-[#8694a8] hover:text-[#0f1724]'}`}
            >
              <LayoutGrid className="w-4 h-4" />
              Library
            </button>
            <button 
              onClick={() => setCurTab('Flows')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${curTab === 'Flows' ? 'bg-white text-blue-600 shadow-sm border border-[#e4e7ed]' : 'text-[#8694a8] hover:text-[#0f1724]'}`}
            >
              <Network className="w-4 h-4" />
              System Flows
            </button>
            <button 
              onClick={() => setCurTab('Assessments')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${curTab === 'Assessments' ? 'bg-white text-blue-600 shadow-sm border border-[#e4e7ed]' : 'text-[#8694a8] hover:text-[#0f1724]'}`}
            >
              <GraduationCap className="w-4 h-4" />
              Assessments
            </button>
            <button 
              onClick={() => setCurTab('Terms')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${curTab === 'Terms' ? 'bg-white text-blue-600 shadow-sm border border-[#e4e7ed]' : 'text-[#8694a8] hover:text-[#0f1724]'}`}
            >
              <ClipboardList className="w-4 h-4" />
              Terms Overview
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {curTab === 'Map' && (
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Map Section */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative aspect-[16/10] bg-[#0f1c2e] rounded-[32px] border border-[#5078b4]/35 overflow-hidden shadow-2xl group">
                {/* Schematic Background */}
                <div className="absolute inset-0" style={{ 
                  background: 'linear-gradient(180deg, #0f1c2e 0%, #152236 40%, #111d2e 100%)',
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(200, 223, 245, 0.1) 1px, transparent 0)', 
                  backgroundSize: '24px 24px' 
                }}></div>

                {/* Moving Background Schematic Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 800 500">
                  <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Main Flow Lines */}
                  <motion.path
                    d="M 50 50 L 750 50 M 50 150 L 750 150 M 50 250 L 750 250 M 50 350 L 750 350 M 50 450 L 750 450"
                    stroke="url(#flowGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="100 200"
                    animate={{ strokeDashoffset: [-300, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d="M 100 0 L 100 500 M 300 0 L 300 500 M 500 0 L 500 500 M 700 0 L 700 500"
                    stroke="url(#flowGrad)"
                    strokeWidth="0.8"
                    strokeDasharray="50 150"
                    animate={{ strokeDashoffset: [200, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                {/* Category Row Bands */}
                {[
                  { top: '3.8%', h: '10.8%', label: 'PROPULSION & FUEL INJECTION', color: 'rgba(251,146,60,0.7)', bg: 'rgba(234,88,12,0.08)', bdr: 'rgba(234,88,12,0.3)' },
                  { top: '15.2%', h: '10.8%', label: 'FUEL OIL SYSTEM', color: 'rgba(252,176,64,0.7)', bg: 'rgba(217,119,6,0.07)', bdr: 'rgba(217,119,6,0.25)' },
                  { top: '26.6%', h: '10.8%', label: 'LUBRICATION & COMPRESSED AIR', color: 'rgba(234,179,8,0.7)', bg: 'rgba(161,98,7,0.07)', bdr: 'rgba(202,138,4,0.25)' },
                  { top: '38%', h: '10.8%', label: 'COOLING & UTILITIES', color: 'rgba(56,189,248,0.7)', bg: 'rgba(3,105,161,0.08)', bdr: 'rgba(14,165,233,0.25)' },
                  { top: '49.4%', h: '10.8%', label: 'ELECTRICAL & CONTROL', color: 'rgba(147,197,253,0.7)', bg: 'rgba(29,78,216,0.08)', bdr: 'rgba(96,165,250,0.25)' },
                  { top: '60.8%', h: '10.8%', label: 'HEAT, STEAM & ENVIRONMENT', color: 'rgba(252,165,165,0.7)', bg: 'rgba(185,28,28,0.07)', bdr: 'rgba(248,113,113,0.25)' },
                  { top: '72.2%', h: '10.8%', label: 'SAFETY, FIRE & DECK', color: 'rgba(248,113,113,0.7)', bg: 'rgba(127,29,29,0.07)', bdr: 'rgba(220,38,38,0.25)' },
                  { top: '83.6%', h: '10.8%', label: 'HULL, DECK & COMPLIANCE', color: 'rgba(148,163,184,0.7)', bg: 'rgba(51,65,85,0.08)', bdr: 'rgba(100,116,139,0.25)' },
                ].map((band, i) => (
                  <div key={i} className="absolute left-0 w-full flex items-center pl-4 border-t border-white/10" style={{ top: band.top, height: band.h, backgroundColor: band.bg, borderColor: band.bdr }}>
                    <span className="text-[7px] font-mono font-bold tracking-[0.2em] uppercase opacity-80" style={{ color: band.color }}>{band.label}</span>
                  </div>
                ))}
                
                {/* Title Overlay */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none font-mono text-[8px] tracking-[0.5em] text-blue-200/60 uppercase font-bold">
                  Engine Room Schematic — All Systems
                </div>

                {/* Map Hotspots */}
                {enrichedData.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelId(m.id)}
                      onMouseEnter={() => setHoveredId(m.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-2xl transition-all duration-500 z-10 overflow-hidden ${selId === m.id ? 'scale-110 shadow-xl ring-2 ring-blue-500' : 'hover:scale-105 shadow-md'}`}
                      style={{ 
                        left: `${m.mapX}%`, 
                        top: `${m.mapY}%`,
                        backgroundColor: selId === m.id ? '#ffffff' : 'rgba(15, 23, 42, 0.9)',
                        backdropFilter: 'blur(8px)',
                        border: `1px solid ${selId === m.id ? '#1d5fdb' : 'rgba(255,255,255,0.15)'}`,
                      }}
                    >
                      {/* Moving Diagram Background */}
                      <div className="absolute inset-0 opacity-90">
                        <MachineryDiagram 
                          id={m.id}
                          name={m.name}
                          short={m.short}
                          icon={m.icon}
                          color={m.color}
                          status={m.status}
                          rawCat={m.rawCat}
                          size="sm"
                        />
                      </div>

                      {/* Icon Overlay */}
                      <span className="text-lg filter drop-shadow-sm relative z-10 pointer-events-none group-hover:scale-110 transition-transform">
                        {m.icon}
                      </span>
                    
                    {/* Status Indicator Dot */}
                    <div className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white z-20 ${m.status === 'running' ? 'bg-emerald-500' : m.status === 'alarm' ? 'bg-red-500 animate-pulse' : 'bg-amber-500'}`}></div>

                    {/* Tooltip on Hover */}
                    <AnimatePresence>
                      {hoveredId === m.id && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute bottom-full mb-4 px-4 py-2 bg-[#0f1724] text-white border border-white/10 rounded-xl whitespace-nowrap text-xs font-bold pointer-events-none shadow-2xl z-50"
                        >
                          <div className="flex items-center gap-2">
                            <span>{m.name}</span>
                            <span className="opacity-50 font-mono text-[10px]">{m.status.toUpperCase()}</span>
                          </div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#0f1724]"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}

                {/* Map Legend */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-4 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-[#e4e7ed]">
                  {CATS.slice(1).map(cat => (
                    <div key={cat} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#8694a8]">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: enrichedData.find(m => m.cat === cat)?.color }}></div>
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Systems Active', value: '18/20', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { label: 'Power Demand', value: '3.2 MW', icon: Zap, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'Fuel Cons.', value: '2.4 t/h', icon: Droplets, color: 'text-orange-600', bg: 'bg-orange-50' },
                  { label: 'Main Temp', value: '82°C', icon: Thermometer, color: 'text-red-600', bg: 'bg-red-50' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-3xl border border-[#e4e7ed] flex flex-col gap-2 shadow-sm">
                    <div className={`w-8 h-8 rounded-xl ${stat.bg} flex items-center justify-center`}>
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#8694a8] uppercase tracking-widest">{stat.label}</span>
                      <div className="text-xl font-bold text-[#0f1724]">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {selectedItem ? (
                  <motion.div 
                    key={selectedItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="bg-white rounded-[32px] border border-[#e4e7ed] overflow-hidden flex flex-col h-full shadow-sm"
                  >
                    {/* Panel Header */}
                    <div className="p-8 border-b border-[#e4e7ed] bg-[#f8f9fb]">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-white rounded-2xl border border-[#e4e7ed] flex items-center justify-center text-3xl shadow-sm">
                            {selectedItem.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-blue-100 text-blue-600 border border-blue-200">
                                {selectedItem.cat}
                              </span>
                              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${selectedItem.status === 'running' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'}`}>
                                {selectedItem.status}
                              </span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#0f1724] leading-tight">{selectedItem.name}</h2>
                            <p className="text-xs text-[#8694a8] font-mono">{selectedItem.short}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setSelId(null)}
                          className="p-2 hover:bg-[#e4e7ed] rounded-full transition-colors text-[#8694a8]"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Tab Navigation */}
                      <div className="flex gap-2 p-1 bg-[#f0f2f6] rounded-xl border border-[#e4e7ed]">
                        {(['Overview', 'Technical', 'Watchkeeping'] as const).map(t => (
                          <button
                            key={t}
                            onClick={() => setInfoTab(t)}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${infoTab === t ? 'bg-white text-blue-600 shadow-sm border border-[#e4e7ed]' : 'text-[#8694a8] hover:text-[#0f1724]'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Panel Content */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
                      <div className="h-48 shrink-0 border-b border-[#e4e7ed]">
                        <MachineryDiagram 
                          id={selectedItem.id}
                          name={selectedItem.name}
                          short={selectedItem.short}
                          icon={selectedItem.icon}
                          color={selectedItem.color}
                          status={selectedItem.status}
                          rawCat={selectedItem.rawCat}
                        />
                      </div>
                      
                      <div className="p-8">
                        <AnimatePresence mode="wait">
                          {infoTab === 'Overview' && (
                          <motion.div 
                            key="overview"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="space-y-8"
                          >
                            <section>
                              <h3 className="text-[10px] font-bold text-[#8694a8] uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Info className="w-3 h-3 text-blue-600" /> Primary Purpose
                              </h3>
                              <p className="text-sm leading-relaxed text-[#4b5568]">{selectedItem.purpose}</p>
                            </section>

                            <section className="p-6 bg-[#f8f9fb] rounded-2xl border border-[#e4e7ed]">
                              <h3 className="text-[10px] font-bold text-[#8694a8] uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Activity className="w-3 h-3 text-blue-600" /> Operational Role
                              </h3>
                              <p className="text-sm leading-relaxed text-[#4b5568] italic">"{selectedItem.role}"</p>
                            </section>

                            <section>
                              <h3 className="text-[10px] font-bold text-[#8694a8] uppercase tracking-widest mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-3 h-3 text-blue-600" /> Critical Importance
                              </h3>
                              <p className="text-sm leading-relaxed text-[#4b5568]">{selectedItem.importance}</p>
                            </section>
                          </motion.div>
                        )}

                        {infoTab === 'Technical' && (
                          <motion.div 
                            key="technical"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="space-y-8"
                          >
                            <section>
                              <h3 className="text-[10px] font-bold text-[#8694a8] uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Cog className="w-3 h-3 text-blue-600" /> Technical Principle
                              </h3>
                              <p className="text-sm leading-relaxed text-[#4b5568]">{selectedItem.technical}</p>
                            </section>

                            <section>
                              <h3 className="text-[10px] font-bold text-[#8694a8] uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Wrench className="w-3 h-3 text-blue-600" /> Core Components
                              </h3>
                              <div className="grid grid-cols-1 gap-3">
                                {selectedItem.components.map((c, i) => (
                                  <div key={i} className="flex items-center gap-3 p-3 bg-[#f8f9fb] rounded-xl border border-[#e4e7ed] text-xs text-[#4b5568] font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    {c}
                                  </div>
                                ))}
                              </div>
                            </section>
                          </motion.div>
                        )}

                        {infoTab === 'Watchkeeping' && (
                          <motion.div 
                            key="watchkeeping"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="space-y-8"
                          >
                            <section>
                              <h3 className="text-[10px] font-bold text-[#8694a8] uppercase tracking-widest mb-6 flex items-center gap-2">
                                <ClipboardList className="w-3 h-3 text-blue-600" /> Watchkeeping Parameters
                              </h3>
                              <div className="space-y-4">
                                {selectedItem.watchkeeping.map((w, i) => (
                                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#e4e7ed] shadow-sm">
                                    <div className="mt-1 w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">
                                      {i + 1}
                                    </div>
                                    <p className="text-xs leading-relaxed text-[#4b5568] font-medium">{w}</p>
                                  </div>
                                ))}
                              </div>
                            </section>

                            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-4">
                              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                              <div>
                                <h4 className="text-xs font-bold text-red-700 uppercase tracking-widest mb-1">Safety Protocol</h4>
                                <p className="text-[11px] text-red-600 leading-relaxed">
                                  Deviations from standard parameters must be logged and reported to the Chief Engineer immediately. Ensure LOTO procedures are followed for all maintenance.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
                ) : (
                  <div className="bg-white/50 rounded-[32px] border border-dashed border-[#e4e7ed] h-full flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-[#e4e7ed]">
                      <MapIcon className="w-8 h-8 text-[#8694a8]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1724] mb-2">No System Selected</h3>
                    <p className="text-sm text-[#8694a8] max-w-[240px] leading-relaxed">Select a machinery hotspot on the vessel map to view detailed technical specifications and watchkeeping data.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {curTab === 'Library' && (
          <div className="space-y-8">
            {/* Library Controls */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-[32px] border border-[#e4e7ed] shadow-sm">
              <div className="flex flex-wrap gap-2">
                {CATS.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setLibCat(cat)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${libCat === cat ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-[#f8f9fb] border-[#e4e7ed] text-[#8694a8] hover:text-[#0f1724] hover:bg-white'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8694a8]" />
                <input 
                  type="text" 
                  placeholder="Search machinery database..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f8f9fb] border border-[#e4e7ed] rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Library Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLibrary.map((m) => (
                <motion.div
                  layout
                  key={m.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`bg-white rounded-[32px] border transition-all group cursor-pointer overflow-hidden flex flex-col shadow-sm ${selId === m.id ? 'border-blue-600 ring-1 ring-blue-600' : 'border-[#e4e7ed] hover:border-blue-300 hover:shadow-md'}`}
                  onClick={() => { setSelId(m.id); setCurTab('Map'); }}
                >
                  <div className="p-8 flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#f8f9fb] border border-[#e4e7ed] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-sm">
                        {m.icon}
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-50 text-[9px] font-bold text-blue-600 uppercase tracking-widest border border-blue-100">
                        {m.cat}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f1724] mb-2 group-hover:text-blue-600 transition-colors">{m.name}</h3>
                    <p className="text-xs text-[#8694a8] font-mono mb-4">{m.short}</p>
                    <p className="text-sm text-[#4b5568] line-clamp-3 leading-relaxed">{m.shortDesc}</p>
                  </div>
                  <div className="px-8 py-5 bg-[#f8f9fb] border-t border-[#e4e7ed] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${m.status === 'running' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                      <span className="text-[10px] font-bold text-[#8694a8] uppercase tracking-widest">Status: {m.status}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                      View Details <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {curTab === 'Flows' && <SystemFlows />}

        {curTab === 'Assessments' && <Assessments machinery={enrichedData} />}

        {curTab === 'Terms' && <TermsOverview />}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-16 border-t border-[#e4e7ed] mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 opacity-60">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/5 rounded-lg">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f1724]">Technical Management System</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#8694a8]">
              <ShieldCheck className="w-3 h-3" /> MARPOL VI Compliant
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#8694a8]">
              <Anchor className="w-3 h-3" /> SOLAS II-1 Certified
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#8694a8]">
              <Globe className="w-3 h-3" /> ISO 14001 Standards
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-[10px] font-medium text-[#8694a8] uppercase tracking-[0.3em]">
          &copy; 2026 Maritime Lexicon • Engineering Division
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e4e7ed;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5de;
        }
      `}</style>
    </div>
  );
};

export default EngineRoomPlatform;
