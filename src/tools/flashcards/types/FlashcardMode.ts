export enum FlashcardMode {
  DEGREE_FINDER = 'degree-finder',
  NOTE_FINDER = 'note-finder',
  KEY_FINDER = 'key-finder',
  KEY_ONLY = 'key-only',
}

export const flashcardModeLabels: Record<FlashcardMode, string> = {
  [FlashcardMode.DEGREE_FINDER]: 'Find the scale degree',
  [FlashcardMode.NOTE_FINDER]: 'Find the note',
  [FlashcardMode.KEY_FINDER]: 'Find the key',
  [FlashcardMode.KEY_ONLY]: 'Key Signature Quiz',
};
