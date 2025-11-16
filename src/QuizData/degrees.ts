// Scale degree cards for music theory flashcard quiz
// Based on handout: 21 total scale degrees
// All degrees correspond to keys in DEGREE_TO_SEMITONES from noteUtils.ts

export interface DegreeCard {
  id: string;
  displayName: string;    // What shows on the card (e.g., "b3", "#11")
  degreeName: string;     // Degree name for theory calculations (same as displayName)
  category: 'basic' | 'altered' | 'extended';
}

// Scale degree cards (21 total) - ordered logically for learning
export const degreeCards: DegreeCard[] = [
  // Basic diatonic degrees
  { id: 'R', displayName: 'R', degreeName: 'R', category: 'basic' },
  { id: '2', displayName: '2', degreeName: '2', category: 'basic' },
  { id: '3', displayName: '3', degreeName: '3', category: 'basic' },
  { id: '4', displayName: '4', degreeName: '4', category: 'basic' },
  { id: '5', displayName: '5', degreeName: '5', category: 'basic' },
  { id: '6', displayName: '6', degreeName: '6', category: 'basic' },
  { id: '7', displayName: '7', degreeName: '7', category: 'basic' },
  
  // Altered degrees
  { id: 'b2', displayName: 'b2', degreeName: 'b2', category: 'altered' },
  { id: 'b3', displayName: 'b3', degreeName: 'b3', category: 'altered' },
  { id: '#4', displayName: '#4', degreeName: '#4', category: 'altered' },
  { id: 'b5', displayName: 'b5', degreeName: 'b5', category: 'altered' },
  { id: '#5', displayName: '#5', degreeName: '#5', category: 'altered' },
  { id: 'b6', displayName: 'b6', degreeName: 'b6', category: 'altered' },
  { id: 'b7', displayName: 'b7', degreeName: 'b7', category: 'altered' },
  
  // Extended degrees (9ths, 11ths, 13ths)
  { id: 'b9', displayName: 'b9', degreeName: 'b9', category: 'extended' },
  { id: '9', displayName: '9', degreeName: '9', category: 'extended' },
  { id: '#9', displayName: '#9', degreeName: '#9', category: 'extended' },
  { id: '11', displayName: '11', degreeName: '11', category: 'extended' },
  { id: '#11', displayName: '#11', degreeName: '#11', category: 'extended' },
  { id: 'b13', displayName: 'b13', degreeName: 'b13', category: 'extended' },
  { id: '13', displayName: '13', degreeName: '13', category: 'extended' },
];

// Convenience groupings
export const degreesByCategory = {
  basic: degreeCards.filter(degree => degree.category === 'basic'),
  altered: degreeCards.filter(degree => degree.category === 'altered'),
  extended: degreeCards.filter(degree => degree.category === 'extended'),
};

// Validation: Should be exactly 21 cards
if (degreeCards.length !== 21) {
  console.warn(`Expected 21 degree cards, but got ${degreeCards.length}`);
}

// Export individual categories for easy access
export const basicDegrees = degreesByCategory.basic;
export const alteredDegrees = degreesByCategory.altered;
export const extendedDegrees = degreesByCategory.extended;