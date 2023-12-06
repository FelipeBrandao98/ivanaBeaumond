import styles from './styles.module.css'

export default function DashboardTitle({ children }) {
  return (
    <>
      <h1 className={styles.content}>{children}</h1>
    </>
  )
}
