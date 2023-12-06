import styles from './styles.module.css'

export default function DashboardTabPT({ tab, children }) {
  return (
    <>
      <div
        className={`${tab === 'pt-BR' ? styles.ptActive : styles.ptInactive}`}
      >
        {children}
      </div>
    </>
  )
}
