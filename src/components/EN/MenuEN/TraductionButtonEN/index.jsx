'use client'
import { FaChevronDown } from 'react-icons/fa'
import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'
import { LanguageContext } from '@/hooks/LanguageContext'


export default function TraductionButtonEN() {
  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      <ol className={isOpen ? styles.open : styles.close}>
        <li onClick={handleIsOpen}>en-us <FaChevronDown size={'1rem'} /></li>
        <li><Link href={'/pt'}>pt-br</Link></li>
        <li><Link href={'/de'}>de</Link></li>
        <li><Link href={'/fr'}>fr</Link></li>
      </ol>
    </>
  )
}