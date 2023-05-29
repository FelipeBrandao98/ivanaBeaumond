import Image from 'next/image'
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageSocialMediaArea}>
        <div className={styles.socialMediaButtonsArea}>
          <a href="">
            <BsInstagram size={30} />
          </a>
          <a href="">
            <BsFacebook size={30} />
          </a>
          <a href="">
            <FaTiktok size={30} />
          </a>
          <a href="">
            <BsYoutube size={30} />
          </a>
        </div>
        <Image
          className={styles.logoImg}
          src={'/logo-black.svg'}
          alt='Ivana Beaumond Logo'
          width={300}
          height={100}
        />
      </div>

      <div className={styles.footerContact}>
        <a href="">
          FAQ
        </a>
        |
        <a href="">
          Become a Retailer
        </a>
        |
        <a href="">
          Privacy Policy
        </a>
        |
        <a href="">
          Authentic Products
        </a>
        |
        <a href="">
          Contact
        </a>

      </div>

      <div className={styles.footerCopyDev}>

        <p>
          Copyright © 2023 IVANNA BEAUMOND
        </p>
        <p>
          Website design & development by ...
        </p>
      </div>
    </footer>
  )
}