// Next.js Components imports
import Link from 'next/link'

// Components imports
import Comment from '../Comment'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function CommentsHome({ lang, data }) {
  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Return components, with functions to call API and language
  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>{languageTraducted.home.depositions.title}</h1>
      <div className={styles.row}>
        {data.map((deposition) => {
          return <Comment key={deposition.id} data={deposition} />
        })}
      </div>
      <Link className={styles.seeMoreButton} href={'/comentarios'}>
        {languageTraducted.home.depositions.more}
      </Link>
    </section>
  )
  //
}
