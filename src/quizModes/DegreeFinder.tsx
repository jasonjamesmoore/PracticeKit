import { useState, useEffect } from 'react'; 
import { getScaleDegree } from '@/theory/noteUtils';
import { getRandomKey, getRandomNote } from '@/utils/cardSelection';
import { FlashCard } from '@/components/FlashCard';
import { Container } from '@mantine/core';

export function DegreeFinder() {
  const [_lockedKey, _setLockedKey] = useState<string | null>(null);
  const [_lockedNote, _setLockedNote] = useState<string | null>(null);
  
  const [currentKey, setCurrentKey] = useState<string | null>(null);
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Initialize with random cards
  useEffect(() => {
    if (!currentKey) {
      setCurrentKey(getRandomKey().keyName);
    }
    if (!currentNote) {
      setCurrentNote(getRandomNote().noteName);
    }
  }, [currentKey, currentNote]);

  const keyUsed = _lockedKey ?? currentKey;
  const noteUsed = _lockedNote ?? currentNote;

  const answer = keyUsed && noteUsed ? getScaleDegree(noteUsed, keyUsed) : null;
console.log('keyUsed:', keyUsed, 'noteUsed:', noteUsed, 'answer:', answer);
  function handleReveal() {
    setRevealed(true);
  }

  function handleNext() {
    if (!_lockedKey) {
      setCurrentKey(getRandomKey().keyName);
    }
    if (!_lockedNote) {
      setCurrentNote(getRandomNote().noteName);
    }
    setRevealed(false);
  }

  // Don't render until we have data
  if (!keyUsed || !noteUsed || !answer) {
    return <div>Loading...</div>;
  }

  const prompts = [
    { label: 'Key', value: keyUsed },
    { label: 'Note', value: noteUsed }
  ];

  return (
    <Container size="sm" py="xl">
      <FlashCard
        title="Find the Scale Degree"
        prompts={prompts}
        answer={answer}
        isRevealed={revealed}
        onReveal={handleReveal}
        onNext={handleNext}
      />
    </Container>
  );
}
