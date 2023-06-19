import BlogContentOne from './BlogContentOne'
import BlogTitleOne from './BlogTitleOne'
import BlogContentTwo from './BlogContentTwo'
import BlogContentText from './BlogContentText'
import BlogOthersPosts from '../BlogOthersPosts'

import styles from './styles.module.css'

export default function BlogContent() {
  return (
    <>
      <section className={styles.section}>
        <aside className={styles.aside}>
          <BlogContentOne />
          <BlogTitleOne />
          <BlogContentTwo />
          <BlogContentText />

        </aside>
      </section>
      <BlogOthersPosts />
    </>
  )
}