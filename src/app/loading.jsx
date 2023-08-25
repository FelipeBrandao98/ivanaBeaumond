import styles from '@/styles/loading.module.css'

export default async function Loading() {
  return (
    <div className={styles.content}>
      <h1 className={styles.loading}>Carregando...</h1>
      <div className={styles.flagArea}>
        <div className={styles.blueArea}></div>
        <div className={styles.whiteArea}></div>
        <div className={styles.redArea}></div>
      </div>
    </div>
  )
}
