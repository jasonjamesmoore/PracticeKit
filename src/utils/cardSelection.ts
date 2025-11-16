// Utility functions for random card selection
import { keyCards, type KeyCard } from '../QuizData/key';
import { noteCards, type NoteCard } from '../QuizData/notes';
import { degreeCards, type DegreeCard } from '../QuizData/degrees';

// Random selection functions
export function getRandomKey(): KeyCard {
  return keyCards[Math.floor(Math.random() * keyCards.length)];
}

export function getRandomNote(): NoteCard {
  return noteCards[Math.floor(Math.random() * noteCards.length)];
}

export function getRandomDegree(): DegreeCard {
  return degreeCards[Math.floor(Math.random() * degreeCards.length)];
}

export function getRandomSignature(): string {
  // Generate random signature between 0-7 sharps or flats
  const isSharp = Math.random() > 0.5;
  const count = Math.floor(Math.random() * 8); // 0-7
  return `${count}${isSharp ? '#' : 'b'}`;
}

// Filtered random selection functions
export function getRandomBasicKey(): KeyCard {
  const basicKeys = keyCards.filter(key => key.difficulty === 'basic');
  return basicKeys[Math.floor(Math.random() * basicKeys.length)];
}

export function getRandomNaturalNote(): NoteCard {
  const naturalNotes = noteCards.filter(note => 
    !note.noteName.includes('#') && !note.noteName.includes('b')
  );
  return naturalNotes[Math.floor(Math.random() * naturalNotes.length)];
}

export function getRandomBasicDegree(): DegreeCard {
  const basicDegrees = degreeCards.filter(degree => degree.category === 'basic');
  return basicDegrees[Math.floor(Math.random() * basicDegrees.length)];
}