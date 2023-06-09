import styles from './styles.module.css'
import Image from 'next/image'
import { FaInstagram, FaFacebookSquare, FaChevronRight } from 'react-icons/fa'

import TraductionButton from './TraductionButton'
import OpenMenuForMobile from './OpenMenuForMobile'

export default function Menu({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Image
          className={styles.logoInMenu}
          src="http://localhost:3000/logo-white.svg"
          alt="IVANA BEAUMOND"
          width={300}
          height={50}
        />

        <TraductionButton />

        <OpenMenuForMobile>
          <div className={styles.menuNavsArea}>
            <nav className={styles.contactNav}>
              <ul>
                <li>Marque um Horário <FaChevronRight /></li>
              </ul>
            </nav>
            <nav className={styles.nav}>
              <ul>
                <li>HOME</li>
                <li>COLEÇÕES</li>
                <li>COMENTÁRIOS</li>
                <li>BLOG</li>
                <li>EVENTOS</li>
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

      <main>{children}</main>
    </>
  )
}
