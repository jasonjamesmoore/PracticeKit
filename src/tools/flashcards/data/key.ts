// Key cards for music theory flashcard quiz
// Based on handout: 29 total cards (15 named keys + 14 signature keys)

export interface KeyCard {
    id: string;           // unique identifier
    displayName: string;  // what shows on card (e.g., "F#", "3b")
    keyName: string;      // actual key for calculations (e.g., "F#", "Eb")
    category: 'named' | 'signature';
    difficulty?: 'basic' | 'intermediate' | 'advanced';
}

// Import key arrays from theory utilities
const SHARP_KEYS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
const FLAT_KEYS = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];

// Named key cards (15 total)
const namedKeyCards: KeyCard[] = [
  // Natural keys
  { id: 'C', displayName: 'C', keyName: 'C', category: 'named', difficulty: 'basic' },
  { id: 'D', displayName: 'D', keyName: 'D', category: 'named', difficulty: 'basic' },
  { id: 'E', displayName: 'E', keyName: 'E', category: 'named', difficulty: 'intermediate' },
  { id: 'F', displayName: 'F', keyName: 'F', category: 'named', difficulty: 'basic' },
  { id: 'G', displayName: 'G', keyName: 'G', category: 'named', difficulty: 'basic' },
  { id: 'A', displayName: 'A', keyName: 'A', category: 'named', difficulty: 'intermediate' },
  { id: 'B', displayName: 'B', keyName: 'B', category: 'named', difficulty: 'advanced' },
  
  // Flat keys
  { id: 'Ab', displayName: 'Ab', keyName: 'Ab', category: 'named', difficulty: 'intermediate' },
  { id: 'Bb', displayName: 'Bb', keyName: 'Bb', category: 'named', difficulty: 'basic' },
  { id: 'Cb', displayName: 'Cb', keyName: 'Cb', category: 'named', difficulty: 'advanced' },
  { id: 'Db', displayName: 'Db', keyName: 'Db', category: 'named', difficulty: 'advanced' },
  { id: 'Eb', displayName: 'Eb', keyName: 'Eb', category: 'named', difficulty: 'intermediate' },
  { id: 'Gb', displayName: 'Gb', keyName: 'Gb', category: 'named', difficulty: 'advanced' },
  
  // Sharp keys
  { id: 'F#', displayName: 'F#', keyName: 'F#', category: 'named', difficulty: 'advanced' },
  { id: 'C#', displayName: 'C#', keyName: 'C#', category: 'named', difficulty: 'advanced' },
];

// Generate signature cards from theory arrays (14 total)
const sharpSignatureCards: KeyCard[] = SHARP_KEYS.slice(1).map((key, index) => {
  const signatureNum = index + 1;
  const difficulty = signatureNum <= 2 ? 'basic' : signatureNum <= 4 ? 'intermediate' : 'advanced';
  
  return {
    id: `${signatureNum}#`,
    displayName: `${signatureNum}#`,
    keyName: key,
    category: 'signature' as const,
    difficulty,
  };
});

const flatSignatureCards: KeyCard[] = FLAT_KEYS.slice(1).map((key, index) => {
  const signatureNum = index + 1;
  const difficulty = signatureNum <= 2 ? 'basic' : signatureNum <= 4 ? 'intermediate' : 'advanced';
  
  return {
    id: `${signatureNum}b`,
    displayName: `${signatureNum}b`,
    keyName: key,
    category: 'signature' as const,
    difficulty,
  };
});

// Combine all key cards
export const keyCards: KeyCard[] = [
  ...namedKeyCards,
  ...sharpSignatureCards,
  ...flatSignatureCards,
];

// Convenience groupings
export const keysByCategory = {
  named: namedKeyCards,
  signature: [...sharpSignatureCards, ...flatSignatureCards],
};

export const keysByDifficulty = {
  basic: keyCards.filter(card => card.difficulty === 'basic'),
  intermediate: keyCards.filter(card => card.difficulty === 'intermediate'),
  advanced: keyCards.filter(card => card.difficulty === 'advanced'),
};

// Validation: Should be exactly 29 cards
if (keyCards.length !== 29) {
  console.warn(`Expected 29 key cards, but got ${keyCards.length}`);
}

// Export individual difficulty levels for easy access
export const basicKeys = keysByDifficulty.basic;
export const intermediateKeys = keysByDifficulty.intermediate;
export const advancedKeys = keysByDifficulty.advanced;