// DateFNS imports
import { format } from 'date-fns'
import { ptBR, de, fr, enUS } from 'date-fns/locale'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function NewsHead({ lang, data }) {
  const { id, title, publishDate } = data

  const date = format(new Date(publishDate), 'dd/LLLL/yyyy', {
    locale:
      lang === 'pt-BR'
        ? ptBR
        : lang === 'de'
          ? de
          : lang === 'fr'
            ? fr
            : lang === 'en'
              ? enUS
              : ptBR,
  }).split('/')
  const day = date[0]
  const month = date[1]
  const year = date[2]

  // Return components, with functions to call API and language
  return (
    <>
      <section className={styles.container}>
        <div className={styles.dateArea}>
          <span className={styles.day}>{day}</span>
          <span className={styles.month}>{month}</span>
          <span className={styles.year}>{year}</span>
        </div>

        <h1 className={styles.title}>{title}</h1>
      </section>
    </>
  )
  //
}
