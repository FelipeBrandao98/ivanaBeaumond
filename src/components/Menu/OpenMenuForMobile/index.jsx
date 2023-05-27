'use client'

import { FaBars } from 'react-icons/fa'

import { useState } from 'react'
import styles from './styles.module.css'

export default function OpenMenuForMobile({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <div className={isOpen ? styles.open : styles.close}>
      <FaBars
        onClick={handleIsOpen}
        size={'100%'}
        className={styles.icon}
      />
      <div className={styles.menuNavsArea}>
        {children}
      </div>
    </div>
  )
}