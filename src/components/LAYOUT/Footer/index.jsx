import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import Image from 'next/image'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.imageSocialMediaArea}>
          <div className={styles.socialMediaButtonsArea}>
            <a href={null}>
              <BsInstagram size={30} />
            </a>
            <a href={null}>
              <BsFacebook size={30} />
            </a>
            <a href={null}>
              <FaTiktok size={30} />
            </a>
            <a href={null}>
              <BsYoutube size={30} />
            </a>
          </div>
          <Image
            className={styles.logoImg}
            src={'/logo-black.svg'}
            alt="Ivana Beaumond Logo"
            width={300}
            height={100}
          />
        </div>

        <div className={styles.footerContact}>
          <a href={null}>FAQ</a>|<a href={null}>Become a Retailer</a>|
          <a href={null}>Privacy Policy</a>|
          <a href={null}>Authentic Products</a>|<a href={null}>Contact</a>
        </div>

        <div className={styles.footerCopyDev}>
          <p>Todos os Direitos Reservados | Ivana Beaumond</p>
          <p>Website design & development by ...</p>
        </div>
      </footer>
    </>
  )
}
