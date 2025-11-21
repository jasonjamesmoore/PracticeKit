import { Quiz } from '@/components/Quiz';
import { quizModes } from '@/QuizData/modeConfigs';
import { Mode } from '@/types/Mode';

export function KeyOnly() {
  return <Quiz modeConfig={quizModes[Mode.KEY_ONLY]} />;
}