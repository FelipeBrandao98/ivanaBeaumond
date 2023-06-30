'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaInstagram, FaFacebookSquare, FaChevronRight } from 'react-icons/fa'

import styles from './styles.module.css'

import TraductionButton from './TraductionButton'
import OpenMenuForMobile from './OpenMenuForMobile'


export default function Menu({ content }) {
  useEffect(() => {
    window.addEventListener('scroll', toggleHidden)
  }, []);

  const [hidden, setHidden] = useState(false)

  const toggleHidden = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setHidden(true)
    }
    else if (scrolled <= 300) {
      setHidden(false)
    }
  };

  return (
    <div
      className={
        `
          ${hidden ? styles.hidden : ''}
        `
      }
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

        <OpenMenuForMobile>
          <div className={styles.menuNavsArea}>
            <nav className={styles.contactNav}>
              <ul>
                <li>{content.appointment} <FaChevronRight /></li>
              </ul>
            </nav>
            <nav className={styles.nav}>
              <ul>
                {content.menu.map((item) => {
                  return <li key={item.id}><Link href={`pt-BR/${item.route}`}>{item.name}</Link></li>
                })}
              </ul>
            </nav>
            <nav className={styles.navSociaMedia}>
              <ul>
                <li>@ivanabeaumond <FaInstagram /></li>
                <li>IvanaBeaumond <FaFacebookSquare /></li>
                <li>@ivanaparisdebutantes <FaInstagram /></li>
              </ul>
            </nav>
          </div>
        </OpenMenuForMobile>
      </header >
    </div>
  )
}
