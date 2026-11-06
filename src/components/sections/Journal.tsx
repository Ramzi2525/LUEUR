import Link from 'next/link';
import { FadeUp } from '@/components/ui/FadeUp';
import { RevealImage } from '@/components/ui/RevealImage';
import { SplitText } from '@/components/ui/SplitText';
import { journalPosts } from '@/data/content';
import styles from './Journal.module.css';

export function Journal() {
  return (
    <section className={styles.section} id="journal">
      <div className={styles.wrap}>
        <span className="eyebrow">The Journal</span>
        <SplitText text="Notes From the Ritual" className={styles.heading} />

        <div className={styles.grid}>
          {journalPosts.map((post, index) => (
            <Link href="#" className={styles.card} key={post.id}>
              <RevealImage
                src={post.image}
                alt={post.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                className={styles.media}
                delay={index * 0.12}
                parallax={5}
              />
              <FadeUp index={index + 1}>
                <h3>{post.title}</h3>
                <p className={styles.meta}>Skin Journal · {post.date}</p>
              </FadeUp>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
