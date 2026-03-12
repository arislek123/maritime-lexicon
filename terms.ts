import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Activity, 
  Droplets, 
  Zap, 
  Thermometer, 
  Wind,
  Settings,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

const FLOWS = [
  {
    id: 'fuel-oil',
    name: 'Fuel Oil Service System',
    icon: Droplets,
    color: '#d97706',
    description: 'The path of fuel from storage tanks to the main engine fuel injectors.',
    steps: [
      { name: 'Storage Tanks', desc: 'Heavy Fuel Oil (HFO) stored in double-bottom tanks.', status: 'nominal' },
      { name: 'Transfer Pump', desc: 'Moves fuel to the Settling Tank.', status: 'nominal' },
      { name: 'Settling Tank', desc: 'Initial separation of water and sludge by gravity.', status: 'nominal' },
      { name: 'Purifier', desc: 'Centrifugal separation of fine impurities.', status: 'nominal' },
      { name: 'Service Tank', desc: 'Clean fuel ready for consumption.', status: 'nominal' },
      { name: 'Supply Pumps', desc: 'Pressurizes the fuel for the booster module.', status: 'nominal' },
      { name: 'Heaters', desc: 'Maintains correct viscosity for injection.', status: 'nominal' },
      { name: 'Main Engine', desc: 'High-pressure injection and combustion.', status: 'nominal' }
    ]
  },
  {
    id: 'cooling-water',
    name: 'Main Cooling System',
    icon: Thermometer,
    color: '#0284c7',
    description: 'Closed-loop freshwater cooling system for engine jackets and cylinder heads.',
    steps: [
      { name: 'Sea Chest', desc: 'Intake for raw seawater cooling.', status: 'nominal' },
      { name: 'SW Pumps', desc: 'Circulates seawater through heat exchangers.', status: 'nominal' },
      { name: 'Central Cooler', desc: 'Heat transfer from FW to SW.', status: 'nominal' },
      { name: 'FW Pumps', desc: 'Circulates treated freshwater to engine.', status: 'nominal' },
      { name: 'Engine Jackets', desc: 'Absorbs heat from combustion liners.', status: 'nominal' },
      { name: 'Expansion Tank', desc: 'Maintains system pressure and volume.', status: 'nominal' }
    ]
  },
  {
    id: 'power-grid',
    name: 'Electrical Power Grid',
    icon: Zap,
    color: '#7c3aed',
    description: 'Generation and distribution of 6.6kV and 440V electrical power.',
    steps: [
      { name: 'Diesel Generators', desc: 'Primary source of electrical power.', status: 'nominal' },
      { name: 'Main Switchboard', desc: 'Central distribution and synchronization.', status: 'nominal' },
      { name: 'HV Transformers', desc: 'Steps down 6.6kV to 440V.', status: 'nominal' },
      { name: 'Aux Switchboards', desc: 'Local distribution to machinery.', status: 'nominal' },
      { name: 'Emergency Board', desc: 'Backup power for critical systems.', status: 'standby' }
    ]
  }
];

const SystemFlows: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState(FLOWS[0]);

  return (
    <div className="space-y-6">
      {/* Flow Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FLOWS.map((flow) => (
          <button
            key={flow.id}
            onClick={() => setActiveFlow(flow)}
            className={`p-6 rounded-[32px] border transition-all text-left group ${activeFlow.id === flow.id ? 'bg-white border-blue-600 shadow-lg ring-1 ring-blue-600' : 'bg-white/50 border-[#e4e7ed] hover:border-blue-300'}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${activeFlow.id === flow.id ? 'bg-blue-600 text-white' : 'bg-white border border-[#e4e7ed] text-[#8694a8]'}`}>
              <flow.icon className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#0f1724] mb-1">{flow.name}</h3>
            <p className="text-[10px] text-[#8694a8] font-medium uppercase tracking-wider">System Flow Diagram</p>
          </button>
        ))}
      </div>

      {/* Flow Visualization */}
      <div className="bg-white rounded-[32px] border border-[#e4e7ed] p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-[#0f1724] mb-2">{activeFlow.name}</h2>
            <p className="text-sm text-[#8694a8] max-w-xl leading-relaxed">{activeFlow.description}</p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">System Integrity: Nominal</span>
          </div>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#f0f2f6] -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 relative z-10">
            {activeFlow.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border-2 transition-all relative ${step.status === 'nominal' ? 'bg-white border-blue-600 text-blue-600 shadow-md' : 'bg-amber-50 border-amber-400 text-amber-600'}`}
                >
                  <span className="text-xs font-bold">{i + 1}</span>
                  
                  {/* Flow Arrow */}
                  {i < activeFlow.steps.length - 1 && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 w-4 flex items-center justify-center text-[#e4e7ed] hidden md:flex">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
                <h4 className="text-[11px] font-bold text-[#0f1724] mb-1 group-hover:text-blue-600 transition-colors">{step.name}</h4>
                <p className="text-[9px] text-[#8694a8] leading-tight px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Warning */}
        <div className="mt-12 p-6 bg-[#f8f9fb] rounded-2xl border border-[#e4e7ed] flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-[#0f1724] uppercase tracking-widest mb-1">Operational Note</h4>
            <p className="text-[11px] text-[#4b5568] leading-relaxed">
              This diagram represents the standard operational flow. Actual valve alignments may vary based on specific vessel requirements and Chief Engineer's standing orders. Always verify physical lineups before starting machinery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemFlows;
