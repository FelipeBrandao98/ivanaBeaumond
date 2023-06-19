import BlogContentOne from './BlogContentOne'
import BlogContentText from './BlogContentText'
import BlogContentTwo from './BlogContentTwo'
import BlogOthersPosts from './BlogOthersPosts'
import BlogTitleOne from './BlogTitleOne'
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