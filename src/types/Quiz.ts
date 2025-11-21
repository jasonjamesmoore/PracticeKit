export type Deck = 'key' | 'note' | 'degree' | 'signature';

export type PromptDeckPair = | ['key'] | ['key', 'note'] | ['key', 'degree'] | ['note', 'degree'] | ['signature'];

export type AnswerDeck = 'key' | 'note' | 'degree' | 'signature';

export type QuizVariant = {
    promptDecks: PromptDeckPair;
    answerDeck: AnswerDeck;
    computeAnswer: (prompts: Record<Deck, string>, priority?: string) => string | null;
}

export type QuizMode = {
  id: string;
  label: string;
  description: string;
  promptDecks?: PromptDeckPair;
  answerDeck?: AnswerDeck;
  computeAnswer?: (prompts: Record<Deck, string>, priority?: string) => string | null;
  variants?: QuizVariant[];
  supportedFilters?: {
    priority?: boolean;  // can filter by harmonic/scale/all
    difficulty?: boolean;
    locking?: boolean;   // can lock prompts
  };
};
