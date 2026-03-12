import React, { useId, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface MachineryDiagramProps {
  id: string;
  name: string;
  short: string;
  icon: string;
  color: string;
  status: 'running' | 'standby' | 'maintenance' | 'alarm';
  rawCat: string;
  size?: 'sm' | 'lg';
}

const MachineryDiagram: React.FC<MachineryDiagramProps> = ({ id, name, short, icon, color, status, rawCat, size = 'lg' }) => {
  const uniqueId = useId().replace(/:/g, '');
  const isRunning = status === 'running';
  const isAlarm = status === 'alarm';
  const isSm = size === 'sm';

  // Animation time state
  const [t, setT] = useState(0);

  useEffect(() => {
    let frameId: number;
    const tick = () => {
      setT(prev => prev + 1);
      frameId = requestAnimationFrame(tick);
    };
    if (isRunning || isAlarm) {
      frameId = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(frameId);
  }, [isRunning, isAlarm]);

  const a = t * 0.08;
  const dtick = t;

  const renderDiagram = () => {
    // Porting logic from the HTML file
    
    if (id === 'main-engine') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f4ff"/>
          <rect x="28" y="140" width="274" height="18" rx="3" fill="#dce3f5" stroke="#94a3b8" strokeWidth="1.5"/>
          <rect x="28" y="18" width="264" height="16" rx="3" fill="#fef9c3" stroke="#eab308" strokeWidth="1" opacity="0.7"/>
          <text x="80" y="29" fontSize="7" fill="#78350f" fontFamily="monospace">EXHAUST MANIFOLD</text>
          {[0,1,2,3,4,5].map((i) => {
            const phase = i * 1.047;
            const py = 85 + Math.sin(a * 2 + phase) * 24;
            const crx = 47 + i * 42;
            const crankY = 148;
            return (
              <g key={i}>
                <rect x={crx} y="36" width="26" height="58" rx="3" fill="#e8eef8" stroke="#94a3b8" strokeWidth="1.5"/>
                <rect x={crx + 2} y={py} width="22" height="14" rx="2" fill="#f97316" opacity="0.88"/>
                <line x1={crx + 13} y1={py + 14} x2={crx + 13} y2={crankY} stroke="#64748b" strokeWidth="2"/>
                <circle cx={crx + 13} cy={crankY} r="4" fill="#374151"/>
              </g>
            );
          })}
          <circle cx="330" cy="92" r="40" fill="#e8eef8" stroke="#94a3b8" strokeWidth="2"/>
          <circle cx="330" cy="92" r="26" fill="#f0f4ff" stroke="#aab0c8"/>
          {[0,60,120,180,240,300].map((d) => {
            const r = (d + a * 57.3 * 1.6) * Math.PI / 180;
            return <line key={d} x1={330 + 14 * Math.cos(r)} y1={92 + 14 * Math.sin(r)} x2={330 + 30 * Math.cos(r)} y2={92 + 30 * Math.sin(r)} stroke="#f97316" strokeWidth="3.5" strokeLinecap="round"/>;
          })}
          <circle cx="330" cy="92" r="8" fill="#1e293b"/>
          <circle cx="330" cy="48" r="22" fill="#e8eef8" stroke="#2563eb" strokeWidth="1.5"/>
          {[0,45,90,135,180,225,270,315].map((d) => {
            const r = (d + a * 57.3 * 2.2) * Math.PI / 180;
            return <line key={d} x1={330 + 8 * Math.cos(r)} y1={48 + 8 * Math.sin(r)} x2={330 + 17 * Math.cos(r)} y2={48 + 17 * Math.sin(r)} stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>;
          })}
          <text x="330" y="79" textAnchor="middle" fontSize="7" fill="#2563eb" fontFamily="monospace">TC</text>
          <text x="165" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">MAN B&amp;W 6S80ME-C — 2-STROKE CROSSHEAD DIESEL</text>
        </svg>
      );
    }

    if (id === 'aux-engine' || id === 'aux-gen-2') {
      const genRot = a * 57.3 * 0.55;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f6ff"/>
          <rect x="10" y="78" width="204" height="72" rx="5" fill="#e8eef8" stroke="#94a3b8" strokeWidth="2"/>
          {[0,1,2,3,4,5,6,7,8].map((i) => {
            const py = 70 + Math.sin(a * 2 + i * 0.7) * 14;
            return (
              <g key={i}>
                <rect x={24 + i * 28} y="42" width="20" height="36" rx="2" fill="#e8eef8" stroke="#94a3b8" strokeWidth="1.5"/>
                <rect x={27 + i * 28} y={py} width="14" height="10" rx="2" fill="#2563eb" opacity="0.8"/>
              </g>
            );
          })}
          <text x="107" y="168" textAnchor="middle" fontSize="7" fill="#1e40af" fontFamily="monospace">WÄRTSILÄ 9L32 — 4-STROKE DIESEL</text>
          <rect x="212" y="64" width="16" height="56" rx="4" fill="#64748b"/>
          <rect x="228" y="60" width="140" height="96" rx="8" fill="#eef3ff" stroke="#6366f1" strokeWidth="2"/>
          <circle cx="298" cy="108" r="36" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"/>
          {[0,45,90,135,180,225,270,315].map((d) => {
            const r = (d + genRot) * Math.PI / 180;
            return <line key={d} x1={298 + 10 * Math.cos(r)} y1={108 + 10 * Math.sin(r)} x2={298 + 29 * Math.cos(r)} y2={108 + 29 * Math.sin(r)} stroke="#6366f1" strokeWidth="2.5"/>;
          })}
          <circle cx="298" cy="108" r="9" fill="#4338ca"/>
          <text x="298" y="112" textAnchor="middle" fontSize="12" fill="#4338ca" fontFamily="monospace">~</text>
          <path d="M 350 68 L 340 84 L 348 84 L 336 106 L 352 80 L 344 80 Z" fill="#fbbf24"/>
          <text x="298" y="170" textAnchor="middle" fontSize="8" fill="#78350f" fontFamily="monospace">3,240 kW — 450V / 60Hz</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">AUXILIARY DIESEL GENERATOR — CONSTANT 750 RPM</text>
        </svg>
      );
    }

    if (id === 'boiler') {
      const ff = 0.5 + Math.sin(a * 3) * 0.3 + Math.cos(a * 5) * 0.2;
      const sy = 12 - Math.abs(Math.sin(a * 2)) * 8;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#fff5f5"/>
          <ellipse cx="190" cy="40" rx="90" ry="15" fill="#fde8e8" stroke="#f87171" strokeWidth="1.5"/>
          <rect x="100" y="40" width="180" height="134" fill="#fde8e8" stroke="#f87171" strokeWidth="1.5"/>
          <ellipse cx="190" cy="174" rx="90" ry="14" fill="#f8d5d5" stroke="#e08080"/>
          <line x1="102" y1="108" x2="278" y2="108" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5,3"/>
          <text x="114" y="104" fontSize="7" fill="#2563eb" fontFamily="monospace">WATER LEVEL</text>
          {[0,1,2,3,4,5,6,7].map((i) => <line key={i} x1={116 + i * 20} y1="50" x2={116 + i * 20} y2="106" stroke="#f87171" strokeWidth="2.5" opacity="0.65"/>)}
          <rect x="104" y="42" width="172" height="64" fill="#bfdbfe" opacity="0.2"/>
          <rect x="178" y="8" width="24" height="30" rx="3" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
          {[0,1,2].map((i) => <circle key={i} cx={183 + i * 7} cy={sy - i * 4} r={3 + i} fill="#93c5fd" opacity={0.5 - i * 0.12}/>)}
          <ellipse cx="190" cy="180" rx="14" ry="5" fill="#dc2626" opacity="0.55"/>
          <ellipse cx="190" cy={172 + Math.sin(a * 4) * 3} rx={10 + Math.cos(a * 5) * 3} ry={13 + Math.sin(a * 4) * 3} fill="#ea7018" opacity={ff}/>
          <ellipse cx="190 + Math.sin(a * 3) * 2" cy={168 + Math.sin(a * 3) * 2} rx={6 + Math.cos(a * 4) * 2} ry={10 + Math.sin(a * 2) * 2} fill="#fbbf24" opacity={ff * 0.8}/>
          <circle cx="130" cy="172" r="17" fill="white" stroke="#374151" strokeWidth="1.5"/>
          <line x1="130" y1="172" x2={130 + 11 * Math.cos(-0.8 + Math.sin(a * 0.3) * 0.1)} y2={172 + 11 * Math.sin(-0.8 + Math.sin(a * 0.3) * 0.1)} stroke="#dc2626" strokeWidth="2"/>
          <text x="130" y="175" textAnchor="middle" fontSize="5.5" fill="#374151" fontFamily="monospace">7 BAR</text>
          <circle cx="250" cy="172" r="17" fill="white" stroke="#374151" strokeWidth="1.5"/>
          <line x1="250" y1="172" x2={250 + 11 * Math.cos(-0.5 + Math.sin(a * 0.2) * 0.1)} y2={172 + 11 * Math.sin(-0.5 + Math.sin(a * 0.2) * 0.1)} stroke="#dc2626" strokeWidth="2"/>
          <text x="250" y="175" textAnchor="middle" fontSize="5.5" fill="#374151" fontFamily="monospace">175°C</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">COMPOSITE OIL-FIRED / EGB BOILER — 7 BAR STEAM</text>
        </svg>
      );
    }

    if (id === 'purifier' || id === 'lo-purifier') {
      const spin = a * 57.3 * 4.5;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f7fdf0"/>
          <rect x="140" y="14" width="100" height="158" rx="6" fill="#ecfccb" stroke="#84cc16" strokeWidth="2"/>
          {[0,1,2,3,4,5,6,7].map((i) => <ellipse key={i} cx="190" cy={36 + i * 11} rx={38 - i * 3} ry="5" fill={i % 2 === 0 ? '#d9f99d' : '#ecfccb'} stroke="#84cc16" strokeWidth="1" opacity="0.9"/>)}
          <circle cx={190 + 28 * Math.cos(spin * Math.PI / 180)} cy={90 + 8 * Math.sin(spin * Math.PI / 180)} r="3" fill="#65a30d" opacity="0.85"/>
          <rect x="148" y="142" width="84" height="20" rx="3" fill="#fbbf24" stroke="#d97706"/>
          <text x="190" y="155" textAnchor="middle" fontSize="7" fill="#78350f" fontFamily="monospace">SLUDGE SPACE</text>
          <rect x="164" y="164" width="52" height="22" rx="3" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
          <text x="190" y="178" textAnchor="middle" fontSize="7.5" fill="#1d4ed8" fontFamily="monospace">MOTOR</text>
          <line x1="190" y1="97" x2="190" y2="164" stroke="#9ca3af" strokeWidth="3.5"/>
          <defs>
            <marker id={`ap1-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/></marker>
            <marker id={`ap2-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#65a30d"/></marker>
            <marker id={`ap3-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0284c7"/></marker>
          </defs>
          <path d="M 72 72 L 142 72" stroke="#f97316" strokeWidth="2" markerEnd={`url(#ap1-${uniqueId})`}/>
          <text x="8" y="66" fontSize="7" fill="#f97316" fontFamily="monospace">HFO IN</text>
          <text x="8" y="78" fontSize="6" fill="#f97316" fontFamily="monospace">98°C heated</text>
          <path d="M 238 46 L 308 46" stroke="#65a30d" strokeWidth="2" markerEnd={`url(#ap2-${uniqueId})`}/>
          <text x="310" y="49" fontSize="7" fill="#65a30d" fontFamily="monospace">CLEAN OIL</text>
          <path d="M 238 92 L 308 92" stroke="#0284c7" strokeWidth="2" markerEnd={`url(#ap3-${uniqueId})`}/>
          <text x="310" y="95" fontSize="7" fill="#0284c7" fontFamily="monospace">WATER OUT</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">ALFA LAVAL FOPX — DISC-STACK CENTRIFUGE PURIFIER</text>
        </svg>
      );
    }

    if (id === 'compressor') {
      const p1 = 88 + Math.sin(a * 2) * 24;
      const p2 = 96 + Math.sin(a * 2 + Math.PI) * 20;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f5f3ff"/>
          <rect x="14" y="60" width="84" height="100" rx="5" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"/>
          <text x="56" y="56" textAnchor="middle" fontSize="8" fill="#7c3aed" fontFamily="monospace">LP STAGE</text>
          <rect x="20" y={p1} width="72" height="18" rx="3" fill="#8b5cf6" opacity="0.65"/>
          <text x="56" y="174" textAnchor="middle" fontSize="7" fill="#7c3aed" fontFamily="monospace">~7 bar</text>
          <rect x="116" y="74" width="66" height="68" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"/>
          <text x="149" y="70" textAnchor="middle" fontSize="7" fill="#4f46e5" fontFamily="monospace">INTERCOOLER</text>
          {[0,1,2,3,4].map((i) => <line key={i} x1="120" y1={84 + i * 11} x2="178" y2={84 + i * 11} stroke="#818cf8" strokeWidth="1.5"/>)}
          <rect x="198" y="72" width="70" height="88" rx="5" fill="#ede9fe" stroke="#a78bfa" strokeWidth="2"/>
          <text x="233" y="68" textAnchor="middle" fontSize="8" fill="#7c3aed" fontFamily="monospace">HP STAGE</text>
          <rect x="204" y={p2} width="58" height="16" rx="3" fill="#c084fc" opacity="0.7"/>
          <text x="233" y="174" textAnchor="middle" fontSize="7" fill="#7c3aed" fontFamily="monospace">~30 bar</text>
          <rect x="282" y="36" width="60" height="140" rx="28" fill="#f3e8ff" stroke="#d97706" strokeWidth="2"/>
          <text x="312" y="112" textAnchor="middle" fontSize="8" fill="#d97706" fontFamily="monospace">30</text>
          <text x="312" y="124" textAnchor="middle" fontSize="8" fill="#d97706" fontFamily="monospace">BAR</text>
          <circle cx="312" cy="30" r="16" fill="#fff" stroke="#d97706" strokeWidth="2"/>
          <line x1="312" y1="30" x2={312 + 10 * Math.cos(-2.4 + Math.sin(a) * 0.3)} y2={30 + 10 * Math.sin(-2.4 + Math.sin(a) * 0.3)} stroke="#dc2626" strokeWidth="2"/>
          <defs>
            <marker id={`acp0-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed"/></marker>
            <marker id={`acp1-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#d97706"/></marker>
          </defs>
          <path d="M 10 110 L 14 110" stroke="#7c3aed" strokeWidth="2" markerEnd={`url(#acp0-${uniqueId})`}/>
          <text x="0" y="104" fontSize="6" fill="#7c3aed" fontFamily="monospace">ATM</text>
          <path d="M 98 110 L 116 110" stroke="#6366f1" strokeWidth="2" markerEnd={`url(#acp0-${uniqueId})`}/>
          <path d="M 182 110 L 198 110" stroke="#a78bfa" strokeWidth="2" markerEnd={`url(#acp0-${uniqueId})`}/>
          <path d="M 268 110 L 282 110" stroke="#d97706" strokeWidth="2" markerEnd={`url(#acp1-${uniqueId})`}/>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">2-STAGE RECIPROCATING AIR COMPRESSOR — 30 BAR</text>
        </svg>
      );
    }

    if (id === 'fwg') {
      const evap = 0.4 + Math.sin(a * 2) * 0.3;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0fdf4"/>
          <ellipse cx="190" cy="46" rx="90" ry="16" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5"/>
          <rect x="100" y="46" width="180" height="82" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5"/>
          <ellipse cx="190" cy="128" rx="90" ry="16" fill="#a7f3d0" stroke="#059669"/>
          <rect x="102" y={88 + Math.sin(a * 0.8) * 4} width="176" height="38" fill="#6ee7b7" opacity="0.4"/>
          {[0,1,2,3,4].map((i) => {
            const bx = 122 + i * 34;
            const by = 88 - ((a * 20 + i * 30) % 46);
            return <circle key={i} cx={bx} cy={by} r={2 + i % 3} fill="#10b981" opacity={by > 58 ? evap : 0}/>;
          })}
          <defs>
            <marker id={`af1-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
            <marker id={`af2-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker>
            <marker id={`af3-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3b82f6"/></marker>
          </defs>
          <path d="M 10 90 L 100 80" stroke="#ef4444" strokeWidth="2.5" markerEnd={`url(#af1-${uniqueId})`}/>
          <text x="2" y="84" fontSize="7" fill="#dc2626" fontFamily="monospace">HT JCW</text>
          <text x="2" y="96" fontSize="7" fill="#dc2626" fontFamily="monospace">82°C</text>
          <path d="M 10 120 L 100 115" stroke="#06b6d4" strokeWidth="2" markerEnd={`url(#af2-${uniqueId})`}/>
          <text x="2" y="114" fontSize="7" fill="#0891b2" fontFamily="monospace">SW FEED</text>
          <rect x="288" y="36" width="78" height="60" rx="5" fill="#cffafe" stroke="#06b6d4" strokeWidth="2"/>
          <text x="327" y="60" textAnchor="middle" fontSize="7" fill="#0891b2" fontFamily="monospace">CONDENSER</text>
          {[0,1,2].map((i) => <line key={i} x1="292" y1={50 + i * 14} x2="362" y2={50 + i * 14} stroke="#7dd3fc" strokeWidth="1.5"/>)}
          <path d="M 280 150 L 358 150" stroke="#3b82f6" strokeWidth="2.5" markerEnd={`url(#af3-${uniqueId})`}/>
          <text x="320" y="165" textAnchor="middle" fontSize="7" fill="#1d4ed8" fontFamily="monospace">FW OUT</text>
          <rect x="152" y="148" width="80" height="30" rx="5" fill="#ede9fe" stroke="#8b5cf6"/>
          <text x="192" y="167" textAnchor="middle" fontSize="7" fill="#6d28d9" fontFamily="monospace">VACUUM PUMP</text>
          <rect x="8" y="148" width="100" height="30" rx="4" fill="#d1fae5" stroke="#10b981"/>
          <text x="58" y="166" textAnchor="middle" fontSize="7" fill="#065f46" fontFamily="monospace">25 t/day</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">FRESH WATER GENERATOR — VACUUM EVAPORATOR 25 t/day</text>
        </svg>
      );
    }

    if (id === 'sw-pump') {
      const rot = a * 57.3 * 1.3;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f9ff"/>
          <circle cx="180" cy="104" r="66" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5"/>
          <circle cx="180" cy="104" r="52" fill="#f0faff" stroke="#7dd3fc"/>
          {[0,36,72,108,144,180,216,252,288,324].map((d) => {
            const r = (d + rot) * Math.PI / 180;
            return <path key={d} d={`M ${180 + 14 * Math.cos(r)} ${104 + 14 * Math.sin(r)} L ${180 + 47 * Math.cos(r + 0.35)} ${104 + 47 * Math.sin(r + 0.35)}`} stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round"/>;
          })}
          <circle cx="180" cy="104" r="13" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2"/>
          <circle cx="180" cy="104" r="6" fill="#0369a1"/>
          <rect x="166" y="10" width="36" height="42" rx="4" fill="#dbeafe" stroke="#0369a1" strokeWidth="2"/>
          <text x="184" y="29" textAnchor="middle" fontSize="6.5" fill="#0369a1" fontFamily="monospace">DISCH.</text>
          <text x="184" y="41" textAnchor="middle" fontSize="7" fill="#0369a1" fontFamily="monospace">600m³/h</text>
          <rect x="8" y="90" width="90" height="28" rx="4" fill="#cffafe" stroke="#06b6d4" strokeWidth="2"/>
          <text x="53" y="108" textAnchor="middle" fontSize="7" fill="#0891b2" fontFamily="monospace">FROM SEA CHEST</text>
          <path d="M 98 104 L 114 104" stroke="#06b6d4" strokeWidth="2.5" markerEnd={`url(#asw0-${uniqueId})`}/>
          <rect x="272" y="68" width="96" height="72" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
          <text x="320" y="96" textAnchor="middle" fontSize="8" fill="#1e40af" fontFamily="monospace">440V</text>
          <text x="320" y="110" textAnchor="middle" fontSize="8" fill="#1e40af" fontFamily="monospace">MOTOR</text>
          <rect x="246" y="100" width="26" height="8" rx="2" fill="#64748b"/>
          <circle cx="180" cy="178" r="16" fill="white" stroke="#374151" strokeWidth="1.5"/>
          <line x1="180" y1="178" x2={180 + 11 * Math.cos(-0.9 + Math.sin(a * 0.3) * 0.1)} y2={178 + 11 * Math.sin(-0.9 + Math.sin(a * 0.3) * 0.1)} stroke="#dc2626" strokeWidth="2"/>
          <text x="180" y="181" textAnchor="middle" fontSize="5" fill="#374151" fontFamily="monospace">3.5 BAR</text>
          <defs><marker id={`asw0-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0369a1"/></marker></defs>
          <text x="190" y="196" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">SEA WATER CENTRIFUGAL PUMP — 600 m³/h 440V MOTOR</text>
        </svg>
      );
    }

    if (id === 'steering-gear') {
      const ram = Math.sin(a * 0.8) * 16;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#fdf4ff"/>
          <rect x="14" y="50" width="72" height="100" rx="5" fill="#ede9fe" stroke="#c084fc" strokeWidth="1.5"/>
          <text x="50" y="102" textAnchor="middle" fontSize="7.5" fill="#9333ea" fontFamily="monospace">PUMP P</text>
          <text x="50" y="115" textAnchor="middle" fontSize="7" fill="#9333ea" fontFamily="monospace">11 kW</text>
          <rect x="294" y="50" width="72" height="100" rx="5" fill="#ede9fe" stroke="#c084fc" strokeWidth="1.5"/>
          <text x="330" y="102" textAnchor="middle" fontSize="7.5" fill="#9333ea" fontFamily="monospace">PUMP S</text>
          <text x="330" y="115" textAnchor="middle" fontSize="7" fill="#9333ea" fontFamily="monospace">11 kW</text>
          {[[108,60],[226,60],[108,142],[226,142]].map((v,i) => {
            const ext = Math.sin(a + (i < 2 ? 0 : Math.PI)) * 14;
            return (
              <g key={i}>
                <rect x={v[0]} y={v[1]} width="28" height="62" rx="4" fill="#f3e8ff" stroke="#c084fc" strokeWidth="1.5"/>
                <rect x={v[0] + 4} y={i < 2 ? v[1] + 10 + ext : v[1] + 32 - ext} width="20" height="14" rx="3" fill="#9333ea" opacity="0.55"/>
              </g>
            );
          })}
          <line x1="120" y1="172" x2="228" y2="172" stroke="#ca9b0a" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="174" cy="172" r="12" fill="#ca9b0a" stroke="#92400e" strokeWidth="1.5"/>
          <rect x="166" y="165" width="18" height="14" rx="3" fill="#dce3f5" stroke="#2563eb" strokeWidth="1.5"/>
          <line x1="138" y1="28" x2="242" y2="28" stroke="#c084fc" strokeWidth="1.5"/>
          <rect x="152" y="12" width="76" height="20" rx="4" fill="#ede9fe" stroke="#c084fc"/>
          <text x="190" y="25" textAnchor="middle" fontSize="7.5" fill="#9333ea" fontFamily="monospace">OIL RESERVOIR</text>
          <rect x="280" y="10" width="90" height="36" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="325" y="24" textAnchor="middle" fontSize="7" fill="#a5b4fc" fontFamily="monospace">RUDDER ANGLE</text>
          <text x="325" y="38" textAnchor="middle" fontSize="11" fill="#c4b5fd" fontFamily="monospace">{Math.round(ram)}°</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">4-RAM HYDRAULIC STEERING GEAR — RAPSON SLIDE</text>
        </svg>
      );
    }

    if (id === 'air-cooler') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f8ff"/>
          <rect x="14" y="66" width="68" height="68" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
          <text x="48" y="60" textAnchor="middle" fontSize="8" fill="#991b1b" fontFamily="monospace">FROM TC</text>
          <text x="48" y="92" textAnchor="middle" fontSize="13">🌀</text>
          <text x="48" y="114" textAnchor="middle" fontSize="8" fill="#dc2626" fontFamily="monospace">~200°C</text>
          <rect x="100" y="28" width="180" height="144" rx="10" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2"/>
          <text x="190" y="22" textAnchor="middle" fontSize="9" fill="#075985" fontFamily="monospace">SCAVENGE AIR COOLER</text>
          {[0,1,2,3,4,5,6,7,8,9].map((i) => {
            const y = 40 + i * 12;
            const clr = i < 5 ? '#f97316' : '#0891b2';
            return (
              <g key={i}>
                <line x1="106" y1={y} x2="274" y2={y} stroke={clr} strokeWidth="3" opacity="0.5"/>
                <circle cx={112 + i * 16} cy={y} r="3" fill={clr} opacity="0.5"/>
              </g>
            );
          })}
          <rect x="108" y="154" width="72" height="16" rx="3" fill="#bae6fd" stroke="#0369a1"/>
          <text x="144" y="165" textAnchor="middle" fontSize="7" fill="#075985" fontFamily="monospace">LT WATER IN</text>
          <rect x="200" y="154" width="72" height="16" rx="3" fill="#bae6fd" stroke="#0369a1"/>
          <text x="236" y="165" textAnchor="middle" fontSize="7" fill="#075985" fontFamily="monospace">LT WATER OUT</text>
          <line x1="190" y1="172" x2="190" y2="188" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3,2"/>
          <text x="190" y="196" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="monospace">CONDENSATE DRAIN</text>
          <rect x="298" y="66" width="68" height="68" rx="6" fill="#dcfce7" stroke="#059669" strokeWidth="1.5"/>
          <text x="332" y="60" textAnchor="middle" fontSize="8" fill="#065f46" fontFamily="monospace">TO SCAV.</text>
          <text x="332" y="72" textAnchor="middle" fontSize="7" fill="#065f46" fontFamily="monospace">RECEIVER</text>
          <text x="332" y="105" textAnchor="middle" fontSize="8" fill="#059669" fontFamily="monospace">35–50°C</text>
          <defs>
            <marker id={`ard-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
            <marker id={`arge-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#059669"/></marker>
          </defs>
          <line x1="82" y1="100" x2="98" y2="100" stroke="#dc2626" strokeWidth="2.5" markerEnd={`url(#ard-${uniqueId})`}/>
          <line x1="280" y1="100" x2="296" y2="100" stroke="#059669" strokeWidth="2.5" markerEnd={`url(#arge-${uniqueId})`}/>
        </svg>
      );
    }

    if (id === 'turbocharger') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#fdf4ff"/>
          <rect x="14" y="60" width="62" height="80" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
          <text x="45" y="54" textAnchor="middle" fontSize="7" fill="#991b1b" fontFamily="monospace">EXHAUST GAS</text>
          <text x="45" y="100" textAnchor="middle" fontSize="11">🔥</text>
          <text x="45" y="120" textAnchor="middle" fontSize="8" fill="#dc2626" fontFamily="monospace">400–500°C</text>
          <circle cx="134" cy="100" r="52" fill="#fce7f3" stroke="#e879f9" strokeWidth="2"/>
          <circle cx="134" cy="100" r="36" fill="#fdf4ff" stroke="#d946ef" strokeWidth="1.5"/>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((d) => {
            const r = (d + a * 57.3 * 2) * Math.PI / 180;
            return <path key={d} d={`M ${134 + 14 * Math.cos(r)} ${100 + 14 * Math.sin(r)} Q ${134 + 28 * Math.cos((r + 0.3))} ${100 + 28 * Math.sin((r + 0.3))} ${134 + 34 * Math.cos(r + 0.15)} ${100 + 34 * Math.sin(r + 0.15)}`} stroke="#e879f9" strokeWidth="2" fill="none" strokeLinecap="round"/>;
          })}
          <circle cx="134" cy="100" r="8" fill="#e879f9" opacity="0.8"/>
          <text x="134" y="162" textAnchor="middle" fontSize="8" fill="#7c3aed" fontFamily="monospace">TURBINE</text>
          <line x1="186" y1="100" x2="194" y2="100" stroke="#6b7280" strokeWidth="5"/>
          <text x="190" y="116" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="monospace">SHAFT</text>
          <circle cx="246" cy="100" r="52" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
          <circle cx="246" cy="100" r="36" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="1.5"/>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((d) => {
            const r = (d + a * 57.3 * 2) * Math.PI / 180;
            return <path key={d} d={`M ${246 + 14 * Math.cos(r)} ${100 + 14 * Math.sin(r)} Q ${246 + 28 * Math.cos((r + 0.3))} ${100 + 28 * Math.sin((r + 0.3))} ${246 + 34 * Math.cos(r + 0.15)} ${100 + 34 * Math.sin(r + 0.15)}`} stroke="#7c3aed" strokeWidth="2" fill="none" strokeLinecap="round"/>;
          })}
          <circle cx="246" cy="100" r="8" fill="#7c3aed" opacity="0.8"/>
          <text x="246" y="162" textAnchor="middle" fontSize="8" fill="#7c3aed" fontFamily="monospace">COMPRESSOR</text>
          <rect x="76" y="82" width="22" height="36" rx="4" fill="#fecaca" stroke="#dc2626"/>
          <line x1="87" y1="100" x2="82" y2="100" stroke="#dc2626" strokeWidth="2.5"/>
          <rect x="284" y="60" width="62" height="80" rx="6" fill="#dcfce7" stroke="#059669" strokeWidth="1.5"/>
          <text x="315" y="54" textAnchor="middle" fontSize="7" fill="#065f46" fontFamily="monospace">COMP. AIR OUT</text>
          <text x="315" y="120" textAnchor="middle" fontSize="8" fill="#059669" fontFamily="monospace">3.5–5 bar</text>
          <line x1="298" y1="100" x2="284" y2="100" stroke="#059669" strokeWidth="2.5"/>
          <line x1="246" y1="152" x2="246" y2="174" stroke="#7c3aed" strokeWidth="2"/>
          <rect x="210" y="174" width="72" height="16" rx="3" fill="#ede9fe" stroke="#7c3aed"/>
          <text x="246" y="185" textAnchor="middle" fontSize="7" fill="#4f46e5" fontFamily="monospace">FRESH AIR INLET</text>
          <text x="190" y="196" textAnchor="middle" fontSize="9" fill="#4b5568" fontFamily="monospace" letterSpacing="1">EXHAUST GAS TURBINE ↔ COMPRESSOR — COMMON SHAFT</text>
        </svg>
      );
    }

    if (id === 'incinerator') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#fff7ed"/>
          <path d="M 120 40 L 260 40 L 280 160 L 100 160 Z" fill="#ffedd5" stroke="#ea580c" strokeWidth="2"/>
          <text x="190" y="32" textAnchor="middle" fontSize="10" fill="#9a3412" fontFamily="monospace">COMBUSTION CHAMBER</text>
          <rect x="140" y="60" width="100" height="60" rx="4" fill="#0f172a" stroke="#f97316"/>
          <text x="190" y="95" textAnchor="middle" fontSize="14" fill="#fb923c" fontFamily="monospace">{isRunning ? '852°C' : '25°C'}</text>
          <path d="M 160 120 Q 190 100 220 120" stroke="#ef4444" strokeWidth="3" opacity={isRunning ? 1 : 0.2}>
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
          </path>
          <rect x="280" y="60" width="60" height="40" rx="4" fill="#ffedd5" stroke="#ea580c" strokeWidth="2"/>
          <text x="310" y="52" textAnchor="middle" fontSize="8" fill="#9a3412" fontFamily="monospace">SLUDGE PUMP</text>
          <path d="M 190 40 L 190 10 L 370 10" stroke="#475569" strokeWidth="4" strokeDasharray="8,4"/>
          <text x="300" y="25" fontSize="8" fill="#475569" fontFamily="monospace">EXHAUST STACK</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">SHIPBOARD INCINERATOR — SLUDGE & SOLID WASTE</text>
        </svg>
      );
    }

    if (id === 'sewage') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0fdf4"/>
          <rect x="40" y="40" width="100" height="120" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
          <text x="90" y="32" textAnchor="middle" fontSize="8" fill="#166534" fontFamily="monospace">AERATION TANK</text>
          {[0,1,2,3,4,5].map(i => (
            <circle key={i} cx={60 + Math.random() * 60} cy={60 + Math.random() * 80} r="3" fill="#86efac" opacity="0.6">
              <animate attributeName="cy" values="140;60" dur={`${2 + Math.random() * 2}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <rect x="160" y="40" width="80" height="120" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
          <text x="200" y="32" textAnchor="middle" fontSize="8" fill="#166534" fontFamily="monospace">SETTLING TANK</text>
          <line x1="160" y1="100" x2="240" y2="100" stroke="#16a34a" strokeWidth="1" strokeDasharray="4,2"/>
          <rect x="260" y="60" width="80" height="80" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
          <text x="300" y="52" textAnchor="middle" fontSize="8" fill="#166534" fontFamily="monospace">CHLORINATION</text>
          <circle cx="300" cy="100" r="20" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2,2"/>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">SEWAGE TREATMENT PLANT — BIOLOGICAL OXIDATION</text>
        </svg>
      );
    }

    if (id === 'oily-water') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0fdfa"/>
          <rect x="40" y="40" width="100" height="120" rx="8" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2"/>
          <text x="90" y="32" textAnchor="middle" fontSize="8" fill="#0f766e" fontFamily="monospace">STAGE 1 - GRAVITY</text>
          <line x1="40" y1="100" x2="140" y2="100" stroke="#0d9488" strokeWidth="1" strokeDasharray="4,2"/>
          <rect x="180" y="40" width="80" height="120" rx="8" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2"/>
          <text x="220" y="32" textAnchor="middle" fontSize="8" fill="#0f766e" fontFamily="monospace">STAGE 2 - COALESCER</text>
          {[0,1,2,3].map(i => <rect key={i} x="195" y={55 + i * 25} width="50" height="15" rx="2" fill="#5eead4" opacity="0.6"/>)}
          <rect x="300" y="60" width="60" height="80" rx="4" fill="#0f172a" stroke="#14b8a6"/>
          <text x="330" y="52" textAnchor="middle" fontSize="8" fill="#14b8a6" fontFamily="monospace">OCM</text>
          <text x="330" y="105" textAnchor="middle" fontSize="12" fill="#2dd4bf" fontFamily="monospace">{isRunning ? Math.floor(2 + Math.random() * 3) : 0}</text>
          <text x="330" y="120" textAnchor="middle" fontSize="7" fill="#2dd4bf" fontFamily="monospace">PPM</text>
          <path d="M 140 100 L 180 100" stroke="#0d9488" strokeWidth="2" markerEnd={`url(#ao1-${uniqueId})`}/>
          <path d="M 260 100 L 300 100" stroke="#0d9488" strokeWidth="2" markerEnd={`url(#ao1-${uniqueId})`}/>
          <path d="M 330 140 L 330 180 L 370 180" stroke="#0d9488" strokeWidth="2" markerEnd={`url(#ao1-${uniqueId})`}/>
          <text x="350" y="175" fontSize="7" fill="#0d9488" fontFamily="monospace">OVERBOARD</text>
          <defs><marker id={`ao1-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0d9488"/></marker></defs>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">OILY WATER SEPARATOR — 15 PPM BILGE SEPARATOR</text>
        </svg>
      );
    }

    if (id === 'emergency-gen') {
      const genRot = a * 57.3 * 0.8;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#fffbeb"/>
          <rect x="40" y="60" width="120" height="80" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
          <text x="100" y="52" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="monospace">DIESEL ENGINE</text>
          <rect x="160" y="75" width="100" height="50" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
          <text x="210" y="70" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="monospace">ALTERNATOR</text>
          <circle cx="210" cy="100" r="20" fill="#fde68a" stroke="#d97706" strokeWidth="1.5"/>
          {[0,90,180,270].map(d => {
            const r = (d + genRot) * Math.PI / 180;
            return <line key={d} x1={210 + 5 * Math.cos(r)} y1={100 + 5 * Math.sin(r)} x2={210 + 18 * Math.cos(r)} y2={100 + 18 * Math.sin(r)} stroke="#d97706" strokeWidth="2"/>;
          })}
          <rect x="280" y="40" width="80" height="120" rx="4" fill="#1e293b" stroke="#fbbf24"/>
          <text x="320" y="32" textAnchor="middle" fontSize="8" fill="#fbbf24" fontFamily="monospace">EMERGENCY SWITCHBOARD</text>
          <rect x="290" y="55" width="60" height="10" rx="2" fill="#ef4444" opacity={isRunning ? 1 : 0.3}/>
          <text x="320" y="63" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace">MAIN BUS FAIL</text>
          <rect x="290" y="75" width="60" height="10" rx="2" fill="#10b981" opacity={isRunning ? 1 : 0.3}/>
          <text x="320" y="83" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace">EMERGENCY BUS ON</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">EMERGENCY DIESEL GENERATOR — 500 kW / 440 V</text>
        </svg>
      );
    }

    if (id === 'fuel-system') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#fff7ed"/>
          <rect x="20" y="40" width="60" height="120" rx="4" fill="#ffedd5" stroke="#c2410c" strokeWidth="2"/>
          <text x="50" y="32" textAnchor="middle" fontSize="8" fill="#9a3412" fontFamily="monospace">BOOSTER PUMPS</text>
          <rect x="100" y="40" width="80" height="120" rx="4" fill="#ffedd5" stroke="#c2410c" strokeWidth="2"/>
          <text x="140" y="32" textAnchor="middle" fontSize="8" fill="#9a3412" fontFamily="monospace">HFO HEATER</text>
          {[0,1,2,3].map(i => <line key={i} x1="110" y1={60 + i * 25} x2="170" y2={60 + i * 25} stroke="#ea580c" strokeWidth="2" opacity="0.6"/>)}
          <rect x="200" y="40" width="60" height="120" rx="4" fill="#0f172a" stroke="#f97316"/>
          <text x="230" y="32" textAnchor="middle" fontSize="8" fill="#f97316" fontFamily="monospace">VISCO-CONTROL</text>
          <text x="230" y="100" textAnchor="middle" fontSize="12" fill="#fb923c" fontFamily="monospace">{isRunning ? '14.2' : '0.0'}</text>
          <text x="230" y="115" textAnchor="middle" fontSize="7" fill="#fb923c" fontFamily="monospace">cSt</text>
          <rect x="280" y="40" width="80" height="120" rx="4" fill="#ffedd5" stroke="#c2410c" strokeWidth="2"/>
          <text x="320" y="32" textAnchor="middle" fontSize="8" fill="#9a3412" fontFamily="monospace">AUTO-FILTER</text>
          <circle cx="320" cy="100" r="25" fill="none" stroke="#c2410c" strokeWidth="1.5" strokeDasharray="4,2"/>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">FUEL OIL CONDITIONING MODULE — 13–17 cSt CONTROL</text>
        </svg>
      );
    }

    if (id === 'lo-system') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#fffbeb"/>
          <rect x="20" y="140" width="340" height="40" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
          <text x="190" y="165" textAnchor="middle" fontSize="10" fill="#b45309" fontFamily="monospace">MAIN ENGINE SUMP - 25,000 L</text>
          <rect x="40" y="40" width="60" height="80" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
          <text x="70" y="32" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="monospace">MAIN LO PUMP</text>
          <rect x="120" y="40" width="100" height="80" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
          <text x="170" y="32" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="monospace">LO COOLER</text>
          {[0,1,2].map(i => <line key={i} x1="130" y1={60 + i * 20} x2="210" y2={60 + i * 20} stroke="#3b82f6" strokeWidth="2" opacity="0.4"/>)}
          <rect x="240" y="40" width="100" height="80" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
          <text x="290" y="32" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="monospace">AUTO-FILTER</text>
          <circle cx="290" cy="80" r="20" fill="none" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,2"/>
          <path d="M 70 140 L 70 120" stroke="#d97706" strokeWidth="2" markerEnd={`url(#alo1-${uniqueId})`}/>
          <path d="M 100 80 L 120 80" stroke="#d97706" strokeWidth="2" markerEnd={`url(#alo1-${uniqueId})`}/>
          <path d="M 220 80 L 240 80" stroke="#d97706" strokeWidth="2" markerEnd={`url(#alo1-${uniqueId})`}/>
          <path d="M 340 80 L 370 80 L 370 140" stroke="#d97706" strokeWidth="2" markerEnd={`url(#alo1-${uniqueId})`}/>
          <defs><marker id={`alo1-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#d97706"/></marker></defs>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">LUBE OIL SYSTEM — SAE 30 FORCED CIRCULATION</text>
        </svg>
      );
    }

    if (id === 'cooling-system') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#eff6ff"/>
          <rect x="100" y="40" width="180" height="120" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
          <text x="190" y="32" textAnchor="middle" fontSize="10" fill="#1e40af" fontFamily="monospace">CENTRAL COOLER (PLATE TYPE)</text>
          {[0,1,2,3,4,5,6,7,8].map(i => <line key={i} x1={110 + i * 20} y1="45" x2={110 + i * 20} y2="155" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>)}
          <path d="M 20 60 L 100 60" stroke="#ef4444" strokeWidth="3" markerEnd={`url(#ac1-${uniqueId})`}/>
          <text x="40" y="55" fontSize="8" fill="#dc2626" fontFamily="monospace">HT JCW IN (82°C)</text>
          <path d="M 100 140 L 20 140" stroke="#3b82f6" strokeWidth="3" markerEnd={`url(#ac2-${uniqueId})`}/>
          <text x="40" y="135" fontSize="8" fill="#2563eb" fontFamily="monospace">LT FW OUT (35°C)</text>
          <path d="M 360 60 L 280 60" stroke="#0891b2" strokeWidth="3" markerEnd={`url(#ac3-${uniqueId})`}/>
          <text x="300" y="55" fontSize="8" fill="#0891b2" fontFamily="monospace">SW IN (28°C)</text>
          <path d="M 280 140 L 360 140" stroke="#0891b2" strokeWidth="3" markerEnd={`url(#ac3-${uniqueId})`}/>
          <text x="300" y="135" fontSize="8" fill="#0891b2" fontFamily="monospace">SW OUT (32°C)</text>
          <defs>
            <marker id={`ac1-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
            <marker id={`ac2-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3b82f6"/></marker>
            <marker id={`ac3-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0891b2"/></marker>
          </defs>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">CENTRAL COOLING SYSTEM — HT/LT FRESHWATER CIRCUITS</text>
        </svg>
      );
    }

    if (id === 'ballast-pump') {
      const rot = a * 57.3 * 0.8;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f9ff"/>
          <circle cx="150" cy="100" r="70" fill="#e0f2fe" stroke="#2563eb" strokeWidth="3"/>
          <circle cx="150" cy="100" r="55" fill="#f0faff" stroke="#60a5fa"/>
          {[0,45,90,135,180,225,270,315].map(d => {
            const r = (d + rot) * Math.PI / 180;
            return <path key={d} d={`M ${150 + 15 * Math.cos(r)} ${100 + 15 * Math.sin(r)} L ${150 + 50 * Math.cos(r + 0.4)} ${100 + 50 * Math.sin(r + 0.4)}`} stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" fill="none"/>;
          })}
          <rect x="260" y="50" width="100" height="100" rx="8" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2"/>
          <text x="310" y="42" textAnchor="middle" fontSize="8" fill="#1e40af" fontFamily="monospace">MOTOR (400 kW)</text>
          <circle cx="310" cy="100" r="30" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1.5"/>
          <text x="310" y="105" textAnchor="middle" fontSize="10" fill="#1e40af" fontFamily="monospace">~</text>
          <line x1="220" y1="100" x2="260" y2="100" stroke="#64748b" strokeWidth="6" strokeLinecap="round"/>
          <text x="150" y="185" textAnchor="middle" fontSize="10" fill="#1e40af" fontFamily="monospace">800 m³/h</text>
          <text x="190" y="196" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">CENTRIFUGAL BALLAST PUMP — HIGH-FLOW / LOW-HEAD</text>
        </svg>
      );
    }

    if (id === 'sea-chest') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f9ff"/>
          <path d="M 20 20 L 20 180 L 100 180 L 100 20 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2"/>
          <text x="60" y="15" textAnchor="middle" fontSize="8" fill="#0369a1" fontFamily="monospace">SEA CHEST</text>
          {[0,1,2,3,4,5,6,7,8,9].map(i => <line key={i} x1="15" y1={30 + i * 15} x2="25" y2={30 + i * 15} stroke="#0284c7" strokeWidth="2"/>)}
          <rect x="140" y="60" width="80" height="80" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2"/>
          <text x="180" y="52" textAnchor="middle" fontSize="8" fill="#0369a1" fontFamily="monospace">STRAINER</text>
          <circle cx="180" cy="100" r="30" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="2,2"/>
          <rect x="260" y="70" width="40" height="60" rx="2" fill="#0f172a" stroke="#38bdf8"/>
          <text x="280" y="62" textAnchor="middle" fontSize="8" fill="#38bdf8" fontFamily="monospace">KINGSTON VALVE</text>
          <path d="M 100 100 L 140 100" stroke="#0284c7" strokeWidth="3" markerEnd={`url(#asc1-${uniqueId})`}/>
          <path d="M 220 100 L 260 100" stroke="#0284c7" strokeWidth="3" markerEnd={`url(#asc1-${uniqueId})`}/>
          <path d="M 300 100 L 370 100" stroke="#0284c7" strokeWidth="3" markerEnd={`url(#asc1-${uniqueId})`}/>
          <defs><marker id={`asc1-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0284c7"/></marker></defs>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">SEA CHEST & KINGSTON VALVES — HULL SEAWATER INLET</text>
        </svg>
      );
    }

    if (id === 'bilge-system') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f8fafc"/>
          <path d="M 40 160 L 140 160 L 120 180 L 60 180 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="2"/>
          <text x="90" y="152" textAnchor="middle" fontSize="8" fill="#475569" fontFamily="monospace">BILGE WELL</text>
          <rect x="75" y="165" width="30" height="10" fill="#94a3b8" opacity="0.5"/>
          <text x="90" y="173" textAnchor="middle" fontSize="5" fill="#1e293b" fontFamily="monospace">STRUM BOX</text>
          <rect x="180" y="60" width="60" height="60" rx="30" fill="#f1f5f9" stroke="#475569" strokeWidth="2"/>
          <text x="210" y="52" textAnchor="middle" fontSize="8" fill="#475569" fontFamily="monospace">BILGE PUMP</text>
          <path d="M 90 160 L 90 90 L 180 90" stroke="#475569" strokeWidth="2" fill="none" markerEnd={`url(#ab1-${uniqueId})`}/>
          <path d="M 240 90 L 300 90" stroke="#475569" strokeWidth="2" markerEnd={`url(#ab1-${uniqueId})`}/>
          <rect x="300" y="70" width="60" height="40" rx="4" fill="#f1f5f9" stroke="#059669" strokeWidth="1.5"/>
          <text x="330" y="62" textAnchor="middle" fontSize="7" fill="#059669" fontFamily="monospace">TO OWS</text>
          <defs><marker id={`ab1-${uniqueId}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">BILGE SYSTEM — BILGE WELLS & MAIN RING PIPE</text>
        </svg>
      );
    }

    if (id === 'firemain') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#fef2f2"/>
          <rect x="40" y="60" width="80" height="80" rx="40" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5"/>
          <text x="80" y="52" textAnchor="middle" fontSize="8" fill="#991b1b" fontFamily="monospace">FIRE PUMP 1</text>
          <rect x="140" y="60" width="80" height="80" rx="40" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5"/>
          <text x="180" y="52" textAnchor="middle" fontSize="8" fill="#991b1b" fontFamily="monospace">FIRE PUMP 2</text>
          <path d="M 80 140 L 80 160 L 340 160" stroke="#dc2626" strokeWidth="3" fill="none"/>
          <path d="M 180 140 L 180 160" stroke="#dc2626" strokeWidth="3"/>
          <rect x="340" y="145" width="20" height="30" fill="#dc2626" rx="2"/>
          <text x="350" y="140" textAnchor="middle" fontSize="8" fill="#dc2626" fontFamily="monospace">HYDRANT</text>
          <path d="M 360 160 L 380 160" stroke="#dc2626" strokeWidth="3" strokeDasharray="4,2"/>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">FIRE MAIN SYSTEM — SOLAS COMPLIANT SEAWATER MAIN</text>
        </svg>
      );
    }

    if (id === 'co2-system') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f8fafc"/>
          {[0,1,2,3,4,5,6,7,8,9].map(i => (
            <g key={i}>
              <rect x={30 + i * 32} y="40" width="24" height="100" rx="12" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5"/>
              <rect x={38 + i * 32} y="34" width="8" height="6" fill="#475569"/>
            </g>
          ))}
          <line x1="30" y1="30" x2="350" y2="30" stroke="#475569" strokeWidth="3"/>
          <text x="190" y="22" textAnchor="middle" fontSize="8" fill="#475569" fontFamily="monospace">CO2 CYLINDER BANK - TOTAL FLOODING</text>
          <rect x="150" y="150" width="80" height="30" rx="4" fill="#ef4444" stroke="#991b1b"/>
          <text x="190" y="168" textAnchor="middle" fontSize="8" fill="white" fontFamily="monospace" fontWeight="bold">RELEASE CABINET</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">FIXED CO2 FIRE SYSTEM — ENGINE ROOM PROTECTION</text>
        </svg>
      );
    }

    if (id === 'ias') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#0f172a"/>
          <rect x="40" y="30" width="140" height="100" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2"/>
          <rect x="50" y="40" width="120" height="80" fill="#020617" stroke="#1e293b"/>
          <path d="M 60 100 L 80 70 L 100 90 L 120 60 L 140 80 L 160 50" stroke="#3b82f6" strokeWidth="1.5" fill="none"/>
          <rect x="200" y="30" width="140" height="100" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2"/>
          <rect x="210" y="40" width="120" height="80" fill="#020617" stroke="#1e293b"/>
          <circle cx="270" cy="80" r="30" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="10,5"/>
          <rect x="40" y="140" width="300" height="40" rx="4" fill="#1e293b" stroke="#334155"/>
          {[0,1,2,3,4,5,6,7].map(i => <rect key={i} x={55 + i * 35} y="150" width="25" height="20" rx="2" fill="#334155"/>)}
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="monospace" letterSpacing="1">INTEGRATED AUTOMATION SYSTEM — ECR OPERATOR STATION</text>
        </svg>
      );
    }

    if (id === 'domestic') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f9ff"/>
          <rect x="40" y="40" width="80" height="120" rx="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
          <text x="80" y="32" textAnchor="middle" fontSize="8" fill="#1e40af" fontFamily="monospace">HYDROPHORE</text>
          <line x1="40" y1="100" x2="120" y2="100" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,2"/>
          <text x="80" y="90" textAnchor="middle" fontSize="6" fill="#1e40af" fontFamily="monospace">AIR CUSHION</text>
          <rect x="160" y="40" width="80" height="120" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
          <text x="200" y="32" textAnchor="middle" fontSize="8" fill="#1e40af" fontFamily="monospace">CALORIFIER</text>
          <path d="M 170 150 Q 200 140 230 150" stroke="#ef4444" strokeWidth="2" fill="none"/>
          <text x="200" y="140" textAnchor="middle" fontSize="6" fill="#dc2626" fontFamily="monospace">HEATER</text>
          <rect x="280" y="60" width="60" height="80" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
          <text x="310" y="52" textAnchor="middle" fontSize="8" fill="#1e40af" fontFamily="monospace">UV STERILIZER</text>
          <circle cx="310" cy="100" r="15" fill="#818cf8" opacity="0.3"/>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">DOMESTIC WATER SYSTEM — HYDROPHORE & CALORIFIER</text>
        </svg>
      );
    }

    if (id === 'provision-ref') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f9ff"/>
          <rect x="20" y="40" width="60" height="60" rx="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
          <text x="50" y="32" textAnchor="middle" fontSize="8" fill="#1e40af" fontFamily="monospace">COMPRESSOR</text>
          <rect x="100" y="40" width="80" height="60" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
          <text x="140" y="32" textAnchor="middle" fontSize="8" fill="#1e40af" fontFamily="monospace">CONDENSER</text>
          <rect x="200" y="40" width="160" height="120" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2"/>
          <text x="280" y="32" textAnchor="middle" fontSize="8" fill="#475569" fontFamily="monospace">COLD ROOMS</text>
          <rect x="210" y="50" width="65" height="45" rx="2" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="242" y="75" textAnchor="middle" fontSize="10" fill="#1e40af" fontFamily="monospace">-18°C</text>
          <rect x="285" y="50" width="65" height="45" rx="2" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="317" y="75" textAnchor="middle" fontSize="10" fill="#1e40af" fontFamily="monospace">+4°C</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">PROVISION REFRIGERATION — VAPOUR COMPRESSION CYCLE</text>
        </svg>
      );
    }

    if (id === 'lifeboat') {
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f9ff"/>
          <path d="M 100 120 Q 190 180 280 120 L 280 80 L 100 80 Z" fill="#f97316" stroke="#c2410c" strokeWidth="2"/>
          <rect x="140" y="65" width="100" height="15" rx="7" fill="#f97316" stroke="#c2410c" strokeWidth="1.5"/>
          <text x="190" y="115" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">LIFEBOAT</text>
          <path d="M 80 40 L 100 80 M 300 40 L 280 80" stroke="#475569" strokeWidth="3"/>
          <rect x="60" y="20" width="40" height="20" rx="4" fill="#64748b"/>
          <rect x="280" y="20" width="40" height="20" rx="4" fill="#64748b"/>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">LIFEBOAT & DAVIT SYSTEM — SOLAS COMPLIANT LSA</text>
        </svg>
      );
    }

    if (id === 'shaft-prop') {
      const propRot = a * 57.3 * 1.5;
      return (
        <svg viewBox="0 0 380 200" width="100%" height="100%">
          <rect width="380" height="200" fill="#f0f9ff"/>
          <rect x="20" y="90" width="240" height="20" fill="#94a3b8" stroke="#475569" strokeWidth="1.5"/>
          <text x="140" y="85" textAnchor="middle" fontSize="8" fill="#475569" fontFamily="monospace">PROPELLER SHAFT</text>
          <rect x="260" y="70" width="40" height="60" rx="4" fill="#64748b" stroke="#334155"/>
          <text x="280" y="62" textAnchor="middle" fontSize="8" fill="#334155" fontFamily="monospace">STERN TUBE</text>
          <g transform={`translate(340, 100) rotate(${propRot})`}>
            {[0, 72, 144, 216, 288].map(d => (
              <path key={d} d="M 0 0 Q 30 -40 60 0 Q 30 40 0 0" fill="#ca8a04" stroke="#854d0e" transform={`rotate(${d})`}/>
            ))}
            <circle cx="0" cy="0" r="10" fill="#854d0e"/>
          </g>
          <rect x="60" y="85" width="30" height="30" rx="4" fill="#64748b" stroke="#334155"/>
          <text x="75" y="80" textAnchor="middle" fontSize="7" fill="#334155" fontFamily="monospace">THRUST BLOCK</text>
          <text x="190" y="192" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="monospace" letterSpacing="1">SHAFTING & PROPELLER — FIXED PITCH PROPULSION TRAIN</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 380 200" width="100%" height="100%">
        <rect width="380" height="200" fill="#f4f6f9"/>
        <circle cx="190" cy="90" r={50 + Math.sin(a) * 3} fill={color + '22'} stroke={color} strokeWidth="2"/>
        <text x="190" y="94" textAnchor="middle" fontSize="28" dominantBaseline="middle">{icon}</text>
        <text x="190" y="158" textAnchor="middle" fontSize="11" fill="#374151" fontFamily="Inter,sans-serif" fontWeight="600">{name}</text>
        <text x="190" y="173" textAnchor="middle" fontSize="8" fill="#8694a8" fontFamily="monospace">{short}</text>
      </svg>
    );
  };

  return (
    <div className={`w-full h-full flex items-center justify-center relative overflow-hidden group/diag border border-white/5 ${isSm ? 'p-0' : ''}`}>
      {renderDiagram()}
    </div>
  );
};

export default MachineryDiagram;
