'use client'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'

import styles from './styles.module.css'

import { useLanguageContext } from '@/Context/LanguageContext'

export default function TraductionButton({ hidden }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <div
      className={`
          ${hidden ? styles.hidden : ''}
        `}
    >
      <ol className={isOpen ? styles.open : styles.close}>
        <li onClick={handleIsOpen}>
          <div className={styles.row}>
            BR
            <ReactCountryFlag countryCode="BR" svg />
          </div>
          <FaChevronDown size={10} />
        </li>
        <li>
          {/* <input
            type="radio"
            name="language"
            value="fr"
            id="fr"
            checked={languageContext.language === 'fr'}
            onChange={(e) => languageContext.redirectRouter(e.target.value)}
          />
          <label htmlFor="fr"> */}
          <Link href={`/${'fr'}`}>
            <div className={styles.row}>
              FR
              <ReactCountryFlag countryCode="FR" svg />
            </div>
          </Link>
          {/* </label> */}
        </li>
        <li>
          {/* <input
            type="radio"
            name="language"
            value="en"
            id="en"
            checked={languageContext.language === 'en'}
            onChange={(e) => languageContext.redirectRouter(e.target.value)}
          />
          <label htmlFor="en"> */}
          <Link href={`/${'us'}`}>
            <div className={styles.row}>
              US
              <ReactCountryFlag countryCode="US" svg />
            </div>
          </Link>
          {/* </label> */}
        </li>
        <li>
          {/* <input
            type="radio"
            name="language"
            value="de"
            id="de"
            checked={languageContext.language === 'de'}
            onChange={(e) => languageContext.redirectRouter(e.target.value)}
          />
          <label htmlFor="de"> */}
          <Link href={`/${'de'}`}>
            <div className={styles.row}>
              DE
              <ReactCountryFlag countryCode="DE" svg />
            </div>
          </Link>
          {/* </label> */}
        </li>
      </ol>
    </div>
  )
}
