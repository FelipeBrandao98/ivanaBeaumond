// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function BlogPostPage({ children }) {
  // Return components, with functions to call API and language
  return <div className={styles.content}>{children}</div>
  //
}
