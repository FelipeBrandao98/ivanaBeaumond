import styles from './styles.module.css'

export default function DashboardModalContainer({ children }) {
  return (
    <>
      <section className={styles.container}>
        <aside className={styles.content}>{children}</aside>
      </section>
    </>
  )
}
