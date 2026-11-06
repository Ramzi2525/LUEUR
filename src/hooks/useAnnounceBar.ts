'use client';

import { useEffect, useState } from 'react';

export function useAnnounceBar(revealDelayMs = 250) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), revealDelayMs);
    return () => clearTimeout(timer);
  }, [revealDelayMs]);

  const dismiss = () => setIsDismissed(true);

  return { isVisible: isVisible && !isDismissed, dismiss };
}
