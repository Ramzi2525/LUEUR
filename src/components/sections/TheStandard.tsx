'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/ui/FadeUp';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { RevealImage } from '@/components/ui/RevealImage';
import { SplitText } from '@/components/ui/SplitText';
import { standardQuote } from '@/data/content';
import { EASE } from '@/lib/motion';
import styles from './TheStandard.module.css';

export function TheStandard() {
  const [firstImage, secondImage] = standardQuote.images;

  return (
    <section className={styles.section} id="the-standard">
      <div className={styles.wrap}>
        <span className="eyebrow">The Make</span>
        <SplitText text="The Standard" className={styles.heading} />

        <div className={styles.grid}>
          {firstImage && (
            <RevealImage
              src={firstImage.src}
              alt={firstImage.alt}
              sizes="(max-width: 960px) 50vw, 30vw"
              className={styles.media}
            />
          )}
          {secondImage && (
            <RevealImage
              src={secondImage.src}
              alt={secondImage.alt}
              sizes="(max-width: 960px) 50vw, 30vw"
              className={styles.media}
              delay={0.15}
            />
          )}

          <FadeUp index={2} className={styles.quoteBlock}>
            <motion.blockquote
              className={styles.quoteText}
              initial={{ clipPath: 'inset(0 100% 0 0)', x: -14 }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)', x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.5, ease: EASE, delay: 0.4 }}
            >
              &ldquo;{standardQuote.text}&rdquo;
            </motion.blockquote>
            <cite className={styles.author}>{standardQuote.author}</cite>
            <span className={styles.role}>{standardQuote.role}</span>
            <ProgressBar className={styles.progressBar} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
