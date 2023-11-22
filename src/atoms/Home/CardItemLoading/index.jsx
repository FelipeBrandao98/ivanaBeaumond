import styles from './styles.module.css'

export default function CardItemLoading() {
  return (
    <>
      <span className={styles.content}>
        <span className={styles.mainTitle} />
      </span>
      <span className={styles.cardArea}>
        <span className={styles.card} />
        <span className={styles.card} />
        <span className={styles.card} />
      </span>
    </>
  )
}
