import { ToolsHub } from '@/platform/components/ToolsHub';
import { WelcomeModal } from '@/platform/components/WelcomeModal';
import { useOnboarding } from '@/platform/hooks/useOnboarding';

export function Home() {
  const { hasSeenOnboarding, markOnboardingAsSeen } = useOnboarding();

  return (
    <>
      <WelcomeModal opened={!hasSeenOnboarding} onClose={markOnboardingAsSeen} />
      <ToolsHub />
    </>
  );
}
