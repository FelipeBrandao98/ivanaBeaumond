'use client'
import { FaChevronDown } from 'react-icons/fa'
import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'


export default function TraductionButtonFR() {
  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      <ol className={isOpen ? styles.open : styles.close}>
        <li onClick={handleIsOpen}>fr <FaChevronDown size={'1rem'} /></li>
        <li><Link href={'/fr'}>fr</Link></li>
        <li><Link href={'/en'}>en-us</Link></li>
        <li><Link href={'/pt'}>pt-br</Link></li>
      </ol>
    </>
  )
}