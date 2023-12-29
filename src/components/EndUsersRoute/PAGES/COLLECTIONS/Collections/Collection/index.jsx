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
import Link from 'next/link'
import formatToUrl from '@/utils/formatToUrl'

// Component Declaration
export default function Collection({ lang, collectionId, title, imageUrl }) {
  // States declaratios
  const [displayed, setDisplayed] = useState(false)
  const [images, setImages] = useState([])

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Return components, with functions to call API and language
  return (
    <>
      <aside className={styles.container}>
        <Link
          href={{
            pathname: `/colecoes/${formatToUrl(title)}/${collectionId}`,
            lang: lang,
          }}
        >
          <section className={styles.content}>
            <Image
              className={styles.image}
              src={imageUrl ? imageUrl : null}
              alt="Ivana Beaumond"
              width={1080}
              height={1080}
            />
          </section>
          <h1>{title}</h1>
        </Link>
      </aside>
    </>
  )
  //
}
