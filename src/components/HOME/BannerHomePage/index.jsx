// Next.js Components imports
import Image from 'next/image'
import Link from 'next/link'

// Icons imports
import { FaArrowRight } from 'react-icons/fa'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function BannerHomePage() {
  // Return components, with functions to call API and language
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <Image
          className={styles.image}
          src="/homeimage.jpg"
          alt="Foto de Noiva na Praia"
          width={1920}
          height={1080}
        />
        <h1 className={styles.h1}>
          DÉCOUVREZ LE MONDE MERVEILLEUX DE
          <br />
          IVANA BEAUMOND
        </h1>
        <h3 className={styles.h3}>
          <Link href="pt-BR/collections">
            DÉCOUVREZ MAINTENANT
            <FaArrowRight className={styles.span} />
          </Link>
        </h3>
      </article>
    </section>
  )
  //
}
