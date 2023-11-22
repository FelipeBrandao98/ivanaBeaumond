import styles from './styles.module.css'

export default function NewsContainer({ children }) {
  return (
    <>
      <section className={styles.section}>
        <aside className={styles.aside}>{children}</aside>
      </section>
    </>
  )
}
