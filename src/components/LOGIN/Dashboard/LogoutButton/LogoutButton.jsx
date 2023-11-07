'use client'

// React imports
import { useContext, useState } from 'react'

// Icons imports
import { ImExit } from 'react-icons/im'

// Context imports
import { AuthContext } from '@/Context/AuthContext'

// Styles imports
import styles from './styles.module.css'
import DashboardCancel from '@/atoms/DashboardCancel'

// Component Declaration
export default function LogoutButton() {
  // Instanciate and initialize Contexts functions
  const { token, handleLogout } = useContext(AuthContext)

  // States declaratios
  const [cancel, setCancel] = useState(false)

  // Return components, with functions to call API and language
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          setCancel(!cancel)
        }}
        className={styles.exitButton}
      >
        <ImExit width={40} height={40} className={styles.exitIcon} />
      </button>

      <DashboardCancel
        cancel={cancel}
        setCancel={setCancel}
        href={handleLogout}
      />
    </>
  )
  //
}
