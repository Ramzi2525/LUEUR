'use client';

import { motion, type Variants } from 'framer-motion';
import { EASE } from '@/lib/motion';

type Tag = 'h1' | 'h2' | 'h3';

interface SplitTextProps {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}

const wordVariants: Variants = {
  hidden: { y: '115%', rotate: 5 },
  visible: { y: 0, rotate: 0, transition: { duration: 1.05, ease: EASE } },
};

const tags = { h1: motion.h1, h2: motion.h2, h3: motion.h3 } as const;

export function SplitText({
  text,
  as = 'h2',
  className,
  delay = 0,
  stagger = 0.07,
  immediate = false,
}: SplitTextProps) {
  const Component = tags[as];
  const words = text.split(' ');

  const trigger = immediate
    ? { animate: 'visible' }
    : { whileInView: 'visible', viewport: { once: true, margin: '-80px' } };

  return (
    <Component
      className={className}
      aria-label={text}
      initial="hidden"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...trigger}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.14em', marginBottom: '-0.14em' }}
        >
          <motion.span style={{ display: 'inline-block', transformOrigin: '0% 100%' }} variants={wordVariants}>
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
