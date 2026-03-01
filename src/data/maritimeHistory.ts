export interface MaritimeHistoryEvent {
  id: string;
  month: number; // 1-12
  day: number;   // 1-31
  year: number;
  title: string;
  description: string;
}

export const maritimeHistoryEvents: MaritimeHistoryEvent[] = [
  {
    id: 'h1',
    month: 3,
    day: 1,
    year: 1942,
    title: 'Battle of Sunda Strait',
    description: 'The heavy cruiser USS Houston and the light cruiser HMAS Perth were sunk by a superior Japanese force in the Sunda Strait after a heroic stand during World War II.'
  },
  {
    id: 'h2',
    month: 3,
    day: 1,
    year: 1815,
    title: 'Napoleon\'s Return from Elba',
    description: 'Napoleon Bonaparte landed at Golfe-Juan on the French Riviera after escaping his exile on the island of Elba, beginning the "Hundred Days" period.'
  },
  {
    id: 'h3',
    month: 3,
    day: 1,
    year: 1954,
    title: 'Castle Bravo Nuclear Test',
    description: 'The United States detonated its most powerful nuclear device at Bikini Atoll. The resulting fallout had significant long-term impacts on the Pacific maritime environment and local communities.'
  },
  {
    id: 'h7',
    month: 3,
    day: 2,
    year: 1943,
    title: 'Battle of the Bismarck Sea',
    description: 'A major naval battle in the South West Pacific during WWII where Allied aircraft attacked a Japanese convoy, sinking most of the troop transports and several escorting destroyers.'
  },
  {
    id: 'h8',
    month: 3,
    day: 3,
    year: 1815,
    title: 'US Declares War on Algiers',
    description: 'The United States declared war on Algiers, leading to the Second Barbary War, which eventually ended the practice of piracy against American shipping in the Mediterranean.'
  },
  {
    id: 'h9',
    month: 3,
    day: 1,
    year: 1872,
    title: 'Yellowstone National Park Established',
    description: 'While not strictly maritime, the establishment of the first national park set a global precedent for conservation, including marine protected areas.'
  },
  {
    id: 'h10',
    month: 3,
    day: 1,
    year: 1867,
    title: 'Nebraska Becomes 37th State',
    description: 'The "Cornhusker State" joined the Union. Its river systems, particularly the Missouri, have been vital for inland maritime trade.'
  },
  {
    id: 'h4',
    month: 4,
    day: 15,
    year: 1912,
    title: 'Sinking of the RMS Titanic',
    description: 'The world\'s largest passenger liner sank in the North Atlantic after striking an iceberg, leading to major improvements in maritime safety regulations (SOLAS).'
  },
  {
    id: 'h5',
    month: 5,
    day: 22,
    year: 1819,
    title: 'SS Savannah Crosses the Atlantic',
    description: 'The SS Savannah became the first steamship to cross the Atlantic Ocean, departing from Savannah, Georgia, and arriving in Liverpool, England.'
  },
  {
    id: 'h6',
    month: 1,
    day: 1,
    year: 1959,
    title: 'IMO Convention Enters into Force',
    description: 'The convention establishing the International Maritime Organization (IMO) officially entered into force, creating a global standard for maritime safety and pollution prevention.'
  }
];
