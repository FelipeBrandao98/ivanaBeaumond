'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'
import { FaInstagram, FaFacebookSquare, FaChevronRight } from 'react-icons/fa'

import { AppointmentContext } from '@/Context/AppointmentContext'

import styles from './styles.module.css'

import TraductionButton from './TraductionButton'
import OpenMenuForMobile from './OpenMenuForMobile'
import SearchButton from './SearchButton'
import useLangDict from '@/utils/useLangDict'
import AppointmentBanner from './AppointmentBanner/AppointmentBanner'

export default function Menu({ lang, children }) {
  const { appointment, handleAppointment } = useContext(AppointmentContext)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleHidden)
  }, [])

  const toggleHidden = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setHidden(true)
    } else if (scrolled <= 300) {
      setHidden(false)
    }
  }

  return (
    <div
      className={`
          ${hidden ? styles.hidden : ''}
        `}
    >
      <header className={styles.header}>
        <Image
          className={styles.logoInMenu}
          src="http://localhost:3000/logo-white.svg"
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
                  {useLangDict(lang).layout.menu.appointment} <FaChevronRight />
                </li>
              </ul>
            </nav>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href={`/`} lang={lang}>
                    {useLangDict(lang).layout.menu.menuItemOne.name}
                  </Link>
                </li>
                <li>
                  <Link href={`/colecoes`} lang={lang}>
                    {useLangDict(lang).layout.menu.menuItemTwo.name}
                  </Link>
                </li>
                <li>
                  <Link href={`/noticias`} lang={lang}>
                    {useLangDict(lang).layout.menu.menuItemThree.name}
                  </Link>
                </li>
                <li>
                  <Link href={`/eventos`} lang={lang}>
                    {useLangDict(lang).layout.menu.menuItemFour.name}
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
      <AppointmentBanner isHidden={appointment} close={handleAppointment} />
      {children}
    </div>
  )
}
