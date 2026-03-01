export interface MaritimeTerm {
  id: string;
  title: string;
  description: string;
  category: 'Navigation' | 'Vessel Parts' | 'Operations' | 'History' | 'Terminology' | 'Regulations' | 'Technical' | 'Safety' | 'Environment' | 'Cargo' | 'Crew';
}

export const maritimeTerms: MaritimeTerm[] = [
  {
    id: 'aft',
    title: 'Aft',
    description: 'At, near, or toward the stern (rear) of a ship or boat. It is the opposite of forward.',
    category: 'Terminology'
  },
  {
    id: 'bow',
    title: 'Bow',
    description: 'The front part of a ship or boat. The bow is designed to cut through the water.',
    category: 'Vessel Parts'
  },
  {
    id: 'stern',
    title: 'Stern',
    description: 'The back or aft-most part of a ship or boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'port',
    title: 'Port',
    description: 'The left side of a ship when facing forward (toward the bow). Historically, this side was used for loading in port.',
    category: 'Navigation'
  },
  {
    id: 'starboard',
    title: 'Starboard',
    description: 'The right side of a ship when facing forward (toward the bow). The term comes from "steer-board," as early ships were steered with a board on the right side.',
    category: 'Navigation'
  },
  {
    id: 'hull',
    title: 'Hull',
    description: 'The main body of a ship or boat, including the bottom, sides, and deck, but excluding masts, rigging, and superstructure.',
    category: 'Vessel Parts'
  },
  {
    id: 'keel',
    title: 'Keel',
    description: 'The longitudinal structure along the centerline at the bottom of a vessel\'s hull, on which the rest of the hull is built.',
    category: 'Vessel Parts'
  },
  {
    id: 'knot',
    title: 'Knot',
    description: 'A unit of speed equal to one nautical mile per hour (approximately 1.151 mph or 1.852 km/h).',
    category: 'Terminology'
  },
  {
    id: 'nautical-mile',
    title: 'Nautical Mile',
    description: 'A unit of distance used in navigation, based on the circumference of the Earth and equal to one minute of latitude (1,852 meters).',
    category: 'Terminology'
  },
  {
    id: 'bridge',
    title: 'Bridge',
    description: 'The room or platform from which a ship is commanded and steered.',
    category: 'Vessel Parts'
  },
  {
    id: 'anchor',
    title: 'Anchor',
    description: 'A heavy object, usually made of metal, used to moor a vessel to the sea floor by means of a chain or rope.',
    category: 'Vessel Parts'
  },
  {
    id: 'ballast',
    title: 'Ballast',
    description: 'Heavy material, such as water, sand, or iron, placed low in a vessel to improve its stability and control its draft.',
    category: 'Operations'
  },
  {
    id: 'draft',
    title: 'Draft',
    description: 'The vertical distance between the waterline and the bottom of the hull (keel). It determines the minimum depth of water a ship can safely navigate.',
    category: 'Terminology'
  },
  {
    id: 'bulkhead',
    title: 'Bulkhead',
    description: 'An upright wall within the hull of a ship. Bulkheads provide structural rigidity and can create watertight compartments.',
    category: 'Vessel Parts'
  },
  {
    id: 'galley',
    title: 'Galley',
    description: 'The kitchen on a ship or boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'helm',
    title: 'Helm',
    description: 'The steering apparatus of a vessel, such as a tiller or wheel, or the position of the person steering.',
    category: 'Vessel Parts'
  },
  {
    id: 'leeward',
    title: 'Leeward',
    description: 'The side of a ship or object that is sheltered from the wind. The opposite of windward.',
    category: 'Navigation'
  },
  {
    id: 'windward',
    title: 'Windward',
    description: 'The side of a ship or object that is facing the wind. The opposite of leeward.',
    category: 'Navigation'
  },
  {
    id: 'mast',
    title: 'Mast',
    description: 'A tall vertical spar on a ship or boat, used to support sails, rigging, or antennas.',
    category: 'Vessel Parts'
  },
  {
    id: 'rigging',
    title: 'Rigging',
    description: 'The system of ropes, cables, and chains used to support a ship\'s masts and control its sails.',
    category: 'Vessel Parts'
  },
  {
    id: 'starboard-tack',
    title: 'Starboard Tack',
    description: 'A sailing vessel is on a starboard tack when the wind is blowing from the starboard side of the vessel.',
    category: 'Navigation'
  },
  {
    id: 'port-tack',
    title: 'Port Tack',
    description: 'A sailing vessel is on a port tack when the wind is blowing from the port side of the vessel.',
    category: 'Navigation'
  },
  {
    id: 'fathom',
    title: 'Fathom',
    description: 'A unit of length equal to six feet (1.8288 meters), used especially for measuring the depth of water.',
    category: 'Terminology'
  },
  {
    id: 'scuttle',
    title: 'Scuttle',
    description: 'To deliberately sink a ship by allowing water into the hull, often by opening valves or blowing holes in the hull.',
    category: 'Operations'
  },
  {
    id: 'listing',
    title: 'Listing',
    description: 'The leaning of a ship to one side, usually caused by uneven loading, flooding, or shifting cargo.',
    category: 'Operations'
  },
  {
    id: 'pitch',
    title: 'Pitch',
    description: 'The up-and-down motion of a ship\'s bow and stern in a seaway.',
    category: 'Operations'
  },
  {
    id: 'roll',
    title: 'Roll',
    description: 'The side-to-side motion of a ship in a seaway.',
    category: 'Operations'
  },
  {
    id: 'yaw',
    title: 'Yaw',
    description: 'The rotation of a ship around its vertical axis, causing the bow to swing from side to side.',
    category: 'Operations'
  },
  {
    id: 'berth',
    title: 'Berth',
    description: 'A designated location in a port or harbor used for mooring vessels while they are not at sea, or a bed on a ship.',
    category: 'Operations'
  },
  {
    id: 'solas',
    title: 'SOLAS',
    description: 'The International Convention for the Safety of Life at Sea (SOLAS) is an international maritime treaty which sets minimum safety standards in the construction, equipment and operation of merchant ships.',
    category: 'Regulations'
  },
  {
    id: 'marpol',
    title: 'MARPOL',
    description: 'The International Convention for the Prevention of Pollution from Ships (MARPOL) is the main international convention covering prevention of pollution of the marine environment by ships from operational or accidental causes.',
    category: 'Regulations'
  },
  {
    id: 'colregs',
    title: 'COLREGs',
    description: 'The International Regulations for Preventing Collisions at Sea (COLREGs) are published by the International Maritime Organization (IMO) and set out, among other things, the "rules of the road" or navigation rules to be followed by ships and other vessels at sea to prevent collisions between two or more vessels.',
    category: 'Regulations'
  },
  {
    id: 'imo',
    title: 'IMO',
    description: 'The International Maritime Organization (IMO) is a specialized agency of the United Nations responsible for regulating shipping.',
    category: 'Regulations'
  },
  {
    id: 'stcw',
    title: 'STCW',
    description: 'The International Convention on Standards of Training, Certification and Watchkeeping for Seafarers (STCW) sets qualification standards for masters, officers and watch personnel on seagoing merchant ships.',
    category: 'Regulations'
  },
  {
    id: 'ism-code',
    title: 'ISM Code',
    description: 'The International Safety Management (ISM) Code is an international standard for the safe management and operation of ships and for pollution prevention.',
    category: 'Regulations'
  },
  {
    id: 'isps-code',
    title: 'ISPS Code',
    description: 'The International Ship and Port Facility Security (ISPS) Code is an amendment to the SOLAS Convention (1974/1988) on minimum security arrangements for ships, ports and government agencies.',
    category: 'Regulations'
  },
  {
    id: 'propeller',
    title: 'Propeller',
    description: 'A type of fan that transmits power by converting rotational motion into thrust. A pressure difference is produced between the forward and rear surfaces of the airfoil-shaped blade, and a fluid (such as water or air) is accelerated behind the blade.',
    category: 'Technical'
  },
  {
    id: 'rudder',
    title: 'Rudder',
    description: 'A primary control surface used to steer a ship, boat, submarine, hovercraft, aircraft, or other conveyance that moves through a fluid medium (generally air or water).',
    category: 'Technical'
  },
  {
    id: 'engine-room',
    title: 'Engine Room',
    description: 'The compartment on a ship where the main engines and auxiliary machinery are located.',
    category: 'Technical'
  },
  {
    id: 'bilge',
    title: 'Bilge',
    description: 'The lowest compartment on a ship, below the waterline, where water collects and must be pumped out.',
    category: 'Technical'
  },
  {
    id: 'ballast-tank',
    title: 'Ballast Tank',
    description: 'A compartment within a boat, ship or other floating structure that holds water, which is used as ballast to provide stability for a vessel.',
    category: 'Technical'
  },
  {
    id: 'cofferdam',
    title: 'Cofferdam',
    description: 'A void space between two bulkheads or decks to prevent leakage from one compartment to another.',
    category: 'Technical'
  },
  {
    id: 'double-bottom',
    title: 'Double Bottom',
    description: 'A ship construction method where the bottom of the ship has two complete layers of watertight hull surface.',
    category: 'Technical'
  },
  {
    id: 'freeboard',
    title: 'Freeboard',
    description: 'The distance from the waterline to the upper edge of the hull or deck at the side of a ship.',
    category: 'Terminology'
  },
  {
    id: 'plimsoll-line',
    title: 'Plimsoll Line',
    description: 'A reference mark located on a ship\'s hull that indicates the maximum depth to which the vessel may be safely immersed when loaded with cargo.',
    category: 'Regulations'
  },
  {
    id: 'gross-tonnage',
    title: 'Gross Tonnage',
    description: 'A nonlinear measure of a ship\'s overall internal volume.',
    category: 'Terminology'
  },
  {
    id: 'deadweight-tonnage',
    title: 'Deadweight Tonnage',
    description: 'A measure of how much weight a ship can carry. It is the sum of the weights of cargo, fuel, fresh water, ballast water, provisions, passengers, and crew.',
    category: 'Terminology'
  },
  {
    id: 'ais',
    title: 'AIS',
    description: 'Automatic Identification System (AIS) is an automatic tracking system that uses transceivers on ships and is used by vessel traffic services (VTS).',
    category: 'Navigation'
  },
  {
    id: 'vts',
    title: 'VTS',
    description: 'Vessel Traffic Service (VTS) is a marine traffic monitoring system established by harbor or port authorities, similar to air traffic control for aircraft.',
    category: 'Navigation'
  },
  {
    id: 'radar',
    title: 'Radar',
    description: 'Radio Detection and Ranging (Radar) is a detection system that uses radio waves to determine the range, angle, or velocity of objects.',
    category: 'Navigation'
  },
  {
    id: 'arpa',
    title: 'ARPA',
    description: 'Automatic Radar Plotting Aid (ARPA) is a marine radar with automatic radar plotting aid capability.',
    category: 'Navigation'
  },
  {
    id: 'ecdis',
    title: 'ECDIS',
    description: 'Electronic Chart Display and Information System (ECDIS) is a geographic information system used for nautical navigation that complies with International Maritime Organization (IMO) regulations as an alternative to paper nautical charts.',
    category: 'Navigation'
  },
  {
    id: 'gyrocompass',
    title: 'Gyrocompass',
    description: 'A type of non-magnetic compass which is based on a fast-spinning disc and the rotation of the Earth to find geographical true north.',
    category: 'Navigation'
  },
  {
    id: 'sextant',
    title: 'Sextant',
    description: 'A doubly reflecting navigation instrument that measures the angular distance between two visible objects.',
    category: 'Navigation'
  },
  {
    id: 'dead-reckoning',
    title: 'Dead Reckoning',
    description: 'The process of calculating one\'s current position by using a previously determined position, or fix, and advancing that position based upon known or estimated speeds over elapsed time and course.',
    category: 'Navigation'
  },
  {
    id: 'waypoint',
    title: 'Waypoint',
    description: 'A reference point in physical space used for purposes of navigation, otherwise known as a landmark.',
    category: 'Navigation'
  },
  {
    id: 'port-of-call',
    title: 'Port of Call',
    description: 'An intermediate stop for a ship on its scheduled journey for cargo operation or taking on supplies or fuel.',
    category: 'Operations'
  },
  {
    id: 'bunker',
    title: 'Bunker',
    description: 'A compartment or tank used for storing fuel for a ship\'s engines.',
    category: 'Technical'
  },
  {
    id: 'bunkering',
    title: 'Bunkering',
    description: 'The process of supplying a ship with fuel.',
    category: 'Operations'
  },
  {
    id: 'stevedore',
    title: 'Stevedore',
    description: 'A person or company employed at a dock to load and unload ships.',
    category: 'Operations'
  },
  {
    id: 'manifest',
    title: 'Manifest',
    description: 'A document listing the cargo, passengers, and crew of a ship, aircraft, or vehicle, for the use of customs and other officials.',
    category: 'Operations'
  },
  {
    id: 'bill-of-lading',
    title: 'Bill of Lading',
    description: 'A detailed list of a shipment of goods in the form of a receipt given by the carrier to the person consigning the goods.',
    category: 'Operations'
  },
  {
    id: 'charter-party',
    title: 'Charter Party',
    description: 'A written, or sometimes oral, agreement between a shipowner and a charterer, that allows the charterer the use of the ship or a part of it.',
    category: 'Operations'
  },
  {
    id: 'demurrage',
    title: 'Demurrage',
    description: 'A charge payable to the owner of a chartered ship on failure to load or discharge the ship within the time agreed.',
    category: 'Operations'
  },
  {
    id: 'laytime',
    title: 'Laytime',
    description: 'The amount of time allowed in a charter party for loading and unloading cargo.',
    category: 'Operations'
  },
  {
    id: 'mooring',
    title: 'Mooring',
    description: 'Any permanent structure to which a vessel may be secured.',
    category: 'Operations'
  },
  {
    id: 'fender',
    title: 'Fender',
    description: 'A bumper used to absorb the kinetic energy of a boat or ship berthing against a jetty, quay wall or other vessel.',
    category: 'Vessel Parts'
  },
  {
    id: 'bollard',
    title: 'Bollard',
    description: 'A short, thick post on a ship or quay used for securing a ship\'s mooring lines.',
    category: 'Operations'
  },
  {
    id: 'gangway',
    title: 'Gangway',
    description: 'A narrow passage or platform providing access to a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'superstructure',
    title: 'Superstructure',
    description: 'The parts of a ship or boat, including the bridge and accommodation, that are built above its hull or main deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'funnel',
    title: 'Funnel',
    description: 'The smokestack or chimney on a ship used to expel boiler steam and smoke or engine exhaust.',
    category: 'Vessel Parts'
  },
  {
    id: 'davit',
    title: 'Davit',
    description: 'A crane-like device used on a ship for supporting, raising, and lowering equipment such as boats and anchors.',
    category: 'Vessel Parts'
  },
  {
    id: 'lifeboat',
    title: 'Lifeboat',
    description: 'A small, sturdy boat carried on a larger ship for use in an emergency, especially when the ship is sinking.',
    category: 'Safety'
  },
  {
    id: 'liferaft',
    title: 'Liferaft',
    description: 'An inflatable raft for use in an emergency at sea.',
    category: 'Safety'
  },
  {
    id: 'epirb',
    title: 'EPIRB',
    description: 'An Emergency Position Indicating Radio Beacon (EPIRB) is a type of emergency locator beacon, a portable battery powered radio transmitter used in emergencies to locate boats, aircraft, and people in distress and in need of immediate rescue.',
    category: 'Safety'
  },
  {
    id: 'sart',
    title: 'SART',
    description: 'A Search and Rescue Transponder (SART) is a self-contained, waterproof radar transponder intended for emergency use at sea.',
    category: 'Safety'
  },
  {
    id: 'gmdss',
    title: 'GMDSS',
    description: 'The Global Maritime Distress and Safety System (GMDSS) is an internationally agreed-upon set of safety procedures, types of equipment, and communication protocols used to increase safety and make it easier to rescue distressed ships, boats and aircraft.',
    category: 'Safety'
  },
  {
    id: 'immersion-suit',
    title: 'Immersion Suit',
    description: 'A special type of waterproof dry suit that protects the wearer from hypothermia from immersion in cold water, after abandoning a vessel.',
    category: 'Safety'
  },
  {
    id: 'pyrotechnics',
    title: 'Pyrotechnics',
    description: 'Flares and other visual distress signals used at sea.',
    category: 'Safety'
  },
  {
    id: 'fire-main',
    title: 'Fire Main',
    description: 'A system of pipes and pumps on a ship that provides water for firefighting.',
    category: 'Safety'
  },
  {
    id: 'scba',
    title: 'SCBA',
    description: 'Self-Contained Breathing Apparatus (SCBA) is a device worn by rescue workers, firefighters, and others to provide breathable air in an atmosphere that is immediately dangerous to life or health.',
    category: 'Safety'
  },
  {
    id: 'watertight-door',
    title: 'Watertight Door',
    description: 'A door on a ship that is designed to prevent the passage of water from one compartment to another.',
    category: 'Safety'
  },
  {
    id: 'bilge-pump',
    title: 'Bilge Pump',
    description: 'A water pump used to remove bilge water.',
    category: 'Technical'
  },
  {
    id: 'auxiliary-engine',
    title: 'Auxiliary Engine',
    description: 'An engine on a ship used for purposes other than propulsion, such as generating electricity.',
    category: 'Technical'
  },
  {
    id: 'generator',
    title: 'Generator',
    description: 'A machine that converts mechanical energy into electrical energy.',
    category: 'Technical'
  },
  {
    id: 'purifier',
    title: 'Purifier',
    description: 'A centrifugal machine used to separate water and impurities from fuel oil or lubricating oil.',
    category: 'Technical'
  },
  {
    id: 'heat-exchanger',
    title: 'Heat Exchanger',
    description: 'A device used to transfer heat between two or more fluids.',
    category: 'Technical'
  },
  {
    id: 'turbocharger',
    title: 'Turbocharger',
    description: 'A turbine-driven, forced induction device that increases an internal combustion engine\'s efficiency and power output by forcing extra compressed air into the combustion chamber.',
    category: 'Technical'
  },
  {
    id: 'crankshaft',
    title: 'Crankshaft',
    description: 'A shaft driven by a crank mechanism consisting of a series of cranks and crankpins to which the connecting rods of an engine are attached.',
    category: 'Technical'
  },
  {
    id: 'piston',
    title: 'Piston',
    description: 'A component of reciprocating engines, reciprocating pumps, gas compressors, hydraulic cylinders and pneumatic cylinders, among other similar mechanisms.',
    category: 'Technical'
  },
  {
    id: 'cylinder-liner',
    title: 'Cylinder Liner',
    description: 'A removable cylindrical part inserted into an engine block to form the inner wall of a cylinder.',
    category: 'Technical'
  },
  {
    id: 'injector',
    title: 'Injector',
    description: 'A device for injecting fuel into an internal combustion engine.',
    category: 'Technical'
  },
  {
    id: 'governor',
    title: 'Governor',
    description: 'A device used to measure and regulate the speed of a machine, such as an engine.',
    category: 'Technical'
  },
  {
    id: 'stern-tube',
    title: 'Stern Tube',
    description: 'A hollow tube in the hull of a ship through which the propeller shaft passes.',
    category: 'Technical'
  },
  {
    id: 'thrust-block',
    title: 'Thrust Block',
    description: 'A bearing that transmits the longitudinal thrust of the propeller shaft to the hull of the ship.',
    category: 'Technical'
  },
  {
    id: 'steering-gear',
    title: 'Steering Gear',
    description: 'The machinery used to operate the rudder of a ship.',
    category: 'Technical'
  },
  {
    id: 'windlass',
    title: 'Windlass',
    description: 'A machine used on ships that is used to let-out and heave-up equipment such as a ship\'s anchor or a fishing trawl.',
    category: 'Technical'
  },
  {
    id: 'capstan',
    title: 'Capstan',
    description: 'A vertical-axled rotating machine developed for use on sailing ships to multiply the pulling force of seamen when hauling ropes, cables, and hawsers.',
    category: 'Technical'
  },
  {
    id: 'winch',
    title: 'Winch',
    description: 'A mechanical device that is used to pull in (wind up) or let out (wind out) or otherwise adjust the tension of a rope or wire rope.',
    category: 'Technical'
  },
  {
    id: 'crane',
    title: 'Crane',
    description: 'A type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.',
    category: 'Technical'
  },
  {
    id: 'derrick',
    title: 'Derrick',
    description: 'A lifting device composed at minimum of one guyed mast, as in a gin pole, which may be articulated over a load by adjusting its guys.',
    category: 'Technical'
  },
  {
    id: 'hatch-cover',
    title: 'Hatch Cover',
    description: 'A structure used to close off the hatch openings on a ship\'s deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'cargo-hold',
    title: 'Cargo Hold',
    description: 'A space in a ship or aircraft for storing cargo.',
    category: 'Vessel Parts'
  },
  {
    id: 'tween-deck',
    title: 'Tween Deck',
    description: 'An intermediate deck between the hold and the main deck of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'tank-top',
    title: 'Tank Top',
    description: 'The plating forming the upper surface of the double bottom of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'scupper',
    title: 'Scupper',
    description: 'An opening in the side walls of an open-air structure, for purposes of draining water.',
    category: 'Vessel Parts'
  },
  {
    id: 'bulwark',
    title: 'Bulwark',
    description: 'An extension of a ship\'s side above the level of the deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'railing',
    title: 'Railing',
    description: 'A fence or barrier on a ship to prevent people from falling overboard.',
    category: 'Vessel Parts'
  },
  {
    id: 'porthole',
    title: 'Porthole',
    description: 'A small, generally circular window used on the hull of ships to admit light and air.',
    category: 'Vessel Parts'
  },
  {
    id: 'skylight',
    title: 'Skylight',
    description: 'A window set in a roof or ceiling at the same angle.',
    category: 'Vessel Parts'
  },
  {
    id: 'ventilator',
    title: 'Ventilator',
    description: 'A device used to provide fresh air to the interior of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'air-pipe',
    title: 'Air Pipe',
    description: 'A pipe used to allow air to enter or leave a tank on a ship.',
    category: 'Technical'
  },
  {
    id: 'sounding-pipe',
    title: 'Sounding Pipe',
    description: 'A pipe used to measure the depth of liquid in a tank on a ship.',
    category: 'Technical'
  },
  {
    id: 'ullage',
    title: 'Ullage',
    description: 'The amount by which a container falls short of being full.',
    category: 'Terminology'
  },
  {
    id: 'innage',
    title: 'Innage',
    description: 'The amount of liquid in a tank.',
    category: 'Terminology'
  },
  {
    id: 'trim',
    title: 'Trim',
    description: 'The difference between the drafts forward and aft.',
    category: 'Terminology'
  },
  {
    id: 'stability',
    title: 'Stability',
    description: 'The ability of a ship to return to an upright position after being tilted by an external force.',
    category: 'Terminology'
  },
  {
    id: 'metacentric-height',
    title: 'Metacentric Height',
    description: 'A measurement of the initial static stability of a floating body.',
    category: 'Technical'
  },
  {
    id: 'center-of-gravity',
    title: 'Center of Gravity',
    description: 'The point through which the entire weight of a ship is considered to act.',
    category: 'Technical'
  },
  {
    id: 'center-of-buoyancy',
    title: 'Center of Buoyancy',
    description: 'The point through which the upward force of buoyancy is considered to act.',
    category: 'Technical'
  },
  {
    id: 'displacement',
    title: 'Displacement',
    description: 'The weight of the water displaced by a ship, which is equal to the weight of the ship.',
    category: 'Terminology'
  },
  {
    id: 'lightship',
    title: 'Lightship',
    description: 'The weight of a ship when it is empty, without cargo, fuel, water, or stores.',
    category: 'Terminology'
  },
  {
    id: 'load-line',
    title: 'Load Line',
    description: 'A mark on the side of a ship indicating the maximum depth to which it may be safely loaded.',
    category: 'Regulations'
  },
  {
    id: 'classification-society',
    title: 'Classification Society',
    description: 'A non-governmental organization that establishes and maintains technical standards for the construction and operation of ships and offshore structures.',
    category: 'Regulations'
  },
  {
    id: 'flag-state',
    title: 'Flag State',
    description: 'The state under whose laws a ship is registered or licensed.',
    category: 'Regulations'
  },
  {
    id: 'port-state-control',
    title: 'Port State Control',
    description: 'The inspection of foreign ships in national ports to verify that the condition of the ship and its equipment comply with the requirements of international regulations.',
    category: 'Regulations'
  },
  {
    id: 'seaworthiness',
    title: 'Seaworthiness',
    description: 'The fitness of a ship for a voyage.',
    category: 'Terminology'
  },
  {
    id: 'logbook',
    title: 'Logbook',
    description: 'A record of important events in the management, operation, and navigation of a ship.',
    category: 'Operations'
  },
  {
    id: 'watchkeeping',
    title: 'Watchkeeping',
    description: 'The practice of maintaining a continuous watch on a ship.',
    category: 'Operations'
  },
  {
    id: 'pilotage',
    title: 'Pilotage',
    description: 'The act of a pilot in directing the course of a ship.',
    category: 'Operations'
  },
  {
    id: 'tugboat',
    title: 'Tugboat',
    description: 'A small, powerful boat used for towing or pushing larger vessels.',
    category: 'Operations'
  },
  {
    id: 'salvage',
    title: 'Salvage',
    description: 'The rescue of a ship or its cargo from peril at sea.',
    category: 'Operations'
  },
  {
    id: 'general-average',
    title: 'General Average',
    description: 'A principle of maritime law that requires all parties in a sea venture to proportionally share any losses resulting from a voluntary sacrifice of part of the ship or cargo to save the whole in an emergency.',
    category: 'Regulations'
  },
  {
    id: 'particular-average',
    title: 'Particular Average',
    description: 'A partial loss of a ship or cargo that is not shared by all parties.',
    category: 'Regulations'
  },
  {
    id: 'p-and-i-club',
    title: 'P&I Club',
    description: 'A Protection and Indemnity (P&I) club is a mutual insurance association that provides risk pooling, information and representation for its members.',
    category: 'Regulations'
  },
  {
    id: 'imo-number',
    title: 'IMO Number',
    description: 'A unique identification number assigned to a ship by the International Maritime Organization (IMO).',
    category: 'Regulations'
  },
  {
    id: 'mmsi',
    title: 'MMSI',
    description: 'A Maritime Mobile Service Identity (MMSI) is a series of nine digits which are sent in digital form over a radio frequency channel in order to uniquely identify ship stations, ship earth stations, coast stations, coast earth stations, and group calls.',
    category: 'Regulations'
  },
  {
    id: 'call-sign',
    title: 'Call Sign',
    description: 'A unique designation for a transmitter station.',
    category: 'Regulations'
  },
  {
    id: 'vhf-radio',
    title: 'VHF Radio',
    description: 'A type of radio used for short-range communication at sea.',
    category: 'Navigation'
  },
  {
    id: 'dsc',
    title: 'DSC',
    description: 'Digital Selective Calling (DSC) is a standard for sending pre-defined digital messages via the medium-frequency (MF), high-frequency (HF) and very-high-frequency (VHF) maritime radio systems.',
    category: 'Navigation'
  },
  {
    id: 'navtex',
    title: 'NAVTEX',
    description: 'An international automated direct-printing service for delivery of navigational and meteorological warnings and forecasts, as well as urgent marine safety information to ships.',
    category: 'Navigation'
  },
  {
    id: 'inmarsat',
    title: 'Inmarsat',
    description: 'A British satellite telecommunications company, offering global mobile services.',
    category: 'Navigation'
  },
  {
    id: 'vdr',
    title: 'VDR',
    description: 'A Voyage Data Recorder (VDR) is a data recording system designed for all ships required to comply with the IMO\'s International Convention SOLAS Requirements in order to collect data from various sensors on board the vessel.',
    category: 'Safety'
  },
  {
    id: 'ecdis-training',
    title: 'ECDIS Training',
    description: 'Training required for officers to use Electronic Chart Display and Information Systems.',
    category: 'Regulations'
  },
  {
    id: 'bridge-resource-management',
    title: 'Bridge Resource Management',
    description: 'A set of procedures used on the bridge of a ship to ensure that all resources are used effectively to ensure the safety of the ship.',
    category: 'Operations'
  },
  {
    id: 'engine-room-resource-management',
    title: 'Engine Room Resource Management',
    description: 'A set of procedures used in the engine room of a ship to ensure that all resources are used effectively to ensure the safety of the ship.',
    category: 'Operations'
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    description: 'The process of identifying and evaluating the risks associated with a particular activity.',
    category: 'Safety'
  },
  {
    id: 'permit-to-work',
    title: 'Permit to Work',
    description: 'A formal written system used to control certain types of work that are potentially hazardous.',
    category: 'Safety'
  },
  {
    id: 'toolbox-talk',
    title: 'Toolbox Talk',
    description: 'A short safety meeting held before the start of a job.',
    category: 'Safety'
  },
  {
    id: 'ppe',
    title: 'PPE',
    description: 'Personal Protective Equipment (PPE) is equipment worn to minimize exposure to hazards that cause serious workplace injuries and illnesses.',
    category: 'Safety'
  },
  {
    id: 'safety-culture',
    title: 'Safety Culture',
    description: 'The shared values, beliefs, and attitudes that characterize an organization\'s approach to safety.',
    category: 'Safety'
  },
  {
    id: 'near-miss',
    title: 'Near Miss',
    description: 'An unplanned event that did not result in injury, illness, or damage - but had the potential to do so.',
    category: 'Safety'
  },
  {
    id: 'incident-investigation',
    title: 'Incident Investigation',
    description: 'The process of determining the causes of an incident in order to prevent it from happening again.',
    category: 'Safety'
  },
  {
    id: 'root-cause-analysis',
    title: 'Root Cause Analysis',
    description: 'A method of problem solving used for identifying the root causes of faults or problems.',
    category: 'Safety'
  },
  {
    id: 'corrective-action',
    title: 'Corrective Action',
    description: 'An action taken to eliminate the cause of a detected nonconformity or other undesirable situation.',
    category: 'Safety'
  },
  {
    id: 'preventive-action',
    title: 'Preventive Action',
    description: 'An action taken to eliminate the cause of a potential nonconformity or other undesirable potential situation.',
    category: 'Safety'
  },
  {
    id: 'internal-audit',
    title: 'Internal Audit',
    description: 'An audit conducted by an organization to evaluate its own performance.',
    category: 'Regulations'
  },
  {
    id: 'external-audit',
    title: 'External Audit',
    description: 'An audit conducted by an independent organization to evaluate an organization\'s performance.',
    category: 'Regulations'
  },
  {
    id: 'non-conformity',
    title: 'Non-Conformity',
    description: 'A failure to meet a requirement.',
    category: 'Regulations'
  },
  {
    id: 'observation',
    title: 'Observation',
    description: 'A statement of fact made during an audit and substantiated by objective evidence.',
    category: 'Regulations'
  },
  {
    id: 'major-non-conformity',
    title: 'Major Non-Conformity',
    description: 'A failure to meet a requirement that has a significant impact on safety or the environment.',
    category: 'Regulations'
  },
  {
    id: 'safety-management-system',
    title: 'Safety Management System',
    description: 'A structured and documented system enabling company personnel to effectively implement the company safety and environmental protection policy.',
    category: 'Regulations'
  },
  {
    id: 'document-of-compliance',
    title: 'Document of Compliance',
    description: 'A document issued to a company which complies with the requirements of the ISM Code.',
    category: 'Regulations'
  },
  {
    id: 'safety-management-certificate',
    title: 'Safety Management Certificate',
    description: 'A document issued to a ship which signifies that the company and its shipboard management operate in accordance with the approved safety management system.',
    category: 'Regulations'
  },
  {
    id: 'interim-doc',
    title: 'Interim DOC',
    description: 'A Document of Compliance issued for a period of no more than 12 months to a company newly established or when new ship types are added to an existing DOC.',
    category: 'Regulations'
  },
  {
    id: 'interim-smc',
    title: 'Interim SMC',
    description: 'A Safety Management Certificate issued for a period of no more than 6 months to a new ship on delivery or when a company takes on responsibility for the operation of a ship which is new to the company.',
    category: 'Regulations'
  },
  {
    id: 'designated-person-ashore',
    title: 'Designated Person Ashore',
    description: 'A person who has direct access to the highest level of management and is responsible for monitoring the safety and pollution prevention aspects of the operation of each ship.',
    category: 'Regulations'
  },
  {
    id: 'master',
    title: 'Master',
    description: 'The person having command of a ship.',
    category: 'Crew'
  },
  {
    id: 'chief-officer',
    title: 'Chief Officer',
    description: 'The officer next in rank to the master and upon whom the command of the ship will fall in the event of the incapacity of the master.',
    category: 'Crew'
  },
  {
    id: 'second-officer',
    title: 'Second Officer',
    description: 'The officer next in rank to the chief officer.',
    category: 'Crew'
  },
  {
    id: 'third-officer',
    title: 'Third Officer',
    description: 'The officer next in rank to the second officer.',
    category: 'Crew'
  },
  {
    id: 'chief-engineer',
    title: 'Chief Engineer',
    description: 'The senior engineer officer responsible for the mechanical propulsion and the operation and maintenance of the mechanical and electrical installations of the ship.',
    category: 'Crew'
  },
  {
    id: 'second-engineer',
    title: 'Second Engineer',
    description: 'The engineer officer next in rank to the chief engineer.',
    category: 'Crew'
  },
  {
    id: 'third-engineer',
    title: 'Third Engineer',
    description: 'The engineer officer next in rank to the second engineer.',
    category: 'Crew'
  },
  {
    id: 'fourth-engineer',
    title: 'Fourth Engineer',
    description: 'The engineer officer next in rank to the third engineer.',
    category: 'Crew'
  },
  {
    id: 'electrical-officer',
    title: 'Electrical Officer',
    description: 'An officer responsible for the maintenance and repair of electrical and electronic equipment on a ship.',
    category: 'Crew'
  },
  {
    id: 'bosun',
    title: 'Bosun',
    description: 'The senior unlicensed member of the deck department.',
    category: 'Crew'
  },
  {
    id: 'able-seaman',
    title: 'Able Seaman',
    description: 'An unlicensed member of the deck department who has a certain level of experience and training.',
    category: 'Crew'
  },
  {
    id: 'ordinary-seaman',
    title: 'Ordinary Seaman',
    description: 'An unlicensed member of the deck department who is in training.',
    category: 'Crew'
  },
  {
    id: 'oiler',
    title: 'Oiler',
    description: 'An unlicensed member of the engine department who is responsible for lubricating machinery.',
    category: 'Crew'
  },
  {
    id: 'wiper',
    title: 'Wiper',
    description: 'An unlicensed member of the engine department who is responsible for cleaning machinery and spaces.',
    category: 'Crew'
  },
  {
    id: 'cook',
    title: 'Cook',
    description: 'The person responsible for preparing meals on a ship.',
    category: 'Crew'
  },
  {
    id: 'steward',
    title: 'Steward',
    description: 'A person responsible for the service of meals and the cleaning of accommodation spaces on a ship.',
    category: 'Crew'
  },
  {
    id: 'cadet',
    title: 'Cadet',
    description: 'A person who is in training to become an officer.',
    category: 'Crew'
  },
  {
    id: 'tanker',
    title: 'Tanker',
    description: 'A merchant ship designed to transport liquids or gases in bulk.',
    category: 'Cargo'
  },
  {
    id: 'bulk-carrier',
    title: 'Bulk Carrier',
    description: 'A merchant ship specially designed to transport unpackaged bulk cargo, such as grains, coal, ore, and cement, in its cargo holds.',
    category: 'Cargo'
  },
  {
    id: 'container-ship',
    title: 'Container Ship',
    description: 'A cargo ship that carries all of its load in truck-size intermodal containers.',
    category: 'Vessel Parts'
  },
  {
    id: 'ro-ro',
    title: 'Ro-Ro',
    description: 'Roll-on/roll-off ships are vessels designed to carry wheeled cargo, such as cars, trucks, semi-trailer trucks, buses, trailers, and railroad cars, that are driven on and off the ship on their own wheels or using a platform vehicle.',
    category: 'Vessel Parts'
  },
  {
    id: 'lng-carrier',
    title: 'LNG Carrier',
    description: 'A tank ship designed for transporting liquefied natural gas (LNG).',
    category: 'Cargo'
  },
  {
    id: 'reefer',
    title: 'Reefer',
    description: 'A refrigerator ship is a type of ship typically used to transport perishable commodities which require temperature-controlled transportation, such as fruit, meat, fish, vegetables, dairy products and other foods.',
    category: 'Cargo'
  },
  {
    id: 'dredger',
    title: 'Dredger',
    description: 'A ship or boat used for dredging, the process of clearing the bed of a harbor, river, or other area of water by scooping out mud, weeds, and rubbish.',
    category: 'Vessel Parts'
  },
  {
    id: 'bearing',
    title: 'Bearing',
    description: 'The horizontal angle between the direction of an object and a reference direction, usually true north or the ship\'s heading.',
    category: 'Navigation'
  },
  {
    id: 'loxodrome',
    title: 'Loxodrome',
    description: 'Also known as a rhumb line, it is an arc crossing all meridians of longitude at the same angle, that is, a path with constant bearing as measured relative to true or magnetic north.',
    category: 'Navigation'
  },
  {
    id: 'orthodrome',
    title: 'Orthodrome',
    description: 'A great circle route, which is the shortest distance between two points on the surface of a sphere.',
    category: 'Navigation'
  },
  {
    id: 'variation',
    title: 'Variation',
    description: 'The angle between magnetic north and true north at a particular location.',
    category: 'Navigation'
  },
  {
    id: 'deviation',
    title: 'Deviation',
    description: 'The error in a magnetic compass caused by the magnetic influence of the ship itself.',
    category: 'Navigation'
  },
  {
    id: 'set-and-drift',
    title: 'Set and Drift',
    description: 'Set is the direction toward which a current flows; drift is the speed of the current.',
    category: 'Navigation'
  },
  {
    id: 'leeway',
    title: 'Leeway',
    description: 'The sideways drift of a ship to leeward of its course, caused by the wind.',
    category: 'Navigation'
  },
  {
    id: 'spring-tide',
    title: 'Spring Tide',
    description: 'A tide just after a new or full moon, when there is the greatest difference between high and low water.',
    category: 'Navigation'
  },
  {
    id: 'neap-tide',
    title: 'Neap Tide',
    description: 'A tide just after the first or third quarters of the moon when there is the least difference between high and low water.',
    category: 'Navigation'
  },
  {
    id: 'chart-datum',
    title: 'Chart Datum',
    description: 'The level of water from which depths displayed on a nautical chart are measured.',
    category: 'Navigation'
  },
  {
    id: 'iala',
    title: 'IALA',
    description: 'The International Association of Marine Aids to Navigation and Lighthouse Authorities (IALA) is a non-profit, international technical association.',
    category: 'Navigation'
  },
  {
    id: 'cardinal-marks',
    title: 'Cardinal Marks',
    description: 'Sea marks used in maritime pilotage to indicate the position of a hazard and the direction of safe water.',
    category: 'Navigation'
  },
  {
    id: 'lateral-marks',
    title: 'Lateral Marks',
    description: 'Sea marks used in maritime pilotage to indicate the edge of a channel.',
    category: 'Navigation'
  },
  {
    id: 'main-engine',
    title: 'Main Engine',
    description: 'The primary engine used for the propulsion of a ship.',
    category: 'Technical'
  },
  {
    id: 'boiler',
    title: 'Boiler',
    description: 'A closed vessel in which water or other fluid is heated.',
    category: 'Technical'
  },
  {
    id: 'condenser',
    title: 'Condenser',
    description: 'A device or unit used to condense a gaseous substance into a liquid state through cooling.',
    category: 'Technical'
  },
  {
    id: 'evaporator',
    title: 'Evaporator',
    description: 'A device used to turn the liquid form of a chemical substance into its gaseous form.',
    category: 'Technical'
  },
  {
    id: 'air-compressor',
    title: 'Air Compressor',
    description: 'A pneumatic device that converts power into potential energy stored in pressurized air.',
    category: 'Technical'
  },
  {
    id: 'oily-water-separator',
    title: 'Oily Water Separator',
    description: 'A piece of shipboard equipment that allows a vessel\'s crew to separate oil from bilge water before the bilge water is discharged overboard.',
    category: 'Technical'
  },
  {
    id: 'incinerator',
    title: 'Incinerator',
    description: 'A furnace for burning waste on a ship.',
    category: 'Technical'
  },
  {
    id: 'mlc-2006',
    title: 'MLC 2006',
    description: 'The Maritime Labour Convention (MLC) is an International Labour Organization convention, number 186, established in 2006 as the fourth pillar of international maritime law.',
    category: 'Regulations'
  },
  {
    id: 'bwm-convention',
    title: 'BWM Convention',
    description: 'The International Convention for the Control and Management of Ships\' Ballast Water and Sediments (BWM Convention) is a treaty adopted by the International Maritime Organization (IMO) in order to help prevent the spread of potentially harmful aquatic organisms and pathogens in ships\' ballast water.',
    category: 'Environment'
  },
  {
    id: 'afs-convention',
    title: 'AFS Convention',
    description: 'The International Convention on the Control of Harmful Anti-fouling Systems on Ships (AFS Convention) prohibits the use of harmful organotins in anti-fouling paints used on ships and establishes a mechanism to prevent the potential future use of other harmful substances in anti-fouling systems.',
    category: 'Regulations'
  },
  {
    id: 'tonnage-convention',
    title: 'Tonnage Convention',
    description: 'The International Convention on Tonnage Measurement of Ships is an IMO convention that introduced a universal system of tonnage measurement for ships engaged in international voyages.',
    category: 'Regulations'
  },
  {
    id: 'nairobi-convention',
    title: 'Nairobi Convention',
    description: 'The Nairobi International Convention on the Removal of Wrecks provides the legal basis for States to remove, or have removed, shipwrecks that may have the potential to affect adversely the safety of lives, goods and property at sea, as well as the marine environment.',
    category: 'Regulations'
  },
  {
    id: 'hns-convention',
    title: 'HNS Convention',
    description: 'The International Convention on Liability and Compensation for Damage in Connection with the Carriage of Hazardous and Noxious Substances by Sea (HNS Convention) aims to ensure adequate, prompt and effective compensation for damage to persons and property, costs of clean-up and reinstatement measures and economic losses resulting from the maritime transport of hazardous and noxious substances.',
    category: 'Regulations'
  },
  {
    id: 'clc-convention',
    title: 'CLC Convention',
    description: 'The International Convention on Civil Liability for Oil Pollution Damage (CLC Convention) ensures that adequate compensation is available to persons who suffer oil pollution damage resulting from maritime casualties involving oil-carrying ships.',
    category: 'Regulations'
  },
  {
    id: 'fund-convention',
    title: 'Fund Convention',
    description: 'The International Convention on the Establishment of an International Fund for Compensation for Oil Pollution Damage (Fund Convention) was adopted to provide compensation for pollution damage to the extent that the protection afforded by the CLC Convention is inadequate.',
    category: 'Regulations'
  },
  {
    id: 'llmc-convention',
    title: 'LLMC Convention',
    description: 'The Convention on Limitation of Liability for Maritime Claims (LLMC Convention) allows shipowners and salvors to limit their liability for certain maritime claims.',
    category: 'Regulations'
  },
  {
    id: 'sua-convention',
    title: 'SUA Convention',
    description: 'The Convention for the Suppression of Unlawful Acts Against the Safety of Maritime Navigation (SUA Convention) aims to ensure that appropriate action is taken against persons committing unlawful acts against ships.',
    category: 'Regulations'
  },
  {
    id: 'towage',
    title: 'Towage',
    description: 'The act of towing a ship or other vessel.',
    category: 'Operations'
  },
  {
    id: 'unmooring',
    title: 'Unmooring',
    description: 'The act of releasing a ship from its moorings.',
    category: 'Operations'
  },
  {
    id: 'anchoring',
    title: 'Anchoring',
    description: 'The act of dropping anchor to secure a ship.',
    category: 'Operations'
  },
  {
    id: 'weighing-anchor',
    title: 'Weighing Anchor',
    description: 'The act of raising the anchor of a ship.',
    category: 'Operations'
  },
  {
    id: 'cargo-loading',
    title: 'Cargo Loading',
    description: 'The process of putting cargo onto a ship.',
    category: 'Cargo'
  },
  {
    id: 'cargo-discharging',
    title: 'Cargo Discharging',
    description: 'The process of removing cargo from a ship.',
    category: 'Cargo'
  },
  {
    id: 'ballasting',
    title: 'Ballasting',
    description: 'The process of taking on ballast water to improve a ship\'s stability.',
    category: 'Operations'
  },
  {
    id: 'deballasting',
    title: 'Deballasting',
    description: 'The process of discharging ballast water from a ship.',
    category: 'Operations'
  },
  {
    id: 'tank-cleaning',
    title: 'Tank Cleaning',
    description: 'The process of cleaning a ship\'s tanks, especially after carrying oil or other chemicals.',
    category: 'Cargo'
  },
  {
    id: 'gas-freeing',
    title: 'Gas Freeing',
    description: 'The process of removing flammable or toxic gases from a ship\'s tanks.',
    category: 'Cargo'
  },
  {
    id: 'inerting',
    title: 'Inerting',
    description: 'The process of introducing an inert gas, such as nitrogen, into a ship\'s tanks to prevent the formation of an explosive atmosphere.',
    category: 'Cargo'
  },
  {
    id: 'venting',
    title: 'Venting',
    description: 'The process of allowing gases to escape from a ship\'s tanks.',
    category: 'Cargo'
  },
  {
    id: 'sampling',
    title: 'Sampling',
    description: 'The process of taking samples of cargo or other materials for testing.',
    category: 'Cargo'
  },
  {
    id: 'surveying',
    title: 'Surveying',
    description: 'The process of inspecting a ship or its cargo to determine its condition or value.',
    category: 'Operations'
  },
  {
    id: 'fire-extinguisher',
    title: 'Fire Extinguisher',
    description: 'A portable device used to put out small fires.',
    category: 'Safety'
  },
  {
    id: 'fire-hose',
    title: 'Fire Hose',
    description: 'A high-pressure hose used to carry water or other fire retardant to a fire.',
    category: 'Safety'
  },
  {
    id: 'fire-hydrant',
    title: 'Fire Hydrant',
    description: 'A connection point by which firefighters can tap into a water supply.',
    category: 'Safety'
  },
  {
    id: 'co2-system',
    title: 'CO2 System',
    description: 'A fixed firefighting system that uses carbon dioxide to extinguish fires.',
    category: 'Safety'
  },
  {
    id: 'foam-system',
    title: 'Foam System',
    description: 'A fixed firefighting system that uses foam to extinguish fires.',
    category: 'Safety'
  },
  {
    id: 'water-mist-system',
    title: 'Water Mist System',
    description: 'A fixed firefighting system that uses a fine mist of water to extinguish fires.',
    category: 'Safety'
  },
  {
    id: 'sprinkler-system',
    title: 'Sprinkler System',
    description: 'A fixed firefighting system that uses sprinklers to extinguish fires.',
    category: 'Safety'
  },
  {
    id: 'smoke-detector',
    title: 'Smoke Detector',
    description: 'A device that detects smoke, typically as an indicator of fire.',
    category: 'Safety'
  },
  {
    id: 'heat-detector',
    title: 'Heat Detector',
    description: 'A device that detects heat, typically as an indicator of fire.',
    category: 'Safety'
  },
  {
    id: 'flame-detector',
    title: 'Flame Detector',
    description: 'A device that detects flames, typically as an indicator of fire.',
    category: 'Safety'
  },
  {
    id: 'manual-call-point',
    title: 'Manual Call Point',
    description: 'A device that allows a person to manually trigger a fire alarm.',
    category: 'Safety'
  },
  {
    id: 'general-alarm',
    title: 'General Alarm',
    description: 'An alarm that signals an emergency on a ship.',
    category: 'Safety'
  },
  {
    id: 'emergency-lighting',
    title: 'Emergency Lighting',
    description: 'Lighting that is designed to operate in an emergency, such as a power failure.',
    category: 'Safety'
  },
  {
    id: 'emergency-generator',
    title: 'Emergency Generator',
    description: 'A generator that is designed to provide power in an emergency.',
    category: 'Safety'
  },
  {
    id: 'emergency-fire-pump',
    title: 'Emergency Fire Pump',
    description: 'A pump that is designed to provide water for firefighting in an emergency.',
    category: 'Safety'
  },
  {
    id: 'rescue-boat',
    title: 'Rescue Boat',
    description: 'A boat designed for rescue operations at sea.',
    category: 'Safety'
  },
  {
    id: 'lifebuoy',
    title: 'Lifebuoy',
    description: 'A buoyant ring used for rescuing people from the water.',
    category: 'Safety'
  },
  {
    id: 'lifejacket',
    title: 'Lifejacket',
    description: 'A buoyant vest worn to keep a person afloat in the water.',
    category: 'Safety'
  },
  {
    id: 'thermal-protective-aid',
    title: 'Thermal Protective Aid',
    description: 'A bag or suit made of waterproof material with low thermal conductivity, used to reduce the heat loss of a person in a lifeboat or liferaft.',
    category: 'Safety'
  },
  {
    id: 'age-of-discovery',
    title: 'Age of Discovery',
    description: 'A period from the 15th to the 17th century during which European ships traveled around the world to search for new trading routes and partners.',
    category: 'History'
  },
  {
    id: 'hanseatic-league',
    title: 'Hanseatic League',
    description: 'A medieval commercial and defensive confederation of merchant guilds and market towns in Central and Northern Europe.',
    category: 'History'
  },
  {
    id: 'east-india-company',
    title: 'East India Company',
    description: 'An English company formed for the exploitation of trade with East and Southeast Asia and India.',
    category: 'History'
  },
  {
    id: 'clipper-ships',
    title: 'Clipper Ships',
    description: 'Very fast sailing ships of the middle third of the 19th century.',
    category: 'History'
  },
  {
    id: 'steamships',
    title: 'Steamships',
    description: 'Ships propelled by steam engines.',
    category: 'History'
  },
  {
    id: 'ironclads',
    title: 'Ironclads',
    description: 'Steam-propelled warships protected by iron or steel armor plates.',
    category: 'History'
  },
  {
    id: 'dreadnoughts',
    title: 'Dreadnoughts',
    description: 'The predominant type of battleship in the early 20th century.',
    category: 'History'
  },
  {
    id: 'containerization',
    title: 'Containerization',
    description: 'A system of intermodal freight transport using intermodal containers.',
    category: 'History'
  },
  {
    id: 'digitalization',
    title: 'Digitalization',
    description: 'The integration of digital technologies into maritime operations.',
    category: 'History'
  },
  {
    id: 'decarbonization',
    title: 'Decarbonization',
    description: 'The process of reducing carbon emissions from maritime transport.',
    category: 'Environment'
  },
  {
    id: 'abaft',
    title: 'Abaft',
    description: 'Toward the stern; behind.',
    category: 'Terminology'
  },
  {
    id: 'abeam',
    title: 'Abeam',
    description: 'At right angles to the ship\'s keel.',
    category: 'Terminology'
  },
  {
    id: 'ahead',
    title: 'Ahead',
    description: 'In front of the ship.',
    category: 'Terminology'
  },
  {
    id: 'astern',
    title: 'Astern',
    description: 'Behind the ship.',
    category: 'Terminology'
  },
  {
    id: 'avast',
    title: 'Avast',
    description: 'A command to stop or cease.',
    category: 'Terminology'
  },
  {
    id: 'belay',
    title: 'Belay',
    description: 'To secure a rope by winding it around a pin or cleat.',
    category: 'Terminology'
  },
  {
    id: 'binnacle',
    title: 'Binnacle',
    description: 'The stand or housing for a ship\'s compass.',
    category: 'Vessel Parts'
  },
  {
    id: 'bitt',
    title: 'Bitt',
    description: 'A post on a ship used for securing ropes.',
    category: 'Vessel Parts'
  },
  {
    id: 'block',
    title: 'Block',
    description: 'A pulley used on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'boom',
    title: 'Boom',
    description: 'A horizontal spar used to extend the foot of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'bowsprit',
    title: 'Bowsprit',
    description: 'A spar extending forward from the bow of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'cabin',
    title: 'Cabin',
    description: 'A room on a ship used for living or sleeping.',
    category: 'Vessel Parts'
  },
  {
    id: 'cable',
    title: 'Cable',
    description: 'A heavy rope or chain used for anchoring or towing.',
    category: 'Vessel Parts'
  },
  {
    id: 'cleat',
    title: 'Cleat',
    description: 'A T-shaped piece of metal or wood used for securing ropes.',
    category: 'Vessel Parts'
  },
  {
    id: 'coaming',
    title: 'Coaming',
    description: 'A raised border around a hatch to prevent water from entering.',
    category: 'Vessel Parts'
  },
  {
    id: 'cockpit',
    title: 'Cockpit',
    description: 'An open area in the deck of a boat, usually near the stern, from which it is steered.',
    category: 'Vessel Parts'
  },
  {
    id: 'companionway',
    title: 'Companionway',
    description: 'A stairway or ladder leading from a ship\'s deck to the cabins or holds below.',
    category: 'Vessel Parts'
  },
  {
    id: 'coxswain',
    title: 'Coxswain',
    description: 'The person who steers a boat.',
    category: 'Operations'
  },
  {
    id: 'crows-nest',
    title: 'Crow\'s Nest',
    description: 'A small platform high on a mast, used as a lookout.',
    category: 'Vessel Parts'
  },
  {
    id: 'dinghy',
    title: 'Dinghy',
    description: 'A small boat, often carried or towed by a larger vessel.',
    category: 'Vessel Parts'
  },
  {
    id: 'dog-watch',
    title: 'Dog Watch',
    description: 'A short watch period, usually two hours long.',
    category: 'Operations'
  },
  {
    id: 'dunnage',
    title: 'Dunnage',
    description: 'Material used to protect cargo during transport.',
    category: 'Operations'
  },
  {
    id: 'ensign',
    title: 'Ensign',
    description: 'A flag flown by a ship to indicate its nationality.',
    category: 'Terminology'
  },
  {
    id: 'fairlead',
    title: 'Fairlead',
    description: 'A fitting used to guide a rope and prevent it from chafing.',
    category: 'Vessel Parts'
  },
  {
    id: 'figurehead',
    title: 'Figurehead',
    description: 'A carved wooden decoration on the bow of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'flotsam',
    title: 'Flotsam',
    description: 'Floating wreckage or cargo from a ship.',
    category: 'Terminology'
  },
  {
    id: 'jetsam',
    title: 'Jetsam',
    description: 'Cargo or equipment thrown overboard to lighten a ship in distress.',
    category: 'Terminology'
  },
  {
    id: 'forecastle',
    title: 'Forecastle',
    description: 'The forward part of a ship\'s upper deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'foul',
    title: 'Foul',
    description: 'To become entangled or obstructed.',
    category: 'Terminology'
  },
  {
    id: 'founder',
    title: 'Founder',
    description: 'To sink.',
    category: 'Terminology'
  },
  {
    id: 'gaff',
    title: 'Gaff',
    description: 'A spar used to extend the upper edge of a fore-and-aft sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'gimbals',
    title: 'Gimbals',
    description: 'A device used to keep an instrument, such as a compass, level on a moving ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'gunwale',
    title: 'Gunwale',
    description: 'The upper edge of a ship\'s side.',
    category: 'Vessel Parts'
  },
  {
    id: 'halyard',
    title: 'Halyard',
    description: 'A rope used for raising or lowering a sail, flag, or spar.',
    category: 'Vessel Parts'
  },
  {
    id: 'hawse',
    title: 'Hawse',
    description: 'The part of a ship\'s bow through which the anchor cables pass.',
    category: 'Vessel Parts'
  },
  {
    id: 'hawser',
    title: 'Hawser',
    description: 'A heavy rope used for mooring or towing.',
    category: 'Vessel Parts'
  },
  {
    id: 'heave',
    title: 'Heave',
    description: 'To pull or lift with effort.',
    category: 'Terminology'
  },
  {
    id: 'high-seas',
    title: 'High Seas',
    description: 'The open ocean, not within the territorial waters of any state.',
    category: 'Terminology'
  },
  {
    id: 'hitch',
    title: 'Hitch',
    description: 'A type of knot used to secure a rope to an object.',
    category: 'Terminology'
  },
  {
    id: 'hoist',
    title: 'Hoist',
    description: 'To lift or raise.',
    category: 'Terminology'
  },
  {
    id: 'inboard',
    title: 'Inboard',
    description: 'Toward the center of the ship.',
    category: 'Terminology'
  },
  {
    id: 'outboard',
    title: 'Outboard',
    description: 'Toward the outside of the ship.',
    category: 'Terminology'
  },
  {
    id: 'jib',
    title: 'Jib',
    description: 'A triangular sail set forward of the foremast.',
    category: 'Vessel Parts'
  },
  {
    id: 'jigger',
    title: 'Jigger',
    description: 'A small mast or sail at the stern of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'kedge',
    title: 'Kedge',
    description: 'A small anchor used for moving a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'keelson',
    title: 'Keelson',
    description: 'A longitudinal beam inside a ship\'s hull, bolted to the keel for reinforcement.',
    category: 'Vessel Parts'
  },
  {
    id: 'ketch',
    title: 'Ketch',
    description: 'A two-masted sailing vessel with the mizzenmast stepped forward of the rudder post.',
    category: 'Vessel Parts'
  },
  {
    id: 'lanyard',
    title: 'Lanyard',
    description: 'A short rope used for securing or adjusting something.',
    category: 'Vessel Parts'
  },
  {
    id: 'lazarette',
    title: 'Lazarette',
    description: 'A storage space in the stern of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'lee',
    title: 'Lee',
    description: 'The side sheltered from the wind.',
    category: 'Terminology'
  },
  {
    id: 'log',
    title: 'Log',
    description: 'A device used to measure a ship\'s speed.',
    category: 'Navigation'
  },
  {
    id: 'luff',
    title: 'Luff',
    description: 'The forward edge of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'marline',
    title: 'Marline',
    description: 'A light rope used for binding larger ropes.',
    category: 'Vessel Parts'
  },
  {
    id: 'marlinspike',
    title: 'Marlinspike',
    description: 'A pointed metal tool used for splicing rope.',
    category: 'Vessel Parts'
  },
  {
    id: 'mate',
    title: 'Mate',
    description: 'An officer on a ship.',
    category: 'Operations'
  },
  {
    id: 'midships',
    title: 'Midships',
    description: 'The middle part of a ship.',
    category: 'Terminology'
  },
  {
    id: 'mizzen',
    title: 'Mizzen',
    description: 'The mast or sail nearest the stern of a three-masted ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'muster',
    title: 'Muster',
    description: 'A formal gathering of the crew for inspection or drill.',
    category: 'Operations'
  },
  {
    id: 'oakum',
    title: 'Oakum',
    description: 'Loose fiber obtained by untwisting old rope, used for caulking.',
    category: 'Vessel Parts'
  },
  {
    id: 'offing',
    title: 'Offing',
    description: 'The part of the sea visible from the shore, beyond the reefs or shallows.',
    category: 'Terminology'
  },
  {
    id: 'painter',
    title: 'Painter',
    description: 'A rope attached to the bow of a boat for tying it up.',
    category: 'Vessel Parts'
  },
  {
    id: 'palm',
    title: 'Palm',
    description: 'A leather tool worn on the hand for sewing sails.',
    category: 'Vessel Parts'
  },
  {
    id: 'parrel',
    title: 'Parrel',
    description: 'A sliding loop used to secure a yard or boom to a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'pawl',
    title: 'Pawl',
    description: 'A mechanical device that allows motion in only one direction.',
    category: 'Vessel Parts'
  },
  {
    id: 'pennant',
    title: 'Pennant',
    description: 'A long, narrow flag flown by a ship.',
    category: 'Terminology'
  },
  {
    id: 'pier',
    title: 'Pier',
    description: 'A structure leading out from the shore into a body of water.',
    category: 'Operations'
  },
  {
    id: 'pintle',
    title: 'Pintle',
    description: 'A pin used as a hinge for a rudder.',
    category: 'Vessel Parts'
  },
  {
    id: 'poop',
    title: 'Poop',
    description: 'The highest deck at the stern of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'prow',
    title: 'Prow',
    description: 'The forward part of a ship\'s hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'purchase',
    title: 'Purchase',
    description: 'A mechanical advantage gained by using a tackle.',
    category: 'Terminology'
  },
  {
    id: 'quarterdeck',
    title: 'Quarterdeck',
    description: 'The part of the upper deck abaft the mainmast.',
    category: 'Vessel Parts'
  },
  {
    id: 'quay',
    title: 'Quay',
    description: 'A stone or metal platform lying alongside or projecting into water for loading and unloading ships.',
    category: 'Operations'
  },
  {
    id: 'ratline',
    title: 'Ratline',
    description: 'A small rope used as a step in a ship\'s rigging.',
    category: 'Vessel Parts'
  },
  {
    id: 'reef',
    title: 'Reef',
    description: 'To reduce the area of a sail.',
    category: 'Terminology'
  },
  {
    id: 'reeve',
    title: 'Reeve',
    description: 'To pass a rope through a hole or block.',
    category: 'Terminology'
  },
  {
    id: 'roadstead',
    title: 'Roadstead',
    description: 'A sheltered area of water where ships can anchor.',
    category: 'Operations'
  },
  {
    id: 'samson-post',
    title: 'Samson Post',
    description: 'A strong post on a ship used for securing cargo gear.',
    category: 'Vessel Parts'
  },
  {
    id: 'schooner',
    title: 'Schooner',
    description: 'A sailing vessel with two or more masts, rigged fore-and-aft.',
    category: 'Vessel Parts'
  },
  {
    id: 'scow',
    title: 'Scow',
    description: 'A flat-bottomed boat with square ends.',
    category: 'Vessel Parts'
  },
  {
    id: 'scud',
    title: 'Scud',
    description: 'To run before a gale.',
    category: 'Terminology'
  },
  {
    id: 'scull',
    title: 'Scull',
    description: 'To propel a boat with a single oar at the stern.',
    category: 'Terminology'
  },
  {
    id: 'shallop',
    title: 'Shallop',
    description: 'A small boat used in shallow water.',
    category: 'Vessel Parts'
  },
  {
    id: 'sharpie',
    title: 'Sharpie',
    description: 'A long, narrow, flat-bottomed boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'sheave',
    title: 'Sheave',
    description: 'The wheel in a block.',
    category: 'Vessel Parts'
  },
  {
    id: 'sheepshank',
    title: 'Sheepshank',
    description: 'A knot used to shorten a rope.',
    category: 'Terminology'
  },
  {
    id: 'sheer',
    title: 'Sheer',
    description: 'The upward curve of a ship\'s deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'sheet',
    title: 'Sheet',
    description: 'A rope used to control a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'shroud',
    title: 'Shroud',
    description: 'A rope used to support a mast sideways.',
    category: 'Vessel Parts'
  },
  {
    id: 'skiff',
    title: 'Skiff',
    description: 'A small, light boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'sloop',
    title: 'Sloop',
    description: 'A single-masted sailing vessel.',
    category: 'Vessel Parts'
  },
  {
    id: 'smack',
    title: 'Smack',
    description: 'A small fishing boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'spanker',
    title: 'Spanker',
    description: 'A fore-and-aft sail on the mizzenmast.',
    category: 'Vessel Parts'
  },
  {
    id: 'spar',
    title: 'Spar',
    description: 'A pole used for a mast, yard, or boom.',
    category: 'Vessel Parts'
  },
  {
    id: 'spinnaker',
    title: 'Spinnaker',
    description: 'A large, light sail used when running before the wind.',
    category: 'Vessel Parts'
  },
  {
    id: 'splice',
    title: 'Splice',
    description: 'To join two ropes by interweaving their strands.',
    category: 'Terminology'
  },
  {
    id: 'sprit',
    title: 'Sprit',
    description: 'A spar used to extend a sail diagonally.',
    category: 'Vessel Parts'
  },
  {
    id: 'squall',
    title: 'Squall',
    description: 'A sudden, strong wind.',
    category: 'Terminology'
  },
  {
    id: 'stanchion',
    title: 'Stanchion',
    description: 'An upright post used for support.',
    category: 'Vessel Parts'
  },
  {
    id: 'stay',
    title: 'Stay',
    description: 'A rope used to support a mast forward or aft.',
    category: 'Vessel Parts'
  },
  {
    id: 'staysail',
    title: 'Staysail',
    description: 'A sail set on a stay.',
    category: 'Vessel Parts'
  },
  {
    id: 'stem',
    title: 'Stem',
    description: 'The forwardmost part of a ship\'s hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'sternpost',
    title: 'Sternpost',
    description: 'The main vertical post at the stern of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'tack',
    title: 'Tack',
    description: 'The lower forward corner of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'taffrail',
    title: 'Taffrail',
    description: 'The railing around a ship\'s stern.',
    category: 'Vessel Parts'
  },
  {
    id: 'thimble',
    title: 'Thimble',
    description: 'A metal ring used to protect a rope eye.',
    category: 'Vessel Parts'
  },
  {
    id: 'thwart',
    title: 'Thwart',
    description: 'A seat across a boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'tiller',
    title: 'Tiller',
    description: 'A lever used to turn a rudder.',
    category: 'Vessel Parts'
  },
  {
    id: 'transom',
    title: 'Transom',
    description: 'The flat surface at the stern of a boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'trawler',
    title: 'Trawler',
    description: 'A fishing boat that uses a trawl net.',
    category: 'Vessel Parts'
  },
  {
    id: 'unfurl',
    title: 'Unfurl',
    description: 'To open or spread out a sail.',
    category: 'Terminology'
  },
  {
    id: 'vane',
    title: 'Vane',
    description: 'A device used to show the direction of the wind.',
    category: 'Vessel Parts'
  },
  {
    id: 'wake',
    title: 'Wake',
    description: 'The track left by a ship in the water.',
    category: 'Terminology'
  },
  {
    id: 'wale',
    title: 'Wale',
    description: 'A thick plank on a ship\'s side for reinforcement.',
    category: 'Vessel Parts'
  },
  {
    id: 'warp',
    title: 'Warp',
    description: 'To move a ship by pulling on a rope attached to a fixed object.',
    category: 'Operations'
  },
  {
    id: 'wharf',
    title: 'Wharf',
    description: 'A structure alongside water for loading and unloading ships.',
    category: 'Operations'
  },
  {
    id: 'yard',
    title: 'Yard',
    description: 'A horizontal spar used to support a square sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'yardarm',
    title: 'Yardarm',
    description: 'The end of a yard.',
    category: 'Vessel Parts'
  },
  {
    id: 'yawl',
    title: 'Yawl',
    description: 'A two-masted sailing vessel with the mizzenmast stepped abaft the rudder post.',
    category: 'Vessel Parts'
  },
  {
    id: 'zephyr',
    title: 'Zephyr',
    description: 'A gentle breeze.',
    category: 'Terminology'
  },
  {
    id: 'abaft-the-beam',
    title: 'Abaft the Beam',
    description: 'A relative bearing of greater than 90 degrees from the bow.',
    category: 'Navigation'
  },
  {
    id: 'abandon-ship',
    title: 'Abandon Ship',
    description: 'An order given by the master to leave the vessel in an emergency.',
    category: 'Safety'
  },
  {
    id: 'abeam-to-port',
    title: 'Abeam to Port',
    description: 'At a right angle to the ship\'s centerline on the left side.',
    category: 'Navigation'
  },
  {
    id: 'abeam-to-starboard',
    title: 'Abeam to Starboard',
    description: 'At a right angle to the ship\'s centerline on the right side.',
    category: 'Navigation'
  },
  {
    id: 'accommodation-ladder',
    title: 'Accommodation Ladder',
    description: 'A portable flight of steps down a ship\'s side to allow people to board from a boat or pier.',
    category: 'Vessel Parts'
  },
  {
    id: 'adrift',
    title: 'Adrift',
    description: 'A vessel floating without being either moored or steered.',
    category: 'Terminology'
  },
  {
    id: 'advance',
    title: 'Advance',
    description: 'The distance a vessel travels in the direction of its original course after the helm has been put over.',
    category: 'Navigation'
  },
  {
    id: 'advection-fog',
    title: 'Advection Fog',
    description: 'Fog formed when warm, moist air moves over a colder surface.',
    category: 'Environment'
  },
  {
    id: 'aft-peak-tank',
    title: 'Aft Peak Tank',
    description: 'A water tank located at the extreme after end of a ship, used for trimming.',
    category: 'Vessel Parts'
  },
  {
    id: 'after-deck',
    title: 'After Deck',
    description: 'The part of the deck located toward the stern of the ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'afterbody',
    title: 'Afterbody',
    description: 'The portion of a ship\'s hull abaft the midship section.',
    category: 'Vessel Parts'
  },
  {
    id: 'aground',
    title: 'Aground',
    description: 'Touching or resting on the bottom of a body of water.',
    category: 'Terminology'
  },
  {
    id: 'ahead-of-the-beam',
    title: 'Ahead of the Beam',
    description: 'A relative bearing of less than 90 degrees from the bow.',
    category: 'Navigation'
  },
  {
    id: 'ahoy',
    title: 'Ahoy',
    description: 'A traditional maritime greeting or call to attract attention.',
    category: 'Terminology'
  },
  {
    id: 'air-draft',
    title: 'Air Draft',
    description: 'The distance from the waterline to the highest point of a vessel.',
    category: 'Terminology'
  },
  {
    id: 'all-hands',
    title: 'All Hands',
    description: 'The entire crew of a ship.',
    category: 'Crew'
  },
  {
    id: 'all-standing',
    title: 'All Standing',
    description: 'To be brought to a sudden stop without warning.',
    category: 'Terminology'
  },
  {
    id: 'aloft',
    title: 'Aloft',
    description: 'In the rigging or high above the deck.',
    category: 'Terminology'
  },
  {
    id: 'alongside',
    title: 'Alongside',
    description: 'Beside a pier, wharf, or another vessel.',
    category: 'Operations'
  },
  {
    id: 'amidships',
    title: 'Amidships',
    description: 'In or toward the middle of the ship.',
    category: 'Terminology'
  },
  {
    id: 'anchor-ball',
    title: 'Anchor Ball',
    description: 'A black circular day shape displayed by a vessel at anchor.',
    category: 'Navigation'
  },
  {
    id: 'anchor-chain',
    title: 'Anchor Chain',
    description: 'The heavy chain that connects the anchor to the ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'anchor-light',
    title: 'Anchor Light',
    description: 'A white light displayed by a vessel at anchor at night.',
    category: 'Navigation'
  },
  {
    id: 'anchor-watch',
    title: 'Anchor Watch',
    description: 'A crew member assigned to monitor the ship\'s position while at anchor.',
    category: 'Crew'
  },
  {
    id: 'anemometer',
    title: 'Anemometer',
    description: 'An instrument used to measure wind speed.',
    category: 'Technical'
  },
  {
    id: 'aneroid-barometer',
    title: 'Aneroid Barometer',
    description: 'An instrument used to measure atmospheric pressure without using liquid.',
    category: 'Technical'
  },
  {
    id: 'angle-of-attack',
    title: 'Angle of Attack',
    description: 'The angle between the chord line of an airfoil and the direction of the fluid flow.',
    category: 'Technical'
  },
  {
    id: 'angle-of-heel',
    title: 'Angle of Heel',
    description: 'The degree to which a vessel leans to one side.',
    category: 'Terminology'
  },
  {
    id: 'answering-pennant',
    title: 'Answering Pennant',
    description: 'A signal flag used to acknowledge a message.',
    category: 'Navigation'
  },
  {
    id: 'anti-fouling-paint',
    title: 'Anti-fouling Paint',
    description: 'Specialized coating applied to the hull to prevent the growth of marine organisms.',
    category: 'Technical'
  },
  {
    id: 'apparent-wind',
    title: 'Apparent Wind',
    description: 'The wind experienced by a moving vessel, a combination of true wind and the wind created by the vessel\'s motion.',
    category: 'Environment'
  },
  {
    id: 'apron',
    title: 'Apron',
    description: 'A structural member used to strengthen the stem of a wooden vessel.',
    category: 'Vessel Parts'
  },
  {
    id: 'archboard',
    title: 'Archboard',
    description: 'The planking forming the upper part of the stern of a boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'armament',
    title: 'Armament',
    description: 'The weapons and defensive systems of a warship.',
    category: 'History'
  },
  {
    id: 'arrival-notice',
    title: 'Arrival Notice',
    description: 'A document sent by a carrier to notify a party of a shipment\'s arrival.',
    category: 'Cargo'
  },
  {
    id: 'articles-of-agreement',
    title: 'Articles of Agreement',
    description: 'The contract between the master and the crew of a ship.',
    category: 'Regulations'
  },
  {
    id: 'aspect-ratio',
    title: 'Aspect Ratio',
    description: 'The ratio of the span of a sail or rudder to its chord.',
    category: 'Technical'
  },
  {
    id: 'athwartships',
    title: 'Athwartships',
    description: 'Across the ship, from side to side.',
    category: 'Terminology'
  },
  {
    id: 'automatic-identification-system',
    title: 'Automatic Identification System (AIS)',
    description: 'An automated tracking system used on ships and by vessel traffic services.',
    category: 'Technical'
  },
  {
    id: 'automatic-pilot',
    title: 'Automatic Pilot',
    description: 'A device used to maintain a ship\'s course automatically.',
    category: 'Technical'
  },
  {
    id: 'awash',
    title: 'Awash',
    description: 'Level with or slightly below the surface of the water.',
    category: 'Terminology'
  },
  {
    id: 'back-and-fill',
    title: 'Back and Fill',
    description: 'A technique used to maneuver a sailing vessel in a narrow channel using the tide.',
    category: 'Navigation'
  },
  {
    id: 'backstay',
    title: 'Backstay',
    description: 'A piece of standing rigging that supports the mast from aft.',
    category: 'Vessel Parts'
  },
  {
    id: 'backwash',
    title: 'Backwash',
    description: 'Water thrown back by a propeller or the motion of a vessel.',
    category: 'Terminology'
  },
  {
    id: 'baffling-winds',
    title: 'Baffling Winds',
    description: 'Winds that frequently shift direction and vary in intensity.',
    category: 'Environment'
  },
  {
    id: 'baggywrinkle',
    title: 'Baggywrinkle',
    description: 'Chafing gear made from old rope scraps to protect sails.',
    category: 'Vessel Parts'
  },
  {
    id: 'bailer',
    title: 'Bailer',
    description: 'A device used to remove water from a boat.',
    category: 'Safety'
  },
  {
    id: 'barge',
    title: 'Barge',
    description: 'A flat-bottomed boat, built mainly for river and canal transport of heavy goods.',
    category: 'Cargo'
  },
  {
    id: 'barometer',
    title: 'Barometer',
    description: 'An instrument used to measure atmospheric pressure.',
    category: 'Technical'
  },
  {
    id: 'barratry',
    title: 'Barratry',
    description: 'An unlawful act or fraudulent breach of duty by a master or crew to the injury of the owner.',
    category: 'Regulations'
  },
  {
    id: 'batten',
    title: 'Batten',
    description: 'A thin strip of wood or plastic used to stiffen the leach of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'batten-down',
    title: 'Batten Down',
    description: 'To secure hatches and other openings in preparation for a storm.',
    category: 'Operations'
  },
  {
    id: 'beacon',
    title: 'Beacon',
    description: 'A fixed visual aid to navigation.',
    category: 'Navigation'
  },
  {
    id: 'beam-ends',
    title: 'Beam Ends',
    description: 'A vessel is on its beam ends when it has listed so far that its deck beams are nearly vertical.',
    category: 'Terminology'
  },
  {
    id: 'beam-sea',
    title: 'Beam Sea',
    description: 'A sea directed at right angles to the ship\'s heading.',
    category: 'Environment'
  },
  {
    id: 'beam-wind',
    title: 'Beam Wind',
    description: 'A wind blowing at right angles to the ship\'s heading.',
    category: 'Environment'
  },
  {
    id: 'bear-away',
    title: 'Bear Away',
    description: 'To steer the vessel further away from the wind.',
    category: 'Navigation'
  },
  {
    id: 'bear-up',
    title: 'Bear Up',
    description: 'To steer the vessel closer to the wind.',
    category: 'Navigation'
  },
  {
    id: 'bearing-circle',
    title: 'Bearing Circle',
    description: 'A device placed over a compass to take bearings of distant objects.',
    category: 'Technical'
  },
  {
    id: 'beat-to-quarters',
    title: 'Beat to Quarters',
    description: 'A signal for the crew to take their stations for battle.',
    category: 'History'
  },
  {
    id: 'beating',
    title: 'Beating',
    description: 'Sailing toward the wind by making a series of tacks.',
    category: 'Navigation'
  },
  {
    id: 'becalmed',
    title: 'Becalmed',
    description: 'A sailing vessel unable to move due to lack of wind.',
    category: 'Terminology'
  },
  {
    id: 'becket',
    title: 'Becket',
    description: 'A loop of rope or a metal eye used for securing things.',
    category: 'Vessel Parts'
  },
  {
    id: 'before-the-mast',
    title: 'Before the Mast',
    description: 'Serving as an ordinary seaman, whose quarters were in the forward part of the ship.',
    category: 'History'
  },
  {
    id: 'belaying-pin',
    title: 'Belaying Pin',
    description: 'A short wooden or metal rod used for securing lines.',
    category: 'Vessel Parts'
  },
  {
    id: 'bell-buoy',
    title: 'Bell Buoy',
    description: 'A buoy equipped with a bell that rings as it moves with the waves.',
    category: 'Navigation'
  },
  {
    id: 'below',
    title: 'Below',
    description: 'Beneath the deck; inside the ship.',
    category: 'Terminology'
  },
  {
    id: 'bend',
    title: 'Bend',
    description: 'To fasten a sail to a spar or a rope to another rope.',
    category: 'Terminology'
  },
  {
    id: 'beneaped',
    title: 'Beneaped',
    description: 'A vessel aground because the tide has fallen from its highest point during neap tides.',
    category: 'Terminology'
  },
  {
    id: 'bergy-bit',
    title: 'Bergy Bit',
    description: 'A medium-sized piece of floating ice, smaller than an iceberg.',
    category: 'Environment'
  },
  {
    id: 'bermuda-rig',
    title: 'Bermuda Rig',
    description: 'A configuration of sails with a triangular mainsail.',
    category: 'Vessel Parts'
  },
  {
    id: 'berth-rate',
    title: 'Berth Rate',
    description: 'The charge for using a berth in a port.',
    category: 'Operations'
  },
  {
    id: 'best-bower-anchor',
    title: 'Best Bower Anchor',
    description: 'The larger of the two anchors carried at the bow.',
    category: 'Vessel Parts'
  },
  {
    id: 'between-decks',
    title: 'Between Decks',
    description: 'The space between two decks of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'bibbs',
    title: 'Bibbs',
    description: 'Pieces of timber bolted to the hounds of a mast to support the trestle-trees.',
    category: 'Vessel Parts'
  },
  {
    id: 'bilge-keel',
    title: 'Bilge Keel',
    description: 'A pair of fins on the hull of a ship to reduce rolling.',
    category: 'Vessel Parts'
  },
  {
    id: 'bilge-water',
    title: 'Bilge Water',
    description: 'Water that collects in the lowest part of a ship\'s hull.',
    category: 'Terminology'
  },
  {
    id: 'bill-of-health',
    title: 'Bill of Health',
    description: 'A certificate given to a ship stating the health conditions of the port of departure.',
    category: 'Regulations'
  },
  {
    id: 'bill-of-sale',
    title: 'Bill of Sale',
    description: 'A legal document that transfers ownership of a vessel.',
    category: 'Regulations'
  },
  {
    id: 'binnacle-list',
    title: 'Binnacle List',
    description: 'A list of crew members who are excused from duty due to illness.',
    category: 'Crew'
  },
  {
    id: 'bitter-end',
    title: 'Bitter End',
    description: 'The last part of a rope or chain.',
    category: 'Terminology'
  },
  {
    id: 'black-gang',
    title: 'Black Gang',
    description: 'A slang term for the engine room crew on a steamship.',
    category: 'History'
  },
  {
    id: 'block-and-tackle',
    title: 'Block and Tackle',
    description: 'A system of two or more pulleys with a rope or cable threaded between them.',
    category: 'Technical'
  },
  {
    id: 'blue-peter',
    title: 'Blue Peter',
    description: 'A signal flag (the letter P) hoisted to indicate that a vessel is about to sail.',
    category: 'Navigation'
  },
  {
    id: 'board',
    title: 'Board',
    description: 'To enter a ship.',
    category: 'Operations'
  },
  {
    id: 'boat-hook',
    title: 'Boat Hook',
    description: 'A pole with a hook and a blunt point at one end, used for fending off or pulling a boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'boatswain',
    title: 'Boatswain',
    description: 'The officer in charge of the hull, rigging, and sails.',
    category: 'Crew'
  },
  {
    id: 'boatswain-chair',
    title: 'Boatswain\'s Chair',
    description: 'A seat used to hoist a person aloft for work.',
    category: 'Safety'
  },
  {
    id: 'bobstay',
    title: 'Bobstay',
    description: 'A stay that holds the bowsprit down against the upward pull of the forestay.',
    category: 'Vessel Parts'
  },
  {
    id: 'body-plan',
    title: 'Body Plan',
    description: 'A drawing showing the transverse sections of a ship\'s hull.',
    category: 'Technical'
  },
  {
    id: 'bollard-pull',
    title: 'Bollard Pull',
    description: 'A measure of the pulling power of a tugboat.',
    category: 'Technical'
  },
  {
    id: 'bolster',
    title: 'Bolster',
    description: 'A piece of wood or metal used to prevent chafing of a rope.',
    category: 'Vessel Parts'
  },
  {
    id: 'bolt-rope',
    title: 'Bolt Rope',
    description: 'A rope sewn into the edge of a sail to strengthen it.',
    category: 'Vessel Parts'
  },
  {
    id: 'booby-hatch',
    title: 'Booby Hatch',
    description: 'A small hatch with a sliding cover, used for access to the crew\'s quarters.',
    category: 'Vessel Parts'
  },
  {
    id: 'boom-vang',
    title: 'Boom Vang',
    description: 'A system of blocks and tackle used to hold the boom down.',
    category: 'Vessel Parts'
  },
  {
    id: 'boot-top',
    title: 'Boot Top',
    description: 'The area of a ship\'s hull between the light and load waterlines.',
    category: 'Vessel Parts'
  },
  {
    id: 'bottomry',
    title: 'Bottomry',
    description: 'A contract in which the owner of a ship borrows money for a voyage and pledges the ship as security.',
    category: 'Regulations'
  },
  {
    id: 'bow-chaser',
    title: 'Bow Chaser',
    description: 'A gun placed in the bow of a ship to fire at a vessel being pursued.',
    category: 'History'
  },
  {
    id: 'bow-line',
    title: 'Bow Line',
    description: 'A mooring line leading forward from the bow of a ship.',
    category: 'Operations'
  },
  {
    id: 'bow-thruster',
    title: 'Bow Thruster',
    description: 'A propulsion device built into the bow of a ship to increase maneuverability.',
    category: 'Technical'
  },
  {
    id: 'bower-anchor',
    title: 'Bower Anchor',
    description: 'An anchor carried at the bow of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'bowline',
    title: 'Bowline',
    description: 'A versatile knot used to form a fixed loop at the end of a rope.',
    category: 'Terminology'
  },
  {
    id: 'box-hauling',
    title: 'Box Hauling',
    description: 'A maneuver used to tack a sailing vessel in a very narrow space.',
    category: 'Navigation'
  },
  {
    id: 'brace',
    title: 'Brace',
    description: 'A rope used to swing a yard around.',
    category: 'Vessel Parts'
  },
  {
    id: 'brail',
    title: 'Brail',
    description: 'A rope used to gather in a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'breakwater',
    title: 'Breakwater',
    description: 'A structure built to protect a harbor or shore from the force of waves.',
    category: 'Operations'
  },
  {
    id: 'breast-line',
    title: 'Breast Line',
    description: 'A mooring line leading at right angles from the ship to the pier.',
    category: 'Operations'
  },
  {
    id: 'breeches-buoy',
    title: 'Breeches Buoy',
    description: 'A life-saving device used to rescue people from a stranded vessel.',
    category: 'History'
  },
  {
    id: 'bridge-deck',
    title: 'Bridge Deck',
    description: 'The deck on which the bridge is located.',
    category: 'Vessel Parts'
  },
  {
    id: 'bridge-wing',
    title: 'Bridge Wing',
    description: 'An extension of the bridge to the sides of the ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'bridle',
    title: 'Bridle',
    description: 'A span of rope or chain with both ends secured.',
    category: 'Vessel Parts'
  },
  {
    id: 'brig',
    title: 'Brig',
    description: 'A two-masted sailing vessel, square-rigged on both masts.',
    category: 'History'
  },
  {
    id: 'brigantine',
    title: 'Brigantine',
    description: 'A two-masted sailing vessel, square-rigged on the foremast and fore-and-aft rigged on the mainmast.',
    category: 'History'
  },
  {
    id: 'brightwork',
    title: 'Brightwork',
    description: 'Polished metal or varnished wood on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'broach',
    title: 'Broach',
    description: 'To swing around broadside to the waves, risking capsizing.',
    category: 'Terminology'
  },
  {
    id: 'broadside',
    title: 'Broadside',
    description: 'The side of a ship above the waterline.',
    category: 'Terminology'
  },
  {
    id: 'brow',
    title: 'Brow',
    description: 'A portable gangway used for boarding a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'buffer',
    title: 'Buffer',
    description: 'A person responsible for the maintenance of the ship\'s hull and deck.',
    category: 'Crew'
  },
  {
    id: 'bulk-cargo',
    title: 'Bulk Cargo',
    description: 'Cargo that is transported unpackaged in large quantities.',
    category: 'Cargo'
  },
  {
    id: 'bumboat',
    title: 'Bumboat',
    description: 'A small boat used to sell provisions to ships in port.',
    category: 'History'
  },
  {
    id: 'bumpkin',
    title: 'Bumpkin',
    description: 'A short spar extending from the hull to provide a lead for a rope.',
    category: 'Vessel Parts'
  },
  {
    id: 'bunt',
    title: 'Bunt',
    description: 'The middle part of a square sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'buntline',
    title: 'Buntline',
    description: 'A rope used to haul up the foot of a square sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'buoy',
    title: 'Buoy',
    description: 'A floating object used as an aid to navigation.',
    category: 'Navigation'
  },
  {
    id: 'buoyancy',
    title: 'Buoyancy',
    description: 'The upward force exerted by a fluid that opposes the weight of an immersed object.',
    category: 'Technical'
  },
  {
    id: 'burdened-vessel',
    title: 'Burdened Vessel',
    description: 'The vessel that must give way to another vessel in a crossing situation.',
    category: 'Regulations'
  },
  {
    id: 'burgee',
    title: 'Burgee',
    description: 'A small flag identifying a yacht club.',
    category: 'Terminology'
  },
  {
    id: 'butt-joint',
    title: 'Butt Joint',
    description: 'A joint where the ends of two planks or plates meet squarely.',
    category: 'Technical'
  },
  {
    id: 'buttock-lines',
    title: 'Buttock Lines',
    description: 'Lines showing the longitudinal sections of a ship\'s hull.',
    category: 'Technical'
  },
  {
    id: 'by-the-board',
    title: 'By the Board',
    description: 'To go overboard; to be lost or discarded.',
    category: 'Terminology'
  },
  {
    id: 'cable-layer',
    title: 'Cable Layer',
    description: 'A ship designed to lay underwater cables.',
    category: 'Technical'
  },
  {
    id: 'caboose',
    title: 'Caboose',
    description: 'A small deckhouse used as a galley on early ships.',
    category: 'History'
  },
  {
    id: 'caisson',
    title: 'Caisson',
    description: 'A watertight structure used for underwater work or as a dock gate.',
    category: 'Technical'
  },
  {
    id: 'camber',
    title: 'Camber',
    description: 'The transverse curvature of a ship\'s deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'camel',
    title: 'Camel',
    description: 'A hollow float used to raise a sunken vessel.',
    category: 'Technical'
  },
  {
    id: 'can-buoy',
    title: 'Can Buoy',
    description: 'A cylindrical buoy used as an aid to navigation.',
    category: 'Navigation'
  },
  {
    id: 'canal',
    title: 'Canal',
    description: 'An artificial waterway built for navigation.',
    category: 'Operations'
  },
  {
    id: 'cant-frame',
    title: 'Cant Frame',
    description: 'A frame that is not at right angles to the ship\'s centerline.',
    category: 'Vessel Parts'
  },
  {
    id: 'canvas',
    title: 'Canvas',
    description: 'A heavy fabric used for making sails.',
    category: 'Vessel Parts'
  },
  {
    id: 'cap-size',
    title: 'Capsize',
    description: 'To overturn a vessel in the water.',
    category: 'Terminology'
  },
  {
    id: 'captain-of-the-port',
    title: 'Captain of the Port',
    description: 'A Coast Guard officer responsible for the safety and security of a port.',
    category: 'Regulations'
  },
  {
    id: 'caravel',
    title: 'Caravel',
    description: 'A small, fast Spanish or Portuguese sailing ship of the 15th–17th centuries.',
    category: 'History'
  },
  {
    id: 'cardinal-points',
    title: 'Cardinal Points',
    description: 'The four main directions on a compass: North, South, East, and West.',
    category: 'Navigation'
  },
  {
    id: 'careen',
    title: 'Careen',
    description: 'To lean a ship over on its side for cleaning or repair.',
    category: 'Operations'
  },
  {
    id: 'cargo-manifest',
    title: 'Cargo Manifest',
    description: 'A document listing all the cargo on a ship.',
    category: 'Cargo'
  },
  {
    id: 'cargo-net',
    title: 'Cargo Net',
    description: 'A net used for hoisting cargo.',
    category: 'Cargo'
  },
  {
    id: 'cargo-plan',
    title: 'Cargo Plan',
    description: 'A drawing showing the location of all cargo on a ship.',
    category: 'Cargo'
  },
  {
    id: 'carrack',
    title: 'Carrack',
    description: 'A large merchant ship of a kind operating in European waters in the 14th–17th centuries.',
    category: 'History'
  },
  {
    id: 'carvel-built',
    title: 'Carvel Built',
    description: 'A method of boat building where the planks are laid side by side, meeting flush at the seams.',
    category: 'Technical'
  },
  {
    id: 'cat-o-nine-tails',
    title: 'Cat-o\'-nine-tails',
    description: 'A whip with nine knotted lashes, formerly used for punishment on ships.',
    category: 'History'
  },
  {
    id: 'catamaran',
    title: 'Catamaran',
    description: 'A vessel with two parallel hulls.',
    category: 'Vessel Parts'
  },
  {
    id: 'cathead',
    title: 'Cathead',
    description: 'A beam extending from the bow of a ship, used for hoisting the anchor.',
    category: 'Vessel Parts'
  },
  {
    id: 'catwalk',
    title: 'Catwalk',
    description: 'A narrow elevated walkway on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'caulk',
    title: 'Caulk',
    description: 'To make a seam watertight by filling it with oakum and pitch.',
    category: 'Technical'
  },
  {
    id: 'ceiling',
    title: 'Ceiling',
    description: 'The inner planking of a ship\'s hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'celestial-navigation',
    title: 'Celestial Navigation',
    description: 'The art and science of finding one\'s way by observing the sun, moon, stars, and planets.',
    category: 'Navigation'
  },
  {
    id: 'center-of-lateral-resistance',
    title: 'Center of Lateral Resistance',
    description: 'The point through which the lateral force of the water acts on the hull.',
    category: 'Technical'
  },
  {
    id: 'centerboard',
    title: 'Centerboard',
    description: 'A retractable keel used to prevent a sailing vessel from drifting sideways.',
    category: 'Vessel Parts'
  },
  {
    id: 'certificate-of-inspection',
    title: 'Certificate of Inspection',
    description: 'A document issued by the Coast Guard stating that a vessel meets all safety requirements.',
    category: 'Regulations'
  },
  {
    id: 'certificate-of-registry',
    title: 'Certificate of Registry',
    description: 'A document that identifies a ship and its owner.',
    category: 'Regulations'
  },
  {
    id: 'chafing-gear',
    title: 'Chafing Gear',
    description: 'Material used to protect a rope or sail from wear.',
    category: 'Vessel Parts'
  },
  {
    id: 'chain-locker',
    title: 'Chain Locker',
    description: 'A compartment in the bow of a ship used for storing the anchor chain.',
    category: 'Vessel Parts'
  },
  {
    id: 'chain-plate',
    title: 'Chain Plate',
    description: 'A metal plate bolted to the hull to which the shrouds are attached.',
    category: 'Vessel Parts'
  },
  {
    id: 'channel',
    title: 'Channel',
    description: 'A deep part of a river or harbor used for navigation.',
    category: 'Operations'
  },
  {
    id: 'charley-noble',
    title: 'Charley Noble',
    description: 'A slang term for the galley smokestack.',
    category: 'History'
  },
  {
    id: 'chart-table',
    title: 'Chart Table',
    description: 'A table on the bridge used for navigation charts.',
    category: 'Vessel Parts'
  },
  {
    id: 'check',
    title: 'Check',
    description: 'To ease off a rope slowly.',
    category: 'Terminology'
  },
  {
    id: 'cheek-blocks',
    title: 'Cheek Blocks',
    description: 'Blocks with one side fixed to a spar or the hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'chief-mate',
    title: 'Chief Mate',
    description: 'The second-in-command of a merchant ship.',
    category: 'Crew'
  },
  {
    id: 'chief-steward',
    title: 'Chief Steward',
    description: 'The person in charge of the catering department on a ship.',
    category: 'Crew'
  },
  {
    id: 'chock',
    title: 'Chock',
    description: 'A heavy metal fitting through which mooring lines are passed.',
    category: 'Vessel Parts'
  },
  {
    id: 'chronometer',
    title: 'Chronometer',
    description: 'A highly accurate timepiece used for navigation.',
    category: 'Technical'
  },
  {
    id: 'clamp',
    title: 'Clamp',
    description: 'A longitudinal structural member used to support deck beams.',
    category: 'Vessel Parts'
  },
  {
    id: 'claw-off',
    title: 'Claw Off',
    description: 'To sail away from a lee shore in a storm.',
    category: 'Navigation'
  },
  {
    id: 'clean-bill-of-lading',
    title: 'Clean Bill of Lading',
    description: 'A bill of lading issued when the goods are received in good condition.',
    category: 'Cargo'
  },
  {
    id: 'clear',
    title: 'Clear',
    description: 'To leave a port after completing all formalities.',
    category: 'Operations'
  },
  {
    id: 'clew',
    title: 'Clew',
    description: 'The lower corner of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'clew-line',
    title: 'Clew Line',
    description: 'A rope used to haul up the clew of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'clinker-built',
    title: 'Clinker Built',
    description: 'A method of boat building where the planks overlap each other.',
    category: 'Technical'
  },
  {
    id: 'close-aboard',
    title: 'Close Aboard',
    description: 'Very near to a ship.',
    category: 'Terminology'
  },
  {
    id: 'close-hauled',
    title: 'Close-hauled',
    description: 'Sailing as close to the wind as possible.',
    category: 'Navigation'
  },
  {
    id: 'clove-hitch',
    title: 'Clove Hitch',
    description: 'A knot used to secure a rope to a spar or another rope.',
    category: 'Terminology'
  },
  {
    id: 'club-hauling',
    title: 'Club Hauling',
    description: 'A maneuver used to tack a sailing vessel in a narrow space by dropping an anchor.',
    category: 'History'
  },
  {
    id: 'coast-pilot',
    title: 'Coast Pilot',
    description: 'A series of books providing detailed information for navigation along a coast.',
    category: 'Navigation'
  },
  {
    id: 'coastal-navigation',
    title: 'Coastal Navigation',
    description: 'Navigation within sight of land.',
    category: 'Navigation'
  },
  {
    id: 'coil',
    title: 'Coil',
    description: 'To lay a rope down in circular loops.',
    category: 'Terminology'
  },
  {
    id: 'collier',
    title: 'Collier',
    description: 'A ship designed to carry coal.',
    category: 'History'
  },
  {
    id: 'collision-bulkhead',
    title: 'Collision Bulkhead',
    description: 'The foremost watertight bulkhead in a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'collision-mats',
    title: 'Collision Mats',
    description: 'Heavy mats used to plug a hole in a ship\'s hull.',
    category: 'Safety'
  },
  {
    id: 'colors',
    title: 'Colors',
    description: 'The national flag flown by a ship.',
    category: 'Terminology'
  },
  {
    id: 'combination-carrier',
    title: 'Combination Carrier',
    description: 'A ship designed to carry either liquid or dry bulk cargoes.',
    category: 'Cargo'
  },
  {
    id: 'come-about',
    title: 'Come About',
    description: 'To tack a sailing vessel.',
    category: 'Navigation'
  },
  {
    id: 'commission',
    title: 'Commission',
    description: 'To place a ship in active service.',
    category: 'Operations'
  },
  {
    id: 'commodity-rate',
    title: 'Commodity Rate',
    description: 'A freight rate applicable to a specific commodity.',
    category: 'Cargo'
  },
  {
    id: 'compass-card',
    title: 'Compass Card',
    description: 'The circular card in a compass marked with directions.',
    category: 'Technical'
  },
  {
    id: 'compass-course',
    title: 'Compass Course',
    description: 'The course as read from a magnetic compass.',
    category: 'Navigation'
  },
  {
    id: 'compass-error',
    title: 'Compass Error',
    description: 'The combination of variation and deviation.',
    category: 'Navigation'
  },
  {
    id: 'compass-rose',
    title: 'Compass Rose',
    description: 'A figure on a chart showing the directions of the compass.',
    category: 'Navigation'
  },
  {
    id: 'composite-construction',
    title: 'Composite Construction',
    description: 'A method of ship building using both wood and iron.',
    category: 'History'
  },
  {
    id: 'conning',
    title: 'Conning',
    description: 'The act of directing the steering of a ship.',
    category: 'Operations'
  },
  {
    id: 'conning-tower',
    title: 'Conning Tower',
    description: 'A raised platform on a submarine or warship used for observation and command.',
    category: 'Vessel Parts'
  },
  {
    id: 'consignee',
    title: 'Consignee',
    description: 'The person to whom cargo is shipped.',
    category: 'Cargo'
  },
  {
    id: 'consignor',
    title: 'Consignor',
    description: 'The person who ships cargo.',
    category: 'Cargo'
  },
  {
    id: 'container-terminal',
    title: 'Container Terminal',
    description: 'A facility where containers are loaded and unloaded from ships.',
    category: 'Operations'
  },
  {
    id: 'contraband',
    title: 'Contraband',
    description: 'Goods that are prohibited by law from being imported or exported.',
    category: 'Regulations'
  },
  {
    id: 'convoy',
    title: 'Convoy',
    description: 'A group of ships traveling together for mutual protection.',
    category: 'History'
  },
  {
    id: 'cordage',
    title: 'Cordage',
    description: 'A general term for ropes and lines.',
    category: 'Terminology'
  },
  {
    id: 'corinthian',
    title: 'Corinthian',
    description: 'An amateur yachtsman.',
    category: 'History'
  },
  {
    id: 'corvette',
    title: 'Corvette',
    description: 'A small, fast warship.',
    category: 'History'
  },
  {
    id: 'counter',
    title: 'Counter',
    description: 'The part of a ship\'s stern that overhangs the water.',
    category: 'Vessel Parts'
  },
  {
    id: 'course',
    title: 'Course',
    description: 'The direction in which a vessel is steered.',
    category: 'Navigation'
  },
  {
    id: 'course-made-good',
    title: 'Course Made Good',
    description: 'The actual direction of travel over the ground.',
    category: 'Navigation'
  },
  {
    id: 'course-recorder',
    title: 'Course Recorder',
    description: 'An instrument that makes a continuous record of a ship\'s heading.',
    category: 'Technical'
  },
  {
    id: 'crab',
    title: 'Crab',
    description: 'To move sideways through the water.',
    category: 'Terminology'
  },
  {
    id: 'cradle',
    title: 'Cradle',
    description: 'A framework used to support a vessel on land.',
    category: 'Operations'
  },
  {
    id: 'crank',
    title: 'Crank',
    description: 'A vessel that is unstable and easily listed.',
    category: 'Terminology'
  },
  {
    id: 'crest',
    title: 'Crest',
    description: 'The highest part of a wave.',
    category: 'Terminology'
  },
  {
    id: 'crew-list',
    title: 'Crew List',
    description: 'A document listing all the members of a ship\'s crew.',
    category: 'Crew'
  },
  {
    id: 'cringle',
    title: 'Cringle',
    description: 'A metal or rope eye in the edge of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'cross-bearings',
    title: 'Cross Bearings',
    description: 'Two or more bearings taken of different objects to find a vessel\'s position.',
    category: 'Navigation'
  },
  {
    id: 'cross-jack',
    title: 'Cross-jack',
    description: 'The lower yard on the mizzenmast of a square-rigged ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'cross-trees',
    title: 'Cross-trees',
    description: 'Horizontal members at the top of a mast used to spread the shrouds.',
    category: 'Vessel Parts'
  },
  {
    id: 'crow-foot',
    title: 'Crow-foot',
    description: 'A system of small lines used to suspend an awning.',
    category: 'History'
  },
  {
    id: 'cruise-ship',
    title: 'Cruise Ship',
    description: 'A passenger ship used for pleasure voyages.',
    category: 'History'
  },
  {
    id: 'crutch',
    title: 'Crutch',
    description: 'A support for a boom or oar.',
    category: 'Vessel Parts'
  },
  {
    id: 'cuddy',
    title: 'Cuddy',
    description: 'A small cabin or pantry on a boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'cunningham',
    title: 'Cunningham',
    description: 'A line used to adjust the tension of the luff of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'current',
    title: 'Current',
    description: 'The horizontal movement of water.',
    category: 'Environment'
  },
  {
    id: 'customs',
    title: 'Customs',
    description: 'The government agency responsible for collecting duties on imported goods.',
    category: 'Regulations'
  },
  {
    id: 'cut-of-the-jib',
    title: 'Cut of the Jib',
    description: 'A person\'s general appearance or manner.',
    category: 'Terminology'
  },
  {
    id: 'cutter',
    title: 'Cutter',
    description: 'A small, fast sailing vessel with one mast.',
    category: 'History'
  },
  {
    id: 'cutwater',
    title: 'Cutwater',
    description: 'The forward edge of a ship\'s stem.',
    category: 'Vessel Parts'
  },
  {
    id: 'daggerboard',
    title: 'Daggerboard',
    description: 'A retractable keel that is raised and lowered vertically.',
    category: 'Vessel Parts'
  },
  {
    id: 'davy-jones-locker',
    title: 'Davy Jones\' Locker',
    description: 'An idiom for the bottom of the sea.',
    category: 'History'
  },
  {
    id: 'day-shape',
    title: 'Day Shape',
    description: 'A geometric object displayed by a vessel to indicate its status during the day.',
    category: 'Navigation'
  },
  {
    id: 'daymark',
    title: 'Daymark',
    description: 'A visual aid to navigation used during the day.',
    category: 'Navigation'
  },
  {
    id: 'dead-ahead',
    title: 'Dead Ahead',
    description: 'Directly in front of the ship.',
    category: 'Terminology'
  },
  {
    id: 'dead-freight',
    title: 'Dead Freight',
    description: 'Freight paid for space in a ship that is not used.',
    category: 'Cargo'
  },
  {
    id: 'dead-light',
    title: 'Dead Light',
    description: 'A strong metal cover for a porthole.',
    category: 'Vessel Parts'
  },
  {
    id: 'dead-rise',
    title: 'Dead Rise',
    description: 'The upward slope of a ship\'s bottom from the keel to the bilge.',
    category: 'Vessel Parts'
  },
  {
    id: 'dead-water',
    title: 'Dead Water',
    description: 'Water that moves along with a ship\'s hull.',
    category: 'Terminology'
  },
  {
    id: 'deadweight',
    title: 'Deadweight',
    description: 'The total weight a ship can carry, including cargo, fuel, and stores.',
    category: 'Technical'
  },
  {
    id: 'deadwood',
    title: 'Deadwood',
    description: 'Solid timber built into the bow or stern of a wooden vessel.',
    category: 'Vessel Parts'
  },
  {
    id: 'deck-beam',
    title: 'Deck Beam',
    description: 'A transverse structural member supporting the deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'deck-house',
    title: 'Deck House',
    description: 'A structure built on the upper deck of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'deck-log',
    title: 'Deck Log',
    description: 'A record of all events that occur on a ship.',
    category: 'Regulations'
  },
  {
    id: 'deck-officer',
    title: 'Deck Officer',
    description: 'An officer responsible for the navigation and operation of a ship.',
    category: 'Crew'
  },
  {
    id: 'deep-six',
    title: 'Deep Six',
    description: 'To throw something overboard.',
    category: 'Terminology'
  },
  {
    id: 'deep-tank',
    title: 'Deep Tank',
    description: 'A large tank used for carrying liquid cargo or ballast.',
    category: 'Vessel Parts'
  },
  {
    id: 'delivery-order',
    title: 'Delivery Order',
    description: 'A document issued by a carrier authorizing the delivery of cargo.',
    category: 'Cargo'
  },
  {
    id: 'departure',
    title: 'Departure',
    description: 'The distance a vessel travels east or west.',
    category: 'Navigation'
  },
  {
    id: 'derelict',
    title: 'Derelict',
    description: 'A vessel abandoned at sea.',
    category: 'Terminology'
  },
  {
    id: 'destroyer',
    title: 'Destroyer',
    description: 'A fast, maneuverable warship.',
    category: 'History'
  },
  {
    id: 'deviation-table',
    title: 'Deviation Table',
    description: 'A table showing the compass deviation for different headings.',
    category: 'Navigation'
  },
  {
    id: 'dew-point',
    title: 'Dew Point',
    description: 'The temperature at which air becomes saturated with water vapor.',
    category: 'Environment'
  },
  {
    id: 'dhow',
    title: 'Dhow',
    description: 'A traditional Arab sailing vessel.',
    category: 'History'
  },
  {
    id: 'diaphone',
    title: 'Diaphone',
    description: 'A type of foghorn that produces a low-pitched sound.',
    category: 'Technical'
  },
  {
    id: 'dip',
    title: 'Dip',
    description: 'To lower a flag halfway and then raise it again as a salute.',
    category: 'Terminology'
  },
  {
    id: 'directional-buoy',
    title: 'Directional Buoy',
    description: 'A buoy that indicates the direction of a channel.',
    category: 'Navigation'
  },
  {
    id: 'dirk',
    title: 'Dirk',
    description: 'A short dagger formerly worn by midshipmen.',
    category: 'History'
  },
  {
    id: 'displacement-tonnage',
    title: 'Displacement Tonnage',
    description: 'A measure of a ship\'s weight.',
    category: 'Technical'
  },
  {
    id: 'distress-signal',
    title: 'Distress Signal',
    description: 'An internationally recognized signal indicating that a vessel is in danger.',
    category: 'Safety'
  },
  {
    id: 'ditty-bag',
    title: 'Ditty Bag',
    description: 'A small bag used by sailors to hold sewing kits and other personal items.',
    category: 'History'
  },
  {
    id: 'dock',
    title: 'Dock',
    description: 'An enclosed area of water used for mooring ships.',
    category: 'Operations'
  },
  {
    id: 'dock-receipt',
    title: 'Dock Receipt',
    description: 'A document issued by a carrier acknowledging receipt of cargo at a dock.',
    category: 'Cargo'
  },
  {
    id: 'docking-plan',
    title: 'Docking Plan',
    description: 'A drawing showing the position of the blocks in a dry dock.',
    category: 'Technical'
  },
  {
    id: 'dog-vane',
    title: 'Dog-vane',
    description: 'A small weather vane made of feathers or light material.',
    category: 'History'
  },
  {
    id: 'dolphin',
    title: 'Dolphin',
    description: 'A cluster of piles used for mooring or as a fender.',
    category: 'Vessel Parts'
  },
  {
    id: 'donkey-engine',
    title: 'Donkey Engine',
    description: 'A small auxiliary engine used for hoisting or pumping.',
    category: 'History'
  },
  {
    id: 'dory',
    title: 'Dory',
    description: 'A small, flat-bottomed fishing boat.',
    category: 'History'
  },
  {
    id: 'doubling',
    title: 'Doubling',
    description: 'The part of a mast where the upper and lower sections overlap.',
    category: 'Vessel Parts'
  },
  {
    id: 'downhaul',
    title: 'Downhaul',
    description: 'A rope used to haul down a sail or spar.',
    category: 'Vessel Parts'
  },
  {
    id: 'downtide',
    title: 'Downtide',
    description: 'In the direction of the tidal current.',
    category: 'Terminology'
  },
  {
    id: 'drabbler',
    title: 'Drabbler',
    description: 'An additional piece of canvas laced to the bottom of a bonnet on a sail.',
    category: 'History'
  },
  {
    id: 'draft-marks',
    title: 'Draft Marks',
    description: 'Numbers marked on the stem and sternpost to show the ship\'s draft.',
    category: 'Vessel Parts'
  },
  {
    id: 'drag',
    title: 'Drag',
    description: 'The resistance of the water to a ship\'s motion.',
    category: 'Technical'
  },
  {
    id: 'draw',
    title: 'Draw',
    description: 'A vessel draws a certain amount of water when it floats at that depth.',
    category: 'Terminology'
  },
  {
    id: 'dredge',
    title: 'Dredge',
    description: 'To clean out the bottom of a waterway.',
    category: 'Operations'
  },
  {
    id: 'drift-angle',
    title: 'Drift Angle',
    description: 'The angle between a ship\'s heading and its actual track.',
    category: 'Navigation'
  },
  {
    id: 'drift-net',
    title: 'Drift Net',
    description: 'A fishing net that floats in the water.',
    category: 'History'
  },
  {
    id: 'drifter',
    title: 'Drifter',
    description: 'A type of fishing boat that uses drift nets.',
    category: 'History'
  },
  {
    id: 'drive',
    title: 'Drive',
    description: 'A vessel drives when it is carried along by the wind or tide.',
    category: 'Terminology'
  },
  {
    id: 'drogue',
    title: 'Drogue',
    description: 'A sea anchor used to slow down a vessel in a storm.',
    category: 'Safety'
  },
  {
    id: 'drum',
    title: 'Drum',
    description: 'The cylindrical part of a winch or capstan around which a rope is wound.',
    category: 'Vessel Parts'
  },
  {
    id: 'dry-dock',
    title: 'Dry Dock',
    description: 'A dock that can be pumped dry to allow for repairs to a ship\'s hull.',
    category: 'Operations'
  },
  {
    id: 'dry-goods',
    title: 'Dry Goods',
    description: 'Cargo that is not liquid.',
    category: 'Cargo'
  },
  {
    id: 'duck',
    title: 'Duck',
    description: 'A fine, lightweight canvas.',
    category: 'History'
  },
  {
    id: 'duff',
    title: 'Duff',
    description: 'A stiff flour pudding formerly served on ships.',
    category: 'History'
  },
  {
    id: 'dutchman-log',
    title: 'Dutchman\'s Log',
    description: 'A method of finding a ship\'s speed by timing a floating object.',
    category: 'History'
  },
  {
    id: 'ease',
    title: 'Ease',
    description: 'To slacken a rope or to steer closer to the wind.',
    category: 'Terminology'
  },
  {
    id: 'ebb-tide',
    title: 'Ebb Tide',
    description: 'The falling tide.',
    category: 'Environment'
  },
  {
    id: 'echo-sounder',
    title: 'Echo Sounder',
    description: 'A device used to measure the depth of water using sound waves.',
    category: 'Technical'
  },
  {
    id: 'eddy',
    title: 'Eddy',
    description: 'A circular movement of water.',
    category: 'Environment'
  },
  {
    id: 'eight-bells',
    title: 'Eight Bells',
    description: 'A signal indicating the end of a four-hour watch.',
    category: 'History'
  },
  {
    id: 'eking',
    title: 'Eking',
    description: 'A piece of wood used to lengthen another piece.',
    category: 'History'
  },
  {
    id: 'elbow',
    title: 'Elbow',
    description: 'A foul in an anchor chain caused by the ship swinging.',
    category: 'Terminology'
  },
  {
    id: 'embark',
    title: 'Embark',
    description: 'To go on board a ship.',
    category: 'Operations'
  },
  {
    id: 'end-for-end',
    title: 'End-for-end',
    description: 'To reverse the position of a rope or spar.',
    category: 'Terminology'
  },
  {
    id: 'end-on',
    title: 'End-on',
    description: 'Approaching a vessel directly from the front or back.',
    category: 'Terminology'
  },
  {
    id: 'engine-order-telegraph',
    title: 'Engine Order Telegraph',
    description: 'A device used to communicate speed orders from the bridge to the engine room.',
    category: 'Technical'
  },
  {
    id: 'entrance',
    title: 'Entrance',
    description: 'The forward part of a ship\'s hull below the waterline.',
    category: 'Vessel Parts'
  },
  {
    id: 'equator',
    title: 'Equator',
    description: 'The imaginary line around the Earth halfway between the poles.',
    category: 'Navigation'
  },
  {
    id: 'equinox',
    title: 'Equinox',
    description: 'The time when the sun crosses the celestial equator.',
    category: 'Navigation'
  },
  {
    id: 'estimated-position',
    title: 'Estimated Position',
    description: 'A position found by applying leeway and current to a dead reckoning position.',
    category: 'Navigation'
  },
  {
    id: 'estimated-time-of-arrival',
    title: 'ETA',
    description: 'The expected time when a vessel will arrive at its destination.',
    category: 'Operations'
  },
  {
    id: 'estimated-time-of-departure',
    title: 'ETD',
    description: 'The expected time when a vessel will leave a port.',
    category: 'Operations'
  },
  {
    id: 'even-keel',
    title: 'Even Keel',
    description: 'A vessel is on an even keel when its draft is the same at the bow and stern.',
    category: 'Terminology'
  },
  {
    id: 'eye-of-the-storm',
    title: 'Eye of the Storm',
    description: 'The calm center of a tropical cyclone.',
    category: 'Environment'
  },
  {
    id: 'eye-of-the-wind',
    title: 'Eye of the Wind',
    description: 'The direction from which the wind is blowing.',
    category: 'Environment'
  },
  {
    id: 'eye-splice',
    title: 'Eye Splice',
    description: 'A permanent loop made in the end of a rope.',
    category: 'Terminology'
  },
  {
    id: 'eyebolt',
    title: 'Eyebolt',
    description: 'A bolt with a loop at one end.',
    category: 'Vessel Parts'
  },
  {
    id: 'fag-end',
    title: 'Fag-end',
    description: 'The unraveled end of a rope.',
    category: 'Terminology'
  },
  {
    id: 'fairway',
    title: 'Fairway',
    description: 'A navigable channel in a river or harbor.',
    category: 'Operations'
  },
  {
    id: 'fake',
    title: 'Fake',
    description: 'A single loop of a rope in a coil.',
    category: 'Terminology'
  },
  {
    id: 'fake-down',
    title: 'Fake Down',
    description: 'To lay a rope out in long, flat loops so it can run freely.',
    category: 'Terminology'
  },
  {
    id: 'fall',
    title: 'Fall',
    description: 'The part of a tackle to which power is applied.',
    category: 'Vessel Parts'
  },
  {
    id: 'fall-off',
    title: 'Fall Off',
    description: 'To steer further away from the wind.',
    category: 'Navigation'
  },
  {
    id: 'fancy-line',
    title: 'Fancy-line',
    description: 'A line used for decorative purposes.',
    category: 'History'
  },
  {
    id: 'fantail',
    title: 'Fantail',
    description: 'The overhanging part of a ship\'s stern.',
    category: 'Vessel Parts'
  },
  {
    id: 'fathometer',
    title: 'Fathometer',
    description: 'A device used to measure the depth of water.',
    category: 'Technical'
  },
  {
    id: 'feather',
    title: 'Feather',
    description: 'To turn an oar blade horizontal to reduce wind resistance.',
    category: 'Terminology'
  },
  {
    id: 'felloes',
    title: 'Felloes',
    description: 'The segments of the rim of a ship\'s wheel.',
    category: 'Vessel Parts'
  },
  {
    id: 'fend-off',
    title: 'Fend Off',
    description: 'To push a boat away from a pier or another vessel.',
    category: 'Operations'
  },
  {
    id: 'fetch',
    title: 'Fetch',
    description: 'The distance over which the wind blows to create waves.',
    category: 'Environment'
  },
  {
    id: 'fid',
    title: 'Fid',
    description: 'A tapered wooden tool used for splicing rope.',
    category: 'Technical'
  },
  {
    id: 'fiddle',
    title: 'Fiddle',
    description: 'A rack used to prevent dishes from sliding off a table in rough weather.',
    category: 'Vessel Parts'
  },
  {
    id: 'fiddler-green',
    title: 'Fiddler\'s Green',
    description: 'A legendary afterlife for sailors.',
    category: 'History'
  },
  {
    id: 'field-day',
    title: 'Field Day',
    description: 'A day set aside for general cleaning of the ship.',
    category: 'History'
  },
  {
    id: 'fife-rail',
    title: 'Fife Rail',
    description: 'A rail around a mast used for securing belaying pins.',
    category: 'Vessel Parts'
  },
  {
    id: 'figure-eight-knot',
    title: 'Figure-eight Knot',
    description: 'A stopper knot used to prevent a rope from running through a block.',
    category: 'Terminology'
  },
  {
    id: 'filler',
    title: 'Filler',
    description: 'A piece of wood used to fill a gap in a ship\'s structure.',
    category: 'History'
  },
  {
    id: 'fin-stabilizer',
    title: 'Fin Stabilizer',
    description: 'A retractable fin on the hull of a ship to reduce rolling.',
    category: 'Technical'
  },
  {
    id: 'fire-bill',
    title: 'Fire Bill',
    description: 'A station bill listing the duties of the crew in case of fire.',
    category: 'Safety'
  },
  {
    id: 'fire-control',
    title: 'Fire Control',
    description: 'The system used to direct the fire of a ship\'s guns.',
    category: 'History'
  },
  {
    id: 'first-mate',
    title: 'First Mate',
    description: 'The second-in-command of a merchant ship.',
    category: 'Crew'
  },
  {
    id: 'fish',
    title: 'Fish',
    description: 'To strengthen a spar by lashing pieces of wood to it.',
    category: 'History'
  },
  {
    id: 'fix',
    title: 'Fix',
    description: 'A vessel\'s position found by observing landmarks or celestial bodies.',
    category: 'Navigation'
  },
  {
    id: 'flag-of-convenience',
    title: 'Flag of Convenience',
    description: 'A business practice whereby a ship\'s owners register a merchant ship in a ship register of a country other than that of the ship\'s owners.',
    category: 'Regulations'
  },
  {
    id: 'flag-officer',
    title: 'Flag Officer',
    description: 'An admiral or other high-ranking naval officer.',
    category: 'Crew'
  },
  {
    id: 'flagship',
    title: 'Flagship',
    description: 'The ship that carries the commander of a fleet.',
    category: 'History'
  },
  {
    id: 'flare',
    title: 'Flare',
    description: 'The outward curve of a ship\'s hull at the bow.',
    category: 'Vessel Parts'
  },
  {
    id: 'flat-top',
    title: 'Flat-top',
    description: 'A slang term for an aircraft carrier.',
    category: 'History'
  },
  {
    id: 'flaw',
    title: 'Flaw',
    description: 'A sudden gust of wind.',
    category: 'Environment'
  },
  {
    id: 'fleet',
    title: 'Fleet',
    description: 'A group of ships traveling together.',
    category: 'Operations'
  },
  {
    id: 'flemish-coil',
    title: 'Flemish Coil',
    description: 'A rope coiled in a flat, tight spiral on the deck.',
    category: 'Terminology'
  },
  {
    id: 'flemish-horse',
    title: 'Flemish Horse',
    description: 'A short footrope at the end of a yard.',
    category: 'History'
  },
  {
    id: 'flood-tide',
    title: 'Flood Tide',
    description: 'The rising tide.',
    category: 'Environment'
  },
  {
    id: 'floor',
    title: 'Floor',
    description: 'A transverse structural member at the bottom of a ship\'s hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'fluke',
    title: 'Fluke',
    description: 'The pointed part of an anchor that digs into the bottom.',
    category: 'Vessel Parts'
  },
  {
    id: 'flush-deck',
    title: 'Flush Deck',
    description: 'A deck that extends from bow to stern without a break.',
    category: 'Vessel Parts'
  },
  {
    id: 'fly',
    title: 'Fly',
    description: 'The horizontal length of a flag.',
    category: 'Terminology'
  },
  {
    id: 'flying-bridge',
    title: 'Flying Bridge',
    description: 'An open platform above the bridge used for observation.',
    category: 'Vessel Parts'
  },
  {
    id: 'flying-jib',
    title: 'Flying Jib',
    description: 'A small sail set forward of the jib.',
    category: 'Vessel Parts'
  },
  {
    id: 'foaming-at-the-mouth',
    title: 'Foaming at the Mouth',
    description: 'A vessel with a lot of white water at its bow.',
    category: 'Terminology'
  },
  {
    id: 'fog-bank',
    title: 'Fog Bank',
    description: 'A dense mass of fog at sea.',
    category: 'Environment'
  },
  {
    id: 'fog-signal',
    title: 'Fog Signal',
    description: 'A sound signal made by a vessel in restricted visibility.',
    category: 'Navigation'
  },
  {
    id: 'foghorn',
    title: 'Foghorn',
    description: 'A device used to produce a loud sound signal in fog.',
    category: 'Technical'
  },
  {
    id: 'following-sea',
    title: 'Following Sea',
    description: 'A sea traveling in the same direction as the ship.',
    category: 'Environment'
  },
  {
    id: 'following-wind',
    title: 'Following Wind',
    description: 'A wind blowing in the same direction as the ship\'s heading.',
    category: 'Environment'
  },
  {
    id: 'foot',
    title: 'Foot',
    description: 'The lower edge of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'foot-rope',
    title: 'Foot-rope',
    description: 'A rope hanging below a yard for sailors to stand on.',
    category: 'History'
  },
  {
    id: 'fore-and-aft',
    title: 'Fore-and-aft',
    description: 'In the direction of the ship\'s centerline.',
    category: 'Terminology'
  },
  {
    id: 'fore-cabin',
    title: 'Fore-cabin',
    description: 'A cabin located in the forward part of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'fore-foot',
    title: 'Fore-foot',
    description: 'The part of the keel that curves up to meet the stem.',
    category: 'Vessel Parts'
  },
  {
    id: 'fore-mast',
    title: 'Fore-mast',
    description: 'The forward mast of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'fore-peak',
    title: 'Fore-peak',
    description: 'The compartment in the extreme forward part of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'fore-reach',
    title: 'Fore-reach',
    description: 'The distance a vessel continues to move through the water after it has been brought into the wind.',
    category: 'Navigation'
  },
  {
    id: 'fore-stay',
    title: 'Fore-stay',
    description: 'A stay supporting the mast from forward.',
    category: 'Vessel Parts'
  },
  {
    id: 'fore-top',
    title: 'Fore-top',
    description: 'A platform at the head of the foremast.',
    category: 'Vessel Parts'
  },
  {
    id: 'fore-yard',
    title: 'Fore-yard',
    description: 'The lower yard on the foremast.',
    category: 'Vessel Parts'
  },
  {
    id: 'forebody',
    title: 'Forebody',
    description: 'The portion of a ship\'s hull forward of the midship section.',
    category: 'Vessel Parts'
  },
  {
    id: 'foredeck',
    title: 'Foredeck',
    description: 'The forward part of a ship\'s deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'forehand',
    title: 'Forehand',
    description: 'To take a grip on a rope with both hands.',
    category: 'Terminology'
  },
  {
    id: 'foreign-going',
    title: 'Foreign-going',
    description: 'A vessel engaged in trade between different countries.',
    category: 'Operations'
  },
  {
    id: 'forelock',
    title: 'Forelock',
    description: 'A small metal pin used to secure a bolt.',
    category: 'Vessel Parts'
  },
  {
    id: 'forenoon-watch',
    title: 'Forenoon Watch',
    description: 'The watch period from 8:00 AM to noon.',
    category: 'History'
  },
  {
    id: 'foresail',
    title: 'Foresail',
    description: 'The lowest sail on the foremast.',
    category: 'Vessel Parts'
  },
  {
    id: 'forestay',
    title: 'Forestay',
    description: 'A piece of standing rigging that supports the mast from forward.',
    category: 'Vessel Parts'
  },
  {
    id: 'fother',
    title: 'Fother',
    description: 'To stop a leak by passing a sail covered with oakum under the hull.',
    category: 'History'
  },
  {
    id: 'foul-anchor',
    title: 'Foul Anchor',
    description: 'An anchor with the chain wound around it.',
    category: 'Terminology'
  },
  {
    id: 'foul-bottom',
    title: 'Foul Bottom',
    description: 'A seabed that is rocky or obstructed.',
    category: 'Environment'
  },
  {
    id: 'frame',
    title: 'Frame',
    description: 'A transverse structural member of a ship\'s hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'frap',
    title: 'Frap',
    description: 'To bind together with ropes.',
    category: 'Terminology'
  },
  {
    id: 'freeing-port',
    title: 'Freeing Port',
    description: 'An opening in the bulwark to allow water to drain from the deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'freight',
    title: 'Freight',
    description: 'Goods transported by ship; also the charge for such transport.',
    category: 'Cargo'
  },
  {
    id: 'freshen-the-nip',
    title: 'Freshen the Nip',
    description: 'To shift a rope slightly to prevent wear at one point.',
    category: 'Terminology'
  },
  {
    id: 'frigate',
    title: 'Frigate',
    description: 'A medium-sized warship.',
    category: 'History'
  },
  {
    id: 'full-and-by',
    title: 'Full and By',
    description: 'Sailing close to the wind with the sails full.',
    category: 'Navigation'
  },
  {
    id: 'furl',
    title: 'Furl',
    description: 'To roll up and secure a sail.',
    category: 'Operations'
  },
  {
    id: 'futtock',
    title: 'Futtock',
    description: 'A curved timber forming part of a ship\'s frame.',
    category: 'Vessel Parts'
  },
  {
    id: 'futtock-shrouds',
    title: 'Futtock Shrouds',
    description: 'Short shrouds connecting the topmast rigging to the mast below.',
    category: 'Vessel Parts'
  },
  {
    id: 'gaff-topsail',
    title: 'Gaff Topsail',
    description: 'A triangular sail set above the gaff.',
    category: 'Vessel Parts'
  },
  {
    id: 'gaff-vangs',
    title: 'Gaff Vangs',
    description: 'Ropes used to steady the gaff.',
    category: 'Vessel Parts'
  },
  {
    id: 'gale',
    title: 'Gale',
    description: 'A very strong wind.',
    category: 'Environment'
  },
  {
    id: 'galleon',
    title: 'Galleon',
    description: 'A large, multi-decked sailing ship used by European states from the 16th to 18th centuries.',
    category: 'History'
  },
  {
    id: 'gallery',
    title: 'Gallery',
    description: 'A balcony-like structure at the stern of an old ship.',
    category: 'History'
  },
  {
    id: 'galley-slave',
    title: 'Galley Slave',
    description: 'A person forced to row in a galley.',
    category: 'History'
  },
  {
    id: 'gammoning',
    title: 'Gammoning',
    description: 'The lashing used to secure the bowsprit to the stem.',
    category: 'History'
  },
  {
    id: 'gang-plank',
    title: 'Gangplank',
    description: 'A portable bridge used for boarding or leaving a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'garboard-strake',
    title: 'Garboard Strake',
    description: 'The first line of planking next to the keel.',
    category: 'Vessel Parts'
  },
  {
    id: 'gasket',
    title: 'Gasket',
    description: 'A short rope used to secure a furled sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'gate-vessel',
    title: 'Gate Vessel',
    description: 'A ship used to operate an anti-submarine boom.',
    category: 'History'
  },
  {
    id: 'gear',
    title: 'Gear',
    description: 'A general term for equipment.',
    category: 'Terminology'
  },
  {
    id: 'general-cargo',
    title: 'General Cargo',
    description: 'Cargo consisting of various goods packed in different ways.',
    category: 'Cargo'
  },
  {
    id: 'gipsy',
    title: 'Gipsy',
    description: 'A wheel on a windlass with notches to fit the links of an anchor chain.',
    category: 'Vessel Parts'
  },
  {
    id: 'girt',
    title: 'Girt',
    description: 'A vessel is girt when its mooring lines are too tight.',
    category: 'Terminology'
  },
  {
    id: 'give-way',
    title: 'Give Way',
    description: 'An order to start rowing; also to yield to another vessel.',
    category: 'Terminology'
  },
  {
    id: 'glass',
    title: 'Glass',
    description: 'A slang term for a barometer or a telescope.',
    category: 'History'
  },
  {
    id: 'glut',
    title: 'Glut',
    description: 'A piece of canvas used to strengthen a sail.',
    category: 'History'
  },
  {
    id: 'go-about',
    title: 'Go About',
    description: 'To tack a sailing vessel.',
    category: 'Navigation'
  },
  {
    id: 'gob-line',
    title: 'Gob-line',
    description: 'A rope used to steady a martingale.',
    category: 'History'
  },
  {
    id: 'godown',
    title: 'Godown',
    description: 'A warehouse in an Asian port.',
    category: 'History'
  },
  {
    id: 'gooseneck',
    title: 'Gooseneck',
    description: 'A metal joint connecting a boom to a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'goosewing',
    title: 'Goosewing',
    description: 'To sail with the jib and mainsail on opposite sides.',
    category: 'Navigation'
  },
  {
    id: 'grapnel',
    title: 'Grapnel',
    description: 'A small anchor with several flukes.',
    category: 'Vessel Parts'
  },
  {
    id: 'graving-dock',
    title: 'Graving Dock',
    description: 'A dry dock used for cleaning and painting a ship\'s hull.',
    category: 'Operations'
  },
  {
    id: 'great-circle',
    title: 'Great Circle',
    description: 'A circle on the surface of a sphere whose plane passes through the center of the sphere.',
    category: 'Navigation'
  },
  {
    id: 'green-sea',
    title: 'Green Sea',
    description: 'A large wave that breaks over the deck of a ship.',
    category: 'Environment'
  },
  {
    id: 'grommet',
    title: 'Grommet',
    description: 'A ring of rope or metal used to strengthen a hole in a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'ground-tackle',
    title: 'Ground Tackle',
    description: 'A general term for anchors and chains.',
    category: 'Vessel Parts'
  },
  {
    id: 'ground-ways',
    title: 'Ground-ways',
    description: 'The fixed timbers on which a ship is built.',
    category: 'History'
  },
  {
    id: 'gudgeon',
    title: 'Gudgeon',
    description: 'A metal eye on the sternpost into which the pintle of the rudder fits.',
    category: 'Vessel Parts'
  },
  {
    id: 'guinea-man',
    title: 'Guinea-man',
    description: 'A ship engaged in the slave trade.',
    category: 'History'
  },
  {
    id: 'gulf-stream',
    title: 'Gulf Stream',
    description: 'A powerful, warm ocean current in the Atlantic.',
    category: 'Environment'
  },
  {
    id: 'gun-deck',
    title: 'Gun Deck',
    description: 'The deck on which a ship\'s guns are located.',
    category: 'History'
  },
  {
    id: 'gun-room',
    title: 'Gun Room',
    description: 'The quarters for junior officers on a warship.',
    category: 'History'
  },
  {
    id: 'gun-tackle',
    title: 'Gun Tackle',
    description: 'A tackle used for moving a gun.',
    category: 'History'
  },
  {
    id: 'guy',
    title: 'Guy',
    description: 'A rope used to steady or guide a spar.',
    category: 'Vessel Parts'
  },
  {
    id: 'gyro-compass',
    title: 'Gyro-compass',
    description: 'A compass that uses a gyroscope to find true north.',
    category: 'Technical'
  },
  {
    id: 'gyro-pilot',
    title: 'Gyro-pilot',
    description: 'An automatic steering device connected to a gyro-compass.',
    category: 'Technical'
  },
  {
    id: 'hail',
    title: 'Hail',
    description: 'To call out to another vessel.',
    category: 'Terminology'
  },
  {
    id: 'half-beam',
    title: 'Half-beam',
    description: 'A deck beam that does not extend across the full width of the ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'half-deck',
    title: 'Half-deck',
    description: 'A deck that extends only part of the length of the ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'half-hitch',
    title: 'Half-hitch',
    description: 'A simple knot used to secure a rope.',
    category: 'Terminology'
  },
  {
    id: 'half-mast',
    title: 'Half-mast',
    description: 'The position of a flag halfway down the mast as a sign of mourning.',
    category: 'Terminology'
  },
  {
    id: 'hammock',
    title: 'Hammock',
    description: 'A hanging bed formerly used by sailors.',
    category: 'History'
  },
  {
    id: 'hand',
    title: 'Hand',
    description: 'A member of a ship\'s crew.',
    category: 'Crew'
  },
  {
    id: 'hand-lead',
    title: 'Hand Lead',
    description: 'A lead weight used for measuring the depth of water by hand.',
    category: 'History'
  },
  {
    id: 'hand-over-hand',
    title: 'Hand-over-hand',
    description: 'To pull on a rope by alternating hands.',
    category: 'Terminology'
  },
  {
    id: 'hand-spike',
    title: 'Hand-spike',
    description: 'A wooden lever used for moving heavy objects.',
    category: 'History'
  },
  {
    id: 'handy-billy',
    title: 'Handy-billy',
    description: 'A small, portable tackle.',
    category: 'History'
  },
  {
    id: 'hang-fire',
    title: 'Hang Fire',
    description: 'A delay in the explosion of a gun\'s charge.',
    category: 'History'
  },
  {
    id: 'hanging-knees',
    title: 'Hanging Knees',
    description: 'Vertical structural members used to support deck beams.',
    category: 'Vessel Parts'
  },
  {
    id: 'harbor-master',
    title: 'Harbor Master',
    description: 'An official responsible for the enforcement of regulations in a harbor.',
    category: 'Regulations'
  },
  {
    id: 'hard-a-lee',
    title: 'Hard-a-lee',
    description: 'An order to put the helm as far as possible to the leeward side.',
    category: 'Navigation'
  },
  {
    id: 'hard-a-port',
    title: 'Hard-a-port',
    description: 'An order to put the helm as far as possible to the left.',
    category: 'Navigation'
  },
  {
    id: 'hard-a-starboard',
    title: 'Hard-a-starboard',
    description: 'An order to put the helm as far as possible to the right.',
    category: 'Navigation'
  },
  {
    id: 'hard-a-weather',
    title: 'Hard-a-weather',
    description: 'An order to put the helm as far as possible to the windward side.',
    category: 'Navigation'
  },
  {
    id: 'hatch',
    title: 'Hatch',
    description: 'An opening in a ship\'s deck for access to the hold.',
    category: 'Vessel Parts'
  },
  {
    id: 'haul',
    title: 'Haul',
    description: 'To pull on a rope.',
    category: 'Terminology'
  },
  {
    id: 'haul-taut',
    title: 'Haul Taut',
    description: 'To pull a rope until it is tight.',
    category: 'Terminology'
  },
  {
    id: 'hawse-hole',
    title: 'Hawse-hole',
    description: 'A hole in the bow of a ship through which the anchor chain passes.',
    category: 'Vessel Parts'
  },
  {
    id: 'hawse-pipe',
    title: 'Hawse-pipe',
    description: 'A metal pipe lining a hawse-hole.',
    category: 'Vessel Parts'
  },
  {
    id: 'head',
    title: 'Head',
    description: 'The forward part of a ship; also a ship\'s toilet.',
    category: 'Vessel Parts'
  },
  {
    id: 'head-ledge',
    title: 'Head-ledge',
    description: 'A transverse coaming of a hatch.',
    category: 'Vessel Parts'
  },
  {
    id: 'head-sea',
    title: 'Head Sea',
    description: 'A sea directed against the ship\'s heading.',
    category: 'Environment'
  },
  {
    id: 'head-sails',
    title: 'Head-sails',
    description: 'The sails set forward of the foremost mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'head-way',
    title: 'Head-way',
    description: 'The forward motion of a ship.',
    category: 'Terminology'
  },
  {
    id: 'head-wind',
    title: 'Head Wind',
    description: 'A wind blowing from directly ahead.',
    category: 'Environment'
  },
  {
    id: 'heart',
    title: 'Heart',
    description: 'The inner part of a rope.',
    category: 'Terminology'
  },
  {
    id: 'heave-short',
    title: 'Heave Short',
    description: 'To haul in the anchor chain until the ship is nearly over the anchor.',
    category: 'Operations'
  },
  {
    id: 'heave-to',
    title: 'Heave To',
    description: 'To bring a vessel to a stop with its head to the wind.',
    category: 'Navigation'
  },
  {
    id: 'heaving-line',
    title: 'Heaving Line',
    description: 'A light line with a weight at one end, used for throwing.',
    category: 'Vessel Parts'
  },
  {
    id: 'heel',
    title: 'Heel',
    description: 'To lean to one side.',
    category: 'Terminology'
  },
  {
    id: 'heel-of-the-mast',
    title: 'Heel of the Mast',
    description: 'The lower end of a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'helmsman',
    title: 'Helmsman',
    description: 'The person who steers the ship.',
    category: 'Crew'
  },
  {
    id: 'hog',
    title: 'Hog',
    description: 'A vessel is hogged when its hull is strained so that the bow and stern are lower than the middle.',
    category: 'Terminology'
  },
  {
    id: 'hold',
    title: 'Hold',
    description: 'The space below the deck of a ship used for carrying cargo.',
    category: 'Vessel Parts'
  },
  {
    id: 'holiday',
    title: 'Holiday',
    description: 'A spot that has been missed during painting or cleaning.',
    category: 'Terminology'
  },
  {
    id: 'holystone',
    title: 'Holystone',
    description: 'A piece of soft sandstone used for scrubbing wooden decks.',
    category: 'History'
  },
  {
    id: 'home',
    title: 'Home',
    description: 'To be in its proper position.',
    category: 'Terminology'
  },
  {
    id: 'hood-ends',
    title: 'Hood-ends',
    description: 'The ends of the planks that fit into the rabbets of the stem and sternpost.',
    category: 'History'
  },
  {
    id: 'horizon',
    title: 'Horizon',
    description: 'The line where the Earth\'s surface and the sky appear to meet.',
    category: 'Navigation'
  },
  {
    id: 'horn-buoy',
    title: 'Horn Buoy',
    description: 'A buoy equipped with a foghorn.',
    category: 'Navigation'
  },
  {
    id: 'horse-latitudes',
    title: 'Horse Latitudes',
    description: 'The regions of calm winds located at about 30 degrees north and south latitude.',
    category: 'Environment'
  },
  {
    id: 'hounds',
    title: 'Hounds',
    description: 'Projections on a mast that support the trestle-trees.',
    category: 'Vessel Parts'
  },
  {
    id: 'house',
    title: 'House',
    description: 'To lower a mast or spar and secure it.',
    category: 'Operations'
  },
  {
    id: 'hove-to',
    title: 'Hove To',
    description: 'A vessel brought to a stop with its head to the wind.',
    category: 'Navigation'
  },
  {
    id: 'hoy',
    title: 'Hoy',
    description: 'A small coastal sailing vessel.',
    category: 'History'
  },
  {
    id: 'hulk',
    title: 'Hulk',
    description: 'The hull of an old ship that is no longer seaworthy.',
    category: 'History'
  },
  {
    id: 'hull-down',
    title: 'Hull-down',
    description: 'A vessel so far away that only its masts and superstructure are visible above the horizon.',
    category: 'Terminology'
  },
  {
    id: 'hurricane',
    title: 'Hurricane',
    description: 'A severe tropical cyclone with winds of 74 mph or greater.',
    category: 'Environment'
  },
  {
    id: 'hydrofoil',
    title: 'Hydrofoil',
    description: 'A vessel with wing-like structures that lift the hull out of the water at high speeds.',
    category: 'Technical'
  },
  {
    id: 'hydrography',
    title: 'Hydrography',
    description: 'The science of measuring and describing the physical features of bodies of water.',
    category: 'Technical'
  },
  {
    id: 'ice-breaker',
    title: 'Ice-breaker',
    description: 'A ship designed to break through ice.',
    category: 'Technical'
  },
  {
    id: 'iceberg',
    title: 'Iceberg',
    description: 'A large mass of floating ice.',
    category: 'Environment'
  },
  {
    id: 'idler',
    title: 'Idler',
    description: 'A crew member who does not stand a night watch.',
    category: 'History'
  },
  {
    id: 'in-board',
    title: 'In-board',
    description: 'Toward the centerline of the ship.',
    category: 'Terminology'
  },
  {
    id: 'in-stays',
    title: 'In Stays',
    description: 'The position of a sailing vessel when it is headed directly into the wind while tacking.',
    category: 'Navigation'
  },
  {
    id: 'inner-bottom',
    title: 'Inner Bottom',
    description: 'The upper plating of a double bottom.',
    category: 'Vessel Parts'
  },
  {
    id: 'inter-coastal',
    title: 'Inter-coastal',
    description: 'Trade between ports on the same coast.',
    category: 'Operations'
  },
  {
    id: 'inter-modal',
    title: 'Inter-modal',
    description: 'The transport of goods using multiple modes of transportation.',
    category: 'Cargo'
  },
  {
    id: 'international-code-of-signals',
    title: 'International Code of Signals',
    description: 'A system of flags and symbols used for communication between ships.',
    category: 'Navigation'
  },
  {
    id: 'iron-wind',
    title: 'Iron Wind',
    description: 'A slang term for a ship\'s engine.',
    category: 'History'
  },
  {
    id: 'island',
    title: 'Island',
    description: 'A superstructure on the deck of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'isobar',
    title: 'Isobar',
    description: 'A line on a weather map connecting points of equal atmospheric pressure.',
    category: 'Environment'
  },
  {
    id: 'isotherm',
    title: 'Isotherm',
    description: 'A line on a weather map connecting points of equal temperature.',
    category: 'Environment'
  },
  {
    id: 'jack',
    title: 'Jack',
    description: 'A small flag flown at the bow of a ship.',
    category: 'Terminology'
  },
  {
    id: 'jack-staff',
    title: 'Jack-staff',
    description: 'A small flagpole at the bow of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'jack-stay',
    title: 'Jack-stay',
    description: 'A rope or rod used for securing a sail or awning.',
    category: 'Vessel Parts'
  },
  {
    id: 'jacob-ladder',
    title: 'Jacob\'s Ladder',
    description: 'A flexible ladder made of rope or chain with wooden rungs.',
    category: 'Vessel Parts'
  },
  {
    id: 'jettison',
    title: 'Jettison',
    description: 'To throw cargo or equipment overboard.',
    category: 'Operations'
  },
  {
    id: 'jetty',
    title: 'Jetty',
    description: 'A structure built out into the water to protect a harbor or shore.',
    category: 'Operations'
  },
  {
    id: 'jewel-block',
    title: 'Jewel-block',
    description: 'A small block at the end of a yard used for hoisting a studding sail.',
    category: 'History'
  },
  {
    id: 'jib-boom',
    title: 'Jib-boom',
    description: 'A spar extending forward from the bowsprit.',
    category: 'Vessel Parts'
  },
  {
    id: 'jibe',
    title: 'Jibe',
    description: 'To swing the stern of a sailing vessel across the wind.',
    category: 'Navigation'
  },
  {
    id: 'jolly-boat',
    title: 'Jolly-boat',
    description: 'A small boat used for general purposes.',
    category: 'History'
  },
  {
    id: 'jolly-roger',
    title: 'Jolly Roger',
    description: 'The traditional pirate flag.',
    category: 'History'
  },
  {
    id: 'junk',
    title: 'Junk',
    description: 'A traditional Chinese sailing vessel; also old rope used for making oakum.',
    category: 'History'
  },
  {
    id: 'jury-rig',
    title: 'Jury-rig',
    description: 'A temporary repair or makeshift arrangement.',
    category: 'Terminology'
  },
  {
    id: 'kedging',
    title: 'Kedging',
    description: 'The act of moving a ship by hauling on a kedge anchor.',
    category: 'History'
  },
  {
    id: 'keel-block',
    title: 'Keel-block',
    description: 'A block used to support a ship\'s keel in a dry dock.',
    category: 'Operations'
  },
  {
    id: 'kentledge',
    title: 'Kentledge',
    description: 'Iron weights used as permanent ballast.',
    category: 'History'
  },
  {
    id: 'kevel',
    title: 'Kevel',
    description: 'A large cleat used for securing heavy ropes.',
    category: 'History'
  },
  {
    id: 'killick',
    title: 'Killick',
    description: 'A slang term for an anchor.',
    category: 'History'
  },
  {
    id: 'king-post',
    title: 'King-post',
    description: 'A heavy vertical post used to support a derrick.',
    category: 'Vessel Parts'
  },
  {
    id: 'knee',
    title: 'Knee',
    description: 'A structural member used to connect two parts at an angle.',
    category: 'Vessel Parts'
  },
  {
    id: 'knight-heads',
    title: 'Knight-heads',
    description: 'Two timbers on either side of the stem used to support the bowsprit.',
    category: 'History'
  },
  {
    id: 'knuckle',
    title: 'Knuckle',
    description: 'A sharp change in the direction of a ship\'s hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'labor',
    title: 'Labor',
    description: 'A vessel labors when it rolls and pitches heavily in a rough sea.',
    category: 'Terminology'
  },
  {
    id: 'ladder',
    title: 'Ladder',
    description: 'A stairway on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'laden',
    title: 'Laden',
    description: 'A vessel is laden when it is carrying cargo.',
    category: 'Terminology'
  },
  {
    id: 'laid-up',
    title: 'Laid-up',
    description: 'A vessel is laid-up when it is out of service.',
    category: 'Operations'
  },
  {
    id: 'landfall',
    title: 'Landfall',
    description: 'The first sighting or reaching of land after a voyage across the sea.',
    category: 'Navigation'
  },
  {
    id: 'landmark',
    title: 'Landmark',
    description: 'A conspicuous object on land that serves as a guide for navigation.',
    category: 'Navigation'
  },
  {
    id: 'larboard',
    title: 'Larboard',
    description: 'An obsolete term for the port (left) side of a ship.',
    category: 'Terminology'
  },
  {
    id: 'lash',
    title: 'Lash',
    description: 'To secure or bind something with ropes or chains.',
    category: 'Operations'
  },
  {
    id: 'lashing',
    title: 'Lashing',
    description: 'The ropes or chains used to secure cargo or equipment.',
    category: 'Cargo'
  },
  {
    id: 'latitude',
    title: 'Latitude',
    description: 'The angular distance of a place north or south of the earth\'s equator.',
    category: 'Navigation'
  },
  {
    id: 'launch',
    title: 'Launch',
    description: 'To set a ship or boat afloat for the first time; also a type of small boat.',
    category: 'Operations'
  },
  {
    id: 'lay',
    title: 'Lay',
    description: 'To move or go in a specified direction (e.g., "lay aloft"); also the direction of the twist in a rope.',
    category: 'Terminology'
  },
  {
    id: 'lead-line',
    title: 'Lead Line',
    description: 'A line with a lead weight at the end, used for measuring the depth of water.',
    category: 'Navigation'
  },
  {
    id: 'league',
    title: 'League',
    description: 'A unit of distance, usually equal to three nautical miles.',
    category: 'Terminology'
  },
  {
    id: 'lee-shore',
    title: 'Lee Shore',
    description: 'A shore toward which the wind is blowing, posing a danger to vessels.',
    category: 'Environment'
  },
  {
    id: 'length-overall',
    title: 'Length Overall (LOA)',
    description: 'The maximum length of a vessel\'s hull measured parallel to the waterline.',
    category: 'Technical'
  },
  {
    id: 'liberty',
    title: 'Liberty',
    description: 'Permission for a crew member to go ashore for a short period.',
    category: 'Crew'
  },
  {
    id: 'life-raft',
    title: 'Life Raft',
    description: 'An inflatable or rigid raft used for emergency evacuation from a ship.',
    category: 'Safety'
  },
  {
    id: 'lifeline',
    title: 'Lifeline',
    description: 'A line or rope used for safety, such as one thrown to someone in the water.',
    category: 'Safety'
  },
  {
    id: 'light-displacement',
    title: 'Light Displacement',
    description: 'The weight of a ship when it is empty of cargo, fuel, and stores.',
    category: 'Technical'
  },
  {
    id: 'lighter',
    title: 'Lighter',
    description: 'A large, flat-bottomed barge used for transporting cargo between ships and the shore.',
    category: 'Cargo'
  },
  {
    id: 'lighthouse',
    title: 'Lighthouse',
    description: 'A tower or structure with a powerful light to guide ships at night.',
    category: 'Navigation'
  },
  {
    id: 'limber-hole',
    title: 'Limber Hole',
    description: 'A hole in the bottom of a ship\'s frames to allow bilge water to flow to the pump.',
    category: 'Vessel Parts'
  },
  {
    id: 'line',
    title: 'Line',
    description: 'A general term for any rope used on a ship.',
    category: 'Terminology'
  },
  {
    id: 'liner',
    title: 'Liner',
    description: 'A large passenger ship that travels on a regular route.',
    category: 'Terminology'
  },
  {
    id: 'list',
    title: 'List',
    description: 'The leaning of a ship to one side, usually caused by shifting cargo or water intake.',
    category: 'Safety'
  },
  {
    id: 'locker',
    title: 'Locker',
    description: 'A small storage compartment or chest on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'longitude',
    title: 'Longitude',
    description: 'The angular distance of a place east or west of the prime meridian.',
    category: 'Navigation'
  },
  {
    id: 'lookout',
    title: 'Lookout',
    description: 'A crew member assigned to watch for other ships, land, or hazards.',
    category: 'Safety'
  },
  {
    id: 'loom',
    title: 'Loom',
    description: 'The appearance of a light or object above the horizon before it is directly visible.',
    category: 'Navigation'
  },
  {
    id: 'loose-footed',
    title: 'Loose-footed',
    description: 'A sail that is not attached to a boom along its lower edge.',
    category: 'Terminology'
  },
  {
    id: 'low-tide',
    title: 'Low Tide',
    description: 'The point at which the tide is at its lowest level.',
    category: 'Environment'
  },
  {
    id: 'lubber',
    title: 'Lubber',
    description: 'An inexperienced or clumsy sailor.',
    category: 'Crew'
  },
  {
    id: 'lubber-line',
    title: 'Lubber Line',
    description: 'A mark on a compass indicating the direction of the ship\'s bow.',
    category: 'Navigation'
  },
  {
    id: 'lugger',
    title: 'Lugger',
    description: 'A small sailing vessel with four-sided sails (lugsails).',
    category: 'Terminology'
  },
  {
    id: 'lull',
    title: 'Lull',
    description: 'A temporary period of calm or reduced wind during a storm.',
    category: 'Environment'
  },
  {
    id: 'lumber',
    title: 'Lumber',
    description: 'Timber or logs carried as cargo.',
    category: 'Cargo'
  },
  {
    id: 'lurch',
    title: 'Lurch',
    description: 'A sudden, heavy roll of a ship to one side.',
    category: 'Terminology'
  },
  {
    id: 'mackerel-sky',
    title: 'Mackerel Sky',
    description: 'A sky covered with small, white, fleecy clouds that resemble the scales of a mackerel; often indicates an approaching storm.',
    category: 'Environment'
  },
  {
    id: 'magnetic-bearing',
    title: 'Magnetic Bearing',
    description: 'The bearing of an object measured relative to magnetic north.',
    category: 'Navigation'
  },
  {
    id: 'magnetic-compass',
    title: 'Magnetic Compass',
    description: 'A navigation instrument that uses the earth\'s magnetic field to determine direction.',
    category: 'Navigation'
  },
  {
    id: 'magnetic-north',
    title: 'Magnetic North',
    description: 'The direction in which a compass needle points, toward the earth\'s magnetic north pole.',
    category: 'Navigation'
  },
  {
    id: 'main-deck',
    title: 'Main Deck',
    description: 'The highest continuous deck extending from bow to stern.',
    category: 'Vessel Parts'
  },
  {
    id: 'mainmast',
    title: 'Mainmast',
    description: 'The principal mast of a ship, or the second mast in a vessel with three or more masts.',
    category: 'Vessel Parts'
  },
  {
    id: 'mainsail',
    title: 'Mainsail',
    description: 'The largest and most important sail on the mainmast.',
    category: 'Vessel Parts'
  },
  {
    id: 'make-fast',
    title: 'Make Fast',
    description: 'To secure a rope or line to an object.',
    category: 'Operations'
  },
  {
    id: 'make-way',
    title: 'Make Way',
    description: 'To move through the water.',
    category: 'Navigation'
  },
  {
    id: 'marina',
    title: 'Marina',
    description: 'A specially designed harbor with moorings for pleasure boats and small yachts.',
    category: 'Operations'
  },
  {
    id: 'marine',
    title: 'Marine',
    description: 'Relating to the sea, ships, or navigation.',
    category: 'Terminology'
  },
  {
    id: 'mariner',
    title: 'Mariner',
    description: 'A person who navigates or assists in the navigation of a ship; a sailor.',
    category: 'Crew'
  },
  {
    id: 'maritime',
    title: 'Maritime',
    description: 'Connected with the sea, especially in relation to seaborne trade or naval matters.',
    category: 'Terminology'
  },
  {
    id: 'masthead',
    title: 'Masthead',
    description: 'The top of a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'mayday',
    title: 'Mayday',
    description: 'An international radio distress signal used by ships and aircraft.',
    category: 'Safety'
  },
  {
    id: 'mean-sea-level',
    title: 'Mean Sea Level',
    description: 'The average level of the surface of the sea, used as a reference point for measuring elevations.',
    category: 'Environment'
  },
  {
    id: 'merchant-marine',
    title: 'Merchant Marine',
    description: 'The fleet of ships that carries cargo and passengers for trade.',
    category: 'Terminology'
  },
  {
    id: 'messenger',
    title: 'Messenger',
    description: 'A light line used to pull a heavier rope or cable.',
    category: 'Operations'
  },
  {
    id: 'mizzenmast',
    title: 'Mizzenmast',
    description: 'The third mast from the bow in a vessel with three or more masts.',
    category: 'Vessel Parts'
  },
  {
    id: 'monkey-fist',
    title: 'Monkey\'s Fist',
    description: 'A type of knot used to weight the end of a line so it can be thrown more easily.',
    category: 'Terminology'
  },
  {
    id: 'moor',
    title: 'Moor',
    description: 'To secure a ship or boat in a particular place by means of anchors or lines.',
    category: 'Operations'
  },
  {
    id: 'moulded-breadth',
    title: 'Moulded Breadth',
    description: 'The maximum breadth of a ship measured to the outside of the frames.',
    category: 'Technical'
  },
  {
    id: 'moulded-depth',
    title: 'Moulded Depth',
    description: 'The vertical distance from the top of the keel to the top of the upper deck beam at the side.',
    category: 'Technical'
  },
  {
    id: 'mud-pilot',
    title: 'Mud Pilot',
    description: 'A pilot who specializes in navigating shallow or muddy waters, such as rivers or estuaries.',
    category: 'Crew'
  },
  {
    id: 'narrows',
    title: 'Narrows',
    description: 'A narrow part of a strait, river, or other waterway.',
    category: 'Environment'
  },
  {
    id: 'nautical',
    title: 'Nautical',
    description: 'Relating to sailors, ships, or navigation.',
    category: 'Terminology'
  },
  {
    id: 'nautical-chart',
    title: 'Nautical Chart',
    description: 'A map used by mariners to navigate the sea, showing water depths, hazards, and aids to navigation.',
    category: 'Navigation'
  },
  {
    id: 'naval',
    title: 'Naval',
    description: 'Relating to a navy or warships.',
    category: 'Terminology'
  },
  {
    id: 'navigate',
    title: 'Navigate',
    description: 'To plan and direct the course of a ship or other craft.',
    category: 'Navigation'
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: 'The process or activity of accurately ascertaining one\'s position and planning and following a route.',
    category: 'Navigation'
  },
  {
    id: 'net-tonnage',
    title: 'Net Tonnage',
    description: 'A measure of the useful capacity of a ship, calculated by subtracting the space occupied by crew, machinery, and fuel from the gross tonnage.',
    category: 'Technical'
  },
  {
    id: 'night-watch',
    title: 'Night Watch',
    description: 'The period of duty on a ship during the night.',
    category: 'Crew'
  },
  {
    id: 'nipper',
    title: 'Nipper',
    description: 'A short length of rope used to bind a cable to a messenger.',
    category: 'Operations'
  },
  {
    id: 'no-mans-land',
    title: 'No Man\'s Land',
    description: 'A part of a ship where no one is allowed to go, or a space between two decks.',
    category: 'Terminology'
  },
  {
    id: 'nun-buoy',
    title: 'Nun Buoy',
    description: 'A conical buoy used as a navigational aid, usually painted red and marking the right side of a channel when entering from seaward.',
    category: 'Navigation'
  },
  {
    id: 'oar',
    title: 'Oar',
    description: 'A pole with a flat blade, used for rowing or steering a boat.',
    category: 'Vessel Parts'
  },
  {
    id: 'oarlock',
    title: 'Oarlock',
    description: 'A device on the gunwale of a boat that holds an oar in place during rowing.',
    category: 'Vessel Parts'
  },
  {
    id: 'off-the-wind',
    title: 'Off the Wind',
    description: 'Sailing with the wind blowing from behind or from the side.',
    category: 'Navigation'
  },
  {
    id: 'officer',
    title: 'Officer',
    description: 'A person holding a position of authority on a ship.',
    category: 'Crew'
  },
  {
    id: 'offshore',
    title: 'Offshore',
    description: 'At a distance from the shore.',
    category: 'Environment'
  },
  {
    id: 'oil-tanker',
    title: 'Oil Tanker',
    description: 'A ship designed to carry large quantities of oil in bulk.',
    category: 'Terminology'
  },
  {
    id: 'on-the-wind',
    title: 'On the Wind',
    description: 'Sailing as close to the direction of the wind as possible.',
    category: 'Navigation'
  },
  {
    id: 'outhaul',
    title: 'Outhaul',
    description: 'A line used to pull the corner of a sail toward the end of a boom or spar.',
    category: 'Vessel Parts'
  },
  {
    id: 'overboard',
    title: 'Overboard',
    description: 'Over the side of a ship into the water.',
    category: 'Safety'
  },
  {
    id: 'overhaul',
    title: 'Overhaul',
    description: 'To examine and repair a ship or its equipment; also to overtake another vessel.',
    category: 'Operations'
  },
  {
    id: 'overhead',
    title: 'Overhead',
    description: 'The ceiling of a compartment on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'packet',
    title: 'Packet',
    description: 'A ship that travels on a regular route carrying mail, passengers, and cargo.',
    category: 'Terminology'
  },
  {
    id: 'pantry',
    title: 'Pantry',
    description: 'A small room on a ship where food and tableware are kept.',
    category: 'Vessel Parts'
  },
  {
    id: 'part',
    title: 'Part',
    description: 'To break, as in a rope or cable.',
    category: 'Terminology'
  },
  {
    id: 'pass-a-line',
    title: 'Pass a Line',
    description: 'To throw or carry a rope from one ship or object to another.',
    category: 'Operations'
  },
  {
    id: 'passenger',
    title: 'Passenger',
    description: 'A person traveling on a ship who is not a member of the crew.',
    category: 'Terminology'
  },
  {
    id: 'patent-anchor',
    title: 'Patent Anchor',
    description: 'A modern type of anchor designed for better holding power and easier handling.',
    category: 'Vessel Parts'
  },
  {
    id: 'patent-log',
    title: 'Patent Log',
    description: 'A mechanical device used to measure a ship\'s speed through the water.',
    category: 'Navigation'
  },
  {
    id: 'pay',
    title: 'Pay',
    description: 'To fill the seams of a wooden ship with pitch or tar.',
    category: 'Operations'
  },
  {
    id: 'pay-off',
    title: 'Pay Off',
    description: 'To turn a ship\'s head away from the wind.',
    category: 'Navigation'
  },
  {
    id: 'pay-out',
    title: 'Pay Out',
    description: 'To slacken or let out a rope or cable.',
    category: 'Operations'
  },
  {
    id: 'peak',
    title: 'Peak',
    description: 'The upper, after corner of a gaff sail; also the narrow part of a ship\'s hull at the bow or stern.',
    category: 'Vessel Parts'
  },
  {
    id: 'pelorus',
    title: 'Pelorus',
    description: 'A navigational instrument used for taking bearings, consisting of a circular plate marked with degrees.',
    category: 'Navigation'
  },
  {
    id: 'pendant',
    title: 'Pendant',
    description: 'A short length of rope with a block or thimble at one end, used for various purposes.',
    category: 'Vessel Parts'
  },
  {
    id: 'pile',
    title: 'Pile',
    description: 'A heavy post driven into the bed of a body of water to support a pier or other structure.',
    category: 'Operations'
  },
  {
    id: 'pilot',
    title: 'Pilot',
    description: 'A person with local knowledge who assists in navigating ships into and out of harbors.',
    category: 'Crew'
  },
  {
    id: 'pilot-boat',
    title: 'Pilot Boat',
    description: 'A small, fast boat used to transport pilots to and from ships.',
    category: 'Operations'
  },
  {
    id: 'pilot-house',
    title: 'Pilot House',
    description: 'An enclosed space on a ship from which it is steered and navigated.',
    category: 'Vessel Parts'
  },
  {
    id: 'pipe',
    title: 'Pipe',
    description: 'To summon the crew with a boatswain\'s whistle.',
    category: 'Operations'
  },
  {
    id: 'piracy',
    title: 'Piracy',
    description: 'The act of attacking and robbing ships at sea.',
    category: 'History'
  },
  {
    id: 'pirate',
    title: 'Pirate',
    description: 'A person who commits piracy.',
    category: 'History'
  },
  {
    id: 'pitching',
    title: 'Pitching',
    description: 'The act of a ship rocking fore and aft.',
    category: 'Terminology'
  },
  {
    id: 'plimsoll-mark',
    title: 'Plimsoll Mark',
    description: 'Another name for the load line, named after Samuel Plimsoll.',
    category: 'Regulations'
  },
  {
    id: 'plot',
    title: 'Plot',
    description: 'To mark a ship\'s position and course on a chart.',
    category: 'Navigation'
  },
  {
    id: 'point',
    title: 'Point',
    description: 'One of the 32 divisions of a compass card, equal to 11.25 degrees.',
    category: 'Navigation'
  },
  {
    id: 'pontoon',
    title: 'Pontoon',
    description: 'A flat-bottomed boat or floating structure used to support a bridge or other platform.',
    category: 'Operations'
  },
  {
    id: 'poop-deck',
    title: 'Poop Deck',
    description: 'A short deck at the stern of a ship, above the main deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'port-of-entry',
    title: 'Port of Entry',
    description: 'A port where travelers and cargo can legally enter a country.',
    category: 'Operations'
  },
  {
    id: 'position',
    title: 'Position',
    description: 'The location of a ship, usually expressed in latitude and longitude.',
    category: 'Navigation'
  },
  {
    id: 'pratique',
    title: 'Pratique',
    description: 'Permission for a ship to enter a port after being cleared by health officials.',
    category: 'Regulations'
  },
  {
    id: 'press-gang',
    title: 'Press Gang',
    description: 'A group of men used to force people into naval service.',
    category: 'History'
  },
  {
    id: 'preventer',
    title: 'Preventer',
    description: 'An extra rope or line used to provide additional support or safety.',
    category: 'Safety'
  },
  {
    id: 'pricker',
    title: 'Pricker',
    description: 'A small marlinspike used for light work.',
    category: 'Vessel Parts'
  },
  {
    id: 'prime-meridian',
    title: 'Prime Meridian',
    description: 'The meridian of 0 degrees longitude, passing through Greenwich, England.',
    category: 'Navigation'
  },
  {
    id: 'privateer',
    title: 'Privateer',
    description: 'An armed ship owned and officered by private individuals holding a government commission and authorized for use in war.',
    category: 'History'
  },
  {
    id: 'privileged-vessel',
    title: 'Privileged Vessel',
    description: 'The vessel that has the right of way in a crossing or overtaking situation.',
    category: 'Regulations'
  },
  {
    id: 'provisions',
    title: 'Provisions',
    description: 'Food and other supplies carried on a ship for the use of the crew and passengers.',
    category: 'Operations'
  },
  {
    id: 'pump',
    title: 'Pump',
    description: 'A device used to remove water from a ship\'s bilge or to move other liquids.',
    category: 'Vessel Parts'
  },
  {
    id: 'punt',
    title: 'Punt',
    description: 'A small, flat-bottomed boat with square ends, usually propelled with a pole.',
    category: 'Terminology'
  },
  {
    id: 'purser',
    title: 'Purser',
    description: 'The officer on a ship responsible for accounts, provisions, and other administrative duties.',
    category: 'Crew'
  },
  {
    id: 'quadrant',
    title: 'Quadrant',
    description: 'An early navigational instrument used for measuring the altitude of celestial bodies.',
    category: 'Navigation'
  },
  {
    id: 'quarantine',
    title: 'Quarantine',
    description: 'A period of isolation for a ship and its crew to prevent the spread of disease.',
    category: 'Regulations'
  },
  {
    id: 'quarter',
    title: 'Quarter',
    description: 'The part of a ship\'s side near the stern.',
    category: 'Vessel Parts'
  },
  {
    id: 'quartermaster',
    title: 'Quartermaster',
    description: 'A petty officer responsible for steering a ship and assisting the navigator.',
    category: 'Crew'
  },
  {
    id: 'quayside',
    title: 'Quayside',
    description: 'The area alongside a quay.',
    category: 'Operations'
  },
  {
    id: 'quick-flashing-light',
    title: 'Quick Flashing Light',
    description: 'A navigational light that flashes at a rate of 60 or more flashes per minute.',
    category: 'Navigation'
  },
  {
    id: 'race',
    title: 'Race',
    description: 'A strong, rapid current of water, often caused by the tide passing through a narrow channel.',
    category: 'Environment'
  },
  {
    id: 'raft',
    title: 'Raft',
    description: 'A flat structure, usually made of logs or barrels, used as a floating platform.',
    category: 'Terminology'
  },
  {
    id: 'rail',
    title: 'Rail',
    description: 'The fence-like structure around the deck of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'rake',
    title: 'Rake',
    description: 'The inclination of a mast, bow, or stern from the vertical.',
    category: 'Technical'
  },
  {
    id: 'ram',
    title: 'Ram',
    description: 'A heavy, pointed structure on the bow of a warship used for striking and sinking enemy vessels.',
    category: 'History'
  },
  {
    id: 'range',
    title: 'Range',
    description: 'The distance to an object; also two objects in line that indicate a specific direction.',
    category: 'Navigation'
  },
  {
    id: 'range-lights',
    title: 'Range Lights',
    description: 'Two lights at different heights that, when aligned, indicate the centerline of a channel.',
    category: 'Navigation'
  },
  {
    id: 'rattle-down',
    title: 'Rattle Down',
    description: 'To tie ratlines to the shrouds.',
    category: 'Operations'
  },
  {
    id: 'reach',
    title: 'Reach',
    description: 'A straight stretch of water between two bends in a river or channel.',
    category: 'Environment'
  },
  {
    id: 'reaching',
    title: 'Reaching',
    description: 'Sailing with the wind blowing from the side.',
    category: 'Navigation'
  },
  {
    id: 'ready-about',
    title: 'Ready About',
    description: 'An order to the crew to prepare for tacking.',
    category: 'Operations'
  },
  {
    id: 'reef-knot',
    title: 'Reef Knot',
    description: 'A simple knot used for tying together two ropes of equal thickness.',
    category: 'Terminology'
  },
  {
    id: 'reef-point',
    title: 'Reef Point',
    description: 'One of the short lengths of rope used to tie down a reefed sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'register-tonnage',
    title: 'Register Tonnage',
    description: 'The tonnage of a ship as recorded in its official registration documents.',
    category: 'Technical'
  },
  {
    id: 'registry',
    title: 'Registry',
    description: 'The official record of a ship\'s ownership and nationality.',
    category: 'Regulations'
  },
  {
    id: 'relative-bearing',
    title: 'Relative Bearing',
    description: 'The bearing of an object measured relative to the ship\'s bow.',
    category: 'Navigation'
  },
  {
    id: 'render',
    title: 'Render',
    description: 'To pass a rope through a block freely.',
    category: 'Operations'
  },
  {
    id: 'revenue-cutter',
    title: 'Revenue Cutter',
    description: 'A small, fast ship used by a government to prevent smuggling and enforce customs laws.',
    category: 'History'
  },
  {
    id: 'rhumb-line',
    title: 'Rhumb Line',
    description: 'A line on a chart that crosses all meridians at the same angle, representing a constant course.',
    category: 'Navigation'
  },
  {
    id: 'rib',
    title: 'Rib',
    description: 'One of the curved frames that form the skeleton of a ship\'s hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'ride',
    title: 'Ride',
    description: 'To lie at anchor.',
    category: 'Operations'
  },
  {
    id: 'rig',
    title: 'Rig',
    description: 'The arrangement of a ship\'s masts, sails, and rigging.',
    category: 'Terminology'
  },
  {
    id: 'right',
    title: 'Right',
    description: 'To return a ship to an upright position after it has listed or capsized.',
    category: 'Safety'
  },
  {
    id: 'ring-bolt',
    title: 'Ring Bolt',
    description: 'A bolt with a ring at one end, used for securing ropes or other objects.',
    category: 'Vessel Parts'
  },
  {
    id: 'rip-tide',
    title: 'Rip Tide',
    description: 'A strong, narrow current of water flowing away from the shore.',
    category: 'Environment'
  },
  {
    id: 'rise',
    title: 'Rise',
    description: 'The increase in the level of the tide.',
    category: 'Environment'
  },
  {
    id: 'roach',
    title: 'Roach',
    description: 'The curved part of the edge of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'robands',
    title: 'Robands',
    description: 'Small ropes used to tie the head of a sail to a yard.',
    category: 'Vessel Parts'
  },
  {
    id: 'rogue-wave',
    title: 'Rogue Wave',
    description: 'An unusually large and dangerous wave that occurs unexpectedly.',
    category: 'Environment'
  },
  {
    id: 'rolling',
    title: 'Rolling',
    description: 'The act of a ship rocking from side to side.',
    category: 'Terminology'
  },
  {
    id: 'rope',
    title: 'Rope',
    description: 'A strong, thick cord made of twisted strands of fiber or wire.',
    category: 'Terminology'
  },
  {
    id: 'row',
    title: 'Row',
    description: 'To propel a boat with oars.',
    category: 'Operations'
  },
  {
    id: 'rowlock',
    title: 'Rowlock',
    description: 'Another name for an oarlock.',
    category: 'Vessel Parts'
  },
  {
    id: 'royal',
    title: 'Royal',
    description: 'A small sail set above the topgallant sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'rudder-post',
    title: 'Rudder Post',
    description: 'The vertical post to which a rudder is attached.',
    category: 'Vessel Parts'
  },
  {
    id: 'rules-of-the-road',
    title: 'Rules of the Road',
    description: 'The international regulations for preventing collisions at sea.',
    category: 'Regulations'
  },
  {
    id: 'run',
    title: 'Run',
    description: 'To sail with the wind blowing from behind; also the distance traveled by a ship in a specific period.',
    category: 'Navigation'
  },
  {
    id: 'running',
    title: 'Running',
    description: 'Sailing with the wind blowing from behind.',
    category: 'Navigation'
  },
  {
    id: 'running-lights',
    title: 'Running Lights',
    description: 'The lights required to be shown by a ship at night or in restricted visibility.',
    category: 'Regulations'
  },
  {
    id: 'safety-valve',
    title: 'Safety Valve',
    description: 'A valve that automatically opens to release pressure from a boiler or other vessel when it exceeds a safe limit.',
    category: 'Technical'
  },
  {
    id: 'sagging',
    title: 'Sagging',
    description: 'The condition of a ship when the middle part of the hull is lower than the ends, usually caused by improper loading or heavy seas.',
    category: 'Technical'
  },
  {
    id: 'sail',
    title: 'Sail',
    description: 'A piece of fabric attached to a mast and rigging, used to catch the wind and propel a vessel.',
    category: 'Vessel Parts'
  },
  {
    id: 'sailing-vessel',
    title: 'Sailing Vessel',
    description: 'A ship or boat propelled primarily by sails.',
    category: 'Terminology'
  },
  {
    id: 'scantlings',
    title: 'Scantlings',
    description: 'The dimensions of the structural parts of a ship, such as frames and plating.',
    category: 'Technical'
  },
  {
    id: 'screw',
    title: 'Screw',
    description: 'Another name for a ship\'s propeller.',
    category: 'Vessel Parts'
  },
  {
    id: 'sea-anchor',
    title: 'Sea Anchor',
    description: 'A device, usually made of canvas, used to slow a ship\'s drift and keep its head to the wind in a storm.',
    category: 'Safety'
  },
  {
    id: 'sea-breeze',
    title: 'Sea Breeze',
    description: 'A breeze blowing from the sea toward the land.',
    category: 'Environment'
  },
  {
    id: 'sea-chest',
    title: 'Sea Chest',
    description: 'A sailor\'s storage chest; also an intake in the hull for seawater.',
    category: 'Vessel Parts'
  },
  {
    id: 'sea-level',
    title: 'Sea Level',
    description: 'The level of the surface of the sea.',
    category: 'Environment'
  },
  {
    id: 'sea-room',
    title: 'Sea Room',
    description: 'A safe distance from the shore or other hazards.',
    category: 'Safety'
  },
  {
    id: 'seaboard',
    title: 'Seaboard',
    description: 'The region along a coast.',
    category: 'Environment'
  },
  {
    id: 'seacock',
    title: 'Seacock',
    description: 'A valve in the hull of a ship that can be opened to admit seawater or closed to prevent it.',
    category: 'Vessel Parts'
  },
  {
    id: 'seafarer',
    title: 'Seafarer',
    description: 'A person who travels by sea; a mariner.',
    category: 'Crew'
  },
  {
    id: 'seagoing',
    title: 'Seagoing',
    description: 'Designed or fit for travel on the open sea.',
    category: 'Terminology'
  },
  {
    id: 'seaman',
    title: 'Seaman',
    description: 'A person who works on a ship; a sailor.',
    category: 'Crew'
  },
  {
    id: 'seamanship',
    title: 'Seamanship',
    description: 'The skill and knowledge required for the safe and efficient operation of a ship.',
    category: 'Terminology'
  },
  {
    id: 'seaworthy',
    title: 'Seaworthy',
    description: 'The condition of a ship being fit for a voyage at sea.',
    category: 'Safety'
  },
  {
    id: 'shackle',
    title: 'Shackle',
    description: 'A U-shaped metal link with a pin, used for connecting chains or ropes.',
    category: 'Vessel Parts'
  },
  {
    id: 'shaft',
    title: 'Shaft',
    description: 'The rotating rod that connects a ship\'s engine to its propeller.',
    category: 'Vessel Parts'
  },
  {
    id: 'shell-plating',
    title: 'Shell Plating',
    description: 'The outer skin of a ship\'s hull, usually made of steel plates.',
    category: 'Vessel Parts'
  },
  {
    id: 'ship',
    title: 'Ship',
    description: 'A large seagoing vessel.',
    category: 'Terminology'
  },
  {
    id: 'ship-of-the-line',
    title: 'Ship of the Line',
    description: 'A large, heavily armed warship used in naval battles.',
    category: 'History'
  },
  {
    id: 'shipmate',
    title: 'Shipmate',
    description: 'A fellow member of a ship\'s crew.',
    category: 'Crew'
  },
  {
    id: 'shipping',
    title: 'Shipping',
    description: 'The business of transporting goods by ship.',
    category: 'Terminology'
  },
  {
    id: 'shipwreck',
    title: 'Shipwreck',
    description: 'The destruction or loss of a ship at sea; also the remains of a sunken ship.',
    category: 'History'
  },
  {
    id: 'shipwright',
    title: 'Shipwright',
    description: 'A person who builds or repairs ships.',
    category: 'Crew'
  },
  {
    id: 'shipyard',
    title: 'Shipyard',
    description: 'A place where ships are built or repaired.',
    category: 'Operations'
  },
  {
    id: 'shoal',
    title: 'Shoal',
    description: 'A shallow part of a body of water, often posing a hazard to navigation.',
    category: 'Environment'
  },
  {
    id: 'shore',
    title: 'Shore',
    description: 'The land along the edge of a body of water.',
    category: 'Environment'
  },
  {
    id: 'side-lights',
    title: 'Side Lights',
    description: 'The red (port) and green (starboard) lights shown by a ship at night.',
    category: 'Regulations'
  },
  {
    id: 'skipper',
    title: 'Skipper',
    description: 'The captain or master of a ship or boat.',
    category: 'Crew'
  },
  {
    id: 'sky-sail',
    title: 'Sky Sail',
    description: 'A small sail set above the royal sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'slack-water',
    title: 'Slack Water',
    description: 'The period of calm water between the ebb and flow of the tide.',
    category: 'Environment'
  },
  {
    id: 'slop-chest',
    title: 'Slop Chest',
    description: 'A store on a ship where clothing and other supplies are sold to the crew.',
    category: 'Operations'
  },
  {
    id: 'snub',
    title: 'Snub',
    description: 'To suddenly stop a rope or cable from running out.',
    category: 'Operations'
  },
  {
    id: 'solstice',
    title: 'Solstice',
    description: 'The time of year when the sun is at its greatest distance from the celestial equator.',
    category: 'Environment'
  },
  {
    id: 'sonar',
    title: 'Sonar',
    description: 'A system for detecting objects underwater using sound waves.',
    category: 'Navigation'
  },
  {
    id: 'sos',
    title: 'SOS',
    description: 'An international distress signal, usually sent by radio.',
    category: 'Safety'
  },
  {
    id: 'sound',
    title: 'Sound',
    description: 'To measure the depth of water; also a narrow body of water connecting two larger ones.',
    category: 'Terminology'
  },
  {
    id: 'sounding',
    title: 'Sounding',
    description: 'The measurement of the depth of water.',
    category: 'Navigation'
  },
  {
    id: 'south-pole',
    title: 'South Pole',
    description: 'The southernmost point on the earth.',
    category: 'Environment'
  },
  {
    id: 'span',
    title: 'Span',
    description: 'A rope or chain stretched between two points to support a block or other object.',
    category: 'Vessel Parts'
  },
  {
    id: 'spoil-ground',
    title: 'Spoil Ground',
    description: 'An area of the sea where dredged material is deposited.',
    category: 'Environment'
  },
  {
    id: 'sponson',
    title: 'Sponson',
    description: 'A projection from the side of a ship used to support a gun, paddle wheel, or other structure.',
    category: 'Vessel Parts'
  },
  {
    id: 'spritsail',
    title: 'Spritsail',
    description: 'A sail supported by a sprit.',
    category: 'Vessel Parts'
  },
  {
    id: 'square-rigged',
    title: 'Square-rigged',
    description: 'A vessel with square sails set across the masts.',
    category: 'Terminology'
  },
  {
    id: 'standing-rigging',
    title: 'Standing Rigging',
    description: 'The part of a ship\'s rigging used to support the masts.',
    category: 'Vessel Parts'
  },
  {
    id: 'statute-mile',
    title: 'Statute Mile',
    description: 'A unit of distance equal to 5,280 feet.',
    category: 'Terminology'
  },
  {
    id: 'steer',
    title: 'Steer',
    description: 'To direct the course of a ship or boat.',
    category: 'Navigation'
  },
  {
    id: 'steerage',
    title: 'Steerage',
    description: 'The part of a ship providing the cheapest accommodations for passengers.',
    category: 'Terminology'
  },
  {
    id: 'steersman',
    title: 'Steersman',
    description: 'A person who steers a ship or boat.',
    category: 'Crew'
  },
  {
    id: 'step',
    title: 'Step',
    description: 'The block or socket in which the foot of a mast is placed.',
    category: 'Vessel Parts'
  },
  {
    id: 'stern-post',
    title: 'Stern Post',
    description: 'The vertical post at the stern of a ship to which the rudder is attached.',
    category: 'Vessel Parts'
  },
  {
    id: 'sternway',
    title: 'Sternway',
    description: 'The backward motion of a ship.',
    category: 'Navigation'
  },
  {
    id: 'stock',
    title: 'Stock',
    description: 'The crossbar of an anchor.',
    category: 'Vessel Parts'
  },
  {
    id: 'stop',
    title: 'Stop',
    description: 'A short length of rope used to tie a sail when it is furled.',
    category: 'Vessel Parts'
  },
  {
    id: 'stow',
    title: 'Stow',
    description: 'To pack or arrange cargo or equipment in a ship.',
    category: 'Operations'
  },
  {
    id: 'stowage',
    title: 'Stowage',
    description: 'The act of stowing; also the space available for stowing.',
    category: 'Cargo'
  },
  {
    id: 'strait',
    title: 'Strait',
    description: 'A narrow body of water connecting two larger ones.',
    category: 'Environment'
  },
  {
    id: 'strand',
    title: 'Strand',
    description: 'To run a ship aground; also one of the twisted parts of a rope.',
    category: 'Terminology'
  },
  {
    id: 'stream',
    title: 'Stream',
    description: 'A current of water.',
    category: 'Environment'
  },
  {
    id: 'strike',
    title: 'Strike',
    description: 'To lower a sail, flag, or mast.',
    category: 'Operations'
  },
  {
    id: 'surf',
    title: 'Surf',
    description: 'The waves breaking on a shore or reef.',
    category: 'Environment'
  },
  {
    id: 'surge',
    title: 'Surge',
    description: 'A sudden, powerful forward or upward movement of water.',
    category: 'Environment'
  },
  {
    id: 'survey',
    title: 'Survey',
    description: 'An official examination of a ship to determine its condition.',
    category: 'Regulations'
  },
  {
    id: 'swab',
    title: 'Swab',
    description: 'A mop used for cleaning the deck of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'sway',
    title: 'Sway',
    description: 'To hoist or raise something.',
    category: 'Operations'
  },
  {
    id: 'swell',
    title: 'Swell',
    description: 'A series of long, regular waves on the surface of the sea.',
    category: 'Environment'
  },
  {
    id: 'tacking',
    title: 'Tacking',
    description: 'The act of changing direction by turning the bow through the wind.',
    category: 'Navigation'
  },
  {
    id: 'tar',
    title: 'Tar',
    description: 'A dark, sticky substance used for preserving wood and rope; also a nickname for a sailor.',
    category: 'Terminology'
  },
  {
    id: 'taut',
    title: 'Taut',
    description: 'Pulled tight.',
    category: 'Terminology'
  },
  {
    id: 'tender',
    title: 'Tender',
    description: 'A small boat used to transport people and supplies to and from a larger ship; also a vessel that is easily tilted.',
    category: 'Terminology'
  },
  {
    id: 'tide',
    title: 'Tide',
    description: 'The periodic rise and fall of the level of the sea.',
    category: 'Environment'
  },
  {
    id: 'tide-table',
    title: 'Tide Table',
    description: 'A table showing the times and heights of high and low water at a particular place.',
    category: 'Navigation'
  },
  {
    id: 'tonnage',
    title: 'Tonnage',
    description: 'A measure of the size or capacity of a ship.',
    category: 'Technical'
  },
  {
    id: 'top',
    title: 'Top',
    description: 'A platform at the head of a lower mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'topgallant',
    title: 'Topgallant',
    description: 'The mast and sail above the topmast.',
    category: 'Vessel Parts'
  },
  {
    id: 'topmast',
    title: 'Topmast',
    description: 'The mast above the lower mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'topsail',
    title: 'Topsail',
    description: 'The sail set on a topmast.',
    category: 'Vessel Parts'
  },
  {
    id: 'tow',
    title: 'Tow',
    description: 'To pull a ship or boat through the water with a rope or cable.',
    category: 'Operations'
  },
  {
    id: 'towline',
    title: 'Towline',
    description: 'The rope or cable used for towing.',
    category: 'Operations'
  },
  {
    id: 'trade-winds',
    title: 'Trade Winds',
    description: 'The steady winds that blow toward the equator from the northeast and southeast.',
    category: 'Environment'
  },
  {
    id: 'tramp',
    title: 'Tramp',
    description: 'A ship that does not travel on a regular route but carries cargo wherever it is needed.',
    category: 'Terminology'
  },
  {
    id: 'trough',
    title: 'Trough',
    description: 'The low point between two waves.',
    category: 'Environment'
  },
  {
    id: 'truck',
    title: 'Truck',
    description: 'A small wooden cap at the top of a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'tug',
    title: 'Tug',
    description: 'A small, powerful boat used for towing and maneuvering larger ships.',
    category: 'Terminology'
  },
  {
    id: 'turn',
    title: 'Turn',
    description: 'To change the direction of a ship.',
    category: 'Navigation'
  },
  {
    id: 'unbend',
    title: 'Unbend',
    description: 'To untie or remove a sail from its yard or boom.',
    category: 'Operations'
  },
  {
    id: 'underway',
    title: 'Underway',
    description: 'The state of a ship when it is not at anchor or made fast to the shore.',
    category: 'Navigation'
  },
  {
    id: 'unmoor',
    title: 'Unmoor',
    description: 'To release a ship from its moorings.',
    category: 'Operations'
  },
  {
    id: 'unship',
    title: 'Unship',
    description: 'To remove an object from its proper place on a ship.',
    category: 'Operations'
  },
  {
    id: 'up-anchor',
    title: 'Up Anchor',
    description: 'The order to raise the anchor.',
    category: 'Operations'
  },
  {
    id: 'veer',
    title: 'Veer',
    description: 'To change direction, as in the wind; also to let out more rope or cable.',
    category: 'Terminology'
  },
  {
    id: 'vessel',
    title: 'Vessel',
    description: 'A general term for any ship or boat.',
    category: 'Terminology'
  },
  {
    id: 'victuals',
    title: 'Victuals',
    description: 'Food and other provisions.',
    category: 'Operations'
  },
  {
    id: 'wardroom',
    title: 'Wardroom',
    description: 'The messroom and living area for officers on a warship.',
    category: 'Vessel Parts'
  },
  {
    id: 'watch',
    title: 'Watch',
    description: 'A period of duty on a ship; also the group of crew members on duty.',
    category: 'Crew'
  },
  {
    id: 'waterline',
    title: 'Waterline',
    description: 'The line along the hull of a ship where it meets the surface of the water.',
    category: 'Technical'
  },
  {
    id: 'way',
    title: 'Way',
    description: 'The motion of a ship through the water.',
    category: 'Navigation'
  },
  {
    id: 'weather',
    title: 'Weather',
    description: 'The state of the atmosphere; also the side of a ship toward the wind.',
    category: 'Environment'
  },
  {
    id: 'weather-side',
    title: 'Weather Side',
    description: 'The side of a ship toward the wind.',
    category: 'Environment'
  },
  {
    id: 'weigh-anchor',
    title: 'Weigh Anchor',
    description: 'To raise the anchor from the bottom.',
    category: 'Operations'
  },
  {
    id: 'wheel',
    title: 'Wheel',
    description: 'The device used to steer a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'wheelhouse',
    title: 'Wheelhouse',
    description: 'Another name for a pilot house.',
    category: 'Vessel Parts'
  },
  {
    id: 'wherry',
    title: 'Wherry',
    description: 'A light rowing boat used for carrying passengers on rivers and in harbors.',
    category: 'Terminology'
  },
  {
    id: 'whip',
    title: 'Whip',
    description: 'A simple tackle consisting of a single rope and block.',
    category: 'Technical'
  },
  {
    id: 'whistle',
    title: 'Whistle',
    description: 'A device used for making sound signals.',
    category: 'Safety'
  },
  {
    id: 'wind',
    title: 'Wind',
    description: 'The movement of air.',
    category: 'Environment'
  },
  {
    id: 'work',
    title: 'Work',
    description: 'To move or operate a ship or its equipment.',
    category: 'Operations'
  },
  {
    id: 'wreck',
    title: 'Wreck',
    description: 'The remains of a destroyed ship.',
    category: 'History'
  },
  {
    id: 'yacht',
    title: 'Yacht',
    description: 'A vessel used for pleasure or racing.',
    category: 'Terminology'
  },
  {
    id: 'zenith',
    title: 'Zenith',
    description: 'The point in the sky directly above an observer.',
    category: 'Environment'
  },
  {
    id: 'zodiac',
    title: 'Zodiac',
    description: 'A type of inflatable boat; also the belt of the heavens divided into twelve signs.',
    category: 'Terminology'
  },
  {
    id: 'all-hands-on-deck',
    title: 'All hands on deck',
    description: 'A command for all crew members to come to the deck.',
    category: 'Crew'
  },
  {
    id: 'anchor-aweigh',
    title: 'Anchor aweigh',
    description: 'Said of an anchor when it has just been lifted from the sea floor.',
    category: 'Operations'
  },
  {
    id: 'articles-of-war',
    title: 'Articles of War',
    description: 'Regulations governing the conduct of naval personnel.',
    category: 'Regulations'
  },
  {
    id: 'bale-out',
    title: 'Bale out',
    description: 'To remove water from a boat using a bucket or other container.',
    category: 'Operations'
  },
  {
    id: 'ballast-keel',
    title: 'Ballast keel',
    description: 'A heavy keel used to provide stability to a sailing vessel.',
    category: 'Vessel Parts'
  },
  {
    id: 'barbette',
    title: 'Barbette',
    description: 'A protective circular armor support for a heavy gun turret.',
    category: 'History'
  },
  {
    id: 'barkentine',
    title: 'Barkentine',
    description: 'A sailing vessel with three or more masts, square-rigged on the foremast.',
    category: 'Terminology'
  },
  {
    id: 'beam-reach',
    title: 'Beam reach',
    description: 'Sailing with the wind coming directly across the side of the boat.',
    category: 'Navigation'
  },
  {
    id: 'bear-down',
    title: 'Bear down',
    description: 'To approach a vessel from windward.',
    category: 'Navigation'
  },
  {
    id: 'bearing-away',
    title: 'Bearing away',
    description: 'Turning the boat away from the wind.',
    category: 'Navigation'
  },
  {
    id: 'beating-to-windward',
    title: 'Beating to windward',
    description: 'Sailing as close to the wind as possible.',
    category: 'Navigation'
  },
  {
    id: 'below-decks',
    title: 'Below decks',
    description: 'The area of a ship beneath the main deck.',
    category: 'Terminology'
  },
  {
    id: 'bend-on',
    title: 'Bend on',
    description: 'To fasten a sail to a yard, boom, or stay.',
    category: 'Operations'
  },
  {
    id: 'bermudan-rig',
    title: 'Bermudan rig',
    description: 'A configuration of mast and sails for a sailing vessel.',
    category: 'Terminology'
  },
  {
    id: 'berthage',
    title: 'Berthage',
    description: 'The charge for a vessel to occupy a berth.',
    category: 'Operations'
  },
  {
    id: 'bitts',
    title: 'Bitts',
    description: 'Strong wooden or metal posts on a ship\'s deck for securing lines.',
    category: 'Vessel Parts'
  },
  {
    id: 'black-jack',
    title: 'Black jack',
    description: 'A pirate flag, typically black with a white skull and crossbones.',
    category: 'History'
  },
  {
    id: 'blade',
    title: 'Blade',
    description: 'The flat part of an oar or propeller.',
    category: 'Vessel Parts'
  },
  {
    id: 'boarding',
    title: 'Boarding',
    description: 'The act of entering a ship, often by force.',
    category: 'Operations'
  },
  {
    id: 'boatswains-pipe',
    title: 'Boatswain\'s pipe',
    description: 'A high-pitched whistle used by a boatswain to give commands.',
    category: 'Crew'
  },
  {
    id: 'bone-in-her-teeth',
    title: 'Bone in her teeth',
    description: 'A phrase describing a ship moving fast enough to create a white bow wave.',
    category: 'Terminology'
  },
  {
    id: 'boot-top',
    title: 'Boot-top',
    description: 'The area of a ship\'s hull between the light and load waterlines.',
    category: 'Vessel Parts'
  },
  {
    id: 'bowline-knot',
    title: 'Bowline knot',
    description: 'A versatile knot used to form a fixed loop at the end of a rope.',
    category: 'Terminology'
  },
  {
    id: 'bring-to',
    title: 'Bring to',
    description: 'To stop a ship\'s progress by bringing her into the wind.',
    category: 'Operations'
  },
  {
    id: 'broach-to',
    title: 'Broach to',
    description: 'To swing broadside to the wind and waves, often dangerously.',
    category: 'Operations'
  },
  {
    id: 'bullseye',
    title: 'Bullseye',
    description: 'A small, round wooden or metal block without a sheave.',
    category: 'Vessel Parts'
  },
  {
    id: 'bunting',
    title: 'Bunting',
    description: 'Thin fabric used for making flags.',
    category: 'Terminology'
  },
  {
    id: 'burgee-flag',
    title: 'Burgee flag',
    description: 'A distinguishing flag of a yacht club.',
    category: 'Terminology'
  },
  {
    id: 'butt',
    title: 'Butt',
    description: 'The end of a plank where it meets another.',
    category: 'Vessel Parts'
  },
  {
    id: 'by the head',
    title: 'By the head',
    description: 'A ship is by the head when her draft forward is greater than her draft aft.',
    category: 'Terminology'
  },
  {
    id: 'by the lee',
    title: 'By the lee',
    description: 'Sailing with the wind coming over the same side as the boom.',
    category: 'Navigation'
  },
  {
    id: 'by the stern',
    title: 'By the stern',
    description: 'A ship is by the stern when her draft aft is greater than her draft forward.',
    category: 'Terminology'
  },
  {
    id: 'cable-length',
    title: 'Cable length',
    description: 'A unit of maritime distance, usually about 100 fathoms.',
    category: 'Terminology'
  },
  {
    id: 'cable-tier',
    title: 'Cable tier',
    description: 'The place where cables are stowed on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'canoe',
    title: 'Canoe',
    description: 'A narrow, lightweight boat typically pointed at both ends.',
    category: 'Terminology'
  },
  {
    id: 'cap',
    title: 'Cap',
    description: 'A block of wood used to secure the head of a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'captain',
    title: 'Captain',
    description: 'The person in command of a ship.',
    category: 'Crew'
  },
  {
    id: 'captain-of-the-head',
    title: 'Captain of the head',
    description: 'A crew member responsible for cleaning the ship\'s toilets.',
    category: 'Crew'
  },
  {
    id: 'careening',
    title: 'Careening',
    description: 'Tilting a ship on its side to clean or repair the hull.',
    category: 'Operations'
  },
  {
    id: 'carline',
    title: 'Carline',
    description: 'A short longitudinal timber supporting a ship\'s deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'carpenter',
    title: 'Carpenter',
    description: 'A crew member responsible for maintaining the ship\'s woodwork.',
    category: 'Crew'
  },
  {
    id: 'carrick-bend',
    title: 'Carrick bend',
    description: 'A knot used for joining two heavy ropes.',
    category: 'Terminology'
  },
  {
    id: 'carry-away',
    title: 'Carry away',
    description: 'To break or lose a spar or sail.',
    category: 'Operations'
  },
  {
    id: 'carry-on',
    title: 'Carry on',
    description: 'To continue sailing with all sails set despite increasing wind.',
    category: 'Operations'
  },
  {
    id: 'cast-away',
    title: 'Cast away',
    description: 'To be shipwrecked or abandoned.',
    category: 'History'
  },
  {
    id: 'cat-o-nine-tails',
    title: 'Cat-o\'-nine-tails',
    description: 'A multi-tailed whip used for punishment on ships.',
    category: 'History'
  },
  {
    id: 'catspaw',
    title: 'Catspaw',
    description: 'A light breeze that ruffles the surface of the water.',
    category: 'Environment'
  },
  {
    id: 'chain-shot',
    title: 'Chain shot',
    description: 'Two cannonballs joined by a chain, used to damage rigging.',
    category: 'History'
  },
  {
    id: 'chart-house',
    title: 'Chart house',
    description: 'A room on a ship where nautical charts are kept and studied.',
    category: 'Vessel Parts'
  },
  {
    id: 'charter',
    title: 'Charter',
    description: 'The hiring of a ship for a specific voyage or period.',
    category: 'Operations'
  },
  {
    id: 'cheeks',
    title: 'Cheeks',
    description: 'The side pieces of a block or the sides of a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'chock-a-block',
    title: 'Chock-a-block',
    description: 'When a tackle is pulled so tight that the two blocks meet.',
    category: 'Terminology'
  },
  {
    id: 'clawing-off',
    title: 'Clawing off',
    description: 'Beating to windward to avoid being driven onto a lee shore.',
    category: 'Navigation'
  },
  {
    id: 'clew-garnet',
    title: 'Clew garnet',
    description: 'A tackle used to haul up the clew of a square sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'clinometer',
    title: 'Clinometer',
    description: 'An instrument used to measure the angle of a ship\'s list or heel.',
    category: 'Technical'
  },
  {
    id: 'coffer',
    title: 'Coffer',
    description: 'A watertight structure used for underwater repairs.',
    category: 'Technical'
  },
  {
    id: 'commodore',
    title: 'Commodore',
    description: 'A naval officer of high rank, above a captain but below a rear admiral.',
    category: 'Crew'
  },
  {
    id: 'companion',
    title: 'Companion',
    description: 'A covering over a hatchway or staircase.',
    category: 'Vessel Parts'
  },
  {
    id: 'composite-ship',
    title: 'Composite ship',
    description: 'A ship with an iron or steel frame and wooden planking.',
    category: 'History'
  },
  {
    id: 'con',
    title: 'Con',
    description: 'To direct the steering of a ship.',
    category: 'Operations'
  },
  {
    id: 'consort',
    title: 'Consort',
    description: 'A ship sailing in company with another.',
    category: 'History'
  },
  {
    id: 'container',
    title: 'Container',
    description: 'A large standardized metal box for transporting cargo.',
    category: 'Cargo'
  },
  {
    id: 'corsair',
    title: 'Corsair',
    description: 'A pirate or privateer, especially one from the Barbary Coast.',
    category: 'History'
  },
  {
    id: 'cowl',
    title: 'Cowl',
    description: 'A hood-shaped covering for a ventilator.',
    category: 'Vessel Parts'
  },
  {
    id: 'craft',
    title: 'Craft',
    description: 'A general term for any boat or ship.',
    category: 'Terminology'
  },
  {
    id: 'creek',
    title: 'Creek',
    description: 'A small stream or a narrow inlet of the sea.',
    category: 'Environment'
  },
  {
    id: 'crimp',
    title: 'Crimp',
    description: 'A person who tricks or coerces men into service as sailors.',
    category: 'History'
  },
  {
    id: 'crossjack',
    title: 'Crossjack',
    description: 'The lower yard on the mizzenmast of a square-rigged ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'crosstrees',
    title: 'Crosstrees',
    description: 'Horizontal timbers at the head of a mast to support the topmast.',
    category: 'Vessel Parts'
  },
  {
    id: 'crows-nest',
    title: 'Crow\'s nest',
    description: 'A small platform high on a mast for a lookout.',
    category: 'Vessel Parts'
  },
  {
    id: 'cruise',
    title: 'Cruise',
    description: 'A voyage for pleasure or for patrolling a particular area.',
    category: 'Operations'
  },
  {
    id: 'cruiser',
    title: 'Cruiser',
    description: 'A fast, medium-sized warship.',
    category: 'History'
  },
  {
    id: 'culvert',
    title: 'Culvert',
    description: 'A tunnel carrying a stream or open drain under a road or railroad.',
    category: 'Environment'
  },
  {
    id: 'cunner',
    title: 'Cunner',
    description: 'A small, flat-bottomed boat used for fishing.',
    category: 'Terminology'
  },
  {
    id: 'custom-house',
    title: 'Custom house',
    description: 'A building where customs duties are collected.',
    category: 'Regulations'
  },
  {
    id: 'cut-of-his-jib',
    title: 'Cut of his jib',
    description: 'A phrase referring to a person\'s appearance or character.',
    category: 'Terminology'
  },
  {
    id: 'dayboard',
    title: 'Dayboard',
    description: 'A daytime navigational marker.',
    category: 'Navigation'
  },
  {
    id: 'dead-in-the-water',
    title: 'Dead in the water',
    description: 'A ship that is stopped and has no way on her.',
    category: 'Terminology'
  },
  {
    id: 'dead-weight',
    title: 'Dead weight',
    description: 'The total weight a ship can carry, including cargo, fuel, and stores.',
    category: 'Terminology'
  },
  {
    id: 'deck',
    title: 'Deck',
    description: 'A floor or platform on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'deck-hand',
    title: 'Deck hand',
    description: 'A crew member who performs manual labor on the deck.',
    category: 'Crew'
  },
  {
    id: 'deep',
    title: 'Deep',
    description: 'A measurement of depth, usually in fathoms.',
    category: 'Terminology'
  },
  {
    id: 'deep-sea-lead',
    title: 'Deep sea lead',
    description: 'A heavy lead used for measuring great depths.',
    category: 'Navigation'
  },
  {
    id: 'devil-to-pay',
    title: 'Devil to pay',
    description: 'A phrase referring to a difficult task, originally related to caulking a ship\'s seam.',
    category: 'Terminology'
  },
  {
    id: 'dipping-the-lug',
    title: 'Dipping the lug',
    description: 'A maneuver in a lug-rigged boat to move the sail to the other side of the mast.',
    category: 'Navigation'
  },
  {
    id: 'direction-finder',
    title: 'Direction finder',
    description: 'A radio receiver used to determine the direction of a transmitter.',
    category: 'Navigation'
  },
  {
    id: 'disembark',
    title: 'Disembark',
    description: 'To leave a ship or boat.',
    category: 'Operations'
  },
  {
    id: 'dismast',
    title: 'Dismast',
    description: 'To break or remove the masts of a ship.',
    category: 'Operations'
  },
  {
    id: 'ditty-box',
    title: 'Ditty box',
    description: 'A small box used by sailors for keeping personal items.',
    category: 'Crew'
  },
  {
    id: 'division',
    title: 'Division',
    description: 'A group of ships or a section of a ship\'s crew.',
    category: 'Crew'
  },
  {
    id: 'dockyard',
    title: 'Dockyard',
    description: 'A place where ships are built, repaired, and maintained.',
    category: 'Operations'
  },
  {
    id: 'doghouse',
    title: 'Doghouse',
    description: 'A small raised part of a cabin top providing more headroom.',
    category: 'Vessel Parts'
  },
  {
    id: 'dogvane',
    title: 'Dogvane',
    description: 'A small weather vane made of feathers or light material.',
    category: 'Vessel Parts'
  },
  {
    id: 'dolphin-striker',
    title: 'Dolphin striker',
    description: 'A short vertical spar under the bowsprit.',
    category: 'Vessel Parts'
  },
  {
    id: 'double-up',
    title: 'Double up',
    description: 'To increase the number of mooring lines for security.',
    category: 'Operations'
  },
  {
    id: 'douse',
    title: 'Douse',
    description: 'To lower or lower a sail quickly.',
    category: 'Operations'
  },
  {
    id: 'downwind',
    title: 'Downwind',
    description: 'In the direction that the wind is blowing.',
    category: 'Navigation'
  },
  {
    id: 'drain',
    title: 'Drain',
    description: 'A pipe or channel for carrying off water.',
    category: 'Technical'
  },
  {
    id: 'dress-ship',
    title: 'Dress ship',
    description: 'To display flags in honor of a special occasion.',
    category: 'Operations'
  },
  {
    id: 'drift',
    title: 'Drift',
    description: 'The speed of a current or the distance a ship is moved by it.',
    category: 'Navigation'
  },
  {
    id: 'dromon',
    title: 'Dromon',
    description: 'A type of galley and the most important warship of the Byzantine navy.',
    category: 'History'
  },
  {
    id: 'dugout',
    title: 'Dugout',
    description: 'A boat made by hollowing out a log.',
    category: 'History'
  },
  {
    id: 'earing',
    title: 'Earing',
    description: 'A short rope used to fasten the corner of a sail to a yard or boom.',
    category: 'Vessel Parts'
  },
  {
    id: 'easting',
    title: 'Easting',
    description: 'The distance traveled eastward.',
    category: 'Navigation'
  },
  {
    id: 'echo-sounding',
    title: 'Echo sounding',
    description: 'A method of measuring the depth of water using sound waves.',
    category: 'Navigation'
  },
  {
    id: 'entry',
    title: 'Entry',
    description: 'The shape of the bow of a ship below the waterline.',
    category: 'Vessel Parts'
  },
  {
    id: 'escort',
    title: 'Escort',
    description: 'A ship or group of ships accompanying another for protection.',
    category: 'Operations'
  },
  {
    id: 'estuary',
    title: 'Estuary',
    description: 'The tidal mouth of a large river.',
    category: 'Environment'
  },
  {
    id: 'eye-bolt',
    title: 'Eye bolt',
    description: 'A bolt with a loop at one end.',
    category: 'Vessel Parts'
  },
  {
    id: 'eyes-of-the-ship',
    title: 'Eyes of the ship',
    description: 'The foremost part of the bow.',
    category: 'Vessel Parts'
  },
  {
    id: 'fag-end',
    title: 'Fag end',
    description: 'The untwisted end of a rope.',
    category: 'Terminology'
  },
  {
    id: 'fair',
    title: 'Fair',
    description: 'A favorable wind or tide.',
    category: 'Environment'
  },
  {
    id: 'false-keel',
    title: 'False keel',
    description: 'An extra keel attached to the main keel for protection.',
    category: 'Vessel Parts'
  },
  {
    id: 'fancy-work',
    title: 'Fancy work',
    description: 'Decorative ropework on a ship.',
    category: 'Terminology'
  },
  {
    id: 'fashion-pieces',
    title: 'Fashion pieces',
    description: 'The timbers that form the shape of a ship\'s stern.',
    category: 'Vessel Parts'
  },
  {
    id: 'fay',
    title: 'Fay',
    description: 'To join two pieces of timber together closely.',
    category: 'Operations'
  },
  {
    id: 'feel-the-way',
    title: 'Feel the way',
    description: 'To proceed slowly and carefully in shallow or unknown water.',
    category: 'Navigation'
  },
  {
    id: 'fiddlehead',
    title: 'Fiddlehead',
    description: 'A decorative carving at the bow of a ship, similar to a scroll.',
    category: 'Vessel Parts'
  },
  {
    id: 'fill',
    title: 'Fill',
    description: 'To trim the sails so that they catch the wind.',
    category: 'Operations'
  },
  {
    id: 'fin',
    title: 'Fin',
    description: 'A fixed or movable surface used for stability or steering.',
    category: 'Technical'
  },
  {
    id: 'fire-ship',
    title: 'Fire ship',
    description: 'A ship filled with combustibles and set adrift to destroy enemy vessels.',
    category: 'History'
  },
  {
    id: 'fishery',
    title: 'Fishery',
    description: 'An area where fish are caught for commercial purposes.',
    category: 'Environment'
  },
  {
    id: 'fitting-out',
    title: 'Fitting out',
    description: 'The process of equipping a ship for a voyage.',
    category: 'Operations'
  },
  {
    id: 'flag',
    title: 'Flag',
    description: 'A piece of cloth with a distinctive design used as a symbol or signal.',
    category: 'Terminology'
  },
  {
    id: 'flat',
    title: 'Flat',
    description: 'A large, flat-bottomed boat.',
    category: 'Terminology'
  },
  {
    id: 'flatten-in',
    title: 'Flatten in',
    description: 'To pull the sheets of a sail tight to bring it closer to the centerline.',
    category: 'Operations'
  },
  {
    id: 'flemish',
    title: 'Flemish',
    description: 'To coil a rope in a flat, spiral pattern on the deck.',
    category: 'Operations'
  },
  {
    id: 'flinders-bar',
    title: 'Flinder\'s bar',
    description: 'A soft iron bar used to correct a magnetic compass.',
    category: 'Navigation'
  },
  {
    id: 'float',
    title: 'Float',
    description: 'To rest on the surface of a liquid without sinking.',
    category: 'Terminology'
  },
  {
    id: 'flood',
    title: 'Flood',
    description: 'The rising tide.',
    category: 'Environment'
  },
  {
    id: 'foam',
    title: 'Foam',
    description: 'A mass of small bubbles formed on the surface of the sea.',
    category: 'Environment'
  },
  {
    id: 'fog-horn',
    title: 'Fog horn',
    description: 'A device used to make a loud sound to warn ships in fog.',
    category: 'Safety'
  },
  {
    id: 'footrope',
    title: 'Footrope',
    description: 'A rope hanging under a yard for sailors to stand on.',
    category: 'Vessel Parts'
  },
  {
    id: 'fore',
    title: 'Fore',
    description: 'At or toward the front of a ship.',
    category: 'Terminology'
  },
  {
    id: 'fore-and-aft-rig',
    title: 'Fore-and-aft rig',
    description: 'A rig where the sails are set along the centerline of the ship.',
    category: 'Terminology'
  },
  {
    id: 'forebitter',
    title: 'Forebitter',
    description: 'A song sung by sailors in the forecastle.',
    category: 'History'
  },
  {
    id: 'forefoot',
    title: 'Forefoot',
    description: 'The point where the stem of a ship meets the keel.',
    category: 'Vessel Parts'
  },
  {
    id: 'foreland',
    title: 'Foreland',
    description: 'A cape or promontory.',
    category: 'Environment'
  },
  {
    id: 'foremast',
    title: 'Foremast',
    description: 'The mast nearest the bow of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'forepeak',
    title: 'Forepeak',
    description: 'The compartment in the foremost part of a ship\'s hull.',
    category: 'Vessel Parts'
  },
  {
    id: 'foretopmast',
    title: 'Foretopmast',
    description: 'The mast above the foremast.',
    category: 'Vessel Parts'
  },
  {
    id: 'forge-ahead',
    title: 'Forge ahead',
    description: 'To move forward steadily, especially with difficulty.',
    category: 'Operations'
  },
  {
    id: 'foul-ground',
    title: 'Foul ground',
    description: 'An area of the sea floor that is dangerous for anchoring.',
    category: 'Navigation'
  },
  {
    id: 'fourth-mate',
    title: 'Fourth mate',
    description: 'A junior deck officer on a merchant ship.',
    category: 'Crew'
  },
  {
    id: 'fox',
    title: 'Fox',
    description: 'A short piece of rope made by twisting together several rope yarns.',
    category: 'Terminology'
  },
  {
    id: 'free',
    title: 'Free',
    description: 'Sailing with the wind coming from behind the beam.',
    category: 'Navigation'
  },
  {
    id: 'freighter',
    title: 'Freighter',
    description: 'A ship designed to carry cargo.',
    category: 'Terminology'
  },
  {
    id: 'fresh-water',
    title: 'Fresh water',
    description: 'Water that is not salty.',
    category: 'Environment'
  },
  {
    id: 'freshen',
    title: 'Freshen',
    description: 'To increase in strength, as in the wind.',
    category: 'Environment'
  },
  {
    id: 'gaff-topsail',
    title: 'Gaff-topsail',
    description: 'A triangular sail set above a gaff sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'galliot',
    title: 'Galliot',
    description: 'A small, fast sailing vessel with two masts.',
    category: 'History'
  },
  {
    id: 'gam',
    title: 'Gam',
    description: 'A social meeting between two or more ships at sea.',
    category: 'History'
  },
  {
    id: 'gantline',
    title: 'Gantline',
    description: 'A rope used for hoisting a person or object to a high place.',
    category: 'Operations'
  },
  {
    id: 'gate',
    title: 'Gate',
    description: 'A structure used to control the flow of water in a dock or canal.',
    category: 'Technical'
  },
  {
    id: 'general-quarters',
    title: 'General quarters',
    description: 'The command for all crew members to go to their battle stations.',
    category: 'Operations'
  },
  {
    id: 'gob-line',
    title: 'Gob line',
    description: 'A rope used to pull down the center of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'gondola',
    title: 'Gondola',
    description: 'A long, narrow boat used on the canals of Venice.',
    category: 'Terminology'
  },
  {
    id: 'goose-neck',
    title: 'Goose-neck',
    description: 'A metal joint connecting a boom to a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'goose-wing',
    title: 'Goose-wing',
    description: 'A method of sailing downwind with the sails set on opposite sides.',
    category: 'Navigation'
  },
  {
    id: 'gores',
    title: 'Gores',
    description: 'Triangular pieces of cloth added to a sail to give it shape.',
    category: 'Vessel Parts'
  },
  {
    id: 'grafting',
    title: 'Grafting',
    description: 'A decorative covering for a rope made by weaving small lines together.',
    category: 'Terminology'
  },
  {
    id: 'gratings',
    title: 'Gratings',
    description: 'A wooden or metal lattice used to cover hatchways or provide a platform.',
    category: 'Vessel Parts'
  },
  {
    id: 'graving',
    title: 'Graving',
    description: 'Cleaning a ship\'s bottom by burning off old paint and marine growth.',
    category: 'Operations'
  },
  {
    id: 'gripe',
    title: 'Gripe',
    description: 'To tend to turn toward the wind when sailing.',
    category: 'Navigation'
  },
  {
    id: 'ground',
    title: 'Ground',
    description: 'The sea floor.',
    category: 'Environment'
  },
  {
    id: 'ground-swell',
    title: 'Ground swell',
    description: 'A long, deep wave caused by a distant storm.',
    category: 'Environment'
  },
  {
    id: 'guess-warp',
    title: 'Guess warp',
    description: 'A rope used to pull a boat alongside a ship.',
    category: 'Operations'
  },
  {
    id: 'guineaman',
    title: 'Guineaman',
    description: 'A ship used in the slave trade between Africa and the Americas.',
    category: 'History'
  },
  {
    id: 'gulf',
    title: 'Gulf',
    description: 'A large part of the ocean partially enclosed by land.',
    category: 'Environment'
  },
  {
    id: 'gun-room',
    title: 'Gun-room',
    description: 'The living area for junior officers on a warship.',
    category: 'Vessel Parts'
  },
  {
    id: 'gybe',
    title: 'Gybe',
    description: 'To change the direction of a sailing vessel by turning the stern through the wind.',
    category: 'Navigation'
  },
  {
    id: 'hand-over-hand',
    title: 'Hand over hand',
    description: 'To pull on a rope by moving one hand over the other quickly.',
    category: 'Operations'
  },
  {
    id: 'handsomely',
    title: 'Handsomely',
    description: 'To do something slowly and carefully.',
    category: 'Terminology'
  },
  {
    id: 'handy-billy',
    title: 'Handy billy',
    description: 'A small, portable tackle used for various purposes on a ship.',
    category: 'Technical'
  },
  {
    id: 'hang',
    title: 'Hang',
    description: 'To remain in a particular position or state.',
    category: 'Terminology'
  },
  {
    id: 'harbor',
    title: 'Harbor',
    description: 'A sheltered area of water where ships can anchor or dock.',
    category: 'Environment'
  },
  {
    id: 'hard',
    title: 'Hard',
    description: 'To the fullest extent, as in \'hard a-port.\'',
    category: 'Terminology'
  },
  {
    id: 'hard-a-lee',
    title: 'Hard a-lee',
    description: 'A command to put the helm all the way to the leeward side.',
    category: 'Navigation'
  },
  {
    id: 'hard-a-port',
    title: 'Hard a-port',
    description: 'A command to turn the helm all the way to the port side.',
    category: 'Navigation'
  },
  {
    id: 'hard-a-starboard',
    title: 'Hard a-starboard',
    description: 'A command to turn the helm all the way to the starboard side.',
    category: 'Navigation'
  },
  {
    id: 'hard-a-weather',
    title: 'Hard a-weather',
    description: 'A command to put the helm all the way to the windward side.',
    category: 'Navigation'
  },
  {
    id: 'harness-cask',
    title: 'Harness cask',
    description: 'A large tub used for storing salted meat on a ship.',
    category: 'History'
  },
  {
    id: 'harness-hitch',
    title: 'Harness hitch',
    description: 'A knot used to form a loop in the middle of a rope.',
    category: 'Terminology'
  },
  {
    id: 'harpings',
    title: 'Harpings',
    description: 'The foremost part of the wales of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'hatchway',
    title: 'Hatchway',
    description: 'An opening in a ship\'s deck providing access to the hold.',
    category: 'Vessel Parts'
  },
  {
    id: 'head-reach',
    title: 'Head-reach',
    description: 'The distance a ship continues to move through the water after the sails are lowered.',
    category: 'Navigation'
  },
  {
    id: 'head-sea',
    title: 'Head-sea',
    description: 'A sea where the waves are coming from directly ahead of the ship.',
    category: 'Environment'
  },
  {
    id: 'heave-in',
    title: 'Heave in',
    description: 'To pull in a rope or cable.',
    category: 'Operations'
  },
  {
    id: 'heaver',
    title: 'Heaver',
    description: 'A short wooden bar used as a lever.',
    category: 'Technical'
  },
  {
    id: 'high-and-dry',
    title: 'High and dry',
    description: 'A ship that is completely out of the water, often after running aground.',
    category: 'Terminology'
  },
  {
    id: 'high-water',
    title: 'High water',
    description: 'The highest level reached by the tide.',
    category: 'Environment'
  },
  {
    id: 'hogged',
    title: 'Hogged',
    description: 'A ship whose hull has been strained so that the bow and stern are lower than the middle.',
    category: 'Technical'
  },
  {
    id: 'hold-water',
    title: 'Hold water',
    description: 'To stop a boat by holding the oars in the water.',
    category: 'Operations'
  },
  {
    id: 'hollystone',
    title: 'Hollystone',
    description: 'A piece of sandstone used for scrubbing the wooden decks of a ship.',
    category: 'History'
  },
  {
    id: 'hood',
    title: 'Hood',
    description: 'A covering for a companionway or other opening on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'hook',
    title: 'Hook',
    description: 'A curved piece of metal used for catching or holding something.',
    category: 'Terminology'
  },
  {
    id: 'horn',
    title: 'Horn',
    description: 'A device used for making a loud sound signal.',
    category: 'Safety'
  },
  {
    id: 'horse',
    title: 'Horse',
    description: 'A horizontal bar or rope used for various purposes on a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'hug',
    title: 'Hug',
    description: 'To keep close to something, as in \'hugging the shore.\'',
    category: 'Navigation'
  },
  {
    id: 'hull-down',
    title: 'Hull down',
    description: 'A ship that is so far away that only its masts and superstructure are visible above the horizon.',
    category: 'Terminology'
  },
  {
    id: 'hunter',
    title: 'Hunter',
    description: 'A ship used for hunting whales or other marine animals.',
    category: 'History'
  },
  {
    id: 'idle',
    title: 'Idle',
    description: 'A ship that is not in use or is waiting for orders.',
    category: 'Terminology'
  },
  {
    id: 'ingle',
    title: 'Ingle',
    description: 'A small fire or fireplace on a ship.',
    category: 'History'
  },
  {
    id: 'inner-jib',
    title: 'Inner jib',
    description: 'A triangular sail set between the forestay and the outer jib.',
    category: 'Vessel Parts'
  },
  {
    id: 'intercostal',
    title: 'Intercostal',
    description: 'A structural member of a ship\'s hull that fits between the frames.',
    category: 'Technical'
  },
  {
    id: 'irish-pennant',
    title: 'Irish pennant',
    description: 'A loose rope end or a piece of clothing hanging from the rigging.',
    category: 'Terminology'
  },
  {
    id: 'ironbound',
    title: 'Ironbound',
    description: 'A rocky coast with no safe harbors.',
    category: 'Environment'
  },
  {
    id: 'irons',
    title: 'Irons',
    description: 'A sailing vessel is in irons when it is pointed into the wind and cannot move.',
    category: 'Navigation'
  },
  {
    id: 'jackass-barque',
    title: 'Jackass-barque',
    description: 'A four-masted vessel, square-rigged on the two fore masts and fore-and-aft rigged on the two after masts.',
    category: 'History'
  },
  {
    id: 'jacobs-ladder',
    title: 'Jacob\'s ladder',
    description: 'A flexible hanging ladder made of rope or chain with wooden or metal rungs.',
    category: 'Vessel Parts'
  },
  {
    id: 'jars',
    title: 'Jars',
    description: 'Vibrations or shocks felt on a ship, often caused by the engines or heavy seas.',
    category: 'Technical'
  },
  {
    id: 'jaws',
    title: 'Jaws',
    description: 'The forked end of a gaff or boom that fits around a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'jib-sheet',
    title: 'Jib-sheet',
    description: 'A rope used to control the position of a jib sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'jib-stay',
    title: 'Jib-stay',
    description: 'A stay on which a jib sail is set.',
    category: 'Vessel Parts'
  },
  {
    id: 'jigger-mast',
    title: 'Jigger-mast',
    description: 'The fourth mast on a ship with four or more masts.',
    category: 'Vessel Parts'
  },
  {
    id: 'jorum',
    title: 'Jorum',
    description: 'A large drinking bowl or its contents, often used by sailors.',
    category: 'History'
  },
  {
    id: 'jury-mast',
    title: 'Jury-mast',
    description: 'A temporary mast erected to replace one that has been lost.',
    category: 'Operations'
  },
  {
    id: 'keelhaul',
    title: 'Keelhaul',
    description: 'A former naval punishment where a person was dragged under the keel of a ship.',
    category: 'History'
  },
  {
    id: 'kelp',
    title: 'Kelp',
    description: 'Large brown seaweed that grows in shallow water.',
    category: 'Environment'
  },
  {
    id: 'kick',
    title: 'Kick',
    description: 'The sudden movement of a ship\'s stern when the rudder is turned.',
    category: 'Technical'
  },
  {
    id: 'king-spoke',
    title: 'King-spoke',
    description: 'The spoke of a steering wheel that is upright when the rudder is centered.',
    category: 'Vessel Parts'
  },
  {
    id: 'kink',
    title: 'Kink',
    description: 'A twist or loop in a rope or cable.',
    category: 'Terminology'
  },
  {
    id: 'lacing',
    title: 'Lacing',
    description: 'A small line used to fasten a sail to a spar or stay.',
    category: 'Vessel Parts'
  },
  {
    id: 'laid-up',
    title: 'Laid up',
    description: 'A ship that is out of service for repairs or because of a lack of work.',
    category: 'Terminology'
  },
  {
    id: 'land-breeze',
    title: 'Land-breeze',
    description: 'A breeze blowing from the land toward the sea.',
    category: 'Environment'
  },
  {
    id: 'landlocked',
    title: 'Landlocked',
    description: 'An area of water almost entirely surrounded by land.',
    category: 'Environment'
  },
  {
    id: 'lanyards',
    title: 'Lanyards',
    description: 'Short ropes used for securing or tightening something.',
    category: 'Vessel Parts'
  },
  {
    id: 'large',
    title: 'Large',
    description: 'Sailing with the wind coming from behind the beam.',
    category: 'Navigation'
  },
  {
    id: 'lasking',
    title: 'Lasking',
    description: 'Sailing with the wind on the quarter.',
    category: 'Navigation'
  },
  {
    id: 'lateen-sail',
    title: 'Lateen sail',
    description: 'A triangular sail set on a long yard at an angle to the mast.',
    category: 'History'
  },
  {
    id: 'lay-days',
    title: 'Lay days',
    description: 'The time allowed for loading or unloading a ship.',
    category: 'Regulations'
  },
  {
    id: 'lay-out',
    title: 'Lay out',
    description: 'To move out along a yard to work on a sail.',
    category: 'Operations'
  },
  {
    id: 'lay-to',
    title: 'Lay to',
    description: 'To bring a ship into the wind and hold her there.',
    category: 'Operations'
  },
  {
    id: 'leach',
    title: 'Leach',
    description: 'The after edge of a sail.',
    category: 'Vessel Parts'
  },
  {
    id: 'lead',
    title: 'Lead',
    description: 'A heavy weight used for measuring the depth of water.',
    category: 'Navigation'
  },
  {
    id: 'lead-line',
    title: 'Lead-line',
    description: 'A line with a lead weight attached, used for measuring depth.',
    category: 'Navigation'
  },
  {
    id: 'leak',
    title: 'Leak',
    description: 'An opening in a ship\'s hull that allows water to enter.',
    category: 'Terminology'
  },
  {
    id: 'ledges',
    title: 'Ledges',
    description: 'Small structural members of a ship\'s deck.',
    category: 'Vessel Parts'
  },
  {
    id: 'lee-board',
    title: 'Lee-board',
    description: 'A board lowered into the water on the leeward side of a boat to reduce leeway.',
    category: 'Vessel Parts'
  },
  {
    id: 'lee-shore',
    title: 'Lee-shore',
    description: 'A shore toward which the wind is blowing.',
    category: 'Environment'
  },
  {
    id: 'lee-side',
    title: 'Lee-side',
    description: 'The side of a ship or object that is sheltered from the wind.',
    category: 'Terminology'
  },
  {
    id: 'lee-tide',
    title: 'Lee-tide',
    description: 'A tide that is flowing in the same direction as the wind.',
    category: 'Environment'
  },
  {
    id: 'leg',
    title: 'Leg',
    description: 'A single stage of a journey or a single tack in a sailing race.',
    category: 'Navigation'
  },
  {
    id: 'length-overall',
    title: 'Length overall',
    description: 'The total length of a ship\'s hull.',
    category: 'Technical'
  },
  {
    id: 'let-fall',
    title: 'Let fall',
    description: 'A command to drop a sail from its yard.',
    category: 'Operations'
  },
  {
    id: 'let-go-and-haul',
    title: 'Let go and haul',
    description: 'A command used when tacking a square-rigged ship.',
    category: 'Operations'
  },
  {
    id: 'lie-to',
    title: 'Lie to',
    description: 'To remain in one place while facing the wind.',
    category: 'Operations'
  },
  {
    id: 'life-belt',
    title: 'Life-belt',
    description: 'A buoyant belt worn to keep a person afloat in the water.',
    category: 'Safety'
  },
  {
    id: 'life-boat',
    title: 'Life-boat',
    description: 'A small boat carried on a ship for use in an emergency.',
    category: 'Safety'
  },
  {
    id: 'life-buoy',
    title: 'Life-buoy',
    description: 'A buoyant ring used for rescuing people from the water.',
    category: 'Safety'
  },
  {
    id: 'lift',
    title: 'Lift',
    description: 'A rope used to support or raise a yard.',
    category: 'Vessel Parts'
  },
  {
    id: 'lighterage',
    title: 'Lighterage',
    description: 'The charge for using a lighter to load or unload a ship.',
    category: 'Operations'
  },
  {
    id: 'limber-hole',
    title: 'Limber-hole',
    description: 'A hole in a ship\'s frame that allows water to flow to the bilge.',
    category: 'Vessel Parts'
  },
  {
    id: 'lizard',
    title: 'Lizard',
    description: 'A short piece of rope with a thimble or eye at one end.',
    category: 'Vessel Parts'
  },
  {
    id: 'lloyds',
    title: 'Lloyd\'s',
    description: 'A famous insurance market and classification society based in London.',
    category: 'Regulations'
  },
  {
    id: 'load-line',
    title: 'Load-line',
    description: 'A mark on a ship\'s hull showing the maximum depth to which it can be safely loaded.',
    category: 'Regulations'
  },
  {
    id: 'log-board',
    title: 'Log-board',
    description: 'A board used for recording the ship\'s speed and distance traveled.',
    category: 'Navigation'
  },
  {
    id: 'log-book',
    title: 'Log-book',
    description: 'An official record of a ship\'s voyage and activities.',
    category: 'Navigation'
  },
  {
    id: 'log-line',
    title: 'Log-line',
    description: 'A line used with a log to measure a ship\'s speed.',
    category: 'Navigation'
  },
  {
    id: 'loggerhead',
    title: 'Loggerhead',
    description: 'A heavy piece of iron or wood used for various purposes on a ship.',
    category: 'Terminology'
  },
  {
    id: 'long-boat',
    title: 'Long-boat',
    description: 'The largest boat carried on a ship.',
    category: 'History'
  },
  {
    id: 'loof',
    title: 'Loof',
    description: 'The part of a ship\'s bow where it begins to curve toward the stem.',
    category: 'Vessel Parts'
  },
  {
    id: 'look-out',
    title: 'Look-out',
    description: 'A crew member assigned to watch for other ships, land, or hazards.',
    category: 'Crew'
  },
  {
    id: 'loose',
    title: 'Loose',
    description: 'To unfurl or release a sail.',
    category: 'Operations'
  },
  {
    id: 'low-water',
    title: 'Low water',
    description: 'The lowest level reached by the tide.',
    category: 'Environment'
  },
  {
    id: 'lubbers-hole',
    title: 'Lubber\'s hole',
    description: 'An opening in a mast platform for sailors who are afraid to climb the shrouds.',
    category: 'Terminology'
  },
  {
    id: 'lubbers-line',
    title: 'Lubber\'s line',
    description: 'A line on a compass showing the direction of the ship\'s head.',
    category: 'Navigation'
  },
  {
    id: 'luff-tackle',
    title: 'Luff-tackle',
    description: 'A small tackle consisting of a double and a single block.',
    category: 'Technical'
  },
  {
    id: 'lug-sail',
    title: 'Lug-sail',
    description: 'A four-sided sail set on a yard that hangs at an angle to the mast.',
    category: 'Terminology'
  },
  {
    id: 'lying-to',
    title: 'Lying to',
    description: 'The state of a ship when it is held facing the wind.',
    category: 'Operations'
  },
  {
    id: 'mackinaw-boat',
    title: 'Mackinaw boat',
    description: 'A type of flat-bottomed boat used on the Great Lakes.',
    category: 'History'
  },
  {
    id: 'main',
    title: 'Main',
    description: 'The largest or most important part of something, as in the \'main mast.\'',
    category: 'Terminology'
  },
  {
    id: 'main-deck',
    title: 'Main-deck',
    description: 'The principal deck of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'main-mast',
    title: 'Main-mast',
    description: 'The principal mast of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'main-sail',
    title: 'Main-sail',
    description: 'The principal sail of a ship.',
    category: 'Vessel Parts'
  },
  {
    id: 'main-stay',
    title: 'Main-stay',
    description: 'The stay that supports the mainmast from the front.',
    category: 'Vessel Parts'
  },
  {
    id: 'main-top',
    title: 'Main-top',
    description: 'The platform at the head of the mainmast.',
    category: 'Vessel Parts'
  },
  {
    id: 'make',
    title: 'Make',
    description: 'To reach or arrive at a particular place.',
    category: 'Navigation'
  },
  {
    id: 'make-foul',
    title: 'Make foul',
    description: 'To cause a rope or anchor to become tangled.',
    category: 'Operations'
  },
  {
    id: 'make-sail',
    title: 'Make sail',
    description: 'To set or increase the amount of sail.',
    category: 'Operations'
  },
  {
    id: 'make-water',
    title: 'Make water',
    description: 'To leak.',
    category: 'Terminology'
  },
  {
    id: 'making-way',
    title: 'Making way',
    description: 'Moving through the water.',
    category: 'Navigation'
  },
  {
    id: 'mallet',
    title: 'Mallet',
    description: 'A wooden hammer used for various purposes on a ship.',
    category: 'Technical'
  },
  {
    id: 'man',
    title: 'Man',
    description: 'To provide a ship or boat with a crew.',
    category: 'Crew'
  },
  {
    id: 'man-of-war',
    title: 'Man-of-war',
    description: 'A large, heavily armed warship.',
    category: 'History'
  },
  {
    id: 'man-ropes',
    title: 'Man-ropes',
    description: 'Ropes used as handrails on a ship\'s ladder or gangway.',
    category: 'Vessel Parts'
  },
  {
    id: 'marline-spike',
    title: 'Marline-spike',
    description: 'A pointed metal tool used for separating the strands of a rope.',
    category: 'Technical'
  },
  {
    id: 'maroon',
    title: 'Maroon',
    description: 'To abandon a person on a deserted island or coast.',
    category: 'History'
  },
  {
    id: 'marry',
    title: 'Marry',
    description: 'To join two ropes together by interweaving their strands.',
    category: 'Operations'
  },
  {
    id: 'martingale',
    title: 'Martingale',
    description: 'A rope or chain used to hold down a bowsprit.',
    category: 'Vessel Parts'
  },
  {
    id: 'mast-head',
    title: 'Mast-head',
    description: 'The top of a mast.',
    category: 'Vessel Parts'
  },
  {
    id: 'mat',
    title: 'Mat',
    description: 'A piece of woven material used for protection or decoration on a ship.',
    category: 'Terminology'
  },
  {
    id: 'maul',
    title: 'Maul',
    description: 'A heavy hammer used for driving spikes or bolts.',
    category: 'Technical'
  },
  {
    id: 'messroom',
    title: 'Messroom',
    description: 'The area on a ship where the crew eats.',
    category: 'Vessel Parts'
  },
  {
    id: 'metacentre',
    title: 'Metacentre',
    description: 'The point of intersection of the vertical line through the center of buoyancy of a floating body.',
    category: 'Technical'
  },
  {
    id: 'mile',
    title: 'Mile',
    description: 'A unit of distance, usually a nautical mile in maritime contexts.',
    category: 'Terminology'
  },
  {
    id: 'missing-stays',
    title: 'Missing stays',
    description: 'Failing to tack because the ship loses its way when pointed into the wind.',
    category: 'Navigation'
  },
  {
    id: 'mizzen-mast',
    title: 'Mizzen-mast',
    description: 'The mast nearest the stern of a ship with three or more masts.',
    category: 'Vessel Parts'
  }
];
