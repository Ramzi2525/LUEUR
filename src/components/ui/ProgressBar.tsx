'use client';

import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';

interface ProgressBarProps {
  dark?: boolean;
  className?: string;
}

export function ProgressBar({ dark = false, className }: ProgressBarProps) {
  return (
    <motion.div
      className={className}
      style={{ height: 2, background: dark ? '#fff' : 'var(--terracotta)', transformOrigin: '0% 50%' }}
      initial={{ width: 0 }}
      whileInView={{ width: 72 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.25, ease: EASE }}
    />
  );
}
