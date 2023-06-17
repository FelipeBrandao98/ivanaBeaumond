import styles from './styles.module.css'

import BlogContentOneBR from "./BlogContentOneBR";
import BlogTitleOneBR from './BlogTitleOneBR';
import BlogContentTwoBR from './BlogContentTwoBR';

export default function BlogContentBR() {
  return (
    <section className={styles.section}>
      <aside className={styles.aside}>
        <BlogContentOneBR />
        <BlogTitleOneBR />
        <BlogContentTwoBR />
      </aside>
    </section>
  )
}