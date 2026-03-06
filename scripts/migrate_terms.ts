import fs from 'fs';
import path from 'path';

// Read maritimeTerms.ts
const maritimeTermsPath = path.resolve('src/data/maritimeTerms.ts');
const content = fs.readFileSync(maritimeTermsPath, 'utf8');

// Extract the array content
const arrayMatch = content.match(/export const maritimeTerms: MaritimeTerm\[\] = (\[[\s\S]*?\]);/);
if (!arrayMatch) {
  console.error('Could not find maritimeTerms array');
  process.exit(1);
}

// Simple parser for the array (since it's a TS file, we can't just JSON.parse)
// We'll use a more robust way: evaluate the JS
const arrayStr = arrayMatch[1];
// We need to handle the type definition too if we were to eval, but let's just use regex to extract objects
const termRegex = /\{\s*id: '(.*?)',\s*title: '(.*?)',\s*description: '(.*?)',\s*category: '(.*?)'\s*\}/gs;
const terms = [];
let match;
while ((match = termRegex.exec(arrayStr)) !== null) {
  const [_, id, title, description, category] = match;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  terms.push({
    id,
    title,
    slug,
    definition: description,
    category,
    context: `This term is primarily used in the context of ${category.toLowerCase()}.`,
    relatedSlugs: [], // Will populate later
    sources: ['Maritime Lexicon Database']
  });
}

// Populate relatedSlugs
for (const term of terms) {
  term.relatedSlugs = terms
    .filter(t => t.category === term.category && t.slug !== term.slug)
    .slice(0, 3)
    .map(t => t.slug);
}

// Write to src/data/terms.ts
const output = `export interface Term {
  id: string;
  title: string;
  slug: string;
  definition: string;
  category: 'Navigation' | 'Vessel Parts' | 'Operations' | 'History' | 'Terminology' | 'Regulations' | 'Technical' | 'Safety' | 'Environment' | 'Cargo' | 'Crew';
  context?: string;
  relatedSlugs?: string[];
  sources?: string[];
}

export const terms: Term[] = ${JSON.stringify(terms, null, 2)};
`;

fs.writeFileSync(path.resolve('src/data/terms.ts'), output);
console.log(`Generated src/data/terms.ts with ${terms.length} terms.`);
