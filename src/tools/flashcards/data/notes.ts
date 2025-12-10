// Note cards for music theory flashcard quiz
// Based on handout: 21 total notes
// All note names correspond to keys in NOTE_INDEXES from noteUtils.ts

export interface NoteCard {
  id: string;
  displayName: string;  // What shows on the card (e.g., "F#", "Ab")
  noteName: string;     // Note name for theory calculations (same as displayName)
}

// Note cards (21 total) - exact order from handout
export const noteCards: NoteCard[] = [
  // Natural notes
  { id: 'A', displayName: 'A', noteName: 'A' },
  { id: 'B', displayName: 'B', noteName: 'B' },
  { id: 'C', displayName: 'C', noteName: 'C' },
  { id: 'D', displayName: 'D', noteName: 'D' },
  { id: 'E', displayName: 'E', noteName: 'E' },
  { id: 'F', displayName: 'F', noteName: 'F' },
  { id: 'G', displayName: 'G', noteName: 'G' },
  
  // Sharp notes
  { id: 'A#', displayName: 'A#', noteName: 'A#' },
  { id: 'B#', displayName: 'B#', noteName: 'B#' },
  { id: 'C#', displayName: 'C#', noteName: 'C#' },
  { id: 'D#', displayName: 'D#', noteName: 'D#' },
  { id: 'E#', displayName: 'E#', noteName: 'E#' },
  { id: 'F#', displayName: 'F#', noteName: 'F#' },
  { id: 'G#', displayName: 'G#', noteName: 'G#' },
  
  // Flat notes
  { id: 'Ab', displayName: 'Ab', noteName: 'Ab' },
  { id: 'Bb', displayName: 'Bb', noteName: 'Bb' },
  { id: 'Cb', displayName: 'Cb', noteName: 'Cb' },
  { id: 'Db', displayName: 'Db', noteName: 'Db' },
  { id: 'Eb', displayName: 'Eb', noteName: 'Eb' },
  { id: 'Fb', displayName: 'Fb', noteName: 'Fb' },
  { id: 'Gb', displayName: 'Gb', noteName: 'Gb' },
];

// Convenience groupings
export const notesByAccidental = {
  natural: noteCards.filter(note => !note.noteName.includes('#') && !note.noteName.includes('b')),
  sharp: noteCards.filter(note => note.noteName.includes('#')),
  flat: noteCards.filter(note => note.noteName.includes('b')),
};

// Validation: Should be exactly 21 cards
if (noteCards.length !== 21) {
  console.warn(`Expected 21 note cards, but got ${noteCards.length}`);
}

// Export individual groups for easy access
export const naturalNotes = notesByAccidental.natural;
export const sharpNotes = notesByAccidental.sharp;
export const flatNotes = notesByAccidental.flat;