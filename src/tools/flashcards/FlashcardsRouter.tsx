import { useParams } from 'react-router-dom';
import { FlashcardsHub } from './components/FlashcardsHub';
import { DegreeFinder } from './modes/DegreeFinder';
import { NoteFinder } from './modes/NoteFinder';
import { KeyFinder } from './modes/KeyFinder';
import { KeyOnly } from './modes/KeyOnly';
import { FlashcardMode } from './types/FlashcardMode';

// Map flashcard mode strings to components
const modeComponents: Record<string, React.ComponentType> = {
  [FlashcardMode.DEGREE_FINDER]: DegreeFinder,
  [FlashcardMode.NOTE_FINDER]: NoteFinder,
  [FlashcardMode.KEY_FINDER]: KeyFinder,
  [FlashcardMode.KEY_ONLY]: KeyOnly,
};

export function FlashcardsRouter() {
  const { '*': remainingPath } = useParams();
  
  // If no mode specified, show the hub
  if (!remainingPath || remainingPath === '') {
    return <FlashcardsHub />;
  }
  
  // Extract mode from path (e.g., "degree-finder")
  const mode = remainingPath.split('/')[0];
  const ModeComponent = modeComponents[mode];
  
  if (ModeComponent) {
    return <ModeComponent />;
  }
  
  // Mode not found
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Quiz Mode Not Found</h2>
      <p>The mode "{mode}" doesn't exist.</p>
    </div>
  );
}
