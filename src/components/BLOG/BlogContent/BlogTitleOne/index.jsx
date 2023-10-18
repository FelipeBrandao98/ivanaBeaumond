import styles from './styles.module.css'

export default function BlogTitleOne() {
  return (
    <div className={styles.titleArea}>
      <h2 className={styles.title}>
        <span className={styles.titleTypeOne}>Selva</span>
        <br /> Amazônica
      </h2>
    </div>
  )
}
