// Validation script for degrees.ts
import { degreeCards, degreesByCategory } from './src/QuizData/degrees.js';

console.log('=== DEGREES VALIDATION ===');
console.log(`Total degree cards: ${degreeCards.length} (expected: 21)`);

console.log('\n=== CATEGORY BREAKDOWN ===');
console.log(`Basic degrees: ${degreesByCategory.basic.length} (${degreesByCategory.basic.map(d => d.displayName).join(', ')})`);
console.log(`Altered degrees: ${degreesByCategory.altered.length} (${degreesByCategory.altered.map(d => d.displayName).join(', ')})`);
console.log(`Extended degrees: ${degreesByCategory.extended.length} (${degreesByCategory.extended.map(d => d.displayName).join(', ')})`);

console.log('\n=== HANDOUT VALIDATION ===');
const handoutDegrees = ['R', '2', '3', '4', '5', '6', '7', 'b2', 'b3', 'b5', 'b6', 'b7', '#4', '#5', '9', '11', '13', 'b9', '#9', '#11', 'b13'];
const actualDegrees = degreeCards.map(d => d.degreeName).sort();
const expectedDegrees = handoutDegrees.sort();

console.log('All expected degrees present:', 
  expectedDegrees.every(degree => actualDegrees.includes(degree))
);
console.log('No extra degrees:', actualDegrees.length === expectedDegrees.length);
console.log('Exact match with handout:', JSON.stringify(actualDegrees) === JSON.stringify(expectedDegrees));