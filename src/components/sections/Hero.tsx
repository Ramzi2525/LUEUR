'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Star } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { SplitText } from '@/components/ui/SplitText';
import { heroImage, heroProduct } from '@/data/content';
import { EASE, HERO_DELAY } from '@/lib/motion';
import styles from './Hero.module.css';

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1.1, delay: HERO_DELAY + delay, ease: EASE },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '9%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '38%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);

  return (
    <section className={styles.hero} ref={ref}>
      <motion.div className={styles.media} style={{ y: imageY }}>
        <motion.div
          className={styles.mediaInner}
          initial={{ scale: 1.35 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, delay: HERO_DELAY - 0.4, ease: EASE }}
        >
<Image src={heroImage.src} alt={heroImage.alt} fill priority quality={95} sizes="100vw" />
        </motion.div>
      </motion.div>
      <div className={styles.scrim} />

      <div className={styles.inner}>
        <motion.div className={styles.content} style={{ y: contentY, opacity: contentOpacity }}>
          <SplitText
            as="h1"
            text="The Everyday Radiance Collection"
            immediate
            delay={HERO_DELAY}
            stagger={0.09}
          />
          <motion.p className={styles.sub} {...reveal(0.55)}>
            Professional-grade beauty tools, designed for the ritual you already have.
          </motion.p>
          <motion.div className={styles.actions} {...reveal(0.75)}>
            <Button variant="solid-white" href="#" magnetic icon={<Play strokeWidth={1.8} />}>
              Watch the Ritual
            </Button>
            <Button variant="outline-white" href="#season-edit" magnetic>
              Shop All Tools
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.badge}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: HERO_DELAY + 1.2, ease: EASE }}
      >
        <Star fill="currentColor" strokeWidth={0} />
        4.9 — 12,400+ Reviews
      </motion.div>

      <motion.div className={styles.cardWrap} style={{ y: cardY }}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 16, delay: HERO_DELAY + 1.0 }}
          whileHover={{ y: -6 }}
        >
          <h3>{heroProduct.name}</h3>
          <div className={styles.priceRow}>
            <span className={styles.price}>{heroProduct.price}</span>
            <span className={styles.was}>{heroProduct.compareAtPrice}</span>
          </div>
          <p>{heroProduct.meta}</p>
          <Button variant="solid-ink" href="#season-edit" fullWidth>
            View Details
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
