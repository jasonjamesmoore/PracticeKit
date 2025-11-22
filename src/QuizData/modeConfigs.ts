import {
  getKeyFromNoteAndDegree,
  getKeyFromSignature,
  getNotefromDegree,
  getScaleDegree,
  getSignatureFromKey,
} from '../theory/noteUtils';
import { Mode } from '../types/Mode';
import { QuizMode } from '../types/Quiz';
import { degreeCards } from './degrees';
import { keyCards } from './key';

export const quizModes: Record<Mode, QuizMode> = {
  [Mode.DEGREE_FINDER]: {
    id: Mode.DEGREE_FINDER,
    label: 'Find the scale degree',
    description: 'Given a key and a note, find the scale degree.',
    promptDecks: ['key', 'note'],
    answerDeck: 'degree',
    computeAnswer: ({ key, note }, priority) => {
      // Build allowed degrees based on priority
      let allowedDegrees: string[] | undefined;

      if (priority === 'harmonic') {
        allowedDegrees = degreeCards
          .filter((d) => d.category === 'harmonicExtension' || d.category === 'coreHarmony')
          .map((d) => d.degreeName);
      } else if (priority === 'scale') {
        allowedDegrees = degreeCards
          .filter((d) => d.category === 'scaleDegree' || d.category === 'coreHarmony')
          .map((d) => d.degreeName);
      }
      // 'all' = undefined, no filtering

      return getScaleDegree(note, key, allowedDegrees);
    },
    supportedFilters: {
      priority: true, // can filter by harmonic/scale/all
      difficulty: true,
      locking: true, // can lock prompts
    },
  },
  [Mode.NOTE_FINDER]: {
    id: Mode.NOTE_FINDER,
    label: 'Find the note',
    description: 'Given a key and a scale degree, find the note.',
    promptDecks: ['key', 'degree'],
    answerDeck: 'note',
    computeAnswer: ({ key, degree }) => getNotefromDegree(degree, key),
    supportedFilters: {
      priority: true, // can filter by harmonic/scale/all
      difficulty: true,
      locking: true, // can lock prompts
    },
  },
  [Mode.KEY_FINDER]: {
    id: Mode.KEY_FINDER,
    label: 'Find the key',
    description: 'Given a note and a scale degree, find the key.',
    promptDecks: ['note', 'degree'],
    answerDeck: 'key',
    computeAnswer: ({ note, degree }) => {
      const allowedKeys = keyCards.map((key) => key.keyName);
      const computedKey = getKeyFromNoteAndDegree(note, degree, allowedKeys);

      if (computedKey) {
        const verifyNote = getNotefromDegree(degree, computedKey);
        if (verifyNote !== note) {
          return null;
        }
      }
      return computedKey;
    },
    supportedFilters: {
      priority: false, // can filter by harmonic/scale/all
      difficulty: true,
      locking: true, // can lock prompts
    },
  },
  [Mode.KEY_ONLY]: {
    id: Mode.KEY_ONLY,
    label: 'Key ↔︎ Signature',
    description: 'What is the key or Key signature?',
    supportedFilters: {
      priority: false, // can filter by harmonic/scale/all
      difficulty: true,
      locking: false, // can lock prompts
    },
    variants: [
      {
        promptDecks: ['key'],
        answerDeck: 'signature',
        computeAnswer: ({ key }) => getSignatureFromKey(key),
      },
      {
        promptDecks: ['signature'],
        answerDeck: 'key',
        computeAnswer: ({ signature }) => getKeyFromSignature(signature),
      },
    ],
  },
};
