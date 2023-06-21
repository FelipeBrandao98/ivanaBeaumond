import BlogBanner from './BlogBanner'
import BlogDebutantSpaceInPage from './BlogDebutantSpaceInPage'
import BlogInTheMediaInPage from './BlogInTheMediaInPage'
import BlogOurBridesInPage from './BlogOurBridesInPage'
import BlogTipsAndTricksInPage from './BlogTipsAndTricksInPage'

import styles from './styles.module.css'

export default function BlogPostPage() {
  return (
    <div className={styles.content}>
      <BlogBanner />
      <BlogDebutantSpaceInPage />
      <BlogInTheMediaInPage />
      <BlogOurBridesInPage />
      <BlogTipsAndTricksInPage />
    </div>
  )
}