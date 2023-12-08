import styles from './styles.module.css'

export default function DashboardSpacement({ children }) {
  return (
    <>
      <span className={styles.container}>{children}</span>
    </>
  )
}
