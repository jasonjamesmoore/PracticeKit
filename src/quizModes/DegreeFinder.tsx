import { Quiz } from '@/components/Quiz';
import { quizModes } from '@/QuizData/modeConfigs';
import { Mode } from '@/types/Mode';

export function DegreeFinder() {
  return <Quiz modeConfig={quizModes[Mode.DEGREE_FINDER]} />;
}
