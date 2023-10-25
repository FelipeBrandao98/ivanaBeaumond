'use client'

import { useEffect, useState, useContext, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaInstagram, FaFacebookSquare, FaChevronRight } from 'react-icons/fa'

import TraductionButton from './TraductionButton'
import OpenMenuForMobile from './OpenMenuForMobile'
import SearchButton from './SearchButton'
import AppointmentBanner from './AppointmentBanner/AppointmentBanner'

import { AppointmentContext } from '@/Context/AppointmentContext'

import styles from './styles.module.css'

import useLangDict from '@/utils/useLangDict'

export default function Menu({ createAppointment, lang, children }) {
  const { appointment, handleAppointment } = useContext(AppointmentContext)

  const [hidden, setHidden] = useState(false)

  const languageTraducted = useLangDict(lang)

  const toggleHidden = useCallback(() => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setHidden(true)
    } else if (scrolled <= 300) {
      setHidden(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', toggleHidden)
  }, [toggleHidden])

  return (
    <>
      <div
        className={`
          ${hidden ? styles.hidden : ''}
        `}
      >
        <header className={styles.header}>
          <Image
            className={styles.logoInMenu}
            src="/logo-white.svg"
            alt="IVANA BEAUMOND"
            width={300}
            height={50}
          />

          <TraductionButton lang={lang} hidden={hidden} />

          <SearchButton />

          <OpenMenuForMobile>
            <div className={styles.menuNavsArea}>
              <nav className={styles.contactNav}>
                <ul>
                  <li onClick={handleAppointment}>
                    {languageTraducted.layout.menu.appointment}{' '}
                    <FaChevronRight size={20} />
                  </li>
                </ul>
              </nav>
              <nav className={styles.nav}>
                <ul>
                  <li>
                    <Link href={`/`} lang={lang}>
                      {languageTraducted.layout.menu.menuItemOne.name}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/colecoes`} lang={lang}>
                      {languageTraducted.layout.menu.menuItemTwo.name}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/noticias`} lang={lang}>
                      {languageTraducted.layout.menu.menuItemThree.name}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/eventos`} lang={lang}>
                      {languageTraducted.layout.menu.menuItemFour.name}
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav className={styles.navSociaMedia}>
                <ul>
                  <li>
                    @ivanabeaumond <FaInstagram />
                  </li>
                  <li>
                    IvanaBeaumond <FaFacebookSquare />
                  </li>
                  <li>
                    @ivanaparisdebutantes <FaInstagram />
                  </li>
                </ul>
              </nav>
            </div>
          </OpenMenuForMobile>
        </header>

        <AppointmentBanner
          lang={lang}
          createAppointment={createAppointment}
          isHidden={appointment}
          close={handleAppointment}
        />

        {children}
      </div>
    </>
  )
}
