'use client'
import { FaChevronDown } from 'react-icons/fa'
import styles from './styles.module.css'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { LanguageContext } from '@/hooks/LanguageContext'


export default function TraductionButtonFR() {
  const { language, setLanguage } = useContext(LanguageContext)

  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      {console.log(language)}
      <ol className={isOpen ? styles.open : styles.close}>
        <li onClick={handleIsOpen}>fr <FaChevronDown size={'1rem'} /></li>
        <li><Link href={'/fr'} onClick={setLanguage('fr')}>fr</Link></li>
        <li><Link href={'/en'} onClick={setLanguage('en')}>en-us</Link></li>
        <li><Link href={'/pt'} onClick={setLanguage('pt')}>pt-br</Link></li>
      </ol>
    </>
  )
}