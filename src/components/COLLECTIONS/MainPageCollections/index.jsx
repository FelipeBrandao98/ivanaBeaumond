// Next.js Components imports
import Image from 'next/image'

// Components imports
import Collections from './Collections'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function CollectionsPage({ lang, data, functions }) {
  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Return components, with functions to call API and language
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
        <h1 className={styles.title}>{languageTraducted.collections.title}</h1>
        <div className={styles.subTitle}>
          <h2>{languageTraducted.collections.subTitle}</h2>
          <h3>Ivana Beaumond ©</h3>
        </div>
      </section>
      <Collections lang={lang} data={data} functions={functions} />
    </>
  )
  //
}
