import Link from 'next/link'

import Deposition from './Deposition'

import styles from './styles.module.css'
import useLangDict from '@/utils/useLangDict'

export default function DepositionsArea({ lang, data }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>{useLangDict(lang).home.depositions.title}</h1>
      <div className={styles.row}>
        {data.map((deposition) => {
          return <Deposition key={deposition.id} data={deposition} />
        })}
      </div>
      <Link className={styles.seeMoreButton} href={'/comentarios'}>
        {useLangDict(lang).home.depositions.more}
      </Link>
    </section>
  )
}
