'use client'

import Comment from '../Comment'
import styles from './styles.module.css'

export default function CommentsPage({ lang, data }) {
  return (
    <div className={styles.container}>
      <aside className={styles.filter}>
        <h1>Filtro</h1>
        <section className={styles.filter}>
          <label htmlFor="filterBy">Filtrar por</label>
          <label htmlFor="avaliation">
            <input
              type="range"
              name="avaliation"
              id="avaliation"
              min="0"
              max="5"
              defaultValue="0"
            />
            Mínimo de Avaliação [0 - 5]
          </label>
          <label htmlFor="avaliation">
            <input
              type="range"
              name="avaliation"
              id="avaliation"
              min="0"
              max="5"
              defaultValue="5"
            />
            Máximo de Avaliação [0 - 5]
          </label>
        </section>
        <section></section>
      </aside>
      <aside className={styles.comments}>
        <h1>Commentários</h1>
        <section>
          {data.map((data) => {
            return <Comment key={data.id} lang={lang} data={data} />
          })}
          {data.map((data) => {
            return <Comment key={data.id} lang={lang} data={data} />
          })}
        </section>
      </aside>
    </div>
  )
}
