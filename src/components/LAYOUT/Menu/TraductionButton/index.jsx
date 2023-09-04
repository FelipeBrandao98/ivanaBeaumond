'use client'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'

import styles from './styles.module.css'

export default function TraductionButton({ lang, hidden }) {
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
        {lang === 'en' ? (
          <>
            <li onClick={handleIsOpen}>
              <Link href={`/en`} replace>
                <div className={styles.row}>
                  US
                  <ReactCountryFlag countryCode="US" svg />
                </div>
                <FaChevronDown size={10} />
              </Link>
            </li>
            <li>
              <div className={styles.row}>
                BR
                <ReactCountryFlag countryCode="BR" svg />
              </div>
            </li>
            <li>
              <Link href={`/fr`} replace>
                <div className={styles.row}>
                  FR
                  <ReactCountryFlag countryCode="FR" svg />
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/de'} replace>
                <div className={styles.row}>
                  DE
                  <ReactCountryFlag countryCode="DE" svg />
                </div>
              </Link>
            </li>
          </>
        ) : lang === 'de' ? (
          <>
            <li onClick={handleIsOpen}>
              <Link href={'/de'} replace>
                <div className={styles.row}>
                  DE
                  <ReactCountryFlag countryCode="DE" svg />
                </div>
                <FaChevronDown size={10} />
              </Link>
            </li>
            <li>
              <div className={styles.row}>
                BR
                <ReactCountryFlag countryCode="BR" svg />
              </div>
            </li>
            <li>
              <Link href={`/fr`} replace>
                <div className={styles.row}>
                  FR
                  <ReactCountryFlag countryCode="FR" svg />
                </div>
              </Link>
            </li>
            <li>
              <Link href={`/en`} replace>
                <div className={styles.row}>
                  US
                  <ReactCountryFlag countryCode="US" svg />
                </div>
              </Link>
            </li>
          </>
        ) : lang === 'fr' ? (
          <>
            <li onClick={handleIsOpen}>
              <Link href={`/fr`} replace>
                <div className={styles.row}>
                  FR
                  <ReactCountryFlag countryCode="FR" svg />
                </div>
                <FaChevronDown size={10} />
              </Link>
            </li>
            <li>
              <div className={styles.row}>
                BR
                <ReactCountryFlag countryCode="BR" svg />
              </div>
            </li>
            <li>
              <Link href={`/en`} replace>
                <div className={styles.row}>
                  US
                  <ReactCountryFlag countryCode="US" svg />
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/de'} replace>
                <div className={styles.row}>
                  DE
                  <ReactCountryFlag countryCode="DE" svg />
                </div>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li onClick={handleIsOpen}>
              <div className={styles.row}>
                BR
                <ReactCountryFlag countryCode="BR" svg />
              </div>
              <FaChevronDown size={10} />
            </li>
            <li>
              <Link href={`/fr`} replace>
                <div className={styles.row}>
                  FR
                  <ReactCountryFlag countryCode="FR" svg />
                </div>
              </Link>
            </li>
            <li>
              <Link href={`/en`} replace>
                <div className={styles.row}>
                  US
                  <ReactCountryFlag countryCode="US" svg />
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/de'} replace>
                <div className={styles.row}>
                  DE
                  <ReactCountryFlag countryCode="DE" svg />
                </div>
              </Link>
            </li>
          </>
        )}
      </ol>
    </div>
  )
}
