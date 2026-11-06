export type Bezier = [number, number, number, number];

export const EASE: Bezier = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: Bezier = [0.76, 0, 0.24, 1];

export const PRELOADER_MS = 1900;
export const HERO_DELAY = (PRELOADER_MS - 250) / 1000;

export const SPRING_SOFT = { type: 'spring', stiffness: 70, damping: 18, mass: 1 } as const;
export const SPRING_SNAPPY = { type: 'spring', stiffness: 320, damping: 26, mass: 0.8 } as const;
