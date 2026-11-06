'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { EASE, EASE_IN_OUT, PRELOADER_MS } from '@/lib/motion';
import styles from './Preloader.module.css';

const LETTERS = 'LUEUR'.split('');

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setDone(true);
      document.documentElement.style.overflow = '';
    }, PRELOADER_MS);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className={styles.panel}
          exit={{ y: '-105%' }}
          transition={{ duration: 0.95, ease: EASE_IN_OUT }}
        >
          <div className={styles.word} aria-label="LUEUR">
            {LETTERS.map((letter, index) => (
              <motion.span
                key={index}
                aria-hidden="true"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + index * 0.07, ease: EASE }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className={styles.line}>
            <motion.div
              className={styles.fill}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: (PRELOADER_MS - 300) / 1000, ease: EASE_IN_OUT }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
