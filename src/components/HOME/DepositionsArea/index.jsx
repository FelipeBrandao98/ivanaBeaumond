// Next.js Components imports
import Link from 'next/link'

// Components imports
import Deposition from './Deposition'

// Function to traduct component imports
import useLangDict from '@/utils/useLangDict'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function DepositionsArea({ lang, data }) {
  // Instance of Traductor
  const languageTraducted = useLangDict(lang)

  // Return components, with functions to call API and language
  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>{useLangDict(lang).home.depositions.title}</h1>
      <div className={styles.row}>
        {data.map((deposition) => {
          return <Deposition key={deposition.id} data={deposition} />
        })}
      </div>
      <Link className={styles.seeMoreButton} href={'/comentarios'}>
        {languageTraducted.home.depositions.more}
      </Link>
    </section>
  )
  //
}
