import styles from './styles.module.css'

export default function DashboardTabFR({ tab, children }) {
  return (
    <>
      <div className={`${tab === 'fr' ? styles.frActive : styles.frInactive}`}>
        {children}
      </div>
    </>
  )
}
