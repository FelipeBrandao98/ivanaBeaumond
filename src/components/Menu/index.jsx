import 'server-only'

import Image from 'next/image'
import { FaInstagram, FaFacebookSquare, FaArrowRight } from 'react-icons/fa'
import styles from './styles.module.css'

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
        <nav className={styles.contactNav}>
          <ul>
            <li>Marque um Horário <FaArrowRight /></li>
          </ul>
        </nav>
        <nav className={styles.nav}>
          <ul>
            <li>VESTIDOS DE NOIVA</li>
            <li>HOME</li>
            <li>COLEÇÕES</li>
            <li>COMENTÁRIOS</li>
          </ul>
        </nav>
        <nav className={styles.navSociaMedia}>
          <ul>
            <li>@ivanabeaumond <FaInstagram /></li>
            <li>IvanaBeaumond <FaFacebookSquare /></li>
            <li>@ivanaparisdebutantes <FaInstagram /></li>
          </ul>
        </nav>
      </header>

      {children}
    </>
  )
}