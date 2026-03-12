export interface MachinerySystem {
  id: string;
  name: string;
  short: string;
  cat: string;
  rawCat: string;
  icon: string;
  color: string;
  status: 'running' | 'standby' | 'maintenance' | 'alarm';
  mapX: number;
  mapY: number;
  shortDesc: string;
  purpose: string;
  role: string;
  importance: string;
  technical: string;
  components: string[];
  watchkeeping: string[];
}

export const CAT_MAP: { [key: string]: string } = {
  'Propulsion': 'Propulsion',
  'Heat & Steam': 'Propulsion',
  'Power Generation': 'Electrical & Control',
  'Automation & Control': 'Electrical & Control',
  'Electrical & Control': 'Electrical & Control',
  'Fuel System': 'Fuel & Lubrication',
  'Fuel Treatment': 'Fuel & Lubrication',
  'Lubrication': 'Fuel & Lubrication',
  'Cooling System': 'Cooling & Utilities',
  'Compressed Air': 'Cooling & Utilities',
  'Utilities': 'Cooling & Utilities',
  'Environmental': 'Safety & Environment',
  'Safety & Environmental': 'Safety & Environment',
  'Fire & Safety': 'Safety & Environment',
  'Deck & Cargo': 'Safety & Environment',
  'Deck Machinery': 'Safety & Environment',
  'Hull & Piping': 'Safety & Environment',
  'Steering & Control': 'Safety & Environment',
  'Maintenance': 'Safety & Environment'
};

export const CATS = [
  'All',
  'Propulsion',
  'Electrical & Control',
  'Fuel & Lubrication',
  'Cooling & Utilities',
  'Safety & Environment'
];

export const machineryData: Omit<MachinerySystem, 'cat'>[] = [
  {
    id: 'main-engine', name: 'Main Engine', short: 'MAN B&W 6S80ME-C10.5', rawCat: 'Propulsion', icon: '🟢', color: '#ea7018', status: 'running', mapX: 5, mapY: 9.2,
    shortDesc: 'Primary propulsion — 2-stroke turbocharged slow-speed diesel directly coupled to the fixed-pitch propeller.',
    purpose: 'The main engine converts the chemical energy stored in heavy fuel oil (HFO) into mechanical rotary motion, transmitted via the shafting system to drive the propeller and move the vessel through water. It is the heart of the propulsion plant and the largest single consumer of energy aboard.',
    role: 'Runs continuously at sea, directly coupled to the propeller shaft without a gearbox. Controlled from the ECR or bridge manoeuvring console. Operates on HFO at sea and switches to low-sulphur MDO/MGO on entering Emission Control Areas (ECAs) as mandated by MARPOL Annex VI Regulation 14.',
    importance: 'Loss of main engine propulsion is a Category A emergency. It accounts for 75–80% of total fuel consumption; its thermal efficiency directly determines voyage economics, emissions compliance with IMO Tier II/III limits, and the vessel\'s commercial competitiveness.',
    technical: 'A uniflow-scavenged, two-stroke, crosshead, direct reversible diesel. Combustion drives the piston down; force passes through the piston rod to the crosshead, then via the connecting rod to the crankshaft. Charge air is compressed by the exhaust-driven turbocharger and cooled in the scavenge air cooler before entering the cylinder.',
    components: ['Cylinder liner, jacket & cooling water passages', 'Piston, piston rod, piston rings & crown', 'Crosshead bearing & guide shoes', 'Connecting rod & crankshaft', 'Cylinder head & hydraulic exhaust valve', 'Fuel injection pump & injector (HPS or ME-GI)', 'Turbocharger (MET or TCA series)', 'Scavenge air cooler (charge air cooler)', 'Bedplate & main bearings', 'ME Control System — MCC, ECU, ACU per cylinder', 'Oil mist detector (OMD) & crankcase ventilation'],
    watchkeeping: ['Exhaust gas temperature per cylinder — max 420–450 °C; investigate deviation from mean', 'Scavenge air pressure — 2.6–3.2 bar depending on load', 'Jacket cooling water outlet temperature — 78–88 °C', 'Lube oil inlet pressure — minimum 2.8 bar; temperature 43–48 °C', 'Turbocharger RPM and exhaust gas inlet temperature', 'Crankcase OMD reading — investigate any rise immediately; stop engine if alarm', 'Thrust bearing temperature — maximum 65 °C', 'Scavenge space inspection — no oil accumulation, no water']
  },
  {
    id: 'turbocharger', name: 'Turbocharger', short: 'ABB TPL / MET Series — Exhaust Gas Turbocharger', rawCat: 'Propulsion', icon: '🌀', color: '#e879f9', status: 'running', mapX: 13, mapY: 9.2,
    shortDesc: 'Exhaust gas-driven turbocharger compressing scavenge air to increase main engine power and efficiency.',
    purpose: 'Recovers energy from the main engine exhaust gases and uses it to compress the incoming scavenge air, increasing air density and thus the oxygen mass entering the cylinders per stroke — enabling higher fuel injection quantity and greater power output.',
    role: 'Operates automatically whenever the main engine is running — the exhaust gas turbine side is driven by ME exhaust gases; the compressor side compresses atmospheric air. On modern large-bore slow-speed engines, one or two turbochargers serve all cylinders.',
    importance: 'The turbocharger is responsible for the thermal efficiency advantage of the modern marine diesel engine. Without turbocharging, a 2-stroke engine could not achieve specific fuel consumption below 200 g/kWh; modern turbocharged engines achieve 155–165 g/kWh. A failed turbocharger reduces engine power to approximately 30–40% of normal output.',
    technical: 'The turbine wheel (nickel superalloy) and compressor wheel (aluminium alloy) are mounted on a common shaft supported by sleeve bearings lubricated by the main engine lube oil system. Hot exhaust gas (400–500 °C) expands through the turbine nozzle ring at 8,000–15,000 RPM, compressing air to a pressure ratio of 3.5–5.0:1.',
    components: ['Turbine wheel (nickel superalloy — high temperature)', 'Compressor wheel (aluminium alloy)', 'Rotor shaft', 'Sleeve bearings (lube oil from ME system)', 'Turbine nozzle ring (fixed guide vanes)', 'Compressor casing and air inlet filter/silencer', 'Water washing connection (turbine side)'],
    watchkeeping: ['Turbocharger RPM — compare to expected value at current engine load; drop indicates fouling', 'Lube oil pressure to turbocharger — minimum per maker spec; loss of LO = emergency stop TC', 'Vibration level — increased vibration indicates bearing wear or rotor imbalance', 'Air filter differential pressure — clean or replace when fouled', 'Turbine washing schedule — follow maker interval; log each wash', 'Annual inspection — open casing inspection; measure bearing clearances']
  },
  {
    id: 'air-cooler', name: 'Scavenge Air Cooler', short: 'Main Engine Charge Air Cooler', rawCat: 'Propulsion', icon: '❄️', color: '#0ea5e9', status: 'running', mapX: 21, mapY: 9.2,
    shortDesc: 'Cools turbocharger compressed charge air from ~200 °C to 35–50 °C to increase air density and engine power.',
    purpose: 'Cools the compressed charge air delivered by the turbocharger from approximately 180–220 °C down to 35–50 °C before it enters the cylinders, dramatically increasing air density and thus the oxygen mass available per cylinder stroke.',
    role: 'Integral part of the main engine, mounted between the turbocharger compressor outlet and the scavenge air receiver. Cooling water is supplied from the LT fresh water circuit. Condensate drains must be regularly checked — water carry-over into cylinders causes hydraulic lock.',
    importance: 'Without effective charge air cooling, hot low-density air reduces power output, increases thermal loading on pistons and liners, and raises NOx formation. Even a 5 °C rise in charge air temperature produces a measurable power loss.',
    technical: 'A shell-and-tube heat exchanger. The air side (shell) receives scavenge air from the turbocharger; the tube side carries LT cooling water. High-efficiency fins on the tubes increase heat transfer area.',
    components: ['Tube bundle (cupro-nickel or titanium tubes)', 'Finned tubes (extended surface for heat transfer)', 'Shell casing (integral with engine structure)', 'LT cooling water inlet and outlet connections', 'Condensate drain tray and drain valve (MUST be open at start)', 'Air inlet from turbocharger and outlet to scavenge receiver', 'Sacrificial zinc anodes (water-side corrosion protection)'],
    watchkeeping: ['Air outlet temperature after cooler — target 35–50 °C depending on sea temperature', 'Differential pressure across air side — increasing DP indicates air-side fouling', 'Condensate drain — check for water accumulation; investigate if excessive', 'Zinc anode condition — replace when 50% wasted', 'Oil in condensate drain — indicates piston ring blow-by or turbocharger seal problem', 'No air-side water leak after maintenance — verify by hydraulic test before starting']
  },
  {
    id: 'compressor', name: 'Starting Air Compressor', short: '2-Stage Reciprocating — 30 bar', rawCat: 'Propulsion', icon: '💨', color: '#7c3aed', status: 'standby', mapX: 29, mapY: 9.2,
    shortDesc: 'Two-stage water-cooled reciprocating compressor charging starting air receivers to 30 bar.',
    purpose: 'Compresses atmospheric air to 30 bar and stores it in starting air receivers for starting the main engine (by admitting high-pressure air to cylinders in firing order) and auxiliary engines, and for supplying pneumatic control valves throughout the vessel.',
    role: 'Operates automatically on pressure demand — starts when receiver pressure falls to ~24 bar, stops at ~30 bar. Two compressors are installed for full redundancy. Starting air is especially critical during manoeuvring.',
    importance: 'SOLAS Chapter II-1 requires sufficient compressed air for a minimum of 12 consecutive main engine starts in alternating directions. If starting air is lost, the main engine cannot be started — immobilising the vessel near restricted waters.',
    technical: 'A two-stage, water-cooled reciprocating compressor. Stage 1 (LP cylinder) compresses air to ~4–5 bar; an intercooler removes heat of compression; Stage 2 (HP cylinder) compresses to 30 bar. An aftercooler and moisture separator remove condensate before air enters the receivers.',
    components: ['LP cylinder — stage 1 (larger bore)', 'HP cylinder — stage 2 (smaller bore)', 'Intercooler with moisture separator', 'Aftercooler with moisture separator', 'Auto-drain valves on separators', 'Safety valves — LP set ~6 bar; HP set ~32 bar', 'Starting air receivers ×2 (2–6 m³ each at 30 bar)', 'Pressure switches for load/unload/auto-start'],
    watchkeeping: ['Receiver pressure — maintain 25–30 bar; never allow below 25 bar before manoeuvring', 'Inter-stage pressure — 4–5 bar; significant change indicates intercooler or valve fault', 'Discharge temperature — max 180 °C after aftercooler', 'Auto-drain valve — verify condensate discharge', 'Safety valve condition — check for weeping or lift marks', 'Motor current — no sustained overload above FLA']
  },
  {
    id: 'shaft-prop', name: 'Shaft & Propeller', short: 'Fixed Pitch Propeller — Tail Shaft & Stern Tube', rawCat: 'Propulsion', icon: '⚙️', color: '#0ea5e9', status: 'running', mapX: 37, mapY: 9.2,
    shortDesc: 'Propeller shaft line transmitting main engine torque to the fixed-pitch propeller for vessel propulsion.',
    purpose: 'Transmits the rotary torque generated by the main engine crankshaft through the intermediate shaft, shaft bearings, and stern tube to the fixed-pitch propeller, converting mechanical energy into hydrodynamic thrust to move the vessel.',
    role: 'The shafting system runs continuously at sea. The intermediate shaft passes through oil-lubricated plummer block bearings. The stern tube seals the hull penetration from sea ingress while supporting the propeller shaft and allowing rotation.',
    importance: 'Any defect in the shafting — cracked shaft, worn stern tube bearing, failed seal — can result in complete loss of propulsion or flooding. Propeller blade damage causes severe vibration which can structurally damage the hull, shafting, and main engine within minutes.',
    technical: 'The shaft line consists of the thrust shaft (transmitting axial thrust to the hull via the thrust block), intermediate shafts joined by rigid couplings, and the tail shaft passing through the stern tube. The stern tube is oil-lubricated with forward and aft lip seals. The propeller is a solid cast NiAlBronze fixed-pitch design, keyed and locked to the taper of the tail shaft.',
    components: ['Thrust shaft & Michell-type thrust block', 'Intermediate shafts (solid forged alloy steel)', 'Rigid flanged shaft couplings', 'Plummer block bearings (oil-lubricated)', 'Stern tube with forward and aft lip seals', 'Tail shaft (Aquamet stainless steel)', 'Fixed-pitch propeller (NiAlBronze — 4 or 5 blade)', 'Propeller key, locking nut and rope guard'],
    watchkeeping: ['Stern tube lube oil level — check header tank daily; any drop indicates seal leakage', 'Stern tube bearing temperature — monitor via IAS; max 70°C', 'Thrust block temperature — max 65°C', 'Intermediate shaft bearing temperatures — check each watch', 'Stern tube oil analysis — annual sample for water content', 'Propeller shaft vibration — investigate any sudden increase', 'Rope guard condition — inspect in port; ensure no fishing gear entangled']
  },
  {
    id: 'bow-thruster', name: 'Bow Thruster', short: 'Transverse Bow Thruster — 1,500 kW Tunnel Thruster', rawCat: 'Propulsion', icon: '🌀', color: '#0ea5e9', status: 'standby', mapX: 45, mapY: 9.2,
    shortDesc: 'Electric tunnel thruster in the bow providing transverse thrust for port manoeuvring without tug assistance.',
    purpose: 'Generates transverse (sideways) thrust at the bow to assist the vessel in manoeuvring alongside, departing from berths, and maintaining position without relying entirely on tugs or main engine manoeuvring.',
    role: 'Used during port manoeuvring — arrival and departure. Operated from the bridge maneuvering console or dedicated bow thruster control. Power demand is high (1,000–3,000 kW); APMS pre-starts a generator before operation.',
    importance: 'Without a functioning bow thruster in a cross-wind or cross-current berth, additional tugs are required at significant cost. Failure during an ongoing manoeuvre requires immediate backup tug request. Tunnel flooding (failure of thruster seals) is a major flooding risk.',
    technical: 'A transverse tunnel through the ship\'s hull at the bow houses a fixed or variable-pitch propeller driven by an electric motor. The motor is controlled by a VFD (variable frequency drive) for speed and direction control. A mesh grating protects the tunnel from large debris.',
    components: ['Transverse tunnel (GRP or steel lined)', 'Fixed or CPP propeller', 'Electric drive motor', 'Variable frequency drive (VFD)', 'Tunnel grating (debris protection)', 'Thruster seal (tunnel-to-sea boundary)', 'APMS interlock (pre-permissive for generator start)'],
    watchkeeping: ['Motor insulation resistance — test at annual maintenance', 'Tunnel seal condition — check at drydock', 'Gear oil level (if gearbox fitted) — monthly check', 'VFD cooling — fan running, temperature within limits', 'Pre-use power check — confirm adequate generator capacity before use']
  },
  {
    id: 'me-governor', name: 'ME Speed Governor', short: 'Woodward / Electronic Engine Governor', rawCat: 'Propulsion', icon: '🎛️', color: '#ea7018', status: 'running', mapX: 53, mapY: 9.2,
    shortDesc: 'Electronic/mechanical governor controlling main engine fuel injection to maintain desired shaft RPM.',
    purpose: 'Automatically adjusts fuel delivery to the main engine in response to load changes, maintaining a set shaft speed (RPM). Prevents under-speed stall and over-speed runaway.',
    role: 'Active at all times during engine operation. Receives RPM feedback from the crankshaft encoder and adjusts the fuel index (rack position) accordingly. On modern electronically-controlled engines (ME/ME-C), the MCC performs this function digitally.',
    importance: 'Loss of governor control can result in a dangerous over-speed condition, leading to catastrophic mechanical failure of the engine within seconds. The over-speed trip is the last line of defence.',
    technical: 'On hydraulic governors (mechanical engines), a flyweight assembly senses speed; centrifugal force moves a speeder spring which adjusts a servo piston connected to the fuel rack. On ME-C engines, the Engine Control Unit (ECU) calculates the required fuel index electronically every millisecond.',
    components: ['Flyweight assembly (mechanical) or speed encoder (electronic)', 'Speeder spring & control sleeve', 'Hydraulic servo piston & actuator', 'Fuel injection control linkage (fuel index)', 'Over-speed trip mechanism (separate hardware)', 'Engine Control Unit (ECU) — ME engines', 'Remote load control interface from bridge'],
    watchkeeping: ['Shaft RPM — steady at set point; any hunting indicates governor instability', 'Fuel index — correlates with load; log at each watch', 'Over-speed trip set point — test at scheduled intervals', 'Governor oil level (hydraulic type) — check weekly', 'Any RPM oscillation (hunting) — adjust governor stability settings']
  },
  {
    id: 'exhaust-valve', name: 'Exhaust Valve', short: 'Hydraulically-Actuated Cylinder Exhaust Valve', rawCat: 'Propulsion', icon: '🔩', color: '#c2520a', status: 'running', mapX: 61, mapY: 9.2,
    shortDesc: 'Hydraulically operated exhaust valve at top of each cylinder controlling gas exchange in the 2-stroke cycle.',
    purpose: 'Opens at the correct point in the engine cycle to release exhaust gases from the cylinder, and closes before the next compression stroke, enabling the unique uniflow scavenging of a 2-stroke diesel engine.',
    role: 'Actuated hydraulically by the HCU (Hydraulic Cylinder Unit) on electronically-controlled engines, or by a mechanical pushrod driven from the camshaft on conventional engines. A pneumatic spring holds the valve closed.',
    importance: 'A stuck-open exhaust valve causes catastrophic loss of compression and severe cylinder scavenging disruption. A burnt exhaust valve seat leads to hot gas blow-by, erosion, and eventual piston crown damage requiring costly in-situ repair.',
    technical: 'The valve spindle is hard-faced (Nimonic alloy seat) and rotated slowly by small vanes on the spindle to ensure even wear. Cooling water circulates through the valve cage to remove heat. An Alfa-Laval Alpha Lubricator injects cylinder oil at precise points around the liner.',
    components: ['Valve spindle (Nimonic alloy — heat resistant)', 'Valve cage with cooling water passages', 'Hydraulic actuator (pushes valve open)', 'Air spring (pneumatic — holds valve closed)', 'Valve rotator vanes', 'HCU (Hydraulic Cylinder Unit) — ME engines', 'Mechanical pushrod & roller follower — conventional engines'],
    watchkeeping: ['Exhaust temperature per cylinder — high = late closing; low = early opening or misfiring', 'Valve bounce / timing alarms on IAS', 'Cylinder oil injection rate — correct lubrication extends spindle life', 'Visual inspection of spindle face at scheduled overhaul — check for erosion, burning', 'Valve spring pressure — test per maintenance schedule']
  },
  {
    id: 'fuel-injector', name: 'Fuel Injector', short: 'High-Pressure Fuel Injection Valve — HFO', rawCat: 'Propulsion', icon: '💉', color: '#b45309', status: 'running', mapX: 69, mapY: 9.2,
    shortDesc: 'High-pressure spring-loaded injection valve atomising HFO directly into the engine cylinder at opening pressures of 350–600 bar.',
    purpose: 'Atomises fuel oil to a fine mist at extremely high pressure and injects it into the compressed charge air in the cylinder at precisely the correct crank angle for optimum combustion.',
    role: 'Three injectors per cylinder (on large 2-stroke engines) ensure even fuel distribution. Each injector opens when fuel pressure from the injection pump exceeds the nozzle opening pressure (NOP). Cooling water circulates through the injector body on large bore engines.',
    importance: 'Worn or blocked nozzle holes produce poor atomisation — wet fuel droplets cause carbon deposit build-up, liner fouling, piston crown cracking, and cylinder lube oil contamination. A stuck-open injector causes continuous fuel dribble and severe cylinder damage.',
    technical: 'Fuel oil at high pressure acts on the annular area of the needle valve; when the hydraulic force exceeds the spring force, the needle lifts and fuel jets through the nozzle holes at high velocity, atomising into the combustion space. Closing is instantaneous on pressure release.',
    components: ['Nozzle holder body with cooling passages', 'Needle valve (hardened tool steel)', 'Pressure spring & spring cap', 'High-pressure fuel inlet connection', 'Nozzle tip (holes 0.3–0.5 mm diameter)', 'Leak-off fuel drain connection'],
    watchkeeping: ['Exhaust temperature — individual cylinder deviation indicates injector fault', 'Nozzle opening pressure — test on bench tester at scheduled interval', 'Nozzle spray pattern — test on bench; reject if incorrect pattern', 'Carbon deposits on nozzle tip — inspect and clean at overhaul', 'Leak-off fuel quantity — excessive volume indicates needle seat wear']
  },
  {
    id: 'crankcase-relief', name: 'Crankcase Relief Doors', short: 'Spring-Loaded Explosion Relief Valves', rawCat: 'Propulsion', icon: '⚠️', color: '#dc2626', status: 'running', mapX: 77, mapY: 9.2,
    shortDesc: 'Spring-loaded relief doors on the main engine crankcase protecting against crankcase explosion overpressure.',
    purpose: 'Provide instantaneous pressure relief in the event of a crankcase explosion, preventing the crankcase from fragmenting and protecting personnel in the vicinity of the engine.',
    role: 'Passive safety devices — always in place, no active operation. Fitted on both sides of the crankcase at each bearing bay. Fitted with an oil mist deflector that directs any flame away from personnel.',
    importance: 'A crankcase explosion is one of the most severe and lethal engine room casualties. It occurs when a primary explosion creates a vacuum, drawing fresh air in, followed by a catastrophic secondary explosion. Relief doors limit the secondary explosion damage to the crankcase structure.',
    technical: 'A circular spring-loaded disc valve. When the crankcase pressure pulse from an explosion exceeds the spring force, the disc lifts, venting gases and then immediately reseating. The flame arresting mesh and deflector shield prevent external ignition.',
    components: ['Spring-loaded relief disc', 'Seating ring and sealing face', 'Flame arresting gauze/mesh', 'Oil mist deflector plate', 'Spring retention assembly', 'Inspection lamp and access cover (separate)'],
    watchkeeping: ['Visual inspection of seating face — clean and undamaged at each overhaul', 'Spring condition — correct pre-load per manual', 'Confirm door not seized open after crankcase inspection', 'Oil mist detector alarm test — at every scheduled interval', 'Ensure deflectors correctly fitted and directing away from walkways']
  },
  {
    id: 'fuel-system', name: 'Fuel Oil System', short: 'HFO/MDO Conditioning & Injection', rawCat: 'Fuel System', icon: '🛢', color: '#c2520a', status: 'running', mapX: 85, mapY: 9.2,
    shortDesc: 'Conditions HFO from service tank to precise injection viscosity of 13–17 cSt for main engine cylinders.',
    purpose: 'Conditions heavy fuel oil from the service tank to the precise temperature, pressure, and viscosity required for injection — delivering fuel at the correct viscosity of 13–17 cSt and injection pressures of 600–1,000 bar at the individual cylinder fuel injectors.',
    role: 'Operates continuously whenever the main engine is running. Comprises the LP booster circuit (draws fuel, heats it, conditions viscosity) and the HP injection circuit on each cylinder driven by camshaft-operated or common-rail fuel injection pumps.',
    importance: 'Too high a viscosity results in poor atomisation, incomplete combustion, carbon deposits, and injection pump wear. Too low a viscosity causes pump leakage and fire risk. The fuel system is also where MARPOL ECA changeover procedures are executed.',
    technical: 'LP circuit: fuel is drawn by booster pumps through duplex auto-backflushing filters (50 micron) and a steam-heated fuel oil heater. A viscosity controller measures kinematic viscosity and adjusts heater steam to maintain constant injection viscosity.',
    components: ['Fuel oil service tanks — HFO and MDO/MGO', 'Fuel oil booster pumps ×2 (LP circuit, duty/standby)', 'Duplex auto-backflushing fuel oil filters (50 micron)', 'Fuel oil heater (steam-heated shell and tube)', 'Viscosity controller (capillary or rotational type)', 'Fuel oil pressure regulating valve', 'Individual HP fuel injection pumps per cylinder', 'Fuel injector with needle valve and multi-hole atomiser tip'],
    watchkeeping: ['Fuel oil viscosity at engine inlet — 13–17 cSt; critical for injection quality', 'Fuel oil temperature — 130–145 °C for HFO', 'Filter differential pressure — clean/switch before alarm; note trend', 'ECA entry changeover procedure — follow vessel SMS with temperature log', 'Service tank contents — monitor consumption; log daily per fuel type', 'Injector performance — monitor exhaust gas temperatures per cylinder']
  },
  {
    id: 'purifier', name: 'Fuel Oil Purifier', short: 'Alfa Laval FOPX 617 — ALCAP', rawCat: 'Fuel Treatment', icon: '🔄', color: '#5f9e1a', status: 'running', mapX: 93, mapY: 9.2,
    shortDesc: 'Self-cleaning centrifugal disc-stack separator removing water, sludge and catfines from HFO.',
    purpose: 'Removes water, sludge, catalytic fines (aluminium and silicon particles from refinery cracking), and solid contaminants from heavy fuel oil before it enters the service tanks — protecting injection equipment and the main engine.',
    role: 'Runs continuously 24/7 at sea. Two purifiers are typically fitted — one for HFO, one for diesel oil. The ALCAP system automatically monitors the water-oil interface and adjusts desludge timing for maximum separation.',
    importance: 'Catalytic fines (Mohs hardness 7) cause rapid wear of cylinder liners, piston rings, and fuel injection components. Water in fuel causes injection pump seizure and corrosion. Effective purification is the most critical factor protecting the main engine fuel system.',
    technical: 'Fuel enters the spinning bowl through a central distributor. The disc stack — hundreds of thin conical stainless steel discs — creates thousands of thin separation channels. Centrifugal force (6,000–8,000 G) separates water and sludge outward; clean fuel migrates inward to the paring disc outlet.',
    components: ['Rotating bowl assembly with self-cleaning mechanism', 'Conical disc stack (stainless steel)', 'Central distributor', 'Paring disc (clean oil outlet)', 'Gravity disc (controls water/oil interface)', 'Operating water system (hydraulic bowl open/close)', 'Drive motor, worm gear & bowl spindle', 'Feed heater (thermostatically controlled — 98 °C for HFO)', 'ALCAP water transducer & control unit'],
    watchkeeping: ['Bowl speed — nominal RPM; any drop = investigate immediately', 'Feed temperature — 98 °C for HFO', 'Vibration level — Class A normal; Class C = stop immediately', 'Sludge volume per desludge — log for trend monitoring', 'Motor current — no sustained overload', 'Clean oil outlet sight glass — should be clear', 'ALCAP water transducer alarm status']
  },
  {
    id: 'hfo-transfer', name: 'HFO Transfer System', short: 'Fuel Oil Transfer Pump & Settling Tank System', rawCat: 'Fuel System', icon: '🛢️', color: '#92400e', status: 'running', mapX: 4, mapY: 20.6,
    shortDesc: 'Screw pump and valve system transferring HFO from storage tanks to settling tanks for treatment and conditioning.',
    purpose: 'Transfers heavy fuel oil from storage (double-bottom) tanks to the settling tanks where it is heated, allowing water and sludge to settle and separate before the fuel enters the purifier.',
    role: 'Operated as required — typically twice per watch on a large vessel consuming 80–120 t/day. The settling tank provides a 24-hour buffer of heated, settling fuel. Transfer is monitored to maintain correct settling tank level.',
    importance: 'Losing fuel supply to the settling tank stops the purifier and eventually starves the service tank — leading to main engine fuel starvation. Correct fuel management prevents tank overflow and cross-contamination of fuel grades.',
    technical: 'A gear or screw type transfer pump handles the high-viscosity HFO. The suction pipeline is steam or electrically trace-heated. Tank high-level and low-level alarms interface with the IAS. Overflow prevention valves stop transfer when the settling tank is full.',
    components: ['Fuel transfer pump (screw or gear type)', 'Steam / electric trace heating on suction lines', 'Settling tank (typically 24-hour capacity)', 'Tank level gauges (pneumatic float or radar)', 'High/low level alarms interfaced to IAS', 'Fuel tank isolation and changeover valves', 'HFO drain/sludge tank connections'],
    watchkeeping: ['Settling tank level — maintain 50–75%; log each watch', 'Storage tank quantities — calculate ROB (Remaining On Board) daily', 'Transfer pump operation — no abnormal noise or vibration', 'Tank heating temperatures — settling tank HFO target 45–60°C', 'Sludge drain schedule — bottom-drain settling tank before each purifier run']
  },
  {
    id: 'bunker-system', name: 'Bunkering System', short: 'Fuel Oil Bunkering Connections & Manifold', rawCat: 'Fuel System', icon: '⛽', color: '#c2520a', status: 'standby', mapX: 12, mapY: 20.6,
    shortDesc: 'Fuel oil bunkering manifold, hose connections, overflow alarms, and drip trays for receiving bunker fuel.',
    purpose: 'Provides a safe and MARPOL-compliant system for receiving bunker fuel (HFO, MDO, MGO) from bunkering barges or shore facilities, distributing it to the correct storage tanks, and preventing spillage.',
    role: 'Used in port or at anchorage during bunkering operations. The duty engineer monitors flow rate, tank levels, and temperatures throughout the operation. The bunker plan is submitted to the port authority and a bunker officer must be present at all times.',
    importance: 'A bunker spill is a major environmental and commercial incident under MARPOL Annex I. The responsible officer can face criminal prosecution. Correct fuel sampling at the manifold is essential for quality assurance and dispute resolution.',
    technical: 'The bunkering manifold provides blanked connections on both sides of the vessel (port and starboard). Non-return valves prevent back-flow. High-level alarms and automatic valve closure prevent tank overflow. The SOPEP (Shipboard Oil Pollution Emergency Plan) governs response to spills.',
    components: ['Port and starboard bunkering manifolds', 'Reducers and bend connections for hose coupling', 'Non-return valves on tank fills', 'Tank high-high level overflow alarms', 'Bunker metering flow meter', 'Drip trays and save-all piping', 'Sounding tape / remote gauging system', 'Bunker sample bottles (MARPOL representative sample)'],
    watchkeeping: ['Tank filling rates — never exceed tank capacity', 'High-level alarms — test before each bunkering operation', 'Bunker sample collection — continuous drip sample from manifold throughout delivery', 'Overflow and spill drill — completed before opening manifold valves', 'Bunker survey — witness ullages before and after with bunker barge']
  },
  {
    id: 'do-system', name: 'Diesel Oil System', short: 'MDO / MGO Service System — ECA Changeover', rawCat: 'Fuel System', icon: '⛽', color: '#b45309', status: 'running', mapX: 20, mapY: 20.6,
    shortDesc: 'Marine diesel / gas oil storage, transfer, and service system for ECA operation and auxiliary engines.',
    purpose: 'Stores, transfers, and conditions marine diesel oil (MDO) and marine gas oil (MGO) for use in the main engine during ECA passage, auxiliary engines, the emergency generator, and the incinerator.',
    role: 'At sea in ECAs (Emission Control Areas), the main engine must switch from HFO to low-sulphur fuel (0.1% S max). The changeover procedure involves warming up the DO service system and slowly transitioning the engine from HFO to DO over typically 30 minutes.',
    importance: 'Failure to complete fuel changeover before entering an ECA results in a MARPOL violation. Incorrect or too-rapid changeover can cause fuel pump and injector thermal shock, leading to seizure. Log entries documenting fuel changeover are legally required.',
    technical: 'DO is of lower viscosity than HFO and requires less heating. The changeover valve allows gradual transition between fuel types. Fuel oil temperature and viscosity must be monitored during changeover. Some vessels use a viscosity controller to manage the blend automatically.',
    components: ['MDO/MGO storage tanks (separated from HFO tanks)', 'DO transfer pump', 'DO service tank', 'Fuel changeover valve (manual or motorised)', 'Viscosity controller / viscometer', 'De-aeration pot (removes air entrapped during changeover)', 'DO day tank for emergency generator'],
    watchkeeping: ['ECA entry/exit times — log fuel changeover start and completion', 'Fuel oil temperature during changeover — prevent cold shock', 'Viscosity — monitor continuously during changeover transition', 'DO service tank level — adequate for ECA passage duration', 'Log fuel changeover in ORB Part I and Engine Log Book']
  },
  {
    id: 'thermal-oil', name: 'Thermal Oil Heater', short: 'Aalborg Thermal Oil / Hot Oil System', rawCat: 'Fuel System', icon: '🌡️', color: '#dc2626', status: 'running', mapX: 28, mapY: 20.6,
    shortDesc: 'Closed-loop thermal oil (hot oil) system providing high-temperature heat to HFO heaters and cargo heating.',
    purpose: 'Circulates hot thermal oil (at up to 250°C) as a heat transfer medium to fuel oil heaters, cargo heating coils, and other heat consumers, replacing direct steam heating on some vessel types.',
    role: 'The thermal oil is heated in an oil-fired heater or a waste heat recovery unit. A circulating pump drives the oil through insulated pipework to heat exchangers throughout the vessel. The closed system operates at low pressure despite the high temperature.',
    importance: 'Thermal oil leaks onto hot surfaces are a severe fire hazard — the flash point of hot thermal oil may be exceeded under leak conditions. Thermal oil system fires are among the most serious shipboard fire casualties.',
    technical: 'Thermal oil (synthetic or mineral) does not vaporise at operating temperature due to the low pressure of the closed system. The expansion tank accommodates thermal expansion. Drain-back to a collection tank protects against leaks.',
    components: ['Thermal oil heater (fired or waste heat)', 'Circulation pump (centrifugal)', 'Expansion / deaeration tank', 'Heat exchangers (at each consumer)', 'High-temperature safety cutout', 'Leak detection trays and sensors', 'Thermal oil sampling cock'],
    watchkeeping: ['Thermal oil temperature — maintain at set point; excessive deviation = heater fault', 'System pressure — stable; drops indicate a leak', 'Oil quality — annual sample analysis for degradation, acid number, flash point', 'Leak detection trays — inspect weekly', 'Heat exchanger effectiveness — falling outlet temperatures indicate fouling']
  },
  {
    id: 'waste-heat', name: 'Waste Heat Recovery System', short: 'Exhaust Gas Economiser & Power Turbine', rawCat: 'Heat & Steam', icon: '♻️', color: '#059669', status: 'running', mapX: 36, mapY: 20.6,
    shortDesc: 'Exhaust gas economiser and/or shaft generator recovering waste heat and energy from main engine exhaust gases.',
    purpose: 'Recovers thermal energy from the main engine exhaust gas (which would otherwise be wasted to atmosphere) in the form of steam, hot water, or shaft power — reducing fuel consumption and improving overall plant efficiency.',
    role: 'The exhaust gas economiser (boiler) is in permanent operation at sea whenever the main engine runs, recovering heat at zero additional fuel cost. On vessels with a Power Take-Off (PTO) shaft generator, mechanical energy from the crankshaft generates electricity, reducing DG fuel consumption.',
    importance: 'On a modern large vessel, waste heat recovery can produce 10–15% of electrical demand with zero additional fuel burn — saving 5–10 tonnes of fuel per day. This is a primary contributor to EEXI and CII compliance under IMO climate regulations.',
    technical: 'The EGB (Exhaust Gas Boiler) sits in the uptake between the turbocharger outlet and the funnel. The turbine exhaust at ~290°C flows over tube banks heating circulating water. A shaft generator (SGM) is driven from the main engine crankshaft through a gearbox, running in parallel with diesel generators.',
    components: ['Exhaust gas boiler (EGB) tube bank in uptake', 'Soot blower system (maintains tube heat transfer)', 'Steam drum and feed water circuit', 'Shaft generator motor (SGM)', 'SGM power converter (synchronises SGM output to switchboard)', 'Uptake gas bypass damper (protects EGB from overload)'],
    watchkeeping: ['EGB steam pressure and temperature — within design limits', 'Soot blower — operate per schedule; prevent cold-end corrosion', 'SGM output kW — monitor against expected value', 'Exhaust gas back-pressure — rising back-pressure = EGB fouling', 'EGB tube inspection — visual at annual drydock']
  },
  {
    id: 'cams-fuel-pump', name: 'Camshaft & Fuel Pump', short: 'ME Fuel Pump — Camshaft-Driven Plunger Pump', rawCat: 'Propulsion', icon: '⚙️', color: '#92400e', status: 'running', mapX: 44, mapY: 20.6,
    shortDesc: 'Camshaft-driven high-pressure plunger pump generating injection pressure for each engine cylinder.',
    purpose: 'Generates the very high fuel pressure (400–1500 bar) required to open each fuel injector needle and deliver a precisely metered quantity of atomised fuel into the cylinder at the correct crank angle.',
    role: 'One fuel pump per cylinder, driven from the camshaft (one full revolution per engine cycle on a 2-stroke). The plunger stroke is controlled by the fuel index (rack) position from the governor. On electronically-controlled engines (ME/ME-C), high-pressure hydraulic oil acts on a booster piston instead.',
    importance: 'A seized or failed fuel pump on one cylinder disables that cylinder, causing engine imbalance and power reduction. Fuel pump plunger and barrel wear causes high-pressure fuel leakage, injection timing errors, and increased smoke.',
    technical: 'A precision-lapped barrel and plunger pair. As the plunger rises, the helical control edge blocks the spill port, trapping fuel and building pressure. Rotating the plunger (via the rack/fuel index) changes the effective stroke and therefore the injected quantity.',
    components: ['Fuel pump plunger & barrel (precision lapped pair)', 'Helical control edge on plunger', 'Fuel rack (governor-controlled)', 'Delivery valve (prevents back-flow)', 'High-pressure fuel pipe to injector', 'Camshaft roller guide & tappet', 'Fuel pump housing & casing'],
    watchkeeping: ['Cylinder exhaust temperature — deviation indicates fuel pump fault', 'Fuel pump delivery pressure — test at overhaul', 'Plunger & barrel wear — micrometer check at each major overhaul', 'High-pressure pipe condition — visually inspect; replace at scheduled interval', 'Rack movement — full and free movement; no sticking']
  },
  {
    id: 'cylinder-lube', name: 'Cylinder Lubrication System', short: 'Alpha Lubricator — Cylinder Oil Dosing', rawCat: 'Propulsion', icon: '🫙', color: '#d97706', status: 'running', mapX: 52, mapY: 20.6,
    shortDesc: 'Electronically-controlled variable-dose cylinder oil injection system protecting 2-stroke cylinder liners.',
    purpose: 'Injects cylinder lubricating oil at precisely timed intervals directly onto the cylinder liner surface, forming a protective film between piston rings and liner, neutralising combustion acids, and preventing scuffing and polished bore syndrome.',
    role: 'Operates continuously whenever the engine is running. The Alpha Lubricator system adjusts oil dose dynamically based on engine load, fuel sulphur content, and liner temperature — maximising protection while minimising oil consumption.',
    importance: 'Cylinder oil is a major running cost (approximately $200–400/day on a large vessel). Insufficient lubrication causes liner scuffing, ring breakage, and piston seizure. Excessive lubrication causes ring sticking, deposits, and waste. Correct dosing is critical to both protection and economy.',
    technical: 'Quill-type injectors mounted in the liner wall at multiple points around the circumference inject oil onto the liner surface as the piston rings pass. The Alpha Lubricator uses a variable-stroke plunger pump; the ECU varies stroke length to adjust dose rate (typically 0.6–1.2 g/kWh).',
    components: ['Alpha Lubricator control unit (ACU)', 'Variable-stroke quill pump actuators (one per injection point)', 'Cylinder oil storage and gravity feed tank', 'Non-return quill valves (prevent gas blow-back)', 'Lube oil supply pipe (trace heated)', 'Load signal from engine ECU'],
    watchkeeping: ['Dose rate — record g/kWh per cylinder; adjust for fuel sulphur content', 'Quill non-return valves — check for blow-back at overhaul', 'Cylinder oil tank level — daily check', 'Feed pressure — correct per manufacturer specification', 'Liner inspection at scheduled interval — check for corrosive wear or scuffing']
  },
  {
    id: 'boiler', name: 'Auxiliary Boiler', short: 'Aalborg Composite EGB / Oil-fired', rawCat: 'Heat & Steam', icon: '🔥', color: '#dc3545', status: 'running', mapX: 60, mapY: 20.6,
    shortDesc: 'Composite exhaust gas / oil-fired boiler producing 7 bar saturated steam for fuel heating and services.',
    purpose: 'Produces saturated steam at 7 bar for heavy fuel oil heating (HFO must reach 130–150 °C for correct viscosity), accommodation heating, fresh water distillation, and cargo heating on tankers.',
    role: 'At sea, operates in EGB mode — recovering waste heat from the main engine exhaust at zero fuel cost. Switches to oil-fired mode in port or when steam demand exceeds exhaust recovery. Feed water is automatically controlled to maintain drum level at mid-glass.',
    importance: 'Without steam heating, HFO viscosity rises beyond the limits of injection pumps and injectors. Loss of boiler feed water — an empty drum — is a critical emergency causing immediate tube failure and boiler damage.',
    technical: 'Two heat-input sections share a common steam drum. The EGB tube bank sits in the ME exhaust uptake — hot exhaust (300–350 °C) heats water inside the tubes. The oil-fired section has pressure-atomising burners firing into a refractory-lined furnace.',
    components: ['Steam drum (with cyclone separators and chevron driers)', 'EGB tube bank in ME exhaust uptake', 'Oil burner(s) & pressure atomiser', 'Automatic feed water control valve', 'Safety valves ×2 — set at 8.5 bar', 'Gauge glasses ×2 & remote level indicator', 'Chemical dosing system (oxygen scavenger, pH control)', 'Boiler feed pump (electric; steam-driven standby)', 'Bottom blowdown & continuous blowdown valves'],
    watchkeeping: ['Steam pressure — working 7 bar; SV lifts at 8.5 bar', 'Drum water level — maintain mid-glass; LOW LEVEL = critical emergency', 'Feed water pH 10.5–11.5; hardness below 5 ppm', 'Burner flame condition when oil-firing', 'Safety valve disc — check for weeping or wire drawing', 'Boiler water conductivity — purge if high', 'Blowdown schedule per chemical log']
  },
  {
    id: 'lo-system', name: 'Lube Oil System', short: 'Forced Circulation — SAE 30 System Oil', rawCat: 'Lubrication', icon: '🔶', color: '#d97706', status: 'running', mapX: 68, mapY: 20.6,
    shortDesc: 'Forced-circulation lube oil system delivering SAE 30 system oil at 4.5 bar to all main engine bearings.',
    purpose: 'Circulates pressurised lube oil to all main engine bearing surfaces (main, crankpin, crosshead), provides cooling to the piston crowns, and lubricates the turbocharger bearings.',
    role: 'Operates whenever the main engine is running. A pre-lubrication pump runs before starting. The main-driven gear pump or electric pumps maintain pressure. Oil is continuously filtered and cooled.',
    importance: 'Inadequate lubrication pressure or contaminated lube oil is the leading cause of catastrophic bearing failures and crankshaft damage. The lube oil also acts as a primary diagnostic medium for engine health.',
    technical: 'A gear-type main pump is crankshaft gear driven. The lube oil cooler (LT water cooled) reduces bulk oil temperature from ~55 °C to 45 °C. A 50-micron auto-backflushing filter removes metallic wear particles and carbon.',
    components: ['Main-driven gear oil pump (crankshaft driven)', 'Pre-lubrication pump (electric)', 'Post-lubrication pump (electric)', 'Lube oil cooler (shell and tube or plate)', 'Auto-backflushing filter (50 micron)', 'Lube oil sump tank (bedplate)', 'Piston cooling oil telescopic pipes', 'Main bearing and crosshead supply rails'],
    watchkeeping: ['LO inlet pressure — 4.0–5.0 bar; alarm at 3.5 bar', 'LO inlet temperature — 43–48 °C', 'LO cooler performance — check LT water inlet/outlet', 'Filter differential pressure — note any sudden rise', 'Sump tank level — monitor for leakage or water ingress', 'Oil mist detector (OMD) — check for crankcase mist', 'LO analysis — quarterly sample for TBN, viscosity, and wear metals']
  },
  {
    id: 'lo-purifier', name: 'Lube Oil Purifier', short: 'Centrifugal LO Separator — Sump Cleaning', rawCat: 'Fuel Treatment', icon: '🔄', color: '#d97706', status: 'running', mapX: 76, mapY: 20.6,
    shortDesc: 'Centrifugal separator continuously removing water and solid contaminants from the engine lube oil sump.',
    purpose: 'Continuously cleans the main engine lube oil by removing water (from cooling leaks or condensation) and solid contaminants (carbon, metallic wear particles) to maintain oil quality and extend its service life.',
    role: 'Runs 24/7 at sea in a bypass loop from the main engine sump. It is essential for maintaining the Total Base Number (TBN) and removing combustion by-products that bypass the piston rings.',
    importance: 'Contaminated lube oil causes rapid bearing wear and can lead to a crankcase explosion if oil mist levels rise. The purifier is the primary defence against water-in-oil emulsions which destroy lubricating film strength.',
    technical: 'Similar to the fuel purifier but specifically configured for lube oil. It operates at a higher temperature (90–95 °C) to improve separation efficiency of the higher-viscosity system oil.',
    components: ['Centrifugal disc-stack bowl', 'LO feed heater (electric or steam)', 'Water transducer (ALCAP system)', 'Sludge discharge port', 'Drive motor and transmission', 'Clean oil return to sump'],
    watchkeeping: ['Feed temperature — 90–95 °C', 'Bowl speed and vibration', 'Water discharge — investigate if excessive', 'Sludge discharge interval', 'Oil quality — visual check of clean oil outlet']
  },
  {
    id: 'lub-oil-analysis', name: 'Lube Oil Analysis', short: 'Onboard LO Test Kit & Lab Sampling', rawCat: 'Lubrication', icon: '🧪', color: '#d97706', status: 'running', mapX: 84, mapY: 20.6,
    shortDesc: 'Onboard testing and laboratory analysis system for monitoring lube oil health and wear metals.',
    purpose: 'Provides quantitative data on the condition of the lubricating oil and the engine itself by measuring viscosity, TBN, water content, and the presence of wear metals (Fe, Cu, Al, Pb).',
    role: 'Onboard tests (viscosity, water, TBN) are performed monthly by the 2nd Engineer. Representative samples are sent to a shore laboratory (e.g., Shell LubeAnalyst) every 3 months for full spectral analysis.',
    importance: 'Early detection of wear metals can prevent a catastrophic bearing failure. Monitoring TBN (Total Base Number) ensures the oil can still neutralise combustion acids. Water-in-oil detection prevents corrosion and film failure.',
    technical: 'Onboard kits use a falling-ball viscometer and chemical reagents for water and TBN. Lab analysis uses Inductively Coupled Plasma (ICP) spectroscopy to detect wear metals at parts-per-million (ppm) levels.',
    components: ['Onboard test kit (viscosity, water, TBN)', 'Sample collection bottles and vacuum pump', 'Lab analysis reports and trend software', 'Magnetic plug (in LO return line)'],
    watchkeeping: ['Monthly onboard test results — log and trend', 'Lab report review — investigate any "Caution" or "Action" status', 'Water content — maximum 0.2% for system oil', 'TBN — maintain above 50% of new oil value', 'Magnetic plug inspection — check for metallic "fur"']
  },
  {
    id: 'luboil-storage', name: 'Lube Oil Storage', short: 'LO Storage & Renovating Tanks', rawCat: 'Lubrication', icon: '🛢️', color: '#d97706', status: 'running', mapX: 92, mapY: 20.6,
    shortDesc: 'Storage and renovating tanks for main engine system oil, cylinder oil, and auxiliary LO.',
    purpose: 'Stores bulk quantities of various lubricating oils required for the vessel\'s machinery and provides a renovating tank for cleaning the entire main engine sump charge if contaminated.',
    role: 'Tanks are located in the engine room or double bottom. The renovating tank allows the entire 25,000L sump charge to be pumped out, heated, and purified while the engine is stopped for maintenance or after a major contamination incident.',
    importance: 'Maintaining adequate reserves of lube oil is a statutory requirement. The renovating tank is a critical recovery tool after a major water ingress incident (e.g., failed liner O-ring).',
    technical: 'Tanks are fitted with heating coils to maintain pumpability. Level gauges are interfaced with the IAS. The renovating tank has a sloped bottom for effective water and sludge drainage.',
    components: ['System oil storage tank', 'Cylinder oil storage tank', 'Renovating / Settling tank', 'LO transfer pump', 'Tank level gauges and alarms'],
    watchkeeping: ['Tank levels — calculate ROB daily', 'Renovating tank temperature — 50–60°C if in use', 'Water drainage from renovating tank', 'Transfer pump operation', 'Tank vent heads — ensure clear and flame screens intact']
  },
  {
    id: 'cooling-system', name: 'Jacket Water Cooling', short: 'HT & LT Freshwater Circuits', rawCat: 'Cooling System', icon: '❄', color: '#3b82f6', status: 'running', mapX: 98, mapY: 20.6,
    shortDesc: 'HT circuit cools the main engine jacket; LT circuit cools charge air, lube oil, generators and auxiliaries.',
    purpose: 'Removes heat from the main engine cylinders, piston crowns, and heads (HT circuit) and from the charge air, lube oil, and auxiliary machinery (LT circuit) to maintain safe operating temperatures.',
    role: 'Two-circuit closed fresh water system: HT (High Temperature) circuit operates at 80–90 °C; LT (Low Temperature) circuit operates at 35–45 °C. Heat is rejected from the LT circuit to seawater via the central cooler.',
    importance: 'Cylinder jacket temperature must stay within a precise band (78–88 °C) to prevent cold corrosion (acid condensation) and thermal stress. Loss of cooling causes immediate engine seizure and cracked heads.',
    technical: 'HT circuit: jacket water pump circulates water through cylinder jackets. A thermostatic valve bypasses the cooler to maintain temperature. LT circuit: LT pump circulates water through LO cooler, air cooler, and generators.',
    components: ['HT jacket water pump (centrifugal)', 'HT jacket water pre-heater (steam or electric)', 'HT thermostatic valve (3-way)', 'LT jacket water pump', 'Expansion tanks (HT & LT)', 'Central cooler (plate heat exchanger)', 'Chemical dosing unit (corrosion inhibitor)'],
    watchkeeping: ['HT water outlet temperature — 78–88 °C', 'LT water temperature — 35–45 °C', 'Expansion tank levels — check for leaks', 'Water chemistry — nitrite level 1500–2500 ppm; pH 8.5–9.5', 'Thermostatic valve operation — check for hunting', 'Pre-heater status — ON during standby']
  },
  {
    id: 'central-cooler', name: 'Central Cooler', short: 'Plate Heat Exchanger — LT/SW', rawCat: 'Cooling System', icon: '🧊', color: '#3b82f6', status: 'running', mapX: 55, mapY: 27.5,
    shortDesc: 'Main heat exchanger rejecting total engine room heat from the LT circuit to seawater.',
    purpose: 'Acts as the primary heat sink for the entire engine room, transferring heat from the Low Temperature (LT) fresh water circuit to the seawater circuit.',
    role: 'Operates continuously at sea. Typically two large plate heat exchangers (PHE) are fitted, with one in service and one as standby. Seawater flow is adjusted to maintain LT water temperature at ~36°C.',
    importance: 'The central cooler is the "bottleneck" of the cooling system. Fouling (marine growth or debris) on the seawater side reduces heat transfer, causing LT and then HT temperatures to rise, eventually leading to engine power reduction.',
    technical: 'A titanium plate heat exchanger. Titanium is used for its excellent corrosion resistance to seawater. The plates are corrugated to create turbulence and maximise heat transfer area in a compact volume.',
    components: ['Titanium plates (corrugated)', 'Nitrile or EPDM gaskets', 'Fixed and movable pressure plates', 'Tightening bolts', 'SW and LT water inlet/outlet connections'],
    watchkeeping: ['SW inlet/outlet pressure — increasing DP = fouling', 'LT water outlet temperature — target 36°C', 'Visual check for leaks from gaskets', 'Zinc anodes (if fitted in water boxes)', 'Back-flushing schedule — perform if SW pressure drop increases']
  },
  {
    id: 'ht-lt-circuit', name: 'HT/LT Circuit Control', short: 'Thermostatic Mixing Valves & APMS Control', rawCat: 'Cooling System', icon: '🎛️', color: '#3b82f6', status: 'running', mapX: 12, mapY: 32.0,
    shortDesc: 'Automatic control system for HT and LT cooling water temperatures using 3-way mixing valves.',
    purpose: 'Automatically maintains the HT and LT cooling water temperatures at their respective set points by modulating 3-way thermostatic valves to bypass or engage the coolers.',
    role: 'The control system (part of the IAS/APMS) monitors temperature sensors and adjusts the pneumatic or electric actuators on the mixing valves. It ensures stable temperatures despite changes in engine load or seawater temperature.',
    importance: 'Stable cooling temperatures are critical for engine thermal stability. Rapid temperature fluctuations cause thermal fatigue in cylinder heads and liners. The system also manages the pre-heating of the engine during standby.',
    technical: 'Uses PID (Proportional-Integral-Derivative) control logic. The HT valve typically maintains 82°C; the LT valve maintains 36°C. Interlocks prevent the main engine from starting if the HT temperature is too low (<60°C).',
    components: ['3-way thermostatic mixing valves', 'Pneumatic or electric actuators', 'Temperature sensors (PT100)', 'PID controller (in IAS)', 'Control air supply (for pneumatic types)'],
    watchkeeping: ['Valve position — should modulate smoothly', 'Temperature stability — no hunting or offset', 'Control air pressure — 6-7 bar', 'Manual override capability — ensure handwheel is disengaged but available', 'Sensor health — check for "frozen" or erratic readings on IAS']
  },
  {
    id: 'sw-pump', name: 'Sea Water Cooling Pump', short: 'Centrifugal — 600 m³/h', rawCat: 'Cooling System', icon: '🌊', color: '#0369a1', status: 'running', mapX: 20, mapY: 32.0,
    shortDesc: 'Centrifugal pump circulating seawater through the central cooler for the LT fresh water cooling circuit.',
    purpose: 'Circulates seawater from the sea chest through the central cooler and other heat exchangers (e.g., condenser) before discharging it overboard, providing the ultimate heat sink for the vessel.',
    role: 'Runs continuously at sea. A standby pump is permanently on auto-start. The pump must be primed and the sea chest valves open before starting. Flow rate is high to maintain adequate heat rejection.',
    importance: 'Loss of the seawater cooling pump removes cooling from the entire LT circuit, leading to a total machinery shutdown within minutes. It is a critical "single point of failure" system.',
    technical: 'A horizontal, end-suction, single-stage centrifugal pump with a NiAlBronze impeller and casing to resist seawater corrosion. Driven by a high-power electric motor (typically 440V).',
    components: ['Volute pump casing (NiAlBronze)', 'NiAlBronze impeller', 'Mechanical shaft seal', 'Bearing housing and grease nipples', 'Electric drive motor', 'Suction and discharge pressure gauges'],
    watchkeeping: ['Discharge pressure — 2.5–3.5 bar', 'Strainer differential pressure — clean if high', 'Motor current — check for overload', 'Bearing temperatures — check by hand or IR thermometer', 'Mechanical seal — no excessive leakage', 'Auto-start test of standby pump — weekly']
  },
  {
    id: 'sea-chest', name: 'Sea Chest', short: 'High & Low Sea Inlets — Strainers & Valves', rawCat: 'Hull & Piping', icon: '⚓', color: '#0369a1', status: 'running', mapX: 28, mapY: 32.0,
    shortDesc: 'Seawater intake chambers in the hull with strainers and isolation valves for cooling water supply.',
    purpose: 'Provides a reservoir of seawater for the cooling pumps, fire pumps, and ballast system, while filtering out large debris and marine life.',
    role: 'Two chests are typically used: a "Low" sea chest for deep-sea passage and a "High" sea chest for shallow water or port use to avoid drawing in silt and sand. Both have heavy-duty strainers and isolation valves.',
    importance: 'Blockage of sea chests by ice, jellyfish, or plastic debris causes immediate loss of all cooling water. The sea chest is a major hull penetration and its valves are critical for vessel integrity.',
    technical: 'A recessed chamber in the hull plating. A "Kingston valve" or large butterfly valve provides isolation. A vent pipe allows air to escape. Compressed air or steam "blow-back" connections are used to clear blockages.',
    components: ['High and Low sea chest chambers', 'Kingston / Butterfly isolation valves', 'Duplex or simplex strainers', 'Blow-back air/steam connections', 'Sacrificial anodes', 'Marine growth prevention system (MGPS)'],
    watchkeeping: ['Selection — use High chest in port/shallow water; Low at sea', 'Strainer differential pressure — monitor via IAS', 'MGPS status — ensure copper/aluminium anodes are active', 'Blow-back — use if suction pressure drops', 'Valve condition — ensure full and free movement']
  },
  {
    id: 'distilled-water', name: 'Distilled Water System', short: 'Fresh Water Storage & Distribution', rawCat: 'Utilities', icon: '💧', color: '#0ea5e9', status: 'running', mapX: 36, mapY: 32.0,
    shortDesc: 'Storage and distribution system for distilled water produced by the FWG for boiler and engine use.',
    purpose: 'Stores and distributes high-purity distilled water produced by the Fresh Water Generator (FWG) for use as boiler feed water, engine cooling water makeup, and technical wash water.',
    role: 'Distilled water is stored in dedicated tanks (separate from potable water). It is pumped to the boiler hotwell and engine expansion tanks as required. Quality is monitored by conductivity.',
    importance: 'Using non-distilled water in boilers or engines causes rapid scale formation and corrosion, leading to tube failure and overheating. Maintaining adequate distilled water ROB is critical for long voyages.',
    technical: 'The system includes storage tanks, transfer pumps, and a mineralizer (if used for potable water). Conductivity must be <10 μS/cm for boiler use.',
    components: ['Distilled water storage tanks', 'Transfer pumps', 'Conductivity meter', 'Mineralizer / Re-hardening filter', 'UV sterilizer (if for potable use)'],
    watchkeeping: ['Tank levels — calculate ROB daily', 'Conductivity — ensure <10 μS/cm', 'Transfer pump operation', 'UV sterilizer lamp hours', 'Mineralizer bed condition']
  },
  {
    id: 'aux-engine', name: 'Aux Engine / D.G. 1', short: 'Wärtsilä 9L32 — 4,500 kW Generator', rawCat: 'Power Generation', icon: '⚡', color: '#2a8fd4', status: 'running', mapX: 44, mapY: 32.0,
    shortDesc: '4-stroke medium-speed diesel generator supplying 6.6 kV electrical power for all vessel services.',
    purpose: 'The diesel generator set produces all electrical power for the vessel\'s propulsion controls, navigation, steering, lighting, and auxiliary machinery.',
    role: 'Two or three generators are installed. One or two run in parallel at sea depending on load. The APMS (Automatic Power Management System) automatically starts, synchronises, and stops generators based on demand.',
    importance: 'A total blackout (loss of all DG power) simultaneously disables propulsion controls, steering, and navigation — a critical emergency, especially in restricted waters.',
    technical: 'A four-stroke, trunk-piston, turbocharged, intercooled diesel running at constant 750 RPM. Directly coupled to a brushless alternator. Operates on HFO or MDO.',
    components: ['9-cylinder engine block', 'Turbocharger & air cooler', 'Hydraulic / Electronic governor', 'Brushless alternator (6.6 kV)', 'LO sump and pump', 'Jacket water cooling circuit'],
    watchkeeping: ['Generator output (kW, Amps, Cos φ)', 'Voltage (6,600 V) and Frequency (60 Hz)', 'Exhaust gas temperatures — check for balance', 'LO pressure and temperature', 'Jacket water temperature', 'Fuel leak-off alarms', 'Reverse power and over-current protection status']
  },
  {
    id: 'aux-gen-2', name: 'Aux Engine / D.G. 2', short: 'Wärtsilä 9L32 — 4,500 kW Generator', rawCat: 'Power Generation', icon: '⚡', color: '#2a8fd4', status: 'standby', mapX: 52, mapY: 32.0,
    shortDesc: 'Secondary diesel generator set providing redundancy and peak load capacity for the electrical grid.',
    purpose: 'Identical to D.G. 1, providing 100% redundancy. It ensures that the vessel can maintain full operational capability even if one generator is down for maintenance.',
    role: 'Usually in "Auto-Standby" mode. The APMS will start it automatically if the load on D.G. 1 exceeds 85% or if D.G. 1 fails. During manoeuvring, it is run in parallel with D.G. 1.',
    importance: 'Redundancy in power generation is a SOLAS requirement. Having a second generator ready to take load prevents blackouts during transient high-load events (e.g., starting a large pump).',
    technical: 'Identical technical specifications to D.G. 1. Shared cooling and fuel systems but independent control and protection.',
    components: ['9-cylinder engine block', 'Turbocharger', 'Alternator', 'Local control panel', 'Auto-start batteries / air motor'],
    watchkeeping: ['Ready-to-start status on APMS', 'Pre-lubrication pump running', 'Jacket water pre-heating temperature', 'Fuel and LO levels', 'Battery voltage / Air pressure'],
  },
  {
    id: 'emergency-gen', name: 'Emergency Generator', short: 'Cummins / Caterpillar — 500 kW', rawCat: 'Power Generation', icon: '🚨', color: '#dc2626', status: 'standby', mapX: 60, mapY: 32.0,
    shortDesc: 'Independent diesel generator providing power to emergency services during a total blackout.',
    purpose: 'Provides emergency electrical power to critical systems (steering, navigation, emergency lighting, fire pumps) if the main diesel generators fail and a blackout occurs.',
    role: 'Located outside the engine room (usually on the boat deck). Starts automatically upon loss of main busbar voltage and connects to the emergency switchboard within 45 seconds per SOLAS.',
    importance: 'The last line of defence for vessel safety. It ensures the bridge remains functional and the vessel can be steered even if the engine room is flooded or on fire.',
    technical: 'A small high-speed 4-stroke diesel engine. Usually radiator-cooled and has its own independent fuel tank (MGO). Two independent starting methods are required (e.g., batteries and hydraulic/hand start).',
    components: ['High-speed diesel engine', 'Radiator cooling system', 'Independent MGO day tank', 'Emergency switchboard (ESB)', 'Auto-start controller', 'Dual starting systems'],
    watchkeeping: ['Weekly auto-start test', 'Fuel level (minimum 18 hours operation)', 'Battery charge status', 'Room temperature (prevent cold start issues)', 'ESB breaker status']
  },
  {
    id: 'main-switchboard', name: 'Main Switchboard', short: '6.6 kV High Voltage Switchboard', rawCat: 'Power Generation', icon: '🔌', color: '#2a8fd4', status: 'running', mapX: 68, mapY: 32.0,
    shortDesc: 'Central distribution hub for high-voltage electrical power to all vessel consumers.',
    purpose: 'Distributes the electrical power produced by the generators to all high-power consumers (thrusters, large pumps) and via transformers to the low-voltage grid.',
    role: 'The heart of the electrical system. Contains the circuit breakers for generators and major loads, protection relays, and the synchronising equipment.',
    importance: 'A fault in the main switchboard (e.g., a busbar short circuit) can disable the entire vessel. High voltage (6.6 kV) requires strict safety procedures and specialised training.',
    technical: 'Divided into sections with bus-tie breakers for redundancy. Arc-flash protection is fitted. Protection relays monitor for over-current, reverse power, and earth faults.',
    components: ['Generator circuit breakers (VCBs)', 'Busbars and bus-tie breakers', 'Protection relays (e.g., SEPAM)', 'Synchronising panel', 'Voltage and current transformers', 'Arc-flash sensors'],
    watchkeeping: ['Busbar voltage and frequency', 'Load balance between generators', 'Insulation resistance (Mega-ohms)', 'Relay alarm status', 'Temperature of connections (via IR camera)']
  },
  {
    id: 'apms', name: 'APMS', short: 'Automatic Power Management System', rawCat: 'Automation & Control', icon: '🧠', color: '#7c3aed', status: 'running', mapX: 76, mapY: 32.0,
    shortDesc: 'Computerised system managing generator start/stop, synchronisation and load sharing.',
    purpose: 'Automatically manages the vessel\'s electrical power plant to ensure a stable power supply, prevent blackouts, and optimise fuel efficiency.',
    role: 'Monitors total load and individual generator capacity. Automatically starts a standby generator if load is high or if a running generator fails. Performs automatic synchronisation and load sharing.',
    importance: 'Reduces the workload on engineers and provides faster response to power emergencies than manual control. It is critical for safe operation in DP (Dynamic Positioning) or restricted waters.',
    technical: 'Redundant PLC-based system. Interfaces with the generator governors and AVRs (Automatic Voltage Regulators). Includes "Load Shedding" logic to trip non-essential loads if capacity is exceeded.',
    components: ['Redundant PLC controllers', 'Operator interface (HMI)', 'Load sharing modules', 'Synchronising units', 'Load shedding relays'],
    watchkeeping: ['System mode (Auto/Manual)', 'Generator priority sequence', 'Load shedding status', 'Communication health between PLCs', 'Event log for any auto-starts']
  },
  {
    id: 'ups', name: 'UPS System', short: 'Uninterruptible Power Supply — Navigation & Control', rawCat: 'Electrical & Control', icon: '🔋', color: '#7c3aed', status: 'running', mapX: 84, mapY: 32.0,
    shortDesc: 'Battery-backed power supply for critical navigation, communication and control systems.',
    purpose: 'Provides instantaneous, clean, and continuous power to critical electronic systems (IAS, Navigation, GMDSS) during the gap between a blackout and the emergency generator starting.',
    role: 'Always online, filtering the main power and charging its batteries. If main power fails, the inverter draws from the batteries to maintain output without even a millisecond of interruption.',
    importance: 'Prevents computer crashes and loss of navigation data during power transients. Essential for maintaining control during a blackout.',
    technical: 'Double-conversion online UPS. Converts AC to DC (rectifier), then DC back to AC (inverter). Static bypass switch provides a path if the UPS fails.',
    components: ['Rectifier / Battery charger', 'Battery bank (Lead-acid or Li-ion)', 'Inverter', 'Static bypass switch', 'Monitoring and alarm interface'],
    watchkeeping: ['Battery charge level', 'Inverter output voltage', 'Load percentage', 'Battery room ventilation', 'Annual discharge test (capacity test)']
  },
  {
    id: 'vfd', name: 'VFD Units', short: 'Variable Frequency Drives — Pump & Fan Control', rawCat: 'Electrical & Control', icon: '📉', color: '#7c3aed', status: 'running', mapX: 92, mapY: 32.0,
    shortDesc: 'Electronic motor controllers adjusting speed of pumps and fans for energy efficiency.',
    purpose: 'Controls the speed of electric motors (e.g., SW pumps, ventilation fans) by varying the frequency of the power supply, significantly reducing energy consumption.',
    role: 'Used on large motors where flow demand varies. Instead of running at 100% and throttling with a valve, the VFD runs the motor at the exact speed required.',
    importance: 'A major contributor to vessel energy efficiency (EEDI/EEXI). Can reduce pump energy consumption by up to 50%. Also provides "soft start" to reduce mechanical stress.',
    technical: 'Converts AC to DC, then uses PWM (Pulse Width Modulation) to create a variable-frequency AC output. Generates significant heat and requires dedicated cooling.',
    components: ['Rectifier bridge', 'DC bus (capacitors)', 'IGBT Inverter stage', 'Control electronics', 'Cooling fans / Heat sinks'],
    watchkeeping: ['Drive temperature', 'Output frequency (Hz)', 'Motor current', 'Cooling fan operation', 'Harmonic distortion levels on the grid']
  },
  {
    id: 'motor-control', name: 'Motor Control Centre', short: 'MCC — 440V Distribution & Starters', rawCat: 'Electrical & Control', icon: '🕹️', color: '#2a8fd4', status: 'running', mapX: 98, mapY: 32.0,
    shortDesc: 'Grouped assembly of motor starters and protection for 440V auxiliary machinery.',
    purpose: 'Centralises the control and protection of multiple electric motors. Contains the contactors, overloads, and fuses for each motor.',
    role: 'Distributes 440V power from the main switchboard to individual motors. Interfaces with the IAS for remote start/stop and status monitoring.',
    importance: 'Simplifies wiring and maintenance. Provides essential protection against motor overloads, short circuits, and phase loss.',
    technical: 'Modular "draw-out" units for easy maintenance. Includes "Star-Delta" or "Soft Start" controllers for larger motors to reduce starting current.',
    components: ['Motor starters (Contactors)', 'Thermal / Electronic overloads', 'Circuit breakers / Fuses', 'Control transformers (110V/24V)', 'Local/Remote switch'],
    watchkeeping: ['Breaker status', 'Overload trip alarms', 'Cleanliness of cabinets (prevent dust buildup)', 'Tightness of connections (periodic thermography)', 'Earth fault indicators']
  },
  {
    id: 'ias', name: 'Integrated Automation System', short: 'IAS — Kongsberg K-Chief', rawCat: 'Automation & Control', icon: '💻', color: '#7c3aed', status: 'running', mapX: 4, mapY: 43.4,
    shortDesc: 'Vessel-wide automation platform monitoring, alarming and controlling machinery systems from the ECR.',
    purpose: 'The IAS monitors thousands of machinery parameters (temperatures, pressures, levels) and generates alarms for any deviations. It also provides remote control of pumps, valves, and generators.',
    role: 'Continuously active 24/7. It is the primary interface between the engineers and the machinery. Data is logged for trend analysis and performance monitoring.',
    importance: 'Modern vessels are classed for UMS (Unattended Machinery Space) operation. The IAS is the technological foundation that allows the engine room to be unmanned at night.',
    technical: 'Consists of operator workstations (OWS) in the ECR and Bridge, connected via a redundant Ethernet network to Distributed Processing Units (DPU) and I/O modules throughout the engine room.',
    components: ['ECR operator workstations', 'Redundant Ethernet network', 'Distributed Processing Units (DPU)', 'I/O modules (Analogue/Digital)', 'Alarm buzzers and flashing lights', 'Data logger and trending server'],
    watchkeeping: ['Alarm list status — investigate all active alarms', 'Communication health between DPUs', 'Analogue point health (no "failed" sensors)', 'Standby pump auto-start test capability', 'IAS backup power (UPS) status']
  },
  {
    id: 'bridge-systems', name: 'Bridge Control Systems', short: 'Navigation & Propulsion Control Consoles', rawCat: 'Automation & Control', icon: '🚢', color: '#7c3aed', status: 'running', mapX: 12, mapY: 43.4,
    shortDesc: 'Bridge consoles for propulsion control, steering, and navigation data integration.',
    purpose: 'Provides the interface for the Deck Officers to control the vessel\'s movement and monitor critical machinery status from the bridge.',
    role: 'Includes the telegraph (propulsion order), steering stand, thruster controls, and IAS slave workstations. It integrates data from radar, ECDIS, and engine sensors.',
    importance: 'The bridge is the command centre. Reliable communication and control between the bridge and engine room are essential for safe navigation.',
    technical: 'Uses redundant serial and Ethernet links to the ECR and steering gear. Includes emergency override controls (e.g., emergency stop) that bypass the automation.',
    components: ['Engine telegraph / Lever', 'Steering wheel / Autopilot', 'Thruster controls', 'IAS slave workstation', 'VDR (Voyage Data Recorder) interface', 'Emergency stop buttons'],
    watchkeeping: ['Control location (Bridge/ECR)', 'Telegraph response', 'Steering mode (Manual/Auto)', 'Alarm repeater status', 'Communication link health']
  },
  {
    id: 'steering-gear', name: 'Steering Gear', short: 'Electro-Hydraulic Ram Type', rawCat: 'Propulsion & Steering', icon: '☸️', color: '#10b981', status: 'running', mapX: 20, mapY: 43.4,
    shortDesc: 'Electro-hydraulic system converting steering commands into rudder movement.',
    purpose: 'Provides the force required to turn the rudder and maintain the vessel\'s heading. It is the most critical system for navigation safety.',
    role: 'Operates continuously at sea. Usually consists of two independent hydraulic power units (HPU). Both are run during manoeuvring for maximum response speed and redundancy.',
    importance: 'Loss of steering gear results in a "Not Under Command" (NUC) situation, posing an immediate risk of collision or grounding. It is a mandatory SOLAS system with strict redundancy requirements.',
    technical: 'A 2-ram or 4-ram hydraulic actuator. Variable displacement pumps (e.g., Hele-Shaw or Swashplate) provide precise control of oil flow to the rams. Includes a hunting gear for mechanical feedback.',
    components: ['Hydraulic power units (HPU) ×2', 'Hydraulic rams and cylinders', 'Tiller arm and rudder stock', 'Telemotor (remote control) system', 'Emergency steering position', 'Expansion tank and oil cooler'],
    watchkeeping: ['HPU motor current and temperature', 'Hydraulic oil level and temperature', 'System pressure (up to 200 bar)', 'Visual check for oil leaks from seals', 'Rudder angle repeater vs. actual position', 'Weekly emergency steering drill']
  },
  {
    id: 'rudder-actuator', name: 'Rudder Actuator', short: 'Rotary Vane or Ram Actuator', rawCat: 'Propulsion & Steering', icon: '📐', color: '#10b981', status: 'running', mapX: 28, mapY: 43.4,
    shortDesc: 'The physical mechanism that applies torque to the rudder stock.',
    purpose: 'Directly applies the hydraulic force from the steering gear pumps to the rudder stock to rotate the rudder.',
    role: 'The interface between the hydraulic system and the mechanical rudder. It must withstand massive hydrodynamic forces from the sea, especially in heavy weather.',
    importance: 'Mechanical failure of the actuator (e.g., snapped bolts or failed seals) causes total loss of steering. It is designed with a high safety factor.',
    technical: 'Rotary vane types are compact and provide constant torque; ram types are more traditional and easier to maintain. Both use high-pressure hydraulic oil (up to 250 bar).',
    components: ['Rudder stock', 'Actuator housing', 'Internal vanes or external rams', 'High-pressure seals', 'Grease-lubricated carrier bearing'],
    watchkeeping: ['Seal integrity (no weeping)', 'Carrier bearing temperature', 'Grease lubrication status', 'Vibration or unusual noise during movement', 'Limit switch functionality']
  },
  {
    id: 'bow-thruster', name: 'Bow Thruster', short: 'Controllable Pitch Propeller — 2,500 kW', rawCat: 'Propulsion & Steering', icon: '⬅️', color: '#10b981', status: 'standby', mapX: 36, mapY: 43.4,
    shortDesc: 'Transverse propeller in the bow for enhanced manoeuvrability during docking.',
    purpose: 'Provides lateral (sideways) thrust at the bow to assist in docking, undocking, and station-keeping without the need for tugs.',
    role: 'Used only during manoeuvring and port operations. Usually driven by a large electric motor. Thrust is varied by changing the pitch of the propeller blades (CPP).',
    importance: 'Critical for safe docking in high winds or tight harbours. Reduces reliance on external tug assistance, saving time and cost.',
    technical: 'A tunnel-mounted controllable pitch propeller. Driven by a high-voltage (6.6 kV) motor. Includes its own independent hydraulic system for pitch control and lubrication.',
    components: ['Tunnel assembly', 'CPP propeller and hub', 'Electric drive motor (HV)', 'Pitch control hydraulic unit', 'Header tank for lubrication', 'Grid bars (prevent debris entry)'],
    watchkeeping: ['Motor current and winding temperature', 'Header tank level (check for water ingress)', 'Hydraulic pitch pressure', 'Vibration levels', 'Seal health (no oil sheen in water)']
  },
  {
    id: 'stern-thruster', name: 'Stern Thruster', short: 'Controllable Pitch Propeller — 1,500 kW', rawCat: 'Propulsion & Steering', icon: '➡️', color: '#10b981', status: 'standby', mapX: 44, mapY: 43.4,
    shortDesc: 'Transverse propeller in the stern for precise lateral movement control.',
    purpose: 'Provides lateral thrust at the stern, working in conjunction with the bow thruster and main rudder to allow the vessel to move sideways (crabbing) or rotate in place.',
    role: 'Used during docking and DP (Dynamic Positioning) operations. Similar in design to the bow thruster but usually with slightly lower power.',
    importance: 'Essential for high-precision manoeuvring and maintaining position in offshore operations. Provides an extra layer of safety in confined waters.',
    technical: 'Tunnel-mounted CPP. Driven by an electric motor. Requires significant electrical power, often requiring two main generators to be online.',
    components: ['Tunnel assembly', 'Propeller hub', 'Electric motor', 'Hydraulic power pack', 'Lubrication system'],
    watchkeeping: ['Motor load', 'Hydraulic pressure', 'Oil level', 'Vibration', 'Seal integrity']
  },
  {
    id: 'stabilizer-fins', name: 'Stabilizer Fins', short: 'Active Retractable Fins', rawCat: 'Propulsion & Steering', icon: '⚖️', color: '#10b981', status: 'standby', mapX: 52, mapY: 43.4,
    shortDesc: 'Active fins extending from the hull to reduce vessel roll in heavy seas.',
    purpose: 'Reduces the rolling motion of the vessel in rough weather, improving crew comfort, cargo safety, and fuel efficiency.',
    role: 'Deployed at sea in moderate to heavy swells. A gyro-control system senses the roll and automatically adjusts the angle of the fins to create counter-acting lift.',
    importance: 'Critical for passenger comfort on cruise ships and for preventing cargo shift on container or Ro-Ro vessels. Reduces hull stress in heavy weather.',
    technical: 'Two retractable fins (port and starboard). Electro-hydraulic actuators tilt the fins. A sophisticated control system uses PID logic based on gyro inputs.',
    components: ['Retractable fins', 'Fin boxes (hull recesses)', 'Tilting actuators', 'Hydraulic power unit', 'Roll-sensing gyroscope', 'Control console'],
    watchkeeping: ['Fin extension/retraction status', 'Hydraulic oil pressure and temperature', 'Roll reduction performance', 'Visual check for leaks in the fin room', 'Sea growth on fins (if visible)']
  },
  {
    id: 'bilge-pump', name: 'Bilge Pump', short: 'Self-Priming Centrifugal — 150 m³/h', rawCat: 'Safety & Environmental', icon: '🚱', color: '#ef4444', status: 'standby', mapX: 60, mapY: 43.4,
    shortDesc: 'Emergency pump for removing accumulated water from engine room bilges.',
    purpose: 'Removes water that accumulates in the engine room bilges from leaks, maintenance, or emergencies (e.g., pipe burst) to prevent flooding.',
    role: 'Used daily for routine bilge management and permanently ready for emergency use. Must be self-priming as it often draws air from empty bilge wells.',
    importance: 'A critical safety system for preventing vessel foundering. Failure to manage bilge levels can lead to electrical shorts and loss of stability.',
    technical: 'A self-priming centrifugal pump or a piston pump. Connected to a bilge manifold that can draw from any compartment in the engine room.',
    components: ['Pump casing and impeller', 'Vacuum priming unit', 'Electric drive motor', 'Bilge manifold and valves', 'Mud boxes (strainers)'],
    watchkeeping: ['Suction and discharge pressure', 'Priming time', 'Bilge well levels', 'Strainer cleanliness', 'Oil content (must go through OWS)']
  },
  {
    id: 'oily-water-separator', name: 'Oily Water Separator', short: 'OWS — 15 ppm Discharge Limit', rawCat: 'Safety & Environmental', icon: '💧', color: '#10b981', status: 'running', mapX: 68, mapY: 43.4,
    shortDesc: 'Environmental system filtering oil from bilge water before overboard discharge.',
    purpose: 'Treats oily bilge water to remove oil contaminants, ensuring that any water discharged overboard contains less than 15 parts per million (ppm) of oil, as per MARPOL regulations.',
    role: 'Operates periodically to empty the bilge holding tank. An Oil Content Monitor (OCM) continuously checks the output and will automatically stop the discharge if the 15 ppm limit is exceeded.',
    importance: 'Strictly regulated by MARPOL Annex I. Illegal discharge of oily water is a major criminal offence and leads to massive fines and vessel detention.',
    technical: 'Uses a combination of gravity separation (coalescing filters) and secondary treatment (adsorption or centrifugal) to achieve the 15 ppm limit.',
    components: ['Separation tank', 'Coalescing filters', 'Oil Content Monitor (OCM)', '3-way divert valve', 'Sludge pump', 'Clean water discharge pump'],
    watchkeeping: ['OCM reading (ppm) — must be < 15', 'Filter differential pressure', 'Oil discharge frequency', 'Oil Record Book (ORB) entries', 'Seal status of overboard valve']
  },
  {
    id: 'sewage-treatment', name: 'Sewage Treatment Plant', short: 'Biological Aeration Type', rawCat: 'Safety & Environmental', icon: '🚽', color: '#10b981', status: 'running', mapX: 76, mapY: 43.4,
    shortDesc: 'Biological treatment system for vessel black and grey water.',
    purpose: 'Treats all sewage (black water) and galley/shower water (grey water) produced on board to a standard safe for overboard discharge, as per MARPOL Annex IV.',
    role: 'Operates continuously. Uses aerobic bacteria to break down organic matter. The treated water is disinfected (usually with chlorine or UV) before discharge.',
    importance: 'Prevents marine pollution and the spread of disease. Essential for compliance with international and local environmental regulations.',
    technical: 'A multi-chamber tank: Aeration chamber (bacteria), Settling chamber (sludge separation), and Disinfection chamber. Requires a constant supply of air from blowers.',
    components: ['Aeration tank', 'Air blowers', 'Discharge pump', 'Sludge return pump', 'Chlorine dosing or UV unit', 'Macerator pump'],
    watchkeeping: ['Blower operation', 'Effluent clarity', 'Chlorine level / UV lamp status', 'Sludge level', 'Odour control']
  },
  {
    id: 'ballast-pump', name: 'Ballast Pump', short: 'Centrifugal — 800 m³/h', rawCat: 'Hull & Piping', icon: '⚖️', color: '#0369a1', status: 'standby', mapX: 84, mapY: 43.4,
    shortDesc: 'High-capacity pump for transferring seawater into and out of ballast tanks.',
    purpose: 'Moves large volumes of seawater into or out of ballast tanks to control the vessel\'s trim, list, draught, and stability.',
    role: 'Used primarily during cargo operations in port. At sea, it may be used for adjusting trim or for emergency bilge suction.',
    importance: 'Critical for maintaining vessel stability and structural integrity during loading and unloading. Failure can lead to excessive hull stress or capsizing.',
    technical: 'Large centrifugal pump, often with a high flow rate. Connected to a complex ballast manifold serving tanks throughout the vessel.',
    components: ['Pump casing', 'Impeller', 'Electric motor', 'Ballast manifold', 'Remote-controlled valves'],
    watchkeeping: ['Discharge pressure', 'Motor current', 'Tank levels (via IAS)', 'Valve position feedback', 'Pump priming status']
  },
  {
    id: 'ballast-water-treatment', name: 'Ballast Water Treatment', short: 'BWTS — UV/Filtration or Chemical', rawCat: 'Safety & Environmental', icon: '🦠', color: '#10b981', status: 'standby', mapX: 92, mapY: 43.4,
    shortDesc: 'System for killing invasive species in ballast water before discharge.',
    purpose: 'Treats ballast water to remove or kill invasive aquatic organisms and pathogens, preventing their spread between different ecological regions.',
    role: 'Used whenever ballast water is taken on or discharged. A mandatory requirement under the IMO Ballast Water Management Convention.',
    importance: 'Protects global marine biodiversity. Non-compliance leads to heavy fines and prevents the vessel from entering many ports.',
    technical: 'Commonly uses a two-stage process: 50-micron filtration followed by UV irradiation or chemical injection (e.g., electro-chlorination).',
    components: ['Auto-backwash filter', 'UV reactor or Chemical injector', 'Control panel', 'Flow meter', 'Tro sensor (for chemical types)'],
    watchkeeping: ['Filter differential pressure', 'UV intensity or chemical dosage', 'Flow rate', 'System alarms', 'BWTS logbook entries']
  },
  {
    id: 'fire-pump-main', name: 'Main Fire Pump', short: 'Centrifugal — 120 m³/h @ 8 bar', rawCat: 'Safety & Environmental', icon: '🔥', color: '#ef4444', status: 'standby', mapX: 98, mapY: 43.4,
    shortDesc: 'Primary pump for supplying the vessel\'s fire main with high-pressure seawater.',
    purpose: 'Provides high-pressure seawater to the fire hydrants, foam systems, and water spray systems throughout the vessel for firefighting.',
    role: 'Permanently ready for immediate start. Usually two main fire pumps are located in the engine room. They can be started from the bridge, ECR, or local stations.',
    importance: 'The primary line of defence against fire. Must be capable of maintaining pressure even if multiple hoses are in use.',
    technical: 'Centrifugal pump designed for high head (pressure). Must be able to deliver at least two jets of water to any part of the ship.',
    components: ['Pump casing', 'Impeller', 'Electric motor', 'Relief valve', 'Pressure gauge'],
    watchkeeping: ['Discharge pressure (min 7-8 bar)', 'Auto-start functionality', 'Valve alignment to fire main', 'Motor current', 'Weekly testing']
  },
  {
    id: 'emergency-fire-pump', name: 'Emergency Fire Pump', short: 'Independent Diesel Driven', rawCat: 'Safety & Environmental', icon: '🚨', color: '#ef4444', status: 'standby', mapX: 4, mapY: 54.8,
    shortDesc: 'Independent fire pump located outside the engine room for emergency use.',
    purpose: 'Provides fire main pressure if the main fire pumps in the engine room are disabled by fire, flooding, or power failure.',
    role: 'Located in a separate compartment (e.g., steering gear room or bow). Has its own independent sea suction and power source (usually a small diesel engine).',
    importance: 'A critical SOLAS requirement. Ensures that firefighting capability is maintained even in a "worst-case" engine room emergency.',
    technical: 'Diesel-driven centrifugal pump. Must be able to start in cold conditions and have its own fuel supply for at least 3 hours.',
    components: ['Diesel engine', 'Centrifugal pump', 'Independent sea suction', 'Fuel tank', 'Starting batteries / hand start'],
    watchkeeping: ['Weekly start test', 'Fuel level', 'Battery charge', 'Sea suction valve status', 'Room temperature']
  },
  {
    id: 'co2-system', name: 'CO2 Fixed Fire System', short: 'High Pressure CO2 Battery', rawCat: 'Safety & Environmental', icon: '💨', color: '#ef4444', status: 'running', mapX: 12, mapY: 54.8,
    shortDesc: 'Total flooding fire suppression system for the engine room.',
    purpose: 'Extinguishes major fires in the engine room or cargo holds by displacing oxygen with a high concentration of Carbon Dioxide (CO2).',
    role: 'The "last resort" system. Used only after the engine room has been evacuated and sealed. Controlled from a dedicated CO2 release station.',
    importance: 'Capable of extinguishing massive fires that cannot be fought with hoses. However, it is lethal to humans and requires strict safety protocols.',
    technical: 'A bank of high-pressure CO2 cylinders connected to a manifold and discharge nozzles. Includes pre-discharge alarms and ventilation shutdowns.',
    components: ['CO2 cylinder bank', 'Release cabinet (pilot bottles)', 'Main discharge valve', 'Nozzles', 'Pre-discharge sirens and beacons'],
    watchkeeping: ['Cylinder pressure / weight', 'Release cabinet security (sealed)', 'Alarm system health', 'Ventilation flap integrity', 'Annual inspection status']
  },
  {
    id: 'water-mist-system', name: 'Water Mist System', short: 'Hyper-Mist — Local Protection', rawCat: 'Safety & Environmental', icon: '🚿', color: '#ef4444', status: 'running', mapX: 20, mapY: 54.8,
    shortDesc: 'High-pressure water mist system for local fire protection of high-risk machinery.',
    purpose: 'Extinguishes or controls fires at specific high-risk areas (e.g., engine tops, purifiers, boilers) using a fine mist of water that cools and smothers the flame.',
    role: 'Operates automatically or manually. Unlike CO2, it can be used while people are in the room as it is not toxic. It uses very little water, reducing damage to equipment.',
    importance: 'Provides rapid response to the most common engine room fires. Often prevents a small fire from becoming a major disaster requiring CO2.',
    technical: 'High-pressure pump (up to 140 bar) and specialised nozzles that create droplets smaller than 100 microns. Can be fresh water or seawater based.',
    components: ['High-pressure pump unit', 'Fresh water tank', 'Section valves', 'Mist nozzles', 'Flame / Smoke detectors'],
    watchkeeping: ['Pump ready status', 'Water tank level', 'Section valve alignment', 'Detector health', 'Weekly system test']
  },
  {
    id: 'foam-system', name: 'Foam Fire System', short: 'Low/High Expansion Foam', rawCat: 'Safety & Environmental', icon: '🧼', color: '#ef4444', status: 'standby', mapX: 28, mapY: 54.8,
    shortDesc: 'Fire suppression system for oil fires using foam concentrate.',
    purpose: 'Extinguishes flammable liquid fires (oil, fuel) by smothering the surface with a layer of foam, cutting off oxygen and cooling the fuel.',
    role: 'Used in areas with high oil fire risk, such as the boiler front or fuel valve testing area. Can be portable applicators or a fixed system.',
    importance: 'The most effective way to fight large pool fires of oil. Prevents re-ignition by maintaining a stable foam blanket.',
    technical: 'Mixes water with foam concentrate using an inductor or proportioner. High-expansion foam can fill an entire room; low-expansion is for surface application.',
    components: ['Foam concentrate tank', 'Foam proportioner / Inductor', 'Foam branch pipes / generators', 'Control valves'],
    watchkeeping: ['Foam concentrate level', 'Proportioner setting', 'Valve readiness', 'Foam quality (periodic lab test)', 'Nozzle cleanliness']
  },
  {
    id: 'air-compressor-main', name: 'Main Air Compressor', short: '3-Stage Reciprocating — 30 bar', rawCat: 'Compressed Air', icon: '💨', color: '#64748b', status: 'running', mapX: 36, mapY: 54.8,
    shortDesc: 'High-pressure compressor for main engine starting air.',
    purpose: 'Compresses atmospheric air to 30 bar for storage in the main air reservoirs, primarily for starting the main diesel engine.',
    role: 'Runs automatically to maintain reservoir pressure. Usually two compressors are fitted. They are water-cooled and have multiple stages with intercoolers.',
    importance: 'Without 30 bar air, the main engine cannot be started. It is the "energy storage" required for propulsion.',
    technical: 'Reciprocating piston type. 2 or 3 stages of compression. Includes automatic drains to remove moisture between stages.',
    components: ['Compressor block', 'Electric motor', 'Intercoolers and aftercooler', 'Automatic moisture drains', 'Pressure switches', 'Unloader valves'],
    watchkeeping: ['Discharge pressure (30 bar)', 'Stage pressures and temperatures', 'Cooling water flow', 'Lube oil level and pressure', 'Automatic drain operation', 'Vibration and noise']
  },
  {
    id: 'air-reservoir', name: 'Main Air Reservoir', short: 'Starting Air Receiver — 30 bar', rawCat: 'Compressed Air', icon: '🔋', color: '#64748b', status: 'running', mapX: 44, mapY: 54.8,
    shortDesc: 'Large pressure vessels storing 30 bar air for engine starting.',
    purpose: 'Stores a large volume of compressed air at 30 bar, providing enough energy for multiple consecutive starts of the main engine without the compressors running.',
    role: 'Two reservoirs are mandatory. They must have enough capacity for 12 starts of a reversible engine or 6 starts of a non-reversible engine.',
    importance: 'A critical safety reserve. Loss of air pressure means the engine cannot be restarted if it stops during manoeuvring.',
    technical: 'Large cylindrical pressure vessels. Fitted with safety valves, pressure gauges, and large-bore discharge valves. Must be drained of water regularly.',
    components: ['Pressure vessel', 'Main starting air valve', 'Safety valve (set at ~33 bar)', 'Drain valve', 'Pressure gauge and transmitter'],
    watchkeeping: ['Pressure (maintain 25-30 bar)', 'Daily drainage of accumulated water', 'Safety valve integrity', 'Visual check for leaks', 'Internal inspection status (Class requirement)']
  },
  {
    id: 'control-air-dryer', name: 'Control Air Dryer', short: 'Refrigeration or Desiccant Dryer', rawCat: 'Compressed Air', icon: '🌵', color: '#64748b', status: 'running', mapX: 52, mapY: 54.8,
    shortDesc: 'System for removing moisture from compressed air used for automation.',
    purpose: 'Removes water vapour from the compressed air used for pneumatic controls and automation to prevent corrosion and freezing in the lines.',
    role: 'Operates continuously. Control air must be extremely dry and oil-free to ensure the reliability of sensitive pneumatic actuators and sensors.',
    importance: 'Wet control air causes pneumatic valves to stick or fail, leading to loss of machinery control. It is essential for the "health" of the automation system.',
    technical: 'Refrigeration dryers cool the air to condense water; desiccant dryers use chemical beads (silica gel) to adsorb moisture.',
    components: ['Refrigerant compressor (for ref. type)', 'Heat exchangers', 'Desiccant towers (for desiccant type)', 'Automatic condensate drains', 'Dew point monitor'],
    watchkeeping: ['Dew point temperature (target < 3°C)', 'Refrigerant pressure', 'Automatic drain operation', 'Filter differential pressure', 'Desiccant colour (if visible)']
  },
  {
    id: 'service-air', name: 'Service Air System', short: '7 bar General Purpose Air', rawCat: 'Compressed Air', icon: '🔧', color: '#64748b', status: 'running', mapX: 60, mapY: 54.8,
    shortDesc: 'Low-pressure air system for tools, cleaning, and general utility.',
    purpose: 'Provides 7 bar compressed air for pneumatic tools, cleaning, sea chest blow-back, and other general engine room duties.',
    role: 'Supplied from the main air reservoirs via a pressure-reducing valve or from a dedicated low-pressure compressor.',
    importance: 'Essential for maintenance and daily operations. However, it must be managed to ensure it doesn\'t deplete the starting air reserve.',
    technical: 'Usually a 7-8 bar system. Includes multiple outlets (quick-connect) throughout the engine room and on deck.',
    components: ['Pressure reducing valve', 'Service air receiver', 'Air filters and lubricators (at outlets)', 'Distribution piping'],
    watchkeeping: ['System pressure (7 bar)', 'Filter cleanliness', 'Drainage of moisture', 'Leakage in distribution lines']
  },
  {
    id: 'emergency-air', name: 'Emergency Air Compressor', short: 'Hand or Small Diesel Driven', rawCat: 'Compressed Air', icon: '🆘', color: '#64748b', status: 'standby', mapX: 68, mapY: 54.8,
    shortDesc: 'Small compressor for filling a starting air bottle from a dead-ship state.',
    purpose: 'Provides a means to fill a small air bottle to start one auxiliary engine when the vessel is in a "dead-ship" state (no power, no air).',
    role: 'The starting point for recovering from a total blackout. Once one generator is started, the main compressors can be used.',
    importance: 'The "spark" that brings a dead ship back to life. A mandatory SOLAS requirement for emergency preparedness.',
    technical: 'Usually a small hand-cranked compressor or a tiny diesel-driven unit. It only needs to fill one small bottle to 30 bar.',
    components: ['Small compressor', 'Hand crank or small diesel engine', 'Emergency air bottle', 'Isolation valves'],
    watchkeeping: ['Readiness for immediate use', 'Fuel level (if diesel)', 'Hand crank availability', 'Bottle pressure']
  },
  {
    id: 'fw-generator', name: 'Fresh Water Generator', short: 'Vacuum Evaporator — 30 m³/day', rawCat: 'Utilities', icon: '💧', color: '#0ea5e9', status: 'running', mapX: 76, mapY: 54.8,
    shortDesc: 'Vacuum distillation system producing fresh water from seawater using waste heat.',
    purpose: 'Produces high-purity distilled water from seawater for drinking, washing, and technical use, utilizing the waste heat from the main engine jacket water.',
    role: 'Operates continuously at sea when the main engine is at sufficient load. Uses a vacuum to lower the boiling point of seawater to ~45°C, preventing scale formation.',
    importance: 'Allows the vessel to be self-sufficient for fresh water, reducing the need to carry large volumes of water and increasing cargo capacity.',
    technical: 'A shell-and-tube or plate heat exchanger. Seawater is evaporated in the lower section and condensed in the upper section. A salinity controller rejects water if it exceeds 10 ppm.',
    components: ['Evaporator chamber', 'Condenser chamber', 'Ejector pump (vacuum & brine)', 'Distillate pump', 'Salinity controller', 'Flow meter'],
    watchkeeping: ['Vacuum level (target -0.9 bar)', 'Salinity (must be < 10 ppm)', 'Distillate flow rate', 'Jacket water inlet/outlet temp', 'Scale buildup in evaporator']
  },
  {
    id: 'reverse-osmosis', name: 'Reverse Osmosis Plant', short: 'RO Desalination Unit', rawCat: 'Utilities', icon: '🧪', color: '#0ea5e9', status: 'standby', mapX: 84, mapY: 54.8,
    shortDesc: 'Membrane-based desalination system for producing fresh water.',
    purpose: 'Provides an alternative method of producing fresh water from seawater, especially useful when the main engine is stopped or at low load.',
    role: 'Used as a backup to the FWG or in areas where waste heat is insufficient. Uses high-pressure pumps to force seawater through semi-permeable membranes.',
    importance: 'Provides redundancy for fresh water production. Essential for vessels with high water demand or those spending long periods at anchor.',
    technical: 'High-pressure pump (up to 60 bar) forces water through spiral-wound membranes. Requires extensive pre-filtration to prevent membrane fouling.',
    components: ['High-pressure pump', 'RO membrane modules', 'Pre-filters (sand/cartridge)', 'Chemical dosing (anti-scalant)', 'Post-treatment (pH adjustment)'],
    watchkeeping: ['Feed and permeate pressure', 'Permeate quality (TDS/Conductivity)', 'Flow rate', 'Pre-filter differential pressure', 'Membrane cleaning (CIP) status']
  },
  {
    id: 'hydrophore-pump', name: 'Hydrophore Pump', short: 'Fresh Water Pressure Set', rawCat: 'Utilities', icon: '🚰', color: '#0ea5e9', status: 'running', mapX: 92, mapY: 54.8,
    shortDesc: 'Pump and pressure tank system for vessel-wide fresh water distribution.',
    purpose: 'Maintains a constant pressure in the vessel\'s fresh water piping system, ensuring water is available at all taps and showers.',
    role: 'Operates automatically based on pressure switches. The pressure tank (hydrophore) contains a cushion of compressed air to prevent the pumps from short-cycling.',
    importance: 'Essential for crew welfare and hygiene. Provides the pressure required for all domestic and technical fresh water services.',
    technical: 'Two centrifugal pumps (one duty, one standby) and a large pressure vessel. Pressure is typically maintained between 4 and 6 bar.',
    components: ['Centrifugal pumps ×2', 'Pressure tank (Hydrophore)', 'Pressure switches', 'Air charging valve', 'Level glass'],
    watchkeeping: ['System pressure (4-6 bar)', 'Pump cycling frequency', 'Water level in tank', 'Air cushion volume', 'Visual check for leaks']
  },
  {
    id: 'hot-water-circ', name: 'Hot Water Circulator', short: 'Calorifier & Circulation Pump', rawCat: 'Utilities', icon: '♨️', color: '#0ea5e9', status: 'running', mapX: 98, mapY: 54.8,
    shortDesc: 'System for heating and circulating domestic hot water.',
    purpose: 'Heats fresh water for domestic use (showers, galley) and circulates it through a ring main to ensure hot water is instantly available at all outlets.',
    role: 'The calorifier (heater) uses steam or electric elements. The circulation pump runs continuously to prevent water from cooling in the pipes.',
    importance: 'Essential for crew comfort and sanitation. Prevents the growth of Legionella bacteria by maintaining water above 60°C.',
    technical: 'Insulated heating tank (calorifier) with thermostatic control. Small centrifugal circulation pump.',
    components: ['Calorifier tank', 'Heating elements / Steam coil', 'Circulation pump', 'Thermostatic mixing valve', 'Expansion valve'],
    watchkeeping: ['Water temperature (60-65°C)', 'Circulation pump operation', 'Thermostat functionality', 'Visual check for leaks', 'Scale buildup in tank']
  },
  {
    id: 'uv-sterilizer', name: 'UV Sterilizer', short: 'Potable Water Disinfection', rawCat: 'Utilities', icon: '💡', color: '#0ea5e9', status: 'running', mapX: 4, mapY: 66.2,
    shortDesc: 'Ultraviolet light system for killing bacteria in potable water.',
    purpose: 'Ensures the safety of the vessel\'s drinking water by using UV radiation to kill bacteria, viruses, and other pathogens.',
    role: 'The final stage of water treatment before distribution. Water flows through a chamber containing high-intensity UV lamps.',
    importance: 'Critical for preventing waterborne diseases among the crew. A mandatory requirement for potable water systems.',
    technical: 'UV-C lamps (254 nm wavelength) inside quartz sleeves. A sensor monitors UV intensity and triggers an alarm if it drops below the required level.',
    components: ['UV lamp chamber', 'Quartz sleeves', 'UV intensity sensor', 'Control panel', 'Hour meter'],
    watchkeeping: ['UV intensity reading', 'Lamp hours (replace every 8000-9000h)', 'Quartz sleeve cleanliness', 'System alarms', 'Water flow rate']
  },
  {
    id: 'refrigeration-plant', name: 'Provision Ref. Plant', short: 'Direct Expansion — R404A/R407F', rawCat: 'Utilities', icon: '❄️', color: '#0ea5e9', status: 'running', mapX: 12, mapY: 66.2,
    shortDesc: 'Cooling system for the vessel\'s food storage rooms.',
    purpose: 'Maintains the required temperatures in the meat room (-18°C), vegetable room (+4°C), and lobby for food preservation.',
    role: 'Operates automatically using thermostats in each room. Usually two compressors are fitted for redundancy.',
    importance: 'Critical for long-term food storage and crew welfare. Failure leads to rapid food spoilage and potential health risks.',
    technical: 'Vapour compression cycle using a refrigerant. Includes compressors, condensers (seawater or air cooled), and evaporators in each room.',
    components: ['Refrigerant compressors ×2', 'Condenser', 'Receiver tank', 'Expansion valves', 'Evaporator fans', 'Oil separator'],
    watchkeeping: ['Room temperatures', 'Refrigerant pressures (suction/discharge)', 'Oil level in compressor', 'Sight glass (moisture/bubbles)', 'Defrost cycle operation']
  },
  {
    id: 'ac-compressor', name: 'A/C Compressor', short: 'HVAC Chiller Unit', rawCat: 'Utilities', icon: '🌬️', color: '#0ea5e9', status: 'running', mapX: 20, mapY: 66.2,
    shortDesc: 'Central cooling unit for the vessel\'s air conditioning system.',
    purpose: 'Provides cooling for the accommodation and ECR air conditioning system, maintaining a comfortable environment for the crew and electronics.',
    role: 'Operates primarily in warm climates. Chills water or refrigerant which is then circulated to Air Handling Units (AHU).',
    importance: 'Essential for crew comfort and the reliable operation of sensitive electronic equipment in the bridge and ECR.',
    technical: 'Large screw or reciprocating compressor. Often uses a chilled water loop to distribute cooling throughout the accommodation.',
    components: ['AC compressor', 'Condenser', 'Chiller / Evaporator', 'Chilled water pump', 'Control system'],
    watchkeeping: ['Chilled water temperature', 'Refrigerant pressures', 'Motor load', 'Visual check for leaks', 'AHU filter cleanliness']
  },
  {
    id: 'ventilation-fan', name: 'ER Ventilation Fan', short: 'Axial Flow — 50,000 m³/h', rawCat: 'Utilities', icon: '🌀', color: '#0ea5e9', status: 'running', mapX: 28, mapY: 66.2,
    shortDesc: 'High-capacity fans for engine room cooling and combustion air.',
    purpose: 'Provides fresh air for engine combustion and removes heat from the engine room to maintain acceptable working temperatures.',
    role: 'Multiple fans are used. Some are dedicated to supplying air to the engines, while others provide general ventilation.',
    importance: 'Critical for engine performance and crew safety. Prevents the buildup of heat and potentially explosive vapours.',
    technical: 'Large axial flow fans with adjustable pitch blades. Often controlled by VFDs to match air supply with engine load.',
    components: ['Fan motor', 'Axial impeller', 'Casing and ducting', 'Fire dampers', 'VFD controller'],
    watchkeeping: ['Motor current', 'Vibration and noise', 'Fire damper status', 'ER ambient temperature', 'Airflow direction']
  },
  {
    id: 'provision-crane', name: 'Provision Crane', short: 'Electro-Hydraulic Davit', rawCat: 'Deck Machinery', icon: '🏗️', color: '#64748b', status: 'standby', mapX: 36, mapY: 66.2,
    shortDesc: 'Small crane for loading food, spares, and equipment.',
    purpose: 'Assists in loading provisions, engine spares, and other equipment from the quay or supply boat to the vessel.',
    role: 'Used primarily in port. Usually located near the galley or engine room stores entrance.',
    importance: 'Essential for efficient loading operations and reducing manual handling risks for the crew.',
    technical: 'Electro-hydraulic or purely electric crane. Includes a winch, slewing motor, and luffing cylinder.',
    components: ['Hydraulic power pack', 'Winch drum and wire', 'Slewing gear', 'Control pendant', 'Limit switches'],
    watchkeeping: ['Wire rope condition', 'Hydraulic oil level', 'Limit switch functionality', 'Brake operation', 'Annual load test status']
  },
  {
    id: 'elevator-machinery', name: 'Elevator Machinery', short: 'Traction or Hydraulic Lift Drive', rawCat: 'Utilities', icon: '🛗', color: '#0ea5e9', status: 'running', mapX: 44, mapY: 66.2,
    shortDesc: 'Drive and control system for the vessel\'s elevator.',
    purpose: 'Provides vertical transport for crew and equipment between different decks of the accommodation and engine room.',
    role: 'Operates automatically. Especially important on large vessels with many decks.',
    importance: 'Improves efficiency and reduces crew fatigue. Essential for moving heavy tools or spares between levels.',
    technical: 'Traction drive with a counterweight or a hydraulic ram. Includes sophisticated safety systems (brakes, overspeed governor).',
    components: ['Drive motor / Pump', 'Control cabinet', 'Overspeed governor', 'Brake mechanism', 'Door interlocks'],
    watchkeeping: ['Smoothness of operation', 'Levelling accuracy', 'Emergency alarm functionality', 'Cleanliness of machine room', 'Monthly safety inspection']
  },
  {
    id: 'incinerator', name: 'Incinerator', short: 'Waste Disposal Unit — MARPOL Annex V', rawCat: 'Safety & Environmental', icon: '🔥', color: '#ef4444', status: 'standby', mapX: 52, mapY: 66.2,
    shortDesc: 'High-temperature furnace for burning solid waste and oil sludge.',
    purpose: 'Reduces the volume of shipboard waste by burning solid garbage and oily sludge in a controlled, high-temperature environment.',
    role: 'Used periodically at sea (prohibited in many coastal areas). Must maintain a minimum temperature (usually 850-1200°C) to ensure complete combustion.',
    importance: 'Essential for waste management and compliance with MARPOL Annex V. Reduces the amount of waste that must be landed ashore.',
    technical: 'Dual-chamber furnace with diesel burners. Includes a sludge dosing pump and a solid waste loading door with interlocks.',
    components: ['Combustion chamber', 'Sludge burner', 'Pilot burner (diesel)', 'Flue gas fan', 'Control panel', 'Ash door'],
    watchkeeping: ['Combustion temperature', 'Flue gas temperature', 'Sludge feed rate', 'Flame condition', 'Ash buildup'],
  },
  {
    id: 'bilge-water-separator', name: 'Bilge Water Separator', short: 'OWS — 15 ppm Discharge Limit', rawCat: 'Safety & Environmental', icon: '💧', color: '#10b981', status: 'running', mapX: 60, mapY: 66.2,
    shortDesc: 'Environmental system filtering oil from bilge water before overboard discharge.',
    purpose: 'Treats oily bilge water to remove oil contaminants, ensuring that any water discharged overboard contains less than 15 parts per million (ppm) of oil, as per MARPOL regulations.',
    role: 'Operates periodically to empty the bilge holding tank. An Oil Content Monitor (OCM) continuously checks the output and will automatically stop the discharge if the 15 ppm limit is exceeded.',
    importance: 'Strictly regulated by MARPOL Annex I. Illegal discharge of oily water is a major criminal offence and leads to massive fines and vessel detention.',
    technical: 'Uses a combination of gravity separation (coalescing filters) and secondary treatment (adsorption or centrifugal) to achieve the 15 ppm limit.',
    components: ['Separation tank', 'Coalescing filters', 'Oil Content Monitor (OCM)', '3-way divert valve', 'Sludge pump', 'Clean water discharge pump'],
    watchkeeping: ['OCM reading (ppm) — must be < 15', 'Filter differential pressure', 'Oil discharge frequency', 'Oil Record Book (ORB) entries', 'Seal status of overboard valve']
  },
  {
    id: 'sludge-pump', name: 'Sludge Pump', short: 'Positive Displacement — 5 m³/h', rawCat: 'Safety & Environmental', icon: '💩', color: '#ef4444', status: 'standby', mapX: 68, mapY: 66.2,
    shortDesc: 'Pump for transferring oil sludge and waste to the incinerator or shore.',
    purpose: 'Moves thick, viscous oil sludge (from purifiers and filters) from holding tanks to the incinerator for burning or to the deck manifold for discharge to a shore facility.',
    role: 'Usually a positive displacement pump (e.g., screw or gear pump) capable of handling high-viscosity fluids and solids.',
    importance: 'Essential for managing the vessel\'s oil waste. Failure prevents the cleaning of purifiers and leads to tank overflows.',
    technical: 'Screw or gear pump with high suction capability. Often fitted with a heater in the suction line to improve flow.',
    components: ['Pump casing', 'Screw/Gear rotors', 'Electric motor', 'Pressure relief valve', 'Heating coil (in tank)'],
    watchkeeping: ['Discharge pressure', 'Motor current', 'Tank levels', 'Visual check for leaks', 'Line heating temperature']
  },
  {
    id: 'garbage-compactor', name: 'Garbage Compactor', short: 'Solid Waste Press', rawCat: 'Safety & Environmental', icon: '📦', color: '#10b981', status: 'standby', mapX: 76, mapY: 66.2,
    shortDesc: 'Mechanical press for reducing the volume of solid waste.',
    purpose: 'Compresses dry garbage (cardboard, plastic, tins) into compact bales to save storage space on board before landing it ashore.',
    role: 'Used daily by the crew. Part of the vessel\'s Garbage Management Plan.',
    importance: 'Reduces the physical footprint of waste, improving hygiene and organization in the garbage store.',
    technical: 'Hydraulic or electric press. Includes safety interlocks to prevent operation when the door is open.',
    components: ['Press plate', 'Hydraulic cylinder', 'Control handle', 'Safety cage', 'Baling wire'],
    watchkeeping: ['Hydraulic oil level', 'Safety interlock functionality', 'Bale weight/size', 'Cleanliness of the area']
  },
  {
    id: 'ballast-water-management', name: 'Ballast Water Management', short: 'BWTS — UV/Filtration or Chemical', rawCat: 'Safety & Environmental', icon: '🦠', color: '#10b981', status: 'standby', mapX: 84, mapY: 66.2,
    shortDesc: 'System for killing invasive species in ballast water before discharge.',
    purpose: 'Treats ballast water to remove or kill invasive aquatic organisms and pathogens, preventing their spread between different ecological regions.',
    role: 'Used whenever ballast water is taken on or discharged. A mandatory requirement under the IMO Ballast Water Management Convention.',
    importance: 'Protects global marine biodiversity. Non-compliance leads to heavy fines and prevents the vessel from entering many ports.',
    technical: 'Commonly uses a two-stage process: 50-micron filtration followed by UV irradiation or chemical injection (e.g., electro-chlorination).',
    components: ['Auto-backwash filter', 'UV reactor or Chemical injector', 'Control panel', 'Flow meter', 'Tro sensor (for chemical types)'],
    watchkeeping: ['Filter differential pressure', 'UV intensity or chemical dosage', 'Flow rate', 'System alarms', 'BWTS logbook entries']
  },
  {
    id: 'workshop-lathe', name: 'Workshop Lathe', short: 'Precision Machining Tool', rawCat: 'Maintenance', icon: '⚙️', color: '#64748b', status: 'standby', mapX: 92, mapY: 66.2,
    shortDesc: 'Machine tool for fabricating and repairing engine parts.',
    purpose: 'Allows the engineers to manufacture or repair small mechanical components (shafts, bushings, bolts) on board, reducing reliance on shore support.',
    role: 'Located in the engine room workshop. Used for both routine maintenance and emergency repairs.',
    importance: 'Critical for vessel self-sufficiency, especially on long voyages. Can be the difference between a quick repair and a long delay.',
    technical: 'Engine lathe with various attachments (chucks, tool posts). Requires skilled operation.',
    components: ['Headstock', 'Tailstock', 'Carriage', 'Lead screw', 'Drive motor'],
    watchkeeping: ['Lubrication of ways', 'Tool sharpness', 'Safety guard presence', 'Cleanliness (remove swarf)', 'Electrical safety']
  },
  {
    id: 'welding-station', name: 'Welding Station', short: 'Arc & Gas Welding Equipment', rawCat: 'Maintenance', icon: '👨‍🏭', color: '#64748b', status: 'standby', mapX: 98, mapY: 66.2,
    shortDesc: 'Equipment for permanent joining of metal parts.',
    purpose: 'Provides the means for structural repairs, pipe welding, and fabrication of brackets and supports.',
    role: 'Includes Electric Arc welding and Oxy-Acetylene gas cutting/welding. Used throughout the engine room under a Hot Work Permit.',
    importance: 'Essential for both routine maintenance and emergency structural repairs.',
    technical: 'Inverter-based arc welder and high-pressure gas cylinders with regulators and flash-back arrestors.',
    components: ['Welding inverter', 'Gas cylinders (O2/C2H2)', 'Regulators', 'Flash-back arrestors', 'Welding mask and PPE'],
    watchkeeping: ['Gas cylinder pressure', 'Flash-back arrestor status', 'Cable insulation condition', 'Fire extinguisher presence', 'Hot Work Permit compliance']
  },
  {
    id: 'chemical-storage', name: 'Chemical Storage', short: 'Water Treatment & Cleaning Chemicals', rawCat: 'Utilities', icon: '🧪', color: '#d97706', status: 'running', mapX: 4, mapY: 77.6,
    shortDesc: 'Dedicated area for storing hazardous engine room chemicals.',
    purpose: 'Safely stores the various chemicals required for boiler water treatment, cooling water treatment, fuel additives, and cleaning.',
    role: 'Must be a well-ventilated area with spill containment (bunding) and appropriate safety signage.',
    importance: 'Ensures that hazardous materials are handled and stored correctly, preventing accidents and environmental damage.',
    technical: 'Includes Material Safety Data Sheets (MSDS) for all stored chemicals. Requires eye-wash stations and appropriate PPE nearby.',
    components: ['Spill pallets', 'Ventilation system', 'Safety signage', 'MSDS folder', 'PPE locker'],
    watchkeeping: ['Inventory levels', 'Container integrity (no leaks)', 'Ventilation operation', 'Expiry dates', 'PPE availability']
  },
  {
    id: 'spare-parts-store', name: 'Spare Parts Store', short: 'Engine & Machinery Spares Inventory', rawCat: 'Maintenance', icon: '📦', color: '#64748b', status: 'running', mapX: 12, mapY: 77.6,
    shortDesc: 'Organized storage for critical machinery replacement parts.',
    purpose: 'Houses the inventory of spare parts required for routine maintenance and emergency repairs of all engine room machinery.',
    role: 'Parts are organized and logged in a computerised Planned Maintenance System (PMS). Includes everything from small O-rings to large piston crowns.',
    importance: 'Ensures that the right parts are available when needed, minimizing downtime and ensuring vessel safety.',
    technical: 'Requires a dry, organized environment. Large parts may require overhead rails or cranes for movement.',
    components: ['Racking and shelving', 'Inventory management system (PMS)', 'Lifting equipment', 'Preservation oil/grease'],
    watchkeeping: ['Inventory accuracy', 'Parts condition (no corrosion)', 'Organization and cleanliness', 'Re-order levels', 'Security']
  },
  {
    id: 'ecr-console', name: 'ECR Control Console', short: 'Main Engine & Aux Control Station', rawCat: 'Automation & Control', icon: '🖥️', color: '#7c3aed', status: 'running', mapX: 20, mapY: 77.6,
    shortDesc: 'Central control station in the ECR for monitoring and operating machinery.',
    purpose: 'Provides the primary interface for the Duty Engineer to monitor and control all engine room systems from a climate-controlled environment.',
    role: 'Contains the IAS workstations, main engine telegraph, generator controls, and communication systems. It is the "brain" of the engine room.',
    importance: 'The central hub for all machinery operations. Essential for safe and efficient management of the engine room.',
    technical: 'Ergonomic console housing multiple screens, physical switches, and communication handsets. Integrated with the vessel\'s automation and alarm systems.',
    components: ['IAS workstations', 'Main engine control panel', 'Power management panel', 'Communication handsets (VHF/Internal)', 'Alarm repeater panel'],
    watchkeeping: ['Alarm status', 'Machinery parameters', 'Communication link health', 'Console lighting/display health', 'ECR ambient temperature']
  },
  {
    id: 'hv-transformer', name: 'High Voltage Transformer', short: '6.6 kV / 440 V Step-Down', rawCat: 'Power Generation', icon: '⚡', color: '#2a8fd4', status: 'running', mapX: 28, mapY: 77.6,
    shortDesc: 'Transformers stepping down high voltage for auxiliary machinery and lighting.',
    purpose: 'Reduces the 6.6 kV generation voltage to 440 V for standard engine room motors and further to 220 V for lighting and domestic services.',
    role: 'Operates continuously. Usually two or more transformers are used in parallel or as standby to ensure power availability.',
    importance: 'Critical for the entire low-voltage grid. Failure of a transformer can blackout the accommodation and all 440V auxiliaries.',
    technical: 'Dry-type or oil-cooled transformer. Includes temperature sensors and protection against over-current and earth faults.',
    components: ['Primary windings (6.6 kV)', 'Secondary windings (440 V)', 'Core assembly', 'Temperature sensors (PT100)', 'Enclosure and cooling fans'],
    watchkeeping: ['Winding temperature', 'Load percentage', 'Cooling fan operation', 'Visual check for dust or moisture', 'Insulation resistance (periodic)']
  },
  {
    id: 'shore-connection', name: 'Shore Connection', short: 'Cold Ironing — High Voltage Shore Power', rawCat: 'Power Generation', icon: '🔌', color: '#2a8fd4', status: 'standby', mapX: 36, mapY: 77.6,
    shortDesc: 'System for receiving electrical power from the shore while in port.',
    purpose: 'Allows the vessel to shut down its diesel generators while at berth, reducing local emissions and noise ("Cold Ironing").',
    role: 'Used only in ports equipped with shore power facilities. Includes a cable reel and a synchronising panel to transition from ship to shore power.',
    importance: 'Mandatory in many green ports. Significantly reduces the vessel\'s environmental footprint and fuel consumption in port.',
    technical: 'High-voltage cable and connector. Requires a phase-sequence check and synchronisation with the vessel\'s grid before transfer.',
    components: ['Cable reel and high-voltage cable', 'Shore connection box', 'Synchronising panel', 'Phase sequence relay', 'Isolation transformer'],
    watchkeeping: ['Connection integrity', 'Phase sequence verification', 'Load monitoring during transfer', 'Cable tension', 'Grounding status']
  },
  {
    id: 'emergency-switchboard', name: 'Emergency Switchboard', short: '440 V / 220 V Emergency Grid', rawCat: 'Power Generation', icon: '🚨', color: '#dc2626', status: 'standby', mapX: 44, mapY: 77.6,
    shortDesc: 'Independent switchboard for emergency power distribution.',
    purpose: 'Distributes power from the emergency generator to critical safety systems during a total blackout.',
    role: 'Located in the emergency generator room. Automatically connects to the emergency generator and disconnects from the main grid during a blackout.',
    importance: 'Ensures that life-saving systems (fire pumps, steering, navigation) remain powered even if the main engine room is lost.',
    technical: 'Includes an automatic bus-transfer (ABT) switch. Feeds emergency lighting, radio equipment, and fire detection systems.',
    components: ['Emergency busbars', 'Auto-transfer switch', 'Circuit breakers for emergency loads', 'Battery chargers', 'Voltage and frequency meters'],
    watchkeeping: ['Busbar voltage', 'Battery charger status', 'Breaker alignment', 'Cleanliness and accessibility', 'Weekly functional test']
  },
  {
    id: 'battery-room', name: 'Battery Room', short: 'Emergency & Radio Battery Banks', rawCat: 'Electrical & Control', icon: '🔋', color: '#7c3aed', status: 'running', mapX: 52, mapY: 77.6,
    shortDesc: 'Dedicated room for vessel-wide emergency battery storage.',
    purpose: 'Houses the battery banks that provide immediate power to radio (GMDSS), emergency lighting, and engine starting systems.',
    role: 'Batteries are kept on continuous float charge. The room must be well-ventilated to prevent the buildup of explosive hydrogen gas.',
    importance: 'The ultimate backup power source. Ensures that distress signals can be sent even if all generators fail.',
    technical: 'Lead-acid or NiCd batteries. Includes chargers with automatic failover and earth fault monitoring.',
    components: ['Battery racks', 'Lead-acid / NiCd cells', 'Battery chargers ×2', 'Ventilation fan (explosion-proof)', 'Earth fault monitor'],
    watchkeeping: ['Battery voltage and current', 'Electrolyte level (for flooded types)', 'Ventilation operation', 'Terminal cleanliness and tightness', 'Earth fault status']
  },
  {
    id: 'cathodic-protection', name: 'ICCP System', short: 'Impressed Current Cathodic Protection', rawCat: 'Hull & Piping', icon: '🛡️', color: '#0369a1', status: 'running', mapX: 60, mapY: 77.6,
    shortDesc: 'Electronic system protecting the hull from galvanic corrosion.',
    purpose: 'Prevents corrosion of the ship\'s hull by applying a controlled electrical current that neutralises the galvanic action between the steel hull and seawater.',
    role: 'Operates continuously. A controller monitors the hull potential via reference electrodes and adjusts the current to the anodes.',
    importance: 'Significantly extends the life of the hull coating and prevents structural thinning due to corrosion. Reduces drydocking costs.',
    technical: 'Consists of a power unit, reference electrodes, and insoluble anodes (e.g., titanium) mounted on the hull.',
    components: ['ICCP controller unit', 'Reference electrodes', 'Hull anodes', 'Shaft grounding assembly', 'Rudder bonding cable'],
    watchkeeping: ['Hull potential (mV)', 'Anode current (Amps)', 'System alarm status', 'Shaft grounding brush condition', 'Log readings daily']
  },
  {
    id: 'mgps-system', name: 'MGPS System', short: 'Marine Growth Prevention System', rawCat: 'Cooling System', icon: '🐚', color: '#0369a1', status: 'running', mapX: 68, mapY: 77.6,
    shortDesc: 'Anti-fouling system for seawater piping and heat exchangers.',
    purpose: 'Prevents the growth of barnacles, mussels, and algae inside the seawater cooling system using copper and aluminium anodes.',
    role: 'Anodes are located in the sea chests. A small current dissolves the anodes, releasing ions that create an environment hostile to marine larvae.',
    importance: 'Prevents blockage of pipes and heat exchangers, ensuring consistent cooling performance and reducing maintenance.',
    technical: 'Copper anodes prevent growth; aluminium anodes create a protective film against corrosion. Controlled by a dedicated power unit.',
    components: ['MGPS control panel', 'Copper anodes', 'Aluminium anodes', 'Sea chest mounting assemblies'],
    watchkeeping: ['Anode current (Amps)', 'Remaining anode life (calculated)', 'System alarms', 'Seawater flow rate', 'Log readings daily']
  },
  {
    id: 'stern-tube-seal', name: 'Stern Tube Seal', short: 'Forward & Aft Lip Seals', rawCat: 'Hull & Piping', icon: '⭕', color: '#0369a1', status: 'running', mapX: 76, mapY: 77.6,
    shortDesc: 'Sealing system preventing seawater ingress and oil leakage at the propeller shaft.',
    purpose: 'Provides a watertight seal where the propeller shaft exits the hull, while also containing the lubricating oil for the stern tube bearing.',
    role: 'The aft seal prevents seawater from entering the stern tube; the forward seal prevents oil from leaking into the engine room.',
    importance: 'Critical for hull integrity and environmental protection. A failed aft seal can lead to flooding or oil pollution.',
    technical: 'Multiple Viton or Nitrile lip seals. Often includes a "void space" between seals that is monitored for leakage.',
    components: ['Aft seal assembly', 'Forward seal assembly', 'Seal liner (chrome steel)', 'Header tank', 'Leakage collection bottle'],
    watchkeeping: ['Header tank level', 'Leakage bottle volume', 'Oil temperature', 'Visual check for oil sheen in water', 'Air pressure (for air-type seals)']
  },
  {
    id: 'intermediate-bearing', name: 'Intermediate Bearing', short: 'Plummer Block — Shaft Support', rawCat: 'Propulsion', icon: '🔘', color: '#64748b', status: 'running', mapX: 84, mapY: 77.6,
    shortDesc: 'Support bearings for the long propeller shaft line.',
    purpose: 'Supports the weight of the intermediate propeller shaft and maintains its alignment between the main engine and the stern tube.',
    role: 'Usually oil-lubricated. The number of bearings depends on the length of the shaft line.',
    importance: 'Ensures smooth rotation and prevents shaft deflection. Overheating indicates misalignment or lubrication failure.',
    technical: 'White-metal lined sleeve bearing. Often self-lubricated with an oil ring or forced-lubricated from the main system.',
    components: ['Bearing housing', 'White-metal shells', 'Oil ring / Lubrication pump', 'Cooling water coil', 'Temperature sensor'],
    watchkeeping: ['Bearing temperature', 'Oil level and clarity', 'Vibration', 'Cooling water flow', 'Visual check for leaks']
  },
  {
    id: 'thrust-block', name: 'Thrust Block', short: 'Michell Type — Axial Thrust Bearing', rawCat: 'Propulsion', icon: '🛑', color: '#ea7018', status: 'running', mapX: 92, mapY: 77.6,
    shortDesc: 'Bearing that transmits propeller thrust to the ship\'s hull.',
    purpose: 'Absorbs the massive axial thrust generated by the propeller and transmits it to the vessel\'s structure, preventing the shaft from pushing into the engine.',
    role: 'Located at the forward end of the shaft line, often integrated into the main engine bedplate on large vessels.',
    importance: 'Critical for propulsion. Failure of the thrust pads leads to rapid destruction of the bearing and potential engine damage.',
    technical: 'Uses tilting pads (Michell or Kingsbury type) that create a wedge of oil to support the thrust load.',
    components: ['Thrust collar', 'Tilting thrust pads', 'Leveling plates', 'Lubrication system', 'Temperature sensors'],
    watchkeeping: ['Thrust pad temperature', 'Oil pressure and temperature', 'Axial clearance (wear)', 'Vibration', 'Oil analysis for white metal particles']
  },
  {
    id: 'shaft-grounding', name: 'Shaft Grounding', short: 'Earthing Device — Slip Ring & Brushes', rawCat: 'Electrical & Control', icon: '⚡', color: '#7c3aed', status: 'running', mapX: 98, mapY: 77.6,
    shortDesc: 'Electrical grounding system for the rotating propeller shaft.',
    purpose: 'Provides a low-resistance path for electrical currents to flow from the rotating shaft to the hull, preventing spark erosion of the bearings.',
    role: 'A silver-plated slip ring is mounted on the shaft, with silver-graphite brushes providing the contact.',
    importance: 'Prevents "pitting" and "spark erosion" of the expensive main bearings and stern tube bearings.',
    technical: 'Monitors the voltage potential between the shaft and hull. A high voltage indicates poor grounding.',
    components: ['Slip ring', 'Brush holders', 'Silver-graphite brushes', 'Monitoring voltmeter', 'Alarm unit'],
    watchkeeping: ['Shaft-to-hull voltage (target < 80 mV)', 'Brush wear and cleanliness', 'Slip ring condition', 'Spring tension on brushes', 'Alarm status']
  },
  {
    id: 'deck-crane-hyd', name: 'Deck Crane Hydraulics', short: 'HPU for Cargo/Provision Cranes', rawCat: 'Deck Machinery', icon: '🏗️', color: '#64748b', status: 'standby', mapX: 4, mapY: 89.0,
    shortDesc: 'Hydraulic power unit for operating deck cranes.',
    purpose: 'Provides high-pressure hydraulic oil to the motors and cylinders of the deck cranes for lifting and slewing.',
    role: 'Used during cargo or provision handling. Usually located in a dedicated room near the cranes.',
    importance: 'Essential for cargo operations. Hydraulic leaks are a major safety and environmental concern.',
    technical: 'Variable displacement axial piston pumps. Includes large oil reservoirs, coolers, and high-pressure filters.',
    components: ['Hydraulic pumps', 'Electric drive motors', 'Oil reservoir', 'Oil cooler', 'Control valves', 'Accumulators'],
    watchkeeping: ['System pressure', 'Oil level and temperature', 'Filter differential pressure', 'Visual check for leaks', 'Hose condition']
  },
  {
    id: 'windlass-machinery', name: 'Windlass Machinery', short: 'Anchor Handling Gear', rawCat: 'Deck Machinery', icon: '⚓', color: '#64748b', status: 'standby', mapX: 12, mapY: 89.0,
    shortDesc: 'Drive system for raising and lowering the anchors.',
    purpose: 'Provides the high torque required to lift the heavy anchors and chains from the seabed.',
    role: 'Used during anchoring operations. Can be hydraulic or electric. Includes a "wildcat" (gypsy) that fits the chain links.',
    importance: 'Critical for vessel safety and station-keeping. Failure during anchoring can lead to grounding.',
    technical: 'High-torque motor with a multi-stage reduction gearbox. Includes heavy-duty brakes and a warping head.',
    components: ['Drive motor', 'Reduction gearbox', 'Wildcat (Gypsy)', 'Brake band', 'Clutch mechanism', 'Warping head'],
    watchkeeping: ['Brake condition', 'Gearbox lubrication', 'Motor current / Hydraulic pressure', 'Chain wear', 'Emergency release functionality']
  },
  {
    id: 'mooring-winch', name: 'Mooring Winch', short: 'Constant Tension Winches', rawCat: 'Deck Machinery', icon: '🧵', color: '#64748b', status: 'standby', mapX: 20, mapY: 89.0,
    shortDesc: 'Winches for handling the vessel\'s mooring lines.',
    purpose: 'Assists in pulling the vessel alongside the berth and maintaining its position using mooring ropes or wires.',
    role: 'Used during docking and undocking. "Constant tension" winches automatically adjust to maintain line tension during tide changes.',
    importance: 'Essential for safe mooring. Prevents the vessel from moving away from the berth or snapping lines.',
    technical: 'Electric or hydraulic drive. Includes a drum for storing the line and a warping head for manual handling.',
    components: ['Winch drum', 'Drive motor', 'Brake mechanism', 'Clutch', 'Tension sensor (for CT types)'],
    watchkeeping: ['Line condition (no frays)', 'Brake holding power', 'Lubrication of gears', 'Hydraulic leaks', 'Safe working load (SWL) markers']
  },
  {
    id: 'lifeboat-davit', name: 'Lifeboat Davit', short: 'Gravity or Hydraulic Launching Gear', rawCat: 'Safety & Environmental', icon: '🛶', color: '#ef4444', status: 'standby', mapX: 28, mapY: 89.0,
    shortDesc: 'Launching and recovery system for lifeboats.',
    purpose: 'Provides a reliable means to launch lifeboats safely even under adverse conditions (list/trim) and recover them after drills.',
    role: 'Tested weekly and used during drills. Must be capable of launching by gravity alone (without power).',
    importance: 'Critical life-saving equipment. Must be 100% reliable in an emergency.',
    technical: 'Gravity davits use the boat\'s weight to swing out. Includes a winch with a centrifugal brake to control descent speed.',
    components: ['Davit arms', 'Winch and wire falls', 'Centrifugal brake', 'Release mechanism', 'Limit switches'],
    watchkeeping: ['Wire rope condition', 'Brake functionality', 'Limit switch test', 'Lubrication of sheaves', 'Annual/5-yearly load test status']
  },
  {
    id: 'rescue-boat-crane', name: 'Rescue Boat Crane', short: 'Fast Launching Davit', rawCat: 'Safety & Environmental', icon: '🚤', color: '#ef4444', status: 'standby', mapX: 36, mapY: 89.0,
    shortDesc: 'Dedicated crane for rapid launching of the rescue boat.',
    purpose: 'Ensures the rescue boat can be launched and recovered quickly for "Man Overboard" (MOB) emergencies.',
    role: 'Must be capable of launching the boat in less than 5 minutes. Usually has its own independent power source or accumulator.',
    importance: 'Critical for MOB recovery. Speed and reliability are essential.',
    technical: 'High-speed hydraulic or electric crane. Includes a "wave compensation" system to assist recovery in rough seas.',
    components: ['Crane arm', 'High-speed winch', 'Hydraulic accumulator', 'Slewing motor', 'Remote control pendant'],
    watchkeeping: ['Launch time test', 'Accumulator pressure', 'Wire condition', 'Brake operation', 'Drill performance']
  },
  {
    id: 'gangway-winch', name: 'Gangway Winch', short: 'Accommodation Ladder Hoist', rawCat: 'Deck Machinery', icon: '🪜', color: '#64748b', status: 'standby', mapX: 44, mapY: 89.0,
    shortDesc: 'Small winch for raising and lowering the gangway.',
    purpose: 'Controls the position of the accommodation ladder (gangway) to provide safe access for crew and pilots.',
    role: 'Used in port. Must be adjusted as the vessel\'s draught or the tide changes.',
    importance: 'Essential for safe access. A falling gangway is a major safety hazard.',
    technical: 'Small electric or air-driven winch. Includes a safety brake and limit switches.',
    components: ['Winch motor', 'Wire rope', 'Brake', 'Limit switches', 'Safety stanchions'],
    watchkeeping: ['Wire condition', 'Brake holding', 'Limit switch functionality', 'Gangway structural integrity', 'Safety net presence']
  },
  {
    id: 'bunker-manifold', name: 'Bunker Manifold', short: 'Fuel Receipt Station', rawCat: 'Fuel System', icon: '⛽', color: '#c2520a', status: 'standby', mapX: 52, mapY: 89.0,
    shortDesc: 'The physical connection point for receiving fuel from shore.',
    purpose: 'Provides the interface between the vessel\'s fuel system and the bunker barge or shore facility.',
    role: 'Located on the main deck (port and starboard). Includes valves, pressure gauges, and sampling points.',
    importance: 'The critical point for preventing spills during bunkering. Must be kept clean and well-maintained.',
    technical: 'Standardised flange connections. Includes a "save-all" (drip tray) with a drain to a waste tank.',
    components: ['Manifold valves', 'Pressure gauges', 'Sampling cock', 'Drip tray (Save-all)', 'Blank flanges'],
    watchkeeping: ['Valve integrity', 'Gauge accuracy', 'Cleanliness of drip trays', 'Spill kit availability nearby', 'Lighting for night operations']
  },
  {
    id: 'bunker-sampler', name: 'Bunker Sampler', short: 'Drip Sampler — MARPOL Compliance', rawCat: 'Fuel System', icon: '🧪', color: '#c2520a', status: 'standby', mapX: 60, mapY: 89.0,
    shortDesc: 'Device for collecting a representative fuel sample during bunkering.',
    purpose: 'Collects a continuous "drip" sample of the fuel being received to ensure it meets the ordered specifications and MARPOL sulphur limits.',
    role: 'Mounted on the bunker manifold. The sample is divided into four bottles: for the lab, for the barge, for the ship, and the MARPOL sample.',
    importance: 'The legal evidence of fuel quality. Essential for resolving disputes and proving environmental compliance.',
    technical: 'A simple needle valve or a more sophisticated automatic sampler that adjusts to flow rate.',
    components: ['Sampler body', 'Needle valve', 'Sample container', 'Security seals', 'Sample logbook'],
    watchkeeping: ['Drip rate (consistent throughout)', 'Seal integrity', 'Sample bottle labeling', 'Cleanliness of the sampler', 'Logbook entries']
  },
  {
    id: 'oil-record-book', name: 'Oil Record Book', short: 'ORB Part I — Machinery Space', rawCat: 'Safety & Environmental', icon: '📖', color: '#10b981', status: 'running', mapX: 68, mapY: 89.0,
    shortDesc: 'Legal logbook for all oil-related operations in the engine room.',
    purpose: 'Provides a chronological record of all oil transfers, purifications, and discharges to ensure compliance with MARPOL Annex I.',
    role: 'Maintained by the Chief Engineer and 2nd Engineer. Every entry must be signed by the officer in charge and the Master.',
    importance: 'The most scrutinized document during Port State Control (PSC) inspections. Errors or omissions can lead to massive fines and imprisonment.',
    technical: 'A standardised paper or electronic logbook. Entries follow specific codes (A to I) for different operations.',
    components: ['Logbook pages', 'Standard codes list', 'Officer signatures', 'Master\'s endorsement', 'Electronic backup (if digital)'],
    watchkeeping: ['Entry accuracy', 'Timeliness of entries', 'Signature completeness', 'Consistency with tank soundings', 'Retention of receipts (Bunker Delivery Notes)']
  },
  {
    id: 'pms-workstation', name: 'PMS Workstation', short: 'Planned Maintenance System', rawCat: 'Maintenance', icon: '📅', color: '#64748b', status: 'running', mapX: 76, mapY: 89.0,
    shortDesc: 'Computer system for managing machinery maintenance schedules.',
    purpose: 'Tracks the running hours of all machinery and schedules maintenance tasks based on manufacturer recommendations and class requirements.',
    role: 'Used by all engineers to log completed work, order spare parts, and plan future maintenance.',
    importance: 'Ensures that machinery is maintained correctly, preventing breakdowns and ensuring vessel safety and class compliance.',
    technical: 'Software platform (e.g., AMOS, TM Master) linked to a central database. Includes inventory management and procurement modules.',
    components: ['Workstation PC', 'PMS software', 'Machinery database', 'Spare parts inventory', 'Maintenance history logs'],
    watchkeeping: ['Overdue task list', 'Running hour updates', 'Spare part inventory accuracy', 'Work order completion', 'Class survey status']
  }
];
