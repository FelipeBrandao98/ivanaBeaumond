import styles from './styles.module.css'

import BlogContentOneBR from "./BlogContentOneBR";
import BlogTitleOneBR from './BlogTitleOneBR';
import BlogContentTwoBR from './BlogContentTwoBR';
import BlogContentTextBR from './BlogContentTextBR';
import BlogOthersPosts from './BlogOthersPosts';

export default function BlogContentBR() {
  return (
    <>
      <section className={styles.section}>
        <aside className={styles.aside}>
          <BlogContentOneBR />
          <BlogTitleOneBR />
          <BlogContentTwoBR />
          <BlogContentTextBR />

        </aside>
      </section>

      <BlogOthersPosts />
    </>
  )
}