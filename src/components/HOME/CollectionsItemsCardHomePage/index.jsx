'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

import styles from './styles.module.css'
import useLangDict from '@/utils/useLangDict'

export default function CollectionsItemsCardHomePage({ lang, data }) {
  const [slide, setSlide] = useState(2)
  const [slideClass, setSlideClass] = useState(styles.secondSlide)

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

  return (
    <>
      <div className={styles.titleArea}>
        <h1 className={styles.title}>
          {useLangDict(lang).home.titlePartOne}
          <br />
          {useLangDict(lang).home.titlePartTwo}
        </h1>
        <HiOutlineArrowNarrowDown
          className={styles.arrowDown}
          width={100}
          height={100}
        />
      </div>
      <section className={styles.section}>
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

        <div className={styles.slides}>
          <div
            className={`
        ${styles.SlideArea}
        ${slideClass}
        `}
          >
            {data.map((categorie) => {
              return (
                <aside key={categorie.id} className={styles.aside}>
                  <h3>{categorie.description}</h3>
                  <Image
                    className={styles.image}
                    src={categorie.cover.url}
                    alt={categorie.cover.author}
                    width={1080}
                    height={1920}
                  />
                  <div className={styles.comments}>
                    <p>{categorie.subdescription}</p>
                    <button>
                      <Link href={'/'}>
                        Descubra Agora <FaArrowRight />
                      </Link>
                    </button>
                  </div>
                </aside>
              )
            })}
          </div>
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
    </>
  )
}
