// Scale degree cards for music theory flashcard quiz
// Based on handout: 21 total scale degrees
// All degrees correspond to keys in DEGREE_TO_SEMITONES from noteUtils.ts

export interface DegreeCard {
  id: string;
  displayName: string;    // What shows on the card (e.g., "b3", "#11")
  degreeName: string;     // Degree name for theory calculations (same as displayName)
  category: 'scaleDegree'  | 'harmonicExtension' | 'coreHarmony';
}

// Scale degree cards (21 total) - ordered logically for learning
export const degreeCards: DegreeCard[] = [
  // scaleDegree diatonic degrees
  { id: 'R', displayName: 'R', degreeName: 'R', category: 'coreHarmony' },
  { id: '2', displayName: '2', degreeName: '2', category: 'scaleDegree' },
  { id: '3', displayName: '3', degreeName: '3', category: 'coreHarmony' },
  { id: '4', displayName: '4', degreeName: '4', category: 'scaleDegree' },
  { id: '5', displayName: '5', degreeName: '5', category: 'coreHarmony' },
  { id: '6', displayName: '6', degreeName: '6', category: 'scaleDegree' },
  { id: '7', displayName: '7', degreeName: '7', category: 'coreHarmony' },

  { id: 'b2', displayName: 'b2', degreeName: 'b2', category: 'scaleDegree' },
  { id: 'b3', displayName: 'b3', degreeName: 'b3', category: 'coreHarmony' },
  { id: '#4', displayName: '#4', degreeName: '#4', category: 'scaleDegree' },
  { id: 'b5', displayName: 'b5', degreeName: 'b5', category: 'coreHarmony' },
  { id: '#5', displayName: '#5', degreeName: '#5', category: 'coreHarmony' },
  { id: 'b6', displayName: 'b6', degreeName: 'b6', category: 'scaleDegree' },
  { id: 'b7', displayName: 'b7', degreeName: 'b7', category: 'coreHarmony' },
  
  // harmonicExtension degrees (9ths, 11ths, 13ths)
  { id: 'b9', displayName: 'b9', degreeName: 'b9', category: 'harmonicExtension' },
  { id: '9', displayName: '9', degreeName: '9', category: 'harmonicExtension' },
  { id: '#9', displayName: '#9', degreeName: '#9', category: 'harmonicExtension' },
  { id: '11', displayName: '11', degreeName: '11', category: 'harmonicExtension' },
  { id: '#11', displayName: '#11', degreeName: '#11', category: 'harmonicExtension' },
  { id: 'b13', displayName: 'b13', degreeName: 'b13', category: 'harmonicExtension' },
  { id: '13', displayName: '13', degreeName: '13', category: 'harmonicExtension' },
];

// Convenience groupings
export const degreesByCategory = {
  scaleDegree: degreeCards.filter(degree => degree.category === 'scaleDegree'),
  coreHarmony: degreeCards.filter(degree => degree.category === 'coreHarmony'),
  harmonicExtension: degreeCards.filter(degree => degree.category === 'harmonicExtension'),
};

// Validation: Should be exactly 21 cards
if (degreeCards.length !== 21) {
  console.warn(`Expected 21 degree cards, but got ${degreeCards.length}`);
}

// Export individual categories for easy access
export const scaleDegree = degreesByCategory.scaleDegree;
export const coreHarmony = degreesByCategory.coreHarmony;
export const harmonicExtension = degreesByCategory.harmonicExtension;