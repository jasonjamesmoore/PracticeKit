// Temporary validation script for key.ts
import { keyCards, keysByDifficulty, keysByCategory } from './key.js';

console.log('=== KEY CARDS VALIDATION ===');
console.log(`Total cards: ${keyCards.length} (expected: 29)`);
console.log(`Named cards: ${keysByCategory.named.length} (expected: 15)`);
console.log(`Signature cards: ${keysByCategory.signature.length} (expected: 14)`);

console.log('\n=== DIFFICULTY BREAKDOWN ===');
console.log(`Basic: ${keysByDifficulty.basic.length}`);
console.log(`Intermediate: ${keysByDifficulty.intermediate.length}`);
console.log(`Advanced: ${keysByDifficulty.advanced.length}`);

console.log('\n=== SAMPLE CARDS ===');
console.log('First 5 cards:', keyCards.slice(0, 5).map(k => `${k.displayName} (${k.category})`));
console.log('Basic keys:', keysByDifficulty.basic.map(k => k.displayName));

// Validate against handout
const expectedHandoutKeys = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 
  'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Gb', 'F#', 'C#',
  '1b', '2b', '3b', '4b', '5b', '6b', '7b',
  '1#', '2#', '3#', '4#', '5#', '6#', '7#'
];

const actualKeys = keyCards.map(k => k.displayName).sort();
const expectedKeys = expectedHandoutKeys.sort();

console.log('\n=== HANDOUT VALIDATION ===');
console.log('All expected keys present:', 
  expectedKeys.every(key => actualKeys.includes(key))
);
console.log('No extra keys:', actualKeys.length === expectedKeys.length);