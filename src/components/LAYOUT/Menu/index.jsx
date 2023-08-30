'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { FaInstagram, FaFacebookSquare, FaChevronRight } from 'react-icons/fa'

import styles from './styles.module.css'

import TraductionButton from './TraductionButton'
import OpenMenuForMobile from './OpenMenuForMobile'
import SearchButton from './SearchButton'
import { LangContext } from '@/Context/LanguageContext'

export default function Menu({ content, children }) {
  const [hidden, setHidden] = useState(false)
  const { lang } = useContext(LangContext)

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

        <TraductionButton hidden={hidden} />
        <SearchButton />
        <OpenMenuForMobile>
          <div className={styles.menuNavsArea}>
            <nav className={styles.contactNav}>
              <ul>
                <li>
                  {content.appointment} <FaChevronRight />
                </li>
              </ul>
            </nav>
            <nav className={styles.nav}>
              <ul>
                {content.menu.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={`/${item.route}`} lang={lang}>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
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
