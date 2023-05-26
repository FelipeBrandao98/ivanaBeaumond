'use client'
import { FaArrowDown } from 'react-icons/fa'
import styles from './styles.module.css'

import { useState } from 'react'

export default function TraductionButton() {
  const [isOpened, setIsOpened] = useState(false)

  function handleIsOpened() {
    isOpened ? setIsOpened(false) : setIsOpened(true)
  }

  return (
    <>
      <ol className={isOpened ? styles.open : styles.close}>
        <li onClick={handleIsOpened}>pt-br <FaArrowDown size={'1rem'} /></li>
        <li>fr</li>
        <li>en-us</li>
        <li>de</li>
      </ol>
    </>
  )
}