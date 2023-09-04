'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaInstagram, FaFacebookSquare, FaChevronRight } from 'react-icons/fa'

import styles from './styles.module.css'

import TraductionButton from './TraductionButton'
import OpenMenuForMobile from './OpenMenuForMobile'
import SearchButton from './SearchButton'
import useLangDict from '@/utils/useLangDict'

export default function Menu({ lang, children }) {
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
                <li>
                  {useLangDict(lang).layout.menu.appointment} <FaChevronRight />
                </li>
              </ul>
            </nav>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link
                    href={`/${useLangDict(lang).layout.menu.menuItemOne.route}`}
                    lang={lang}
                  >
                    {useLangDict(lang).layout.menu.menuItemOne.name}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${useLangDict(lang).layout.menu.menuItemTwo.route}`}
                    lang={lang}
                  >
                    {useLangDict(lang).layout.menu.menuItemTwo.name}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${
                      useLangDict(lang).layout.menu.menuItemThree.route
                    }`}
                    lang={lang}
                  >
                    {useLangDict(lang).layout.menu.menuItemThree.name}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${
                      useLangDict(lang).layout.menu.menuItemFour.route
                    }`}
                    lang={lang}
                  >
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
      {children}
    </div>
  )
}
