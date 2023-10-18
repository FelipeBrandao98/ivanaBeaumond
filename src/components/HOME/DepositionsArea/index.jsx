import Link from 'next/link'

import Deposition from './Deposition'

import styles from './styles.module.css'
import useLangDict from '@/utils/useLangDict'

export default function DepositionsArea({ lang, data }) {
  const languageTraducted = useLangDict(lang)

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
}
