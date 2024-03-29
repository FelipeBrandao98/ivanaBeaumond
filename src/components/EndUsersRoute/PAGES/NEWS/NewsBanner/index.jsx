'use client'

// React imports
import { useEffect, useState, useCallback } from 'react'

// Next.js Components imports
import Image from 'next/image'
import Link from 'next/link'

// Icons imports
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Manipulate strings imports
import { format } from 'date-fns'
import formatToUrl from '@/utils/formatToUrl'
import formatToSubTitle from '@/utils/formatToSubTitle'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function NewsSlide({ lang, data }) {
  // States declaratios
  const [slide, setSlide] = useState(2)
  const [slideClass, setSlideClass] = useState(styles.secondSlide)

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Functions to manipulate window object
  const changeSlideFromRight = useCallback(() => {
    if (slide === 1) {
      setSlide(2)
      setSlideClass(styles.secondSlide)
    }
    if (slide === 2) {
      setSlide(3)
      setSlideClass(styles.thirdSlide)
    }
    if (slide === 3) {
      setSlide(4)
      setSlideClass(styles.fourthSlide)
    }
    if (slide === 4) {
      setSlide(1)
      setSlideClass(styles.firstSlide)
    }
  }, [slide])

  const changeSlideFromLeft = useCallback(() => {
    if (slide === 1) {
      setSlide(4)
      setSlideClass(styles.secondSlide)
    }
    if (slide === 2) {
      setSlide(1)
      setSlideClass(styles.thirdSlide)
    }
    if (slide === 3) {
      setSlide(2)
      setSlideClass(styles.fourthSlide)
    }
    if (slide === 4) {
      setSlide(3)
      setSlideClass(styles.firstSlide)
    }
  }, [slide])
  //

  // Use Effects
  // useEffect(() => {
  //   setTimeout(() => {
  //     changeSlideFromRight()
  //   }, 15000)
  // }, [changeSlideFromRight])
  //

  // Return components, with functions to call API and language
  return (
    <section className={styles.content}>
      <div className={styles.fromLeftArea}>
        <button className={styles.fromLeftButton} onClick={changeSlideFromLeft}>
          <FiArrowLeft
            className={styles.fromLeftImage}
            width={100}
            height={100}
          />
        </button>
      </div>

      <div
        className={`
        ${styles.slideArea}
        ${slideClass}
        `}
      >
        {data.map((item) => {
          return (
            <aside key={item.id} className={styles.post}>
              <div className={styles.titleArea}>
                <h1 className={styles.title}>{item.title}</h1>
              </div>

              <Image
                className={styles.imageBanner}
                src={item.cover.url}
                alt={item.cover.author}
                width={1280}
                height={720}
              />

              <div className={styles.descriptionArea}>
                <h2 className={styles.description}>{item.subtitle}</h2>
                <Link
                  className={styles.button}
                  href={`/noticias/${formatToUrl(item.title)}/${item.id}`}
                  prefetch
                  replace
                >
                  {languageTraducted.layout.news.seeMore}
                </Link>
              </div>
            </aside>
          )
        })}
      </div>

      <div className={styles.fromRightArea} onClick={changeSlideFromRight}>
        <button className={styles.fromRightButton}>
          <FiArrowRight
            className={styles.fromRightImage}
            width={100}
            height={100}
          />
        </button>
      </div>

      <div className={styles.slideNumberButtonsArea}>
        <div className={styles.slideNumberButtons}>
          <span
            className={`
                ${styles.slideButton}
                ${slide === 1 ? styles.slideButtonSelected : ''}
              `}
          ></span>
          <span
            className={`
                ${styles.slideButton}
                ${slide === 2 ? styles.slideButtonSelected : ''}
              `}
          ></span>
          <span
            className={`
                ${styles.slideButton}
                ${slide === 3 ? styles.slideButtonSelected : ''}
              `}
          ></span>
          <span
            className={`
            ${styles.slideButton}
            ${slide === 4 ? styles.slideButtonSelected : ''}
            `}
          ></span>
        </div>
      </div>
    </section>
  )
  //
}
