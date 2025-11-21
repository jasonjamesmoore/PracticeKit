import { Quiz } from '@/components/Quiz';
import { quizModes } from '@/QuizData/modeConfigs';
import { Mode } from '@/types/Mode';

export function NoteFinder() {
  return <Quiz modeConfig={quizModes[Mode.NOTE_FINDER]} />;
}