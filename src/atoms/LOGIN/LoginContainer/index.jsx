import styles from './styles.module.css'

export default function LoginContainer({ children }) {
  return (
    <>
      <section className={styles.container}>
        <aside className={styles.content}>{children}</aside>
      </section>
    </>
  )
}
