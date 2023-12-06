import styles from './styles.module.css'

export default function MenuLogoInHeader({ children, short }) {
  return (
    <>
      <div
        className={
          short ? `${styles.container} ${styles.short}` : `${styles.container}`
        }
      >
        {children}
      </div>
    </>
  )
}
