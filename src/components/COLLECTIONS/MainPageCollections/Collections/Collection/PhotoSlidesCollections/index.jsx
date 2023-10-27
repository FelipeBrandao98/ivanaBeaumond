'use client'

// React imports
import { useState, useEffect, useCallback } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function PhotoSlidesCollections({ images }) {
  // States declaratios
  const [slide, setSlide] = useState(2)
  const [slideClass, setSlideClass] = useState(styles.secondSlide)

  // Functions to manipulate window object
  const changeSlideFromRight = useCallback(() => {
    if (slide === 1) {
      setSlide(2)
      setSlideClass(styles.secondBanner)
    }
    if (slide === 2) {
      setSlide(3)
      setSlideClass(styles.thirdBanner)
    }
    if (slide === 3) {
      setSlide(4)
      setSlideClass(styles.fourthBanner)
    }
    if (slide === 4) {
      setSlide(1)
      setSlideClass(styles.firstBanner)
    }
  }, [slide])

  const changeSlideFromLeft = useCallback(() => {
    if (slide === 1) {
      setSlide(4)
      setSlideClass(styles.secondBanner)
    }
    if (slide === 2) {
      setSlide(1)
      setSlideClass(styles.thirdBanner)
    }
    if (slide === 3) {
      setSlide(2)
      setSlideClass(styles.fourthBanner)
    }
    if (slide === 4) {
      setSlide(3)
      setSlideClass(styles.firstBanner)
    }
  }, [slide])
  //

  // Use Effects
  useEffect(() => {
    setTimeout(() => {
      changeSlideFromRight()
    }, 100000)
  }, [changeSlideFromRight])
  //

  // Return components, with functions to call API and language
  return (
    <div className={styles.container}>
      <div className={styles.fromLeftArea}>
        <button className={styles.fromLeftButton} onClick={changeSlideFromLeft}>
          <FiArrowLeft
            className={styles.fromLeftImage}
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

      <div
        className={`
        ${styles.SlideArea}
        ${slideClass}
        `}
      >
        {images.map((image) => {
          return (
            <Image
              key={image.id}
              className={styles.image}
              src={image.url}
              alt="Ivana Beaumond"
              width={1620}
              height={1280}
            />
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
    </div>
  )
  //
}
