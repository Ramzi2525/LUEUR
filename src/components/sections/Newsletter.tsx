'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { SplitText } from '@/components/ui/SplitText';
import { FadeUp } from '@/components/ui/FadeUp';
import { EASE } from '@/lib/motion';
import styles from './Newsletter.module.css';

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <motion.div
        className={`${styles.orb} ${styles.orbA}`}
        animate={{ x: [0, 90, 20, 0], y: [0, 50, 110, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className={`${styles.orb} ${styles.orbB}`}
        animate={{ x: [0, -80, -20, 0], y: [0, -60, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className={styles.wrap}>
        <FadeUp>
          <span className={`eyebrow on-dark ${styles.eyebrow}`}>Skin Dispatch</span>
        </FadeUp>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <SplitText text="Rituals, Not Promotions" className={styles.heading} />
        </motion.div>

        <ProgressBar dark className={styles.progressBar} />

        <FadeUp index={2}>
          <p className={styles.text}>
            Monthly skin science, new tools, and ritual guides. No discount spam.
          </p>
        </FadeUp>

        <FadeUp index={3}>
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="done"
                className={styles.success}
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 160, damping: 16 }}
              >
                <span className={styles.successIcon}>
                  <Check strokeWidth={2.5} />
                </span>
                Welcome to the ritual.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className={styles.form}
                onSubmit={handleSubmit}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <input type="email" placeholder="Enter your email" required aria-label="Email address" />
                <motion.button type="submit" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  Subscribe
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeUp>
      </div>
    </section>
  );
}
