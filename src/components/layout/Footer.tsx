import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { footerColumns } from '@/data/content';
import { FadeUp } from '@/components/ui/FadeUp';
import { FooterWordmark } from './FooterWordmark';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.cols}>
          {footerColumns.map((column, index) => (
            <FadeUp className={styles.col} key={column.title} index={index}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </div>

      <FooterWordmark />

      <div className={styles.wrap}>
        <div className={styles.bottom}>
          <span>© 2026 LUEUR. All rights reserved.</span>
          <div className={styles.locale}>
            <span className={styles.localeItem}>
              United States (USD $) <ChevronDown strokeWidth={2} />
            </span>
            <span className={styles.localeItem}>
              English <ChevronDown strokeWidth={2} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
