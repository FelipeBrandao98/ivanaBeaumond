import LogoutButton from './LogoutButton/LogoutButton'
import DashboardMenu from './DashboardMenu'

import styles from './styles.module.css'

export default function Dashboard({ children }) {
  return (
    <section className={styles.container}>
      <menu className={styles.mainMenuContainer}>
        <section className={styles.mainMenu}>
          <DashboardMenu />
          <LogoutButton />
        </section>
      </menu>
      {children}
    </section>
  )
}
