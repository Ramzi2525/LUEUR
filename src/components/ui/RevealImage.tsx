'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { EASE } from '@/lib/motion';

interface RevealImageProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  delay?: number;
  parallax?: number;
  children?: ReactNode;
}

export function RevealImage({
  src,
  alt,
  sizes,
  className,
  delay = 0,
  parallax = 7,
  children,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ position: 'relative', overflow: 'hidden' }}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.25, ease: EASE, delay }}
    >
      <motion.div
        style={{ position: 'absolute', inset: '-10% 0', y }}
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.8, ease: EASE, delay }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: 'cover' }} />
      </motion.div>
      {children}
    </motion.div>
  );
}
