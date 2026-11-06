import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { Marquee } from '@/components/ui/Marquee';
import { RevealImage } from '@/components/ui/RevealImage';
import { SplitText } from '@/components/ui/SplitText';
import { seasonProducts } from '@/data/content';
import styles from './SeasonEdit.module.css';

export function SeasonEdit() {
  return (
    <>
      <Marquee phrases={['Dermatologist tested', 'Lifetime recalibration', 'Cruelty free', 'Made to last']} />
      <section className={styles.section} id="season-edit">
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <span className="eyebrow">From the Lab</span>
              <SplitText text="This Season's Edit" />
            </div>
            <FadeUp>
              <Link href="#" className={styles.linkArrow}>
                View All Tools
                <ArrowRight strokeWidth={2} />
              </Link>
            </FadeUp>
          </div>

          <div className={styles.grid}>
            {seasonProducts.map((product, index) => (
              <div key={product.id} className={styles.card}>
                <RevealImage
                  src={product.image}
                  alt={product.alt}
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                  className={styles.media}
                  delay={index * 0.14}
                >
                  <div className={styles.quickAdd}>Quick Add</div>
                </RevealImage>
                <FadeUp index={index + 1}>
                  <h3>{product.name}</h3>
                  <p className={styles.meta}>{product.meta}</p>
                  <p className={styles.price}>{product.price}</p>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
