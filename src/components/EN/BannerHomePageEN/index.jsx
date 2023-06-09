import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

import styles from './styles.module.css'

export default function BannerHomePageEN() {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <Image
          className={styles.image}
          src='/homeimage.jpg'
          alt="Foto de Noiva na Praia"
          width={1920}
          height={1080}
        />
        <h1 className={styles.h1}>DÉCOUVREZ LE MONDE MERVEILLEUX DE<br />IVANA BEAUMOND</h1>
        <h3 className={styles.h3}>
          <a href="">DÉCOUVREZ MAINTENANT
            <FaArrowRight
              className={styles.span}
            />
          </a>
        </h3>
      </article>
    </section>
  )
}