// Next.js Components imports
import Image from 'next/image'
import Link from 'next/link'

// Manipulate strings imports
import { format } from 'date-fns'
import formatToUrl from '@/utils/formatToUrl'
import formatToSubTitle from '@/utils/formatToSubTitle'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function OtherNews({ title, data }) {
  const setData = new Set()

  const filteredData = data.filter((uniqueData) => {
    const duplicatedData = setData.has(uniqueData.id)
    setData.add(uniqueData.id)
    return !duplicatedData
  })

  // Return components, with functions to call API and language
  return (
    <section className={styles.section}>
      {title && <h4 className={styles.title}>{title || 'Título'}</h4>}

      <div className={styles.contentArea}>
        <div
          className={`
          ${styles.postsArea}
          `}
        >
          {filteredData.map((data) => {
            return (
              <aside className={styles.post} key={data.id}>
                <h5 className={styles.postTitle}>{data.title.toUpperCase()}</h5>
                <div className={styles.imageArea}>
                  <Image
                    className={styles.image}
                    src={data.cover.url}
                    alt={data.cover.author}
                    width="320"
                    height="180"
                  />
                  <p className={styles.imageDescription}>{data.coverCredit}</p>
                </div>
                <p className={styles.subTitle}>
                  {formatToSubTitle(data.subtitle)}
                </p>
                <p className={styles.date}>
                  {format(new Date(data.publishDate), 'dd/MM/yyyy')}
                </p>
                <div className={styles.seeMoreArea}>
                  <Link
                    className={styles.seeMoreButton}
                    href={`/noticias/${formatToUrl(data.title)}/${data.id}`}
                    prefetch
                    replace
                  >
                    Leia Mais
                  </Link>
                </div>
              </aside>
            )
          })}
        </div>
      </div>
    </section>
  )
  //
}
