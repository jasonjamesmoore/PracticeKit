import { describe, expect, it } from 'vitest';
import { getScaleDegree } from './noteUtils';
import { quizModes } from '@/tools/flashcards/data/modeConfigs';
import { FlashcardMode } from '@/tools/flashcards/types/FlashcardMode';

describe('getScaleDegree', () => {
  it('returns b4 for the theoretical pair C# + F', () => {
    expect(getScaleDegree('F', 'C#')).toBe('b4');
  });

  it('returns the expected degree for a valid combination (C + E)', () => {
    expect(getScaleDegree('E', 'C')).toBe('3');
  });

  it('is rejected by Degree Finder mode filters, so the quiz treats C# + F as invalid', () => {
    const computeAnswer = quizModes[FlashcardMode.DEGREE_FINDER].computeAnswer;

    expect(computeAnswer?.({ key: 'C#', note: 'F', degree: '1', signature: '0#' }, 'harmonic')).toBeNull();
    expect(computeAnswer?.({ key: 'C#', note: 'F', degree: '1', signature: '0#' }, 'scale')).toBeNull();
  });
});