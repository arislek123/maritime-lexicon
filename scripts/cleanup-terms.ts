import fs from 'fs';

const termsFilePath = 'src/data/terms.ts';
const termsFile = fs.readFileSync(termsFilePath, 'utf8');

// Find the start of the placeholder terms
const placeholderStart = termsFile.indexOf('{');
// We want to find the first occurrence of "Maritime Term 1" and delete from its starting object
const match = termsFile.match(/\{\s+"id": "term-extra-1"/);

if (match && match.index) {
  const startIndex = match.index;
  // Find the last closing bracket of the array
  const lastBracketIndex = termsFile.lastIndexOf('];');
  
  // We want to keep everything before the first placeholder term, and then close the array
  // We need to make sure we handle the comma from the previous term
  let newContent = termsFile.slice(0, startIndex).trim();
  if (newContent.endsWith(',')) {
    newContent = newContent.slice(0, -1).trim();
  }
  newContent += '\n];';
  
  fs.writeFileSync(termsFilePath, newContent);
  console.log('Successfully removed placeholder terms.');
} else {
  console.log('Could not find placeholder terms to remove.');
}
