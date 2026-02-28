import React from 'react';
import { maritimeTerms } from '../data/maritimeTerms';

export function linkify(text: string, onLinkClick: (id: string) => void): React.ReactNode[] {
  // Sort terms by length descending to match longer terms first (e.g., "Nautical Mile" before "Mile")
  const sortedTerms = [...maritimeTerms].sort((a, b) => b.title.length - a.title.length);
  
  // Create a regex that matches any of the terms (case-insensitive)
  const termPattern = sortedTerms.map(term => 
    term.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  ).join('|');
  
  const regex = new RegExp(`\\b(${termPattern})\\b`, 'gi');
  
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const matchedText = match[0];
    const matchIndex = match.index;

    // Add text before the match
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    // Find the term ID for the matched text
    const term = sortedTerms.find(t => t.title.toLowerCase() === matchedText.toLowerCase());
    
    if (term) {
      parts.push(
        <button
          key={`${term.id}-${matchIndex}`}
          onClick={() => onLinkClick(term.id)}
          className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 transition-colors cursor-pointer font-medium"
        >
          {matchedText}
        </button>
      );
    } else {
      parts.push(matchedText);
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
