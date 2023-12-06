import styles from './styles.module.css'

export default function DashboardContainer({ children, hasTab }) {
  return (
    <>
      <section
        className={
          hasTab
            ? `${styles.container} ${styles.withTab}`
            : `${styles.container}`
        }
      >
        <aside className={styles.content}>{children}</aside>
      </section>
    </>
  )
}
