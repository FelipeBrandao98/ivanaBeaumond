'use client'

// React imports
import { useEffect, useState, useCallback } from 'react'

// Next.js Components imports
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

// Icons imports
import { FaChevronDown } from 'react-icons/fa'
import ReactCountryFlag from 'react-country-flag'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function TraductionButton({ lang }) {
  // States declaratios
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  // Instance of Router
  const router = useRouter()

  // Remove languages from pathname, to persist original pathname
  let pathname = usePathname().replace('/pt-BR', '')
  pathname = usePathname().replace('/de', '')
  pathname = usePathname().replace('/en', '')
  pathname = usePathname().replace('/fr', '')
  //

  // Functions to manipulate window object
  const toggleHidden = useCallback(() => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setHidden(true)
    } else if (scrolled <= 300) {
      setHidden(false)
    }
  }, [])
  //

  // Functions to manipulate Events
  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  //

  // Use Effects
  useEffect(() => {
    window.addEventListener('scroll', toggleHidden)
  }, [toggleHidden])

  useEffect(() => {
    router.refresh()
  }, [router])
  //

  // Return components, with functions to call API and language
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
  //
}
