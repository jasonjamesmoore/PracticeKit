import { Quiz } from '../components/Quiz';
import { quizModes } from '../data/modeConfigs';
import { FlashcardMode } from '../types/FlashcardMode';

export function KeyFinder() {
  return <Quiz modeConfig={quizModes[FlashcardMode.KEY_FINDER]} />;
}