// Validation script for notes.ts
import { noteCards } from './src/QuizData/notes.js';
import { getNoteIndex } from './src/theory/noteUtils.js';

console.log('=== NOTES VALIDATION ===');
console.log(`Total note cards: ${noteCards.length} (expected: 21)`);

console.log('\n=== ACCIDENTAL BREAKDOWN ===');
const natural = noteCards.filter(n => !n.noteName.includes('#') && !n.noteName.includes('b'));
const sharp = noteCards.filter(n => n.noteName.includes('#'));
const flat = noteCards.filter(n => n.noteName.includes('b'));

console.log(`Natural notes: ${natural.length} (${natural.map(n => n.displayName).join(', ')})`);
console.log(`Sharp notes: ${sharp.length} (${sharp.map(n => n.displayName).join(', ')})`);
console.log(`Flat notes: ${flat.length} (${flat.map(n => n.displayName).join(', ')})`);

console.log('\n=== THEORY INTEGRATION TEST ===');
let allValid = true;
noteCards.forEach(card => {
  const index = getNoteIndex(card.noteName);
  if (index === undefined) {
    console.error(`❌ ${card.noteName} not found in NOTE_INDEXES`);
    allValid = false;
  } else {
    console.log(`✅ ${card.noteName} → ${index}`);
  }
});

console.log(`\n=== RESULT ===`);
console.log(`All notes compatible with getNoteIndex: ${allValid}`);
console.log(`Ready for quiz implementation: ${allValid && noteCards.length === 21}`);