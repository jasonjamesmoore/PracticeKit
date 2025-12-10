import { useState, useEffect } from 'react';

const ONBOARDING_KEY = 'practicekit:onboarding:welcome';

export function useOnboarding() {
  const [hasSeenWelcome, setHasSeenWelcome] = useState<boolean>(true); // Default to true to avoid flash

  useEffect(() => {
    // Check localStorage on mount
    const seen = localStorage.getItem(ONBOARDING_KEY) === 'true';
    setHasSeenWelcome(seen);
  }, []);

  const markWelcomeAsSeen = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setHasSeenWelcome(true);
  };

  const resetOnboarding = () => {
    localStorage.removeItem(ONBOARDING_KEY);
    setHasSeenWelcome(false);
  };

  return {
    hasSeenWelcome,
    markWelcomeAsSeen,
    resetOnboarding,
  };
}
