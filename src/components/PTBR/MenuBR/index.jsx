import styles from './styles.module.css'
import Image from 'next/image'
import { FaInstagram, FaFacebookSquare, FaChevronRight } from 'react-icons/fa'

import TraductionButtonBR from './TraductionButtonBR'
import OpenMenuForMobileBR from './OpenMenuForMobileBR'
import Link from 'next/link'

export default function MenuBR({ children }) {
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

        <TraductionButtonBR />

        <OpenMenuForMobileBR>
          <div className={styles.menuNavsArea}>
            <nav className={styles.contactNav}>
              <ul>
                <li>Marque um Horário <FaChevronRight /></li>
              </ul>
            </nav>
            <nav className={styles.nav}>
              <ul>
                <li><Link href={'/pt-BR'}>HOME</Link></li>
                <li><Link href={'/pt-BR/collections'}>COLEÇÕES</Link></li>
                <li>COMENTÁRIOS</li>
                <li><Link href={'/pt-BR/blog'}>BLOG</Link></li>
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
        </OpenMenuForMobileBR>
      </header >

      <main>{children}</main>
    </>
  )
}
