import styles from './styles.module.css'

export default function DashboardTable({ children }) {
  return (
    <>
      <table className={styles.table}>{children}</table>
    </>
  )
}
