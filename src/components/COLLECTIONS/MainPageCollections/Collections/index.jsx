'use client'
import styles from './styles.module.css'

import Collection from './Collection'

export default function Collections({ data }) {
  return (
    <section className={styles.section}>
      {data.map((data) => {
        return (
          <Collection
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            imageUrl={data.cover.url}
          />
        )
      })}
    </section>
  )
}
