import Image from 'next/image'

import styles from './styles.module.css'

export default function SuitBannerHomePageEN() {
  return (
    <>
      <section className={styles.section}>
        <aside className={styles.aside}>
          <Image
            className={styles.image}
            src='/photos_collections_items/suit_banner_homepage/terno_bege_homem_deitado_ivana_beaumond.jpg'
            alt='Homem de Terno Bege'
            width={1920}
            height={1080}
          />
        </aside>
      </section>
    </>
  )
}