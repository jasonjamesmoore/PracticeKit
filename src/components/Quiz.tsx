// Current card values
// currentKey, currentNote, currentDegree, currentSignature

// UI state
// revealed: boolean
// lockedPrompt: 'key' | 'note' | 'degree' | 'signature' | null
// priorityMode: 'harmonic' | 'scale' | 'all'
// difficulty: 'easy' | 'medium' | 'hard'

// Key Functions:

// initializeCards() - Set random prompts based on mode
// regenerateCard(promptType) - Regen only unlocked prompts
// toggleLock(promptType) - Only one can be locked
// applyFilters(cards, priority, difficulty) - Filter card deck before random selection
// computeAnswer() - Use the mode's computeAnswer function
import { useEffect, useState } from 'react';
import { Container } from '@mantine/core';
import { Deck, QuizMode } from '@/types/Quiz';
import { getRandomCard } from '@/utils/cardSelection';

interface QuizProps {
  modeConfig: QuizMode;
}

function Quiz({ modeConfig }: QuizProps) {
  //   const [currentKey, setCurrentKey] = useState<string | null>(null);
  //   const [currentNote, setCurrentNote] = useState<string | null>(null);
  //   const [currentDegree, setCurrentDegree] = useState<string | null>(null);
  //   const [currentSignature, setCurrentSignature] = useState<string | null>(null);

  const [prompts, setPrompts] = useState<Record<Deck, string | null>>({
    key: null,
    note: null,
    degree: null,
    signature: null,
  });

  const [revealed, setRevealed] = useState<boolean>(false);
  const [lockedPrompt, setLockedPrompt] = useState<Deck | null>(null);
  const [priorityMode, setPriorityMode] = useState<'harmonic' | 'scale' | 'all'>('harmonic');

  useEffect(() => {
    initializeCards();
  }, [modeConfig]);

  function initializeCards() {
    if (modeConfig.promptDecks) {
      const newPrompts: Record<Deck, string | null> = { ...prompts };

      modeConfig.promptDecks.forEach((deckType) => {
        const card = getRandomCard(deckType, { priority: priorityMode });
        newPrompts[deckType] = card;
      });

      setPrompts(newPrompts);
    }
  }

  return (
    <Container size="sm" py="xl">
      {/* Quiz UI goes here */}
    </Container>
  );
}
