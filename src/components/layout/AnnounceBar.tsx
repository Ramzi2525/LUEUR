'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useAnnounceBar } from '@/hooks/useAnnounceBar';
import styles from './AnnounceBar.module.css';

export function AnnounceBar() {
  const { isVisible, dismiss } = useAnnounceBar();

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          className={styles.bar}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Free shipping over $150 worldwide — lifetime tool recalibration included
          <button className={styles.close} onClick={dismiss} aria-label="Dismiss announcement">
            <X strokeWidth={2} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
