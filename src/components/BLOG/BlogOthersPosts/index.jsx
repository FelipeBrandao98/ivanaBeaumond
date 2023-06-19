import BlogInTheMedia from './BlogInTheMedia'
import BlogOurBrides from './BlogOurBrides'

import styles from './styles.module.css'

export default function BlogOthersPosts() {
  return (
    <section className={styles.content}>
      <h3 className={styles.title}>Outras Postagens</h3>
      <div className={styles.postsArea}>
        <div className={styles.categoriesArea}>
          <BlogInTheMedia />
          <BlogOurBrides />
        </div>
      </div>
    </section>
  )
}