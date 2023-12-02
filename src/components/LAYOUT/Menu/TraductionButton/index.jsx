'use client'

// React imports
import { useEffect, useState, useCallback } from 'react'

// Next.js Components imports
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

// Icons imports
import { FaChevronDown } from 'react-icons/fa'
import ReactCountryFlag from 'react-country-flag'

// Atoms imports
import MenuTraductionButtonContainer from '@/atoms/Layout/Menu/MenuTraductionButtonContainer'

// Component Declaration
export default function TraductionButton({ lang, short }) {
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
      <MenuTraductionButtonContainer isOpen={isOpen} short={short}>
        {lang === 'en' ? (
          <>
            <li onClick={handleIsOpen}>
              <div>
                US
                <ReactCountryFlag countryCode="US" svg />
              </div>
              <FaChevronDown size={10} />
            </li>

            <li>
              <Link href={`/pt-BR${pathname}`} legacyBehavior>
                <div>
                  BR
                  <ReactCountryFlag countryCode="BR" svg />
                </div>
              </Link>
            </li>

            <li>
              <Link href={`/fr${pathname}`} legacyBehavior>
                <div>
                  FR
                  <ReactCountryFlag countryCode="FR" svg />
                </div>
              </Link>
            </li>

            <li>
              <Link href={`/de${pathname}`} legacyBehavior>
                <div>
                  DE
                  <ReactCountryFlag countryCode="DE" svg />
                </div>
              </Link>
            </li>
          </>
        ) : lang === 'de' ? (
          <>
            <li onClick={handleIsOpen}>
              <div>
                DE
                <ReactCountryFlag countryCode="DE" svg />
              </div>
              <FaChevronDown size={10} />
            </li>

            <li>
              <Link href={`/pt-BR${pathname}`} legacyBehavior>
                <div>
                  BR
                  <ReactCountryFlag countryCode="BR" svg />
                </div>
              </Link>
            </li>

            <li>
              <Link href={`/fr${pathname}`} legacyBehavior>
                <div>
                  FR
                  <ReactCountryFlag countryCode="FR" svg />
                </div>
              </Link>
            </li>

            <li>
              <Link href={`/en${pathname}`} legacyBehavior>
                <div>
                  US
                  <ReactCountryFlag countryCode="US" svg />
                </div>
              </Link>
            </li>
          </>
        ) : lang === 'fr' ? (
          <>
            <li onClick={handleIsOpen}>
              <div>
                FR
                <ReactCountryFlag countryCode="FR" svg />
              </div>
              <FaChevronDown size={10} />
            </li>

            <li>
              <Link href={`/pt-BR${pathname}`} legacyBehavior>
                <div>
                  BR
                  <ReactCountryFlag countryCode="BR" svg />
                </div>
              </Link>
            </li>

            <li>
              <Link href={`/en${pathname}`} legacyBehavior>
                <div>
                  US
                  <ReactCountryFlag countryCode="US" svg />
                </div>
              </Link>
            </li>

            <li>
              <Link href={`/de${pathname}`} legacyBehavior>
                <div>
                  DE
                  <ReactCountryFlag countryCode="DE" svg />
                </div>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li onClick={handleIsOpen}>
              <div>
                BR
                <ReactCountryFlag countryCode="BR" svg />
              </div>
              <FaChevronDown size={10} />
            </li>

            <li>
              <Link href={`/fr${pathname}`} legacyBehavior>
                <div>
                  FR
                  <ReactCountryFlag countryCode="FR" svg />
                </div>
              </Link>
            </li>

            <li>
              <Link href={`/en${pathname}`} legacyBehavior>
                <div>
                  US
                  <ReactCountryFlag countryCode="US" svg />
                </div>
              </Link>
            </li>

            <li>
              <Link href={`/de${pathname}`} legacyBehavior>
                <div>
                  DE
                  <ReactCountryFlag countryCode="DE" svg />
                </div>
              </Link>
            </li>
          </>
        )}
      </MenuTraductionButtonContainer>
    </>
  )
  //
}
