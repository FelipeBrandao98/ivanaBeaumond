'use client'

// React imports
import { useContext, useState } from 'react'

// Icons imports
import { ImExit } from 'react-icons/im'

// Context imports
import { AuthContext } from '@/Context/AuthContext'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function LogoutButton() {
  // Instanciate and initialize Contexts functions
  const { token, handleLogout } = useContext(AuthContext)

  // States declaratios
  const [logoutModal, setLogoutModal] = useState(false)

  // Functions to manipulate window object
  function handleExitModal() {
    setLogoutModal(!logoutModal)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          handleExitModal()
        }}
        className={styles.exitButton}
      >
        <ImExit width={40} height={40} className={styles.exitIcon} />
      </button>

      {logoutModal && (
        <section className={styles.confirmExitModalContainer}>
          <aside className={styles.confirmExitModalContent}>
            <h1 className={styles.confirmExitModalTitle}>
              Tem certeza que você deseja sair?
            </h1>
            <div className={styles.buttonsArea}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleExitModal()
                }}
                className={styles.cancelButton}
              >
                Cancelar
              </button>
              <button className={styles.confirmButton} onClick={handleLogout}>
                Sair
              </button>
            </div>
          </aside>
        </section>
      )}
    </>
  )
  //
}
