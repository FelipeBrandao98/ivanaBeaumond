import styles from './styles.module.css'
import Image from 'next/image'
import { FaInstagram, FaFacebookSquare, FaChevronRight } from 'react-icons/fa'

import TraductionButtonFR from './TraductionButtonFR'
import OpenMenuForMobileFR from './OpenMenuForMobileFR'
import Link from 'next/link'

export default function MenuFR({ children }) {
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

        <TraductionButtonFR />

        <OpenMenuForMobileFR>
          <div className={styles.menuNavsArea}>
            <nav className={styles.contactNav}>
              <ul>
                <li>Marque um Horário <FaChevronRight /></li>
              </ul>
            </nav>
            <nav className={styles.nav}>
              <ul>
                <li><Link href={'/pt'}>HOME</Link></li>
                <li>COLEÇÕES</li>
                <li>COMENTÁRIOS</li>
                <li><Link href={'/pt/blog'}>BLOG</Link></li>
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
        </OpenMenuForMobileFR>
      </header >

      <main>{children}</main>
    </>
  )
}
