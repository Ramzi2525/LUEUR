'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE } from '@/lib/motion';

const variants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, delay: index * 0.12, ease: EASE },
  }),
};

interface FadeUpProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export function FadeUp({ children, index = 0, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
