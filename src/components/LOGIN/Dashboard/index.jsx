// Components imports
import LogoutButton from './LogoutButton/LogoutButton'
import DashboardMenu from './DashboardMenu'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function Dashboard({ children }) {
  // Return components, with functions to call API and language
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
  //
}
