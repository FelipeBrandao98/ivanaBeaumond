import styles from './styles.module.css'

export default function Pagination({ children }) {
  return (
    <>
      <section className={styles.container}>{children}</section>
    </>
  )
}
