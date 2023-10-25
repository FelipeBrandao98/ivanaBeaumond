'use client'

// React imports
import { useState } from 'react'

// Icons imports
import { FaBars } from 'react-icons/fa'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function OpenMenuForMobile({ children }) {
  // States declaratios
  const [isOpen, setIsOpen] = useState(false)

  // Functions to manipulate Events
  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <div className={isOpen ? styles.open : styles.close}>
        <FaBars onClick={handleIsOpen} size={100} className={styles.icon} />

        <div className={styles.menuNavsArea}>{children}</div>

        <div
          className={isOpen ? styles.outOpen : ''}
          onClick={handleIsOpen}
        ></div>
      </div>
    </>
  )
  //
}
