'use client'
import styles from './styles.module.css'

import Collection from './Collection'

export default function Collections({ lang, data }) {
  return (
    <section className={styles.section}>
      {data.map((data) => {
        return (
          <Collection
            key={data.id}
            id={data.id}
            lang={lang}
            title={data.title}
            description={data.description}
            imageUrl={data.cover.url}
          />
        )
      })}
    </section>
  )
}
