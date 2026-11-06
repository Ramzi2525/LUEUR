'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '@/components/ui/SplitText';
import { ritualCategories } from '@/data/content';
import { EASE, SPRING_SNAPPY } from '@/lib/motion';
import styles from './RitualFinder.module.css';

const STACK_OFFSETS = [
  { x: '0%', rotate: -2 },
  { x: '-104%', rotate: 5 },
  { x: '-208%', rotate: -6 },
  { x: '-312%', rotate: 4 },
  { x: '-416%', rotate: -5 },
];

const cardVariants: Variants = {
  hidden: (index: number) => ({
    x: STACK_OFFSETS[index % STACK_OFFSETS.length]?.x ?? '0%',
    rotate: STACK_OFFSETS[index % STACK_OFFSETS.length]?.rotate ?? 0,
    opacity: 0,
    scale: 0.92,
  }),
  visible: (index: number) => ({
    x: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 55, damping: 15, mass: 1.1, delay: 0.1 + index * 0.09 },
      rotate: { type: 'spring', stiffness: 55, damping: 13, mass: 1.1, delay: 0.1 + index * 0.09 },
      scale: { duration: 0.9, ease: EASE, delay: index * 0.09 },
      opacity: { duration: 0.5, delay: index * 0.05 },
    },
  }),
};

export function RitualFinder() {
  return (
    <section className={styles.section} id="ritual-finder">
      <div className={styles.wrap}>
        <span className="eyebrow">Find Your Routine</span>
        <SplitText text="What's Your Ritual?" className={styles.heading} />

        <div className={styles.grid}>
          {ritualCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className={styles.card}
              style={{ position: 'relative', zIndex: ritualCategories.length - index }}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={cardVariants}
              whileHover={{ y: -12, transition: SPRING_SNAPPY }}
            >
              <Link href="#">
                <div className={styles.media}>
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
                <h3>{category.label}</h3>
                <p>{category.tagline}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
