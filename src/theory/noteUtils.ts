export const NOTE_INDEXES: Record<string, number> = {
  'B#': 0,
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  Fb: 4,
  'E#': 5,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11,
  Cb: 11,
};

export const INDEX_TO_NOTE: Record<number, string[]> = {
  0: ['C', 'B#', 'Dbb'],
  1: ['C#', 'Db', 'B##'],
  2: ['D', 'C##', 'Ebb'],
  3: ['D#', 'Eb', 'Fbb'],
  4: ['E', 'Fb', 'D##'],
  5: ['F', 'E#', 'Gbb'],
  6: ['F#', 'Gb', 'E##'],
  7: ['G', 'F##', 'Abb'],
  8: ['G#', 'Ab'],
  9: ['A', 'G##', 'Bbb'],
  10: ['A#', 'Bb', 'Cbb'],
  11: ['B', 'Cb', 'A##'],
};

export const LETTER_POSITION: Record<string, number> = {
  C: 1,
  D: 2,
  E: 3,
  F: 4,
  G: 5,
  A: 6,
  B: 7,
};

const POSITION_TO_LETTER: Record<number, string> = {
  1: 'C',
  2: 'D',
  3: 'E',
  4: 'F',
  5: 'G',
  6: 'A',
  7: 'B',
};

const LETTER_INTERVAL_TO_DEGREES: Record<string, string[]> = {
  '1': ['1', 'R', 'b1'], // Root/unison
  '2': ['2', 'b2', '#2', '9', 'b9', '#9', '##1'], // 2nds and 9ths
  '3': ['3', 'b3', '#3', '##2'], // 3rds
  '4': ['4', 'b4', '#4', '11', '#11', 'bb5', '#3'], // 4ths and 11ths
  '5': ['5', 'b5', '#5', 'bb6', '##4'], // 5ths
  '6': ['6', 'b6', '#6', '13', 'b13', '##5'], // 6ths and 13ths
  '7': ['7', 'b7', '#7', 'bb1', '#6', '##6'], // 7ths
};

export const MAJOR_SCALE_INTERVALS = [0, 2, 4, 5, 7, 9, 11];
export const SCALE_DEGREE_NAMES = ['1', '2', '3', '4', '5', '6', '7'];
export const DEGREE_TO_SEMITONES: Record<string, number> = {
  R: 0,
  b2: 1,
  '2': 2,
  b3: 3,
  '3': 4,
  '4': 5,
  '#4': 6,
  b5: 6,
  '5': 7,
  '#5': 8,
  b6: 8,
  '6': 9,
  b7: 10,
  '7': 11,
  b9: 13,
  '9': 14,
  '#9': 15,
  '11': 17,
  '#11': 18,
  b13: 20,
  '13': 21,
};

export const DEGREE_TO_INTERVAL_NUMBER: Record<string, number> = {
  R: 1,
  '1': 1,
  b2: 2,
  '2': 2,
  '#2': 2,
  b3: 3,
  '3': 3,
  '#3': 3,
  '4': 4,
  b4: 4,
  '#4': 4,
  b5: 5,
  '5': 5,
  '#5': 5,
  b6: 6,
  '6': 6,
  '#6': 6,
  b7: 7,
  '7': 7,
  '#7': 7,
  b9: 2, // 9 → 2 (compound 2nd)
  '9': 2,
  '#9': 2,
  '11': 4, // 11 → 4 (compound 4th)
  '#11': 4,
  b13: 6, // 13 → 6 (compound 6th)
  '13': 6,
};

const SEMITONES_TO_DEGREE: Record<number, string[]> = {
  0: ['R', '1', 'bb2', '#7'],
  1: ['b9', '#1', 'b2'],
  2: ['9', '##1', '2', 'bb3'],
  3: ['#9', '#2', 'b3'],
  4: ['3', '##2', 'b4'],
  5: ['11', '#3', '4', 'bb5'],
  6: ['#11', '#4', 'b5', '##3'],
  7: ['5', '##4', 'bb6'],
  8: ['b13', '#5', 'b6'],
  9: ['13', '##5', '6', 'bb7'],
  10: ['b7', '#6', 'bb1'],
  11: ['7', 'b1', '##6'],
};
const SHARP_KEYS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
const FLAT_KEYS = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];

export function getKeyFromSignature(sig: string): string | null {
  // const SHARP_ORDER = ['F', 'C', 'G', 'D', 'A', 'E', 'B'];
  // const FLAT_ORDER = ['B', 'E', 'A', 'D', 'G', 'C', 'F'];

  const match = sig.match(/^(\d+)(#|b)$/);
  if (!match) {
    return null; // invalid input
  }

  const [_, numStr, type] = match;
  const count = parseInt(numStr, 10);

  if (type === '#' && count >= 0 && count <= 7) {
    const key = SHARP_KEYS[count];
    return key || null;
  }

  if (type === 'b' && count >= 0 && count <= 7) {
    const key = FLAT_KEYS[count];
    return key || null;
  }
  return null;
}

export function getSignatureFromKey(key: string): string | null {
  const sharpIndex = SHARP_KEYS.indexOf(key);
  if (sharpIndex !== -1) {
    return `${sharpIndex}#`;
  }
  const flatIndex = FLAT_KEYS.indexOf(key);
  if (flatIndex !== -1) {
    return `${flatIndex}b`;
  }

  return null; // invalid input
}

export function getNoteIndex(note: string): number {
  return NOTE_INDEXES[note];
}

export function getNoteName(index: number): string {
  return INDEX_TO_NOTE[index % 12][0];
}

// keeping this function in case I want diatonic quizzes:
// export function getDiatonicScaleDegree(note: string, key: string): string | null {
//   const noteIndex = getNoteIndex(note);
//   const keyIndex = getNoteIndex(key);

//   if (noteIndex === undefined || keyIndex === undefined) {
//     return null; // invalid input
//   }

//   const scale = MAJOR_SCALE_INTERVALS.map((interval) => (keyIndex + interval) % 12);
//   const degreeIndex = scale.indexOf(noteIndex);
//   console.log('degreeIndex:', degreeIndex);
//   console.log('Scale:', scale, 'degree:', SCALE_DEGREE_NAMES[degreeIndex]);

//   return degreeIndex !== -1 ? SCALE_DEGREE_NAMES[degreeIndex] : null;
// }

//keeping this function in case I want diatonic quizzes:
// export function getNoteFromDegreeInKey(degree: string, key: string): string | null {
//   const keyIndex = getNoteIndex(key);
//   const degreeIndex = SCALE_DEGREE_NAMES.indexOf(degree);

//   if (degreeIndex === -1) {
//     return null;
//   }

//   const scale = MAJOR_SCALE_INTERVALS.map((interval) => (keyIndex + interval) % 12);
//   const noteIndexFromDegree = scale[degreeIndex];
//   return getNoteName(noteIndexFromDegree);
// }
function getLetterBasedIntervalNumber(note: string, key: string): string {
  const keyLetterPosition = Number(LETTER_POSITION[key[0]]);
  const noteLetterPosition = Number(LETTER_POSITION[note[0]]);

  const letterBasedIntervalNumber = String(((noteLetterPosition - keyLetterPosition + 7) % 7) + 1);

  return letterBasedIntervalNumber;
}

export function getScaleDegree(
  note: string,
  key: string,
  allowedDegrees?: string[]
): string | null {
  const letterBasedIntervalNumber = getLetterBasedIntervalNumber(note, key);
  const noteIndex = getNoteIndex(note);
  const keyIndex = getNoteIndex(key);

  if (noteIndex === undefined || keyIndex === undefined) {
    return null; // invalid input
  }

  const distance = (noteIndex - keyIndex + 12) % 12;
  const degreeOptions = SEMITONES_TO_DEGREE[distance];

  // Filter by allowed degrees if provided
  const filteredOptions = allowedDegrees
    ? degreeOptions.filter((deg) => allowedDegrees.includes(deg))
    : degreeOptions;

  const matchingDegree = filteredOptions.find((degree) =>
    LETTER_INTERVAL_TO_DEGREES[letterBasedIntervalNumber].includes(degree)
  );
  return matchingDegree ?? null; // return the first degree name or null if not found
}

export function getNotefromDegree(degree: string, key: string): string | null {
  const keyIndex = getNoteIndex(key);
  const keyLetterPosition = Number(LETTER_POSITION[key[0]]);
  const degreeNumber = DEGREE_TO_INTERVAL_NUMBER[degree];
  const degreeToSemitones = DEGREE_TO_SEMITONES[degree];
  if (degreeToSemitones === undefined) {
    return null; // invalid input
  }

  const targetLetterPosition = ((keyLetterPosition + degreeNumber - 2) % 7) + 1;
  const targetLetterName = POSITION_TO_LETTER[targetLetterPosition];
  const noteIndexFromDegree = (keyIndex + degreeToSemitones) % 12;
  const enharmonicOptions = INDEX_TO_NOTE[noteIndexFromDegree];
  const matchingNote = enharmonicOptions.find((note) => {
    const firstLetter = note[0];
    return firstLetter === targetLetterName;
  });

  return matchingNote ?? enharmonicOptions[0];
}

export function getKeyFromNoteAndDegree(
  note: string,
  degree: string,
  allowedKeys?: string[]
): string | null {
  const noteIndex = getNoteIndex(note);
  const noteLetterPosition = Number(LETTER_POSITION[note[0]]);
  const degreeNumber = DEGREE_TO_INTERVAL_NUMBER[degree];
  const degreeToSemitones = DEGREE_TO_SEMITONES[degree];
  
  if (noteIndex === undefined || degreeToSemitones === undefined || !noteLetterPosition || !degreeNumber) {
    return null; // invalid input
  }

  const targetKeyLetterPosition = ((noteLetterPosition - degreeNumber + 7) % 7) + 1;
  const targetKeyLetter = POSITION_TO_LETTER[targetKeyLetterPosition];
  const keyIndex = (noteIndex - degreeToSemitones + 12) % 12;
  const enharmonicKeyPool = INDEX_TO_NOTE[keyIndex];
  
  if (!enharmonicKeyPool) {
    return null; // Invalid keyIndex
  }

  const filteredOptions = allowedKeys
    ? enharmonicKeyPool.filter((key) => allowedKeys.includes(key))
    : enharmonicKeyPool;

  const matchingKey = filteredOptions.find((key) => {
    const firstLetter = key[0];
    return firstLetter === targetKeyLetter;
  });
  return matchingKey ?? filteredOptions[0] ?? null;
}
