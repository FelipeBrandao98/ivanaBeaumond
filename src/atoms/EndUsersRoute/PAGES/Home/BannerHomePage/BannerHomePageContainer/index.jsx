import styles from './styles.module.css'

export default function BannerHomePageContainer({ children }) {
  return (
    <>
      <section className={styles.container}>{children}</section>
    </>
  )
}
