'use client'

// React imports
import { useCallback, useEffect, useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { TbHandClick } from 'react-icons/tb'

// Components imports
import PhotoSlidesCollections from './PhotoSlidesCollections'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function Collection({
  id,
  lang,
  title,
  description,
  imageUrl,
  functions,
}) {
  // States declaratios
  const [displayed, setDisplayed] = useState(false)
  const [images, setImages] = useState([])

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Desestructured functions to call api
  const { getCollectionImages } = functions

  // Functions to manipulate window object
  function handleDisplayDetails() {
    displayed ? setDisplayed(false) : setDisplayed(true)
  }
  //

  // functions to handle with datas from api
  const getCollectionImagesRepo = useCallback(async () => {
    const res = await getCollectionImages(id)
    setImages(res)
  }, [getCollectionImages, id])
  //

  // Use Effects
  useEffect(() => {
    getCollectionImagesRepo()
  }, [getCollectionImagesRepo])
  //

  // Return components, with functions to call API and language
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
            <p>{languageTraducted.collections.moreInfo}</p>
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
            {languageTraducted.collections.seeMore}
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
  //
}
