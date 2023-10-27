// Components imports
import BlogContentOne from './BlogContentOne'
import BlogTitleOne from './BlogTitleOne'
import BlogContentTwo from './BlogContentTwo'
import BlogContentText from './BlogContentText'
import BlogOthersPosts from '../BlogOthersPosts'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function BlogContent() {
  // Return components, with functions to call API and language
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
  //
}
