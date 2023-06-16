import styles from './styles.module.css'

import BlogContentOneBR from "./BlogContentOneBR";
import BlogTitleOneBR from './BlogTitleOneBR';

export default function BlogContentBR() {
  return (
    <section className={styles.section}>
      <aside className={styles.aside}>
        <BlogContentOneBR />
        <BlogTitleOneBR />
      </aside>
    </section>
  )
}