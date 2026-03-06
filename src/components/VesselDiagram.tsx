import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { Info, ArrowRight } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  slug: string;
  x: number;
  y: number;
  description: string;
}

const hotspots: Hotspot[] = [
  { id: 'bow', name: 'Bow', slug: 'bow', x: 82, y: 65, description: 'The forward part of the hull of a ship or boat.' },
  { id: 'stern', name: 'Stern', slug: 'stern', x: 18, y: 65, description: 'The back or aft-most part of a ship or boat.' },
  { id: 'bridge', name: 'Bridge', slug: 'bridge', x: 42, y: 45, description: 'The room or platform from which the ship can be commanded.' },
  { id: 'hull', name: 'Hull', slug: 'hull', x: 50, y: 72, description: 'The watertight body of a ship or boat.' },
  { id: 'keel', name: 'Keel', slug: 'keel', x: 50, y: 88, description: 'The longitudinal structure along the centerline at the bottom of a vessel\'s hull.' },
  { id: 'propeller', name: 'Propeller', slug: 'propeller', x: 12, y: 82, description: 'A type of fan that transmits power by converting rotational motion into thrust.' },
  { id: 'rudder', name: 'Rudder', slug: 'rudder', x: 8, y: 78, description: 'A primary control surface used to steer a ship.' },
  { id: 'mast', name: 'Mast', slug: 'mast', x: 48, y: 30, description: 'A tall upright post on a ship or boat, which can carry sails or support rigging.' },
  { id: 'anchor', name: 'Anchor', slug: 'anchor', x: 78, y: 78, description: 'A device, normally made of metal, used to secure a vessel to the bed of a body of water.' },
];

export const VesselDiagram: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Interactive Vessel Diagram</h2>
        <p className="text-slate-500 dark:text-slate-400">Click on the markers to explore the anatomy of a ship.</p>
      </div>

      <div className="relative aspect-[21/9] bg-slate-100 dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden shadow-inner group">
        {/* Stylized Ship SVG */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full p-8 text-slate-400 dark:text-slate-600 transition-colors duration-500"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Hull Profile */}
          <path 
            d="M10,60 L80,60 Q95,60 90,85 L15,85 Q10,85 10,60" 
            fill="currentColor" 
            className="transition-colors"
          />
          {/* Superstructure / Bridge */}
          <path 
            d="M30,60 L30,40 L55,40 L55,60 Z" 
            fill="currentColor" 
            opacity="0.9"
          />
          <path 
            d="M35,40 L35,30 L50,30 L50,40 Z" 
            fill="currentColor" 
            opacity="0.7"
          />
          {/* Mast */}
          <line x1="42" y1="15" x2="42" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="38" y1="20" x2="46" y2="20" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Funnel */}
          <rect x="20" y="45" width="8" height="15" fill="currentColor" opacity="0.8" />
          
          {/* Waterline */}
          <path 
            d="M0,80 L100,80" 
            stroke="blue" 
            strokeWidth="0.5" 
            strokeOpacity="0.3"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Hotspots */}
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            onClick={() => setActiveHotspot(spot)}
            className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 flex items-center justify-center
              ${activeHotspot?.id === spot.id 
                ? 'bg-blue-600 scale-125 z-20' 
                : 'bg-blue-500 hover:bg-blue-600 hover:scale-110 z-10'
              }`}
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </button>
        ))}

        {/* Hotspot Info Overlay */}
        <AnimatePresence>
          {activeHotspot && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-6 right-6 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-5 space-y-4 z-30"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{activeHotspot.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {activeHotspot.description}
                  </p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl text-blue-600 dark:text-blue-400">
                  <Info size={18} />
                </div>
              </div>
              <button
                onClick={() => navigate(`/term/${activeHotspot.slug}/`)}
                className="w-full py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
              >
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            onClick={() => setActiveHotspot(spot)}
            className={`p-4 rounded-2xl border-2 transition-all text-left flex items-center justify-between group
              ${activeHotspot?.id === spot.id 
                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-400' 
                : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 text-slate-600 dark:text-slate-400'
              }`}
          >
            <span className="font-semibold">{spot.name}</span>
            <ArrowRight size={16} className={`opacity-0 group-hover:opacity-100 transition-all ${activeHotspot?.id === spot.id ? 'opacity-100 translate-x-0' : '-translate-x-2'}`} />
          </button>
        ))}
      </div>
    </div>
  );
};
