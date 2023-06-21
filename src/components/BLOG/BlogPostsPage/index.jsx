import BlogDebutantSpaceInPage from './BlogDebutantSpaceInPage'
import BlogInTheMediaInPage from './BlogInTheMediaInPage'
import BlogOurBridesInPage from './BlogOurBridesInPage'
import BlogTipsAndTricksInPage from './BlogTipsAndTricksInPage'
import styles from './styles.module.css'

export default function BlogPostPage({ children }) {
  return (
    <div className={styles.content}>
      <BlogDebutantSpaceInPage />
      <BlogInTheMediaInPage />
      <BlogOurBridesInPage />
      <BlogTipsAndTricksInPage />
    </div>
  )
}