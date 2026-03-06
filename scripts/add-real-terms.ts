import fs from 'fs';

const realMaritimeTerms = [
  {
    "id": "ais",
    "title": "Automatic Identification System (AIS)",
    "slug": "ais",
    "definition": "An automated tracking system that uses transceivers on ships and is used by vessel traffic services (VTS).",
    "category": "Navigation",
    "context": "Used for collision avoidance and tracking vessel movements.",
    "relatedSlugs": ["vts", "radar", "gps"],
    "sources": ["IMO", "US Coast Guard"]
  },
  {
    "id": "ballast-water",
    "title": "Ballast Water",
    "slug": "ballast-water",
    "definition": "Water carried in ships' ballast tanks to improve stability, balance, and trim.",
    "category": "Operations",
    "context": "Essential for maintaining stability when the ship is not fully loaded with cargo.",
    "relatedSlugs": ["ballast", "trim", "stability"],
    "sources": ["IMO Ballast Water Management Convention"]
  },
  {
    "id": "bill-of-lading",
    "title": "Bill of Lading (B/L)",
    "slug": "bill-of-lading",
    "definition": "A legal document between a shipper and a carrier that details the type, quantity, and destination of the goods being carried.",
    "category": "Cargo",
    "context": "Serves as a shipment receipt when the carrier delivers the goods at a predetermined destination.",
    "relatedSlugs": ["manifest", "cargo", "charter-party"],
    "sources": ["Maritime Law", "Shipping Industry Standards"]
  },
  {
    "id": "bunker",
    "title": "Bunker",
    "slug": "bunker",
    "definition": "The fuel used by ships, typically heavy fuel oil or marine diesel oil.",
    "category": "Operations",
    "context": "Refers to both the fuel itself and the tanks where it is stored.",
    "relatedSlugs": ["fuel", "engine-room", "propulsion"],
    "sources": ["Marine Engineering"]
  },
  {
    "id": "cabotage",
    "title": "Cabotage",
    "slug": "cabotage",
    "definition": "The transport of goods or passengers between two places in the same country by a transport operator from another country.",
    "category": "Regulations",
    "context": "Often restricted by national laws to protect domestic shipping industries.",
    "relatedSlugs": ["flag-state", "port-state", "imo"],
    "sources": ["Maritime Law"]
  },
  {
    "id": "charter-party",
    "title": "Charter Party",
    "slug": "charter-party",
    "definition": "A written contract between a shipowner and a charterer for the hire of a ship or part of its cargo space.",
    "category": "Operations",
    "context": "Governs the terms of the vessel's employment.",
    "relatedSlugs": ["charterer", "shipowner", "bill-of-lading"],
    "sources": ["Maritime Law"]
  },
  {
    "id": "deadweight-tonnage",
    "title": "Deadweight Tonnage (DWT)",
    "slug": "deadweight-tonnage",
    "definition": "A measure of how much weight a ship can carry, including cargo, fuel, fresh water, ballast water, provisions, passengers, and crew.",
    "category": "Technical",
    "context": "Indicates the total carrying capacity of the vessel.",
    "relatedSlugs": ["gross-tonnage", "displacement", "draft"],
    "sources": ["Ship Design Standards"]
  },
  {
    "id": "demurrage",
    "title": "Demurrage",
    "slug": "demurrage",
    "definition": "A charge payable to the owner of a chartered ship on failure to load or discharge the ship within the time agreed.",
    "category": "Operations",
    "context": "Used to compensate the shipowner for delays caused by the charterer.",
    "relatedSlugs": ["laytime", "dispatch", "charter-party"],
    "sources": ["Maritime Law"]
  },
  {
    "id": "draft",
    "title": "Draft (Draught)",
    "slug": "draft",
    "definition": "The vertical distance between the waterline and the bottom of the hull (keel).",
    "category": "Technical",
    "context": "Determines the minimum depth of water a ship or boat can safely navigate.",
    "relatedSlugs": ["keel", "hull", "displacement"],
    "sources": ["Naval Architecture"]
  },
  {
    "id": "dry-dock",
    "title": "Dry Dock",
    "slug": "dry-dock",
    "definition": "A narrow basin or vessel that can be flooded to allow a load to be floated in, then drained to allow that load to come to rest on a dry platform.",
    "category": "Operations",
    "context": "Used for the construction, maintenance, and repair of ships.",
    "relatedSlugs": ["hull", "keel", "propeller"],
    "sources": ["Shipyard Operations"]
  },
  {
    "id": "fcl",
    "title": "Full Container Load (FCL)",
    "slug": "fcl",
    "definition": "A shipment that occupies the entire space of a container.",
    "category": "Cargo",
    "context": "Commonly used in containerized shipping for large shipments.",
    "relatedSlugs": ["lcl", "container", "teu"],
    "sources": ["Logistics Standards"]
  },
  {
    "id": "flag-of-convenience",
    "title": "Flag of Convenience (FOC)",
    "slug": "flag-of-convenience",
    "definition": "A business practice whereby a ship's owners register a merchant ship in a ship register of a country other than that of the ship's owners.",
    "category": "Regulations",
    "context": "Often used to reduce operating costs or avoid strict regulations.",
    "relatedSlugs": ["flag-state", "imo", "registration"],
    "sources": ["International Transport Workers' Federation"]
  },
  {
    "id": "freeboard",
    "title": "Freeboard",
    "slug": "freeboard",
    "definition": "The distance from the waterline to the upper edge of the hull or deck.",
    "category": "Technical",
    "context": "Critical for vessel safety and stability in rough seas.",
    "relatedSlugs": ["draft", "hull", "stability"],
    "sources": ["Load Line Convention"]
  },
  {
    "id": "gross-tonnage",
    "title": "Gross Tonnage (GT)",
    "slug": "gross-tonnage",
    "definition": "A nonlinear measure of a ship's overall internal volume.",
    "category": "Technical",
    "context": "Used for determining regulations, registration fees, and port dues.",
    "relatedSlugs": ["net-tonnage", "deadweight-tonnage", "displacement"],
    "sources": ["IMO Tonnage Convention"]
  },
  {
    "id": "imo-number",
    "title": "IMO Number",
    "slug": "imo-number",
    "definition": "A unique identifier for ships, registered ship owners, and management companies.",
    "category": "Regulations",
    "context": "Stays with the ship for its entire life, regardless of changes in name or flag.",
    "relatedSlugs": ["imo", "registration", "flag-state"],
    "sources": ["International Maritime Organization"]
  },
  {
    "id": "incoterms",
    "title": "Incoterms",
    "slug": "incoterms",
    "definition": "A series of pre-defined commercial terms published by the International Chamber of Commerce (ICC) relating to international commercial law.",
    "category": "Regulations",
    "context": "Used to clearly communicate the tasks, costs, and risks associated with the global or international transportation and delivery of goods.",
    "relatedSlugs": ["fob", "cif", "cargo"],
    "sources": ["International Chamber of Commerce"]
  },
  {
    "id": "knot",
    "title": "Knot",
    "slug": "knot",
    "definition": "A unit of speed equal to one nautical mile per hour, exactly 1.852 km/h.",
    "category": "Navigation",
    "context": "Standard unit for measuring speed at sea.",
    "relatedSlugs": ["nautical-mile", "navigation", "speed"],
    "sources": ["Navigation Standards"]
  },
  {
    "id": "laytime",
    "title": "Laytime",
    "slug": "laytime",
    "definition": "The amount of time allowed in a charter party for loading and unloading cargo.",
    "category": "Operations",
    "context": "If exceeded, demurrage may be charged.",
    "relatedSlugs": ["demurrage", "dispatch", "charter-party"],
    "sources": ["Maritime Law"]
  },
  {
    "id": "lcl",
    "title": "Less than Container Load (LCL)",
    "slug": "lcl",
    "definition": "A shipment that does not fill an entire container and is grouped with other shipments.",
    "category": "Cargo",
    "context": "Used for smaller shipments that don't require a full container.",
    "relatedSlugs": ["fcl", "container", "teu"],
    "sources": ["Logistics Standards"]
  },
  {
    "id": "manifest",
    "title": "Manifest",
    "slug": "manifest",
    "definition": "A document listing the cargo, passengers, and crew of a ship, aircraft, or vehicle, for the use of customs and other officials.",
    "category": "Cargo",
    "context": "Required for entry into and exit from ports.",
    "relatedSlugs": ["bill-of-lading", "cargo", "customs"],
    "sources": ["Customs Regulations"]
  },
  {
    "id": "marpol",
    "title": "MARPOL",
    "slug": "marpol",
    "definition": "The International Convention for the Prevention of Pollution from Ships.",
    "category": "Regulations",
    "context": "Main international convention covering prevention of pollution of the marine environment by ships from operational or accidental causes.",
    "relatedSlugs": ["imo", "environment", "pollution"],
    "sources": ["International Maritime Organization"]
  },
  {
    "id": "nautical-mile",
    "title": "Nautical Mile",
    "slug": "nautical-mile",
    "definition": "A unit of distance used in marine navigation, equal to 1,852 meters.",
    "category": "Navigation",
    "context": "Based on the circumference of the Earth and equal to one minute of latitude.",
    "relatedSlugs": ["knot", "navigation", "latitude"],
    "sources": ["Navigation Standards"]
  },
  {
    "id": "panamax",
    "title": "Panamax",
    "slug": "panamax",
    "definition": "A size term for ships that are the maximum size allowed to pass through the Panama Canal.",
    "category": "Technical",
    "context": "Determined by the dimensions of the canal's locks.",
    "relatedSlugs": ["post-panamax", "suezmax", "vessel-size"],
    "sources": ["Panama Canal Authority"]
  },
  {
    "id": "pilotage",
    "title": "Pilotage",
    "slug": "pilotage",
    "definition": "The act of a pilot assisting the master of a ship in navigating through local waters, such as ports or rivers.",
    "category": "Operations",
    "context": "Often mandatory in busy or difficult-to-navigate waters.",
    "relatedSlugs": ["pilot", "navigation", "port"],
    "sources": ["Port Regulations"]
  },
  {
    "id": "plimsoll-line",
    "title": "Plimsoll Line",
    "slug": "plimsoll-line",
    "definition": "A marking on a ship's side showing the limit to which the ship may be legal loaded.",
    "category": "Safety",
    "context": "Varies depending on the water type and temperature (fresh, salt, tropical, etc.).",
    "relatedSlugs": ["load-line", "freeboard", "draft"],
    "sources": ["International Convention on Load Lines"]
  },
  {
    "id": "port-state-control",
    "title": "Port State Control (PSC)",
    "slug": "port-state-control",
    "definition": "The inspection of foreign ships in national ports to verify that the condition of the ship and its equipment comply with the requirements of international regulations.",
    "category": "Regulations",
    "context": "Used to ensure that ships are safe and do not pose a threat to the environment.",
    "relatedSlugs": ["flag-state", "imo", "inspection"],
    "sources": ["IMO"]
  },
  {
    "id": "reefer",
    "title": "Reefer",
    "slug": "reefer",
    "definition": "A refrigerated container or ship used for transporting perishable goods.",
    "category": "Cargo",
    "context": "Essential for the transport of food, chemicals, and other temperature-sensitive items.",
    "relatedSlugs": ["container", "cargo", "logistics"],
    "sources": ["Shipping Industry Standards"]
  },
  {
    "id": "ro-ro",
    "title": "Roll-on/Roll-off (Ro-Ro)",
    "slug": "ro-ro",
    "definition": "Ships designed to carry wheeled cargo, such as cars, trucks, and trailers, that are driven on and off the ship on their own wheels.",
    "category": "Technical",
    "context": "Uses built-in ramps for easy loading and unloading.",
    "relatedSlugs": ["vessel-type", "cargo", "ramp"],
    "sources": ["Marine Engineering"]
  },
  {
    "id": "solas",
    "title": "SOLAS",
    "slug": "solas",
    "definition": "The International Convention for the Safety of Life at Sea.",
    "category": "Regulations",
    "context": "The most important of all international treaties concerning the safety of merchant ships.",
    "relatedSlugs": ["imo", "safety", "regulations"],
    "sources": ["International Maritime Organization"]
  },
  {
    "id": "stowage",
    "title": "Stowage",
    "slug": "stowage",
    "definition": "The act of placing cargo in a ship's hold or on its deck in a safe and efficient manner.",
    "category": "Operations",
    "context": "Requires careful planning to ensure vessel stability and cargo safety.",
    "relatedSlugs": ["cargo", "hold", "stability"],
    "sources": ["Cargo Handling Standards"]
  },
  {
    "id": "teu",
    "title": "Twenty-foot Equivalent Unit (TEU)",
    "slug": "teu",
    "definition": "A standard unit for measuring container capacity, based on the dimensions of a 20-foot long container.",
    "category": "Cargo",
    "context": "Used to describe the capacity of container ships and terminals.",
    "relatedSlugs": ["feu", "container", "cargo"],
    "sources": ["Logistics Standards"]
  },
  {
    "id": "trim",
    "title": "Trim",
    "slug": "trim",
    "definition": "The difference between the drafts at the bow and the stern.",
    "category": "Technical",
    "context": "A ship is 'on even keel' if the bow and stern drafts are equal.",
    "relatedSlugs": ["draft", "stability", "ballast"],
    "sources": ["Naval Architecture"]
  },
  {
    "id": "vessel-traffic-service",
    "title": "Vessel Traffic Service (VTS)",
    "slug": "vessel-traffic-service",
    "definition": "A marine traffic monitoring system established by harbor or port authorities, similar to air traffic control for aircraft.",
    "category": "Operations",
    "context": "Used to improve the safety and efficiency of vessel traffic and to protect the environment.",
    "relatedSlugs": ["ais", "radar", "navigation"],
    "sources": ["IMO"]
  },
  {
    "id": "vlcc",
    "title": "Very Large Crude Carrier (VLCC)",
    "slug": "vlcc",
    "definition": "A supertanker with a deadweight tonnage between 200,000 and 320,000 tons.",
    "category": "Technical",
    "context": "Used for the long-distance transport of crude oil.",
    "relatedSlugs": ["ulcc", "tanker", "crude-oil"],
    "sources": ["Shipping Industry Standards"]
  },
  {
    "id": "waypoint",
    "title": "Waypoint",
    "slug": "waypoint",
    "definition": "A specific geographical location defined by coordinates (latitude and longitude) used for navigation.",
    "category": "Navigation",
    "context": "Ships follow a series of waypoints to reach their destination.",
    "relatedSlugs": ["navigation", "gps", "route"],
    "sources": ["Navigation Standards"]
  }
];

const termsFilePath = 'src/data/terms.ts';
const termsFile = fs.readFileSync(termsFilePath, 'utf8');
const lastBracketIndex = termsFile.lastIndexOf('];');

const updatedTerms = termsFile.slice(0, lastBracketIndex).trim();
const separator = updatedTerms.endsWith('[') ? '' : ',';

const finalContent = updatedTerms + separator + '\n' + JSON.stringify(realMaritimeTerms, null, 2).slice(1, -1) + '\n];';

fs.writeFileSync(termsFilePath, finalContent);
console.log(`Successfully added ${realMaritimeTerms.length} real maritime terms.`);
