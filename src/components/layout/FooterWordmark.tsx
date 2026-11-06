'use client';

import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import styles from './Footer.module.css';

const LETTERS = 'LUEUR'.split('');

export function FooterWordmark() {
  return (
    <motion.div
      className={styles.wordmark}
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
    >
      {LETTERS.map((letter, index) => (
        <span key={index} className={styles.letterMask}>
          <motion.span
            className={styles.letter}
            variants={{
              hidden: { y: '105%' },
              visible: { y: 0, transition: { duration: 1.3, ease: EASE } },
            }}
            whileHover={{ color: 'rgba(255,255,255,0.22)', transition: { duration: 0.3 } }}
          >
            {letter}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
