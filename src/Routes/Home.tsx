import { ToolsHub } from '@/platform/components/ToolsHub';
import { WelcomeModal } from '@/platform/components/WelcomeModal';
import { useOnboarding } from '@/platform/hooks/useOnboarding';

export function Home() {
  const { hasSeenWelcome, markWelcomeAsSeen } = useOnboarding();

  return (
    <>
      <WelcomeModal opened={!hasSeenWelcome} onClose={markWelcomeAsSeen} />
      <ToolsHub />
    </>
  );
}
