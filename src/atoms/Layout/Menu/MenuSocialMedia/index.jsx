import styles from './styles.module.css'

export default function MenuLogoInHeader({ children, short }) {
  return (
    <>
      <nav
        className={
          short ? `${styles.container} ${styles.short}` : `${styles.container}`
        }
      >
        {children}
      </nav>
    </>
  )
}
