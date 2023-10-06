import Image from 'next/image'

import Collections from './Collections'

import styles from './styles.module.css'
import useLangDict from '@/utils/useLangDict'

export default function MainPageCollections({ lang, data, functions }) {
  return (
    <>
      <section className={styles.section}>
        <Image
          className={styles.imageHeader}
          src={
            '/photos_collections_items/suit_banner_homepage/terno_bege_homem_deitado_ivana_beaumond.jpg'
          }
          alt="Ivana Beaumond"
          width={1920}
          height={1080}
        />
        <h1 className={styles.title}>{useLangDict(lang).collections.title}</h1>
        <div className={styles.subTitle}>
          <h2>{useLangDict(lang).collections.subTitle}</h2>
          <h3>Ivana Beaumond ©</h3>
        </div>
      </section>
      <Collections lang={lang} data={data} functions={functions} />
    </>
  )
}
