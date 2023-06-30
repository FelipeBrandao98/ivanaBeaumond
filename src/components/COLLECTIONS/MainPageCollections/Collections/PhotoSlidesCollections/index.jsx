'use client'
import { useState, useEffect } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

import styles from './styles.module.css'

export default function PhotoSlidesCollections() {
  const [slide, setSlide] = useState(2)
  const [slideClass, setSlideClass] = useState(styles.secondSlide)

  // useEffect(() => {

  //   setTimeout(() => {
  //     changeSlideFromRight()
  //   }, 15000);
  // }, [])

  function changeSlideFromRight() {
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
  }

  function changeSlideFromLeft() {
    if (slide === 1) {
      setSlide(4)
      setSlideClass(styles.fourthSlide)
    }
    if (slide === 2) {
      setSlide(1)
      setSlideClass(styles.firstSlide)
    }
    if (slide === 3) {
      setSlide(2)
      setSlideClass(styles.secondSlide)
    }
    if (slide === 4) {
      setSlide(3)
      setSlideClass(styles.thirdSlide)
    }
  }

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
            className={
              `
                ${styles.slideButton}
                ${slide === 1 ? styles.slideButtonSelected : ''}
              `
            }
          >

          </span>
          <span
            className={
              `
                ${styles.slideButton}
                ${slide === 2 ? styles.slideButtonSelected : ''}
              `
            }
          >

          </span>
          <span
            className={
              `
                ${styles.slideButton}
                ${slide === 3 ? styles.slideButtonSelected : ''}
              `
            }
          >

          </span>
          <span
            className={
              `
                ${styles.slideButton}
                ${slide === 4 ? styles.slideButtonSelected : ''}
              `
            }
          >

          </span>
        </div>
      </div>

      <div className={
        `
        ${styles.SlideArea}
        ${slideClass}
        `
      }>

        <Image
          className={styles.image}
          src={'/photos_blog/photo_blog_banner_1.jpg'}
          alt='Ivana Beaumond'
          width={1620}
          height={1280}
        />

        <Image
          className={styles.image}
          src={'/photos_blog/photo_blog_3.jpg'}
          alt='Ivana Beaumond'
          width={1620}
          height={1280}
        />

        <Image
          className={styles.image}
          src={'/photos_blog/photo_blog_2.jpg'}
          alt='Ivana Beaumond'
          width={1620}
          height={1280}
        />

        <Image
          className={styles.image}
          src={'/photos_blog/photo_blog_1.jpeg'}
          alt='Ivana Beaumond'
          width={1620}
          height={1280}
        />

      </div >

      <div className={styles.fromRightArea} onClick={changeSlideFromRight}>
        <button className={styles.fromRightButton}>
          <FiArrowRight
            className={styles.fromRightImage}
            width={100}
            height={100}
          />
        </button>
      </div>

    </div >
  )
}