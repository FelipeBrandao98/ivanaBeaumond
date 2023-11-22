import styles from './styles.module.css'

export default function DashboardButtonsArea({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  )
}
