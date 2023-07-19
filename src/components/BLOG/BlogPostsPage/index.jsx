import styles from './styles.module.css'

export default function BlogPostPage({ children }) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}