'use client'
import { FaChevronDown } from 'react-icons/fa'
import { useContext, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'

import styles from './styles.module.css'

import { LanguageContext } from '@/hooks/LanguageContext'


export default function TraductionButton({ hidden }) {
  const languageContext = useContext(LanguageContext)

  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  function changeLanguageContext(language) {
    languageContext.setLanguage(language)
  }

  return (
    <div
      className={
        `
          ${hidden ? styles.hidden : ''}
        `
      }
    >
      <ol className={isOpen ? styles.open : styles.close}>
        <li onClick={handleIsOpen}>
          <div className={styles.row}>
            BR
            <ReactCountryFlag
              countryCode='BR'
              svg
            />
          </div>
          <FaChevronDown size={'1rem'} />
        </li>
        <li>
          <Link
            href={'/fr'}
            onClick={changeLanguageContext('fr')}
          >
            <div className={styles.row}>
              FR
              <ReactCountryFlag
                countryCode='FR'
                svg
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href={'/en'}
            onClick={changeLanguageContext('en')}
          >
            <div className={styles.row}>
              US
              <ReactCountryFlag
                countryCode='US'
                svg
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href={'/de'}
            onClick={changeLanguageContext('de')}
          >
            <div className={styles.row}>
              DE
              <ReactCountryFlag
                countryCode='DE'
                svg
              />
            </div>
          </Link>
        </li>
      </ol>
    </div>
  )
}