import Image from 'next/image'

import styles from './styles.module.css'

export default function BannerHomePage() {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <Image
          className={styles.image}
          src='/homeimage.jpg'
          alt="Foto de Noiva na Praia"
          width={3000}
          height={4000}
        />
      </article>
    </section>
  )
}