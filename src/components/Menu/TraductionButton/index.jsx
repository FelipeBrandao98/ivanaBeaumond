'use client'
import { FaArrowDown } from 'react-icons/fa'
import styles from './styles.module.css'

import { useState } from 'react'

export default function TraductionButton() {
  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      <ol className={isOpen ? styles.open : styles.close}>
        <li onClick={handleIsOpen}>pt-br <FaArrowDown size={'1rem'} /></li>
        <li>fr</li>
        <li>en-us</li>
        <li>de</li>
      </ol>
    </>
  )
}