import { useEffect, useState } from 'react';
import { Container, SegmentedControl, Stack } from '@mantine/core';
import { FlashCard } from './FlashCard';
import { Deck, QuizMode } from '@/types/Quiz';
import { getRandomCard } from '@/utils/cardSelection'; 

interface QuizProps {
  modeConfig: QuizMode;
}

export function Quiz({ modeConfig }: QuizProps) {


  const [prompts, setPrompts] = useState<Record<Deck, string | null>>({
    key: null,
    note: null,
    degree: null,
    signature: null,
  });

  const [revealed, setRevealed] = useState<boolean>(false);
  const [lockedPrompt, setLockedPrompt] = useState<Deck | null>(null);
  const [priorityMode, setPriorityMode] = useState<'harmonic' | 'scale'>('harmonic');

  useEffect(() => {
    initializeCards();
  }, [modeConfig, priorityMode]);

  function initializeCards() {
    regeneratePrompts(false);
  }

  function handleNext() {
    regeneratePrompts(true);
  }

  function computeAnswer() {
    if (!modeConfig.computeAnswer || !modeConfig.promptDecks) {
      return null;
    }

    const relevantPrompts = modeConfig.promptDecks.reduce(
      (acc, deck) => {
        acc[deck] = prompts[deck];
        return acc;
      },
      {} as Record<Deck, string | null>
    );

    return modeConfig.computeAnswer(relevantPrompts as Record<Deck, string>, priorityMode);
  }

  function toggleLock(deck: Deck) {
    setLockedPrompt(lockedPrompt === deck ? null : deck);
  }

function regeneratePrompts(respectLock: boolean = false) {
    console.log('regeneratePrompts called, respectLock:', respectLock);
  if (!modeConfig.promptDecks) {
    return;
  }
  
  let attempts = 0;
  const maxAttempts = 50;
  let newPrompts: Record<Deck, string | null> = { ...prompts };
  
  while (attempts < maxAttempts) {
    newPrompts = { ...prompts };

    modeConfig.promptDecks.forEach((deckType) => {
      if (!respectLock || lockedPrompt !== deckType) {
        const card = getRandomCard(deckType, { priority: priorityMode });
        newPrompts[deckType] = card;
      }
    });

    // Test if this combo produces a valid answer
    const testAnswer = modeConfig.computeAnswer?.(
      modeConfig.promptDecks.reduce((acc, deck) => {
        acc[deck] = newPrompts[deck];
        return acc;
      }, {} as Record<Deck, string | null>) as Record<Deck, string>,
      priorityMode
    );
    
    if (testAnswer !== null) {
        console.log('Valid combo found after', attempts, 'attempts');
      // Valid answer found, use these prompts
      setPrompts(newPrompts);
      setRevealed(false);
      return;
    }
    
    attempts++;
  }
  
  console.warn('Could not generate valid card combo after', maxAttempts, 'attempts');
  // Fallback: set prompts anyway (shouldn't happen often)
  setPrompts(newPrompts);
  setRevealed(false);
}

  return (
    <Container size="sm" py="xl">
      <Stack gap="md">
      {/* Priority selector - only show if mode supports it */}
      {modeConfig.supportedFilters?.priority && (
        <SegmentedControl
          value={priorityMode}
          onChange={(value) => setPriorityMode(value as 'harmonic' | 'scale')}
          data={[
            { label: 'Harmonic', value: 'harmonic' },
            { label: 'Scale', value: 'scale' },
            // { label: 'All', value: 'all' },
          ]}
        />
      )}

      {/* FlashCard component */}
      {modeConfig.promptDecks?.every(deck => prompts[deck] !== null) && (
      <FlashCard
        title={modeConfig.label}
        prompts={modeConfig.promptDecks?.map((deck) => ({
          label: deck.charAt(0).toUpperCase() + deck.slice(1), // "key" → "Key"
          value: prompts[deck] || '',
          deckType: deck,
          isLocked: lockedPrompt === deck,
          onToggleLock: modeConfig.supportedFilters?.locking 
            ? () => toggleLock(deck) 
            : undefined,
        })) || []}
        answer={{
          value: computeAnswer() || '',
          deckType: modeConfig.answerDeck || 'degree',
        }}
        isRevealed={revealed}
        onReveal={() => setRevealed(true)}
        onNext={handleNext}
      />
      )}
    </Stack>
    </Container>
  );
}
