// Utility functions for random card selection
import { Deck } from '@/tools/flashcards/types/Quiz';
import { degreeCards, type DegreeCard } from '@/tools/flashcards/data/degrees';
import { keyCards, type KeyCard } from '@/tools/flashcards/data/key';
import { noteCards, type NoteCard } from '@/tools/flashcards/data/notes';

// Random selection functions

export function getRandomCard(deckType: Deck, options: { priority?: string }): string | null {
  switch (deckType) {
    case 'key':
      return getRandomKey().keyName;
    case 'note':
      return getRandomNote().noteName;
    case 'degree':
      return getRandomDegreeByPriority(options?.priority).degreeName;
    case 'signature':
      return getRandomSignature();
    default:
      return null;
  }
}

function getRandomKey(): KeyCard {
  return keyCards[Math.floor(Math.random() * keyCards.length)];
}

function getRandomNote(): NoteCard {
  return noteCards[Math.floor(Math.random() * noteCards.length)];
}

// export function getRandomDegree(): DegreeCard {
//   return degreeCards[Math.floor(Math.random() * degreeCards.length)];
// }

function getRandomDegreeByPriority(priority?: string): DegreeCard {
  let filtered = degreeCards;

  if (priority === 'scale') {
    filtered = degreeCards.filter((degree) => degree.category === 'scaleDegree' || degree.category === 'coreHarmony');
  } else if (priority === 'harmonic') {
    filtered = degreeCards.filter((degree) => degree.category === 'harmonicExtension' || degree.category === 'coreHarmony');
  }
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function getRandomSignature(): string {
  // Generate random signature between 0-7 sharps or flats
  const isSharp = Math.random() > 0.5;
  const count = Math.floor(Math.random() * 8); // 0-7
  return `${count}${isSharp ? '#' : 'b'}`;
}

// // Filtered random selection functions
// export function getRandomBasicKey(): KeyCard {
//   const basicKeys = keyCards.filter(key => key.difficulty === 'basic');
//   return basicKeys[Math.floor(Math.random() * basicKeys.length)];
// }

// export function getRandomNaturalNote(): NoteCard {
//   const naturalNotes = noteCards.filter(note =>
//     !note.noteName.includes('#') && !note.noteName.includes('b')
//   );
//   return naturalNotes[Math.floor(Math.random() * naturalNotes.length)];
// }

// export function getRandomBasicDegree(): DegreeCard {
//   const basicDegrees = degreeCards.filter(degree => degree.category === 'basic');
//   return basicDegrees[Math.floor(Math.random() * basicDegrees.length)];
// }
