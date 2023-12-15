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

// Api imports
import getClothes from '@/api/CallsWithoutToken/getClothes'
import SeeCollectionButton from '../SeeCollectionButton'

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

  // // functions to handle with datas from api
  // const getClothesRepo = useCallback(async () => {
  //   const res = await getClothes(lang, collectionId)
  //   setImages(res)
  // }, [lang, collectionId])
  // //

  // // Use Effects
  // useEffect(() => {
  //   getClothesRepo()
  // }, [getClothesRepo])
  // //

  const imagesSlide = [
    {
      id: 1,
      url: imageUrl,
    },
    {
      id: 2,
      url: imageUrl,
    },
    {
      id: 3,
      url: imageUrl,
    },
    {
      id: 4,
      url: imageUrl,
    },
  ]

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
        <PhotoSlidesCollections images={imagesSlide} />
        <SeeCollectionButton lang={lang} collectionId={collectionId} />
      </aside>
    </>
  )
  //
}
