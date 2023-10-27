// Components imports
import BlogDebutantSpace from './BlogDebutantSpace'
import BlogInTheMedia from './BlogInTheMedia'
import BlogOurBrides from './BlogOurBrides'
import BlogTipsAndTricks from './BlogTipsAndTricks'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function BlogOthersPosts() {
  // Return components, with functions to call API and language
  return (
    <section className={styles.content}>
      <h3 className={styles.title}>Outras Postagens</h3>
      <div className={styles.postsArea}>
        <div className={styles.categoriesArea}>
          <BlogInTheMedia />
          <BlogOurBrides />
        </div>
        <div className={styles.categoriesArea}>
          <BlogDebutantSpace />
          <BlogTipsAndTricks />
        </div>
      </div>
    </section>
  )
  //
}
