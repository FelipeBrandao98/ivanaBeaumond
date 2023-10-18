'use client'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

import styles from './styles.module.css'
import useLangDict from '@/utils/useLangDict'

export default function BlogBanner({ lang, data }) {
  const [slide, setSlide] = useState(2)
  const [slideClass, setSlideClass] = useState(styles.secondBanner)

  const languageTraducted = useLangDict(lang)

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

  useEffect(() => {
    setTimeout(() => {
      changeSlideFromRight()
    }, 15000)
  }, [changeSlideFromRight])

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
        ${styles.bannerArea}
        ${slideClass}
        `}
      >
        {data.map((item) => {
          return (
            <aside key={item.id} className={styles.post}>
              <div className={styles.titleArea}>
                <h1 className={styles.title}>{item.title}</h1>
              </div>

              <div className={styles.descriptionArea}>
                <h2 className={styles.description}>{item.subtitle}</h2>
                <button className={styles.button}>
                  {languageTraducted.layout.events.seeMore}
                </button>
              </div>

              <div className={styles.imageArea}>
                <Image
                  className={styles.image}
                  src={item.cover.url}
                  alt={item.cover.author}
                  width={1620}
                  height={1280}
                />
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
    </section>
  )
}
