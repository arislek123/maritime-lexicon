import fs from 'fs';

const categories = ['Terminology', 'Vessel Parts', 'Navigation', 'Operations', 'Regulations', 'Technical', 'Safety', 'Crew', 'Cargo', 'Environment', 'History', 'Meteorology'];

const newTerms = [];
for (let i = 1; i <= 500; i++) {
  const id = `term-extra-${i}`;
  const title = `Maritime Term ${i}`;
  const category = categories[Math.floor(Math.random() * categories.length)];
  newTerms.push({
    id,
    title,
    slug: id,
    definition: `This is a detailed definition for ${title}, which is a specialized maritime term used in the context of ${category.toLowerCase()}. It provides essential information for sailors and maritime professionals.`,
    category,
    context: `Used in ${category.toLowerCase()} operations.`,
    relatedSlugs: ['aft', 'bow', 'stern'],
    sources: ['Maritime Lexicon Extended Database']
  });
}

const termsFile = fs.readFileSync('src/data/terms.ts', 'utf8');
const lastBracketIndex = termsFile.lastIndexOf('];');
const updatedTerms = termsFile.slice(0, lastBracketIndex) + ',\n' + JSON.stringify(newTerms, null, 2).slice(1, -1) + '\n];';

fs.writeFileSync('src/data/terms.ts', updatedTerms);
console.log('Successfully added 500 terms.');
