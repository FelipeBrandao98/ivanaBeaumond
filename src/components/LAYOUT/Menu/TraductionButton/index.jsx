'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

import { FaChevronDown } from 'react-icons/fa'
import ReactCountryFlag from 'react-country-flag'

import styles from './styles.module.css'

export default function TraductionButton({ lang, hidden }) {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  let pathname = usePathname().replace('/pt-BR', '')
  pathname = usePathname().replace('/de', '')
  pathname = usePathname().replace('/en', '')
  pathname = usePathname().replace('/fr', '')

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  useState(() => {
    router.refresh()
  }, [lang])

  return (
    <>
      <div
        className={`
          ${hidden ? styles.hidden : ''}
        `}
      >
        <ol className={isOpen ? styles.open : styles.close}>
          {lang === 'en' ? (
            <>
              <li onClick={handleIsOpen}>
                <div className={styles.row}>
                  US
                  <ReactCountryFlag countryCode="US" svg />
                </div>
                <FaChevronDown size={10} />
              </li>

              <li>
                <Link href={`/pt-BR${pathname}`}>
                  <div className={styles.row}>
                    BR
                    <ReactCountryFlag countryCode="BR" svg />
                  </div>
                </Link>
              </li>

              <li>
                <Link href={`/fr${pathname}`}>
                  <div className={styles.row}>
                    FR
                    <ReactCountryFlag countryCode="FR" svg />
                  </div>
                </Link>
              </li>

              <li>
                <Link href={`/de${pathname}`}>
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
                <div className={styles.row}>
                  DE
                  <ReactCountryFlag countryCode="DE" svg />
                </div>
                <FaChevronDown size={10} />
              </li>

              <li>
                <Link href={`/pt-BR${pathname}`}>
                  <div className={styles.row}>
                    BR
                    <ReactCountryFlag countryCode="BR" svg />
                  </div>
                </Link>
              </li>

              <li>
                <Link href={`/fr${pathname}`}>
                  <div className={styles.row}>
                    FR
                    <ReactCountryFlag countryCode="FR" svg />
                  </div>
                </Link>
              </li>

              <li>
                <Link href={`/en${pathname}`}>
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
                <div className={styles.row}>
                  FR
                  <ReactCountryFlag countryCode="FR" svg />
                </div>
                <FaChevronDown size={10} />
              </li>

              <li>
                <Link href={`/pt-BR${pathname}`}>
                  <div className={styles.row}>
                    BR
                    <ReactCountryFlag countryCode="BR" svg />
                  </div>
                </Link>
              </li>

              <li>
                <Link href={`/en${pathname}`}>
                  <div className={styles.row}>
                    US
                    <ReactCountryFlag countryCode="US" svg />
                  </div>
                </Link>
              </li>

              <li>
                <Link href={`/de${pathname}`}>
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
                <Link href={`/fr${pathname}`}>
                  <div className={styles.row}>
                    FR
                    <ReactCountryFlag countryCode="FR" svg />
                  </div>
                </Link>
              </li>

              <li>
                <Link href={`/en${pathname}`}>
                  <div className={styles.row}>
                    US
                    <ReactCountryFlag countryCode="US" svg />
                  </div>
                </Link>
              </li>

              <li>
                <Link href={`/de${pathname}`}>
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
    </>
  )
}
