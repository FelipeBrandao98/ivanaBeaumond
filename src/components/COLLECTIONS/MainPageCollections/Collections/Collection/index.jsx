'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { TbHandClick } from 'react-icons/tb'

import styles from './styles.module.css'

import PhotoSlidesCollections from './PhotoSlidesCollections'
import useLangDict from '@/utils/useLangDict'

export default function Collection({
  id,
  lang,
  title,
  description,
  imageUrl,
  functions,
}) {
  const [displayed, setDisplayed] = useState(false)
  const [images, setImages] = useState([])

  const { getCollectionImages } = functions

  function handleDisplayDetails() {
    displayed ? setDisplayed(false) : setDisplayed(true)
  }

  async function getCollectionImagesRepo(id) {
    const res = await getCollectionImages(id)
    setImages(res)
  }

  useEffect(() => {
    getCollectionImagesRepo(id)
  }, [])

  return (
    <aside className={styles.collection} key={id}>
      {!displayed ? (
        <div className={styles.openDetails}>
          <span
            className={styles.buttonOpenContent}
            onClick={handleDisplayDetails}
          >
            <TbHandClick
              className={styles.buttonOpenContentImage}
              width={480}
              height={480}
              color="white"
            />
            <p>{useLangDict(lang).collections.moreInfo}</p>
          </span>
        </div>
      ) : (
        ''
      )}

      <div
        className={`
                  ${styles.contentArea}
                  ${displayed ? styles.displayed : ''}
                `}
      >
        <div className={styles.titleArea}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.row}>
          <div className={styles.descriptionArea}>
            <p className={styles.description}>{description}</p>
          </div>

          <PhotoSlidesCollections images={images} />
        </div>
        <div className={styles.buttonArea}>
          <button className={styles.button}>
            {useLangDict(lang).collections.seeMore}
          </button>
        </div>
      </div>
      <Image
        className={styles.image}
        src={imageUrl}
        alt="Ivana Beaumond"
        width={1920}
        height={1080}
      />
    </aside>
  )
}
