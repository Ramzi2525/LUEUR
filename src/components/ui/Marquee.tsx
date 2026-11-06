'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import { useRef } from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  phrases: string[];
}

function Row({ phrases, outline }: { phrases: string[]; outline?: boolean }) {
  const items = [...phrases, ...phrases, ...phrases];

  return (
    <>
      {items.map((phrase, index) => (
        <span key={`${phrase}-${index}`} style={{ display: 'contents' }}>
          <span className={`${styles.text} ${outline ? styles.outline : ''}`}>{phrase}</span>
          <Sparkle className={styles.star} strokeWidth={1.5} aria-hidden="true" />
        </span>
      ))}
    </>
  );
}

export function Marquee({ phrases }: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const left = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const right = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

  return (
    <div ref={ref} className={styles.band} aria-hidden="true">
      <motion.div className={styles.track} style={{ x: left }}>
        <Row phrases={phrases} />
      </motion.div>
      <motion.div className={styles.track} style={{ x: right }}>
        <Row phrases={phrases} outline />
      </motion.div>
    </div>
  );
}
