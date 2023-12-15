'use client'

// Components imports
import Collection from './Collection'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function Collections({ lang, data }) {
  // Return components, with functions to call API and language
  return (
    <section className={styles.section}>
      {data.map((data) => {
        return (
          <>
            <Collection
              key={data.id}
              collectionId={data.id}
              lang={lang}
              title={data.title}
              description={data.description}
              imageUrl={data.cover.url || ''}
            />
            <Collection
              key={data.id + 1}
              collectionId={data.id}
              lang={lang}
              title={data.title}
              description={data.description}
              imageUrl={data.cover.url || ''}
            />
          </>
        )
      })}
    </section>
  )
  //
}
