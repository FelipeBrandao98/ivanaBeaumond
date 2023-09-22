'use client'

import { ImExit } from 'react-icons/im'

import styles from './styles.module.css'
import { useContext, useState } from 'react'
import { AuthContext } from '@/Context/AuthContext'

export default function LogoutButton() {
  const { token, handleLogout } = useContext(AuthContext)
  const [logoutModal, setLogoutModal] = useState(false)

  function handleExitModal() {
    setLogoutModal(!logoutModal)
  }

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
}
