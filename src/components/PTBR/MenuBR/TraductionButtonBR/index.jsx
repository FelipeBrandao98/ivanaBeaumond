'use client'
import { FaChevronDown } from 'react-icons/fa'
import styles from './styles.module.css'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { LanguageContext } from '@/hooks/LanguageContext'


export default function TraductionButtonBR() {
  const { language, setLanguage } = useContext(LanguageContext)

  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      {console.log(language)}
      <ol className={isOpen ? styles.open : styles.close}>
        <li onClick={handleIsOpen}>pt-br <FaChevronDown size={'1rem'} /></li>
        <li><Link href={'/fr'} onClick={setLanguage('fr')}>fr</Link></li>
        <li><Link href={'/en'} onClick={setLanguage('en')}>en-us</Link></li>
        <li><Link href={'/de'} onClick={setLanguage('de')}>de</Link></li>
      </ol>
    </>
  )
}