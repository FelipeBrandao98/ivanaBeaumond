import styles from './styles.module.css'

export default function NewsImage({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  )
}
