import styles from './styles.module.css'

export default function DashboardTabEn({ tab, children }) {
  return (
    <>
      <div className={`${tab === 'en' ? styles.enActive : styles.enInactive}`}>
        {children}
      </div>
    </>
  )
}
