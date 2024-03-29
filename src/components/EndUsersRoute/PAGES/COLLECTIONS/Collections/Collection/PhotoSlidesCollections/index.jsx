'use client'

// React imports
import { useState, useEffect, useCallback } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

// Styles imports
import styles from './styles.module.css'
import { MdClose } from 'react-icons/md'

// Component Declaration
export default function PhotoSlidesCollections({ images }) {
  // States declaratios
  const [slide, setSlide] = useState(2)
  const [slideClass, setSlideClass] = useState(styles.secondSlide)
  const [imageShowModal, setImageShowModal] = useState(false)
  const [imageInModal, setImageInModal] = useState('')

  // Functions to manipulate window object
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
  }
  //

  // // Use Effects
  // useEffect(() => {
  //   setTimeout(() => {
  //     changeSlideFromRight()
  //   }, 100000)
  // }, [changeSlideFromRight])
  // //

  // Return components, with functions to call API and language
  return (
    <>
      <div className={styles.container}>
        <div className={styles.fromLeftArea}>
          <button
            className={styles.fromLeftButton}
            onClick={changeSlideFromLeft}
          >
            <FiArrowLeft
              className={styles.fromLeftImage}
              width={100}
              height={100}
            />
          </button>
        </div>

        <div
          className={`
        ${styles.SlideArea}
        ${slideClass}
        `}
        >
          {images
            ? images.map((image) => {
                return (
                  <>
                    <Image
                      key={image.id}
                      className={styles.image}
                      src={image.cover.url}
                      alt={image.collection.title}
                      width={1620}
                      height={1280}
                      onClick={(e) => {
                        setImageShowModal(true)
                        setImageInModal(image.cover.url)
                      }}
                    />
                    {imageShowModal && (
                      <div className={styles.modal}>
                        <MdClose
                          width={50}
                          height={50}
                          onClick={(e) => setImageShowModal(false)}
                        />
                        <Image
                          className={styles.imageInModal}
                          src={imageInModal}
                          alt="Ivana Beaumond"
                          width={1620}
                          height={1280}
                        />
                      </div>
                    )}
                  </>
                )
              })
            : ''}
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
    </>
  )
  //
}
