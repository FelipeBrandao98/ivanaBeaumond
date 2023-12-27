'use client'

// React imports
import { useCallback, useEffect, useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { TbHandClick } from 'react-icons/tb'

// Components imports
import PhotoSlidesCollections from './PhotoSlidesCollections'
import SeeCollectionButton from '../SeeCollectionButton'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Styles imports
import styles from './styles.module.css'

// Api imports
import getClotCol from '@/api/CallsWithoutToken/Collections/ClothesCollections/GET/getClotCol'

// Component Declaration
export default function Collection({
  collectionId,
  lang,
  title,
  description,
  imageUrl,
}) {
  // States declaratios
  const [displayed, setDisplayed] = useState(false)
  const [images, setImages] = useState([])

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Functions to manipulate window object
  function handleDisplayDetails() {
    displayed ? setDisplayed(false) : setDisplayed(true)
  }
  //

  // functions to handle with datas from api
  const getClothesRepo = useCallback(async () => {
    const res = await getClotCol(lang, collectionId)
    setImages(res)
  }, [lang, collectionId])
  //

  // Use Effects
  useEffect(() => {
    getClothesRepo()
  }, [getClothesRepo])
  //

  // Return components, with functions to call API and language
  return (
    <>
      <aside className={styles.container}>
        <section className={styles.content}>
          <h1>{title}</h1>
          <Image
            className={styles.image}
            src={imageUrl ? imageUrl : null}
            alt="Ivana Beaumond"
            width={1080}
            height={1080}
          />
          <p>{description}</p>
        </section>
        <PhotoSlidesCollections images={images} />
        <SeeCollectionButton
          lang={lang}
          collectionId={collectionId}
          collectionTitle={title}
        />
      </aside>
    </>
  )
  //
}
