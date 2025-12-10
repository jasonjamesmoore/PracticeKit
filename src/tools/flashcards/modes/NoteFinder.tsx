import { Quiz } from '../components/Quiz';
import { quizModes } from '../data/modeConfigs';
import { FlashcardMode } from '../types/FlashcardMode';

export function NoteFinder() {
  return <Quiz modeConfig={quizModes[FlashcardMode.NOTE_FINDER]} />;
}