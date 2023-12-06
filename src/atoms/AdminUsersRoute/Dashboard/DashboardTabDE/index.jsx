import styles from './styles.module.css'

export default function DashboardTabDE({ tab, children }) {
  return (
    <>
      <div className={`${tab === 'de' ? styles.deActive : styles.deInactive}`}>
        {children}
      </div>
    </>
  )
}
