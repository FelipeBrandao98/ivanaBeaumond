import styles from './styles.module.css'

export default function MenuContainer({ children, short }) {
  return (
    <>
      <header
        className={
          short ? `${styles.container} ${styles.short}` : styles.container
        }
      >
        {children}
      </header>
    </>
  )
}
