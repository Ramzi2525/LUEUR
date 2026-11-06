'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { RefreshCw, Repeat, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { FadeUp } from '@/components/ui/FadeUp';
import { SplitText } from '@/components/ui/SplitText';
import { careItems } from '@/data/content';
import type { CareIconName } from '@/types';
import styles from './CareRepair.module.css';

const icons: Record<CareIconName, typeof RefreshCw> = {
  refresh: RefreshCw,
  exchange: Repeat,
  shield: ShieldCheck,
};

export function CareRepair() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ringY = useTransform(scrollYProgress, [0, 1], ['-18%', '18%']);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section className={styles.section} id="care" ref={ref}>
      <motion.div className={styles.ring} style={{ y: ringY, rotate: ringRotate }} aria-hidden="true" />
      <motion.div className={`${styles.ring} ${styles.ringSmall}`} style={{ y: ringY }} aria-hidden="true" />

      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.intro}>
            <FadeUp index={0}>
              <span className="eyebrow on-terracotta">Care &amp; Repair</span>
            </FadeUp>
            <SplitText text="Your Tools, Cared for Life" />
            <FadeUp index={2}>
              <p>Send it in for recalibration. Trade it in for credit. Buy pre-loved with full history.</p>
              <Button variant="solid-white" href="#" magnetic>
                Visit Care &amp; Repair
              </Button>
            </FadeUp>
          </div>

          <div className={styles.icons}>
            {careItems.map((care, index) => {
              const Icon = icons[care.icon];
              return (
                <FadeUp key={care.id} index={index + 1}>
                  <motion.div
                    className={styles.iconMark}
                    initial={{ scale: 0, rotate: -40 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 0.3 + index * 0.15 }}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <Icon strokeWidth={1.5} />
                  </motion.div>
                  <h3>{care.title}</h3>
                  <p>{care.description}</p>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
