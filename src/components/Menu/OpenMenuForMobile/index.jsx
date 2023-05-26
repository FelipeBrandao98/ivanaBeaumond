'use client'

import { FaBars } from 'react-icons/fa'

import { useState } from 'react'
import styles from './styles.module.css'

export default function OpenMenuForMobile() {
  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <FaBars
      size={'2rem'}
      className={isOpen ? styles.open : styles.close}
      onClick={handleIsOpen}
    />
  )
}