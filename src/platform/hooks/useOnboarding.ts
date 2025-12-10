import { useState, useEffect } from 'react';

const ONBOARDING_PREFIX = 'practicekit:onboarding:';

export function useOnboarding(toolId?: string) {
  const key = toolId ? `${ONBOARDING_PREFIX}${toolId}` : `${ONBOARDING_PREFIX}welcome`;
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean>(true); // Default to true to avoid flash

  useEffect(() => {
    // Check localStorage on mount
    const seen = localStorage.getItem(key) === 'true';
    setHasSeenOnboarding(seen);
  }, [key]);

  const markOnboardingAsSeen = () => {
    localStorage.setItem(key, 'true');
    setHasSeenOnboarding(true);
  };

  const resetOnboarding = () => {
    localStorage.removeItem(key);
    setHasSeenOnboarding(false);
  };

  return {
    hasSeenOnboarding,
    markOnboardingAsSeen,
    resetOnboarding,
  };
}
