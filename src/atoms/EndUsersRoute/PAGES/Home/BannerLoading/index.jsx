import styles from './styles.module.css'

export default function BannerLoading() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.image} />
          <span className={styles.h1}></span>
          <span className={styles.h1}></span>
          <span className={styles.h3}></span>
        </div>
      </div>
    </>
  )
}
