import { Quiz } from '../components/Quiz';
import { quizModes } from '../data/modeConfigs';
import { FlashcardMode } from '../types/FlashcardMode';

export function DegreeFinder() {
  return <Quiz modeConfig={quizModes[FlashcardMode.DEGREE_FINDER]} />;
}
