'use client';

import Link from 'next/link';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { navCategories } from '@/data/content';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { EASE } from '@/lib/motion';
import styles from './Navbar.module.css';

export function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 240);
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: hidden && !isOpen ? '-100%' : 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className={styles.inner}>
        <nav className={`${styles.side} ${styles.left}`}>
          {navCategories.map((category) => (
            <Link key={category} className={styles.navLink} href="#ritual-finder">
              {category}
            </Link>
          ))}
        </nav>

        <Link href="/" className={styles.logo}>
          LUEUR
        </Link>

        <div className={`${styles.side} ${styles.right}`}>
          <Link className={styles.navLink} href="#" style={{ marginRight: 8 }}>
            Contact
          </Link>
          <Link className={styles.navLink} href="#care">
            Care &amp; Repair
          </Link>
          <div className={styles.icons}>
            <button className={styles.iconBtn} aria-label="Search">
              <Search strokeWidth={1.6} />
            </button>
            <button className={styles.iconBtn} aria-label="Account">
              <User strokeWidth={1.6} />
            </button>
            <button className={styles.iconBtn} aria-label="Bag, 0 items">
              <ShoppingBag strokeWidth={1.6} />
              <span className={styles.bagCount}>(0)</span>
            </button>
          </div>
        </div>

        <button
          className={styles.toggle}
          aria-label="Menu"
          aria-expanded={isOpen}
          onClick={toggle}
        >
          {isOpen ? <X strokeWidth={1.6} /> : <Menu strokeWidth={1.6} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.mobilePanel}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 0.84, 0.44, 1] }}
          >
            <div className={styles.mobilePanelInner}>
              {navCategories.map((category) => (
                <Link key={category} href="#ritual-finder" onClick={close}>
                  {category}
                </Link>
              ))}
              <Link href="#care" onClick={close}>
                Care &amp; Repair
              </Link>
              <Link href="#" onClick={close}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
