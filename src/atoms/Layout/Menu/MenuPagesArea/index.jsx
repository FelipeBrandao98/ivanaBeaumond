import styles from './styles.module.css'

export default function MenuPagesArea({ children }) {
  return (
    <>
      <nav className={styles.container}>{children}</nav>
    </>
  )
}
