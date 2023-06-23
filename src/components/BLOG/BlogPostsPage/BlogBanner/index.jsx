'use client'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { useEffect, useState } from "react"
import Image from "next/image"

import styles from './styles.module.css'

export default function BlogBanner() {
  const [slide, setSlide] = useState(2)
  const [slideClass, setSlideClass] = useState(styles.secondBanner)

  useEffect(() => {

    setTimeout(() => {
      changeSlideFromRight()
    }, 15000);
  }, [])

  function changeSlideFromRight() {
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
  }

  function changeSlideFromLeft() {
    if (slide === 1) {
      setSlide(4)
      setSlideClass(styles.fourthBanner)
    }
    if (slide === 2) {
      setSlide(1)
      setSlideClass(styles.firstBanner)
    }
    if (slide === 3) {
      setSlide(2)
      setSlideClass(styles.secondBanner)
    }
    if (slide === 4) {
      setSlide(3)
      setSlideClass(styles.thirdBanner)
    }
  }

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
        ${styles.bannerArea}
        ${slideClass}
        `
      }>


        <aside className={styles.post}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>Ivana faz exposição em paris</h1>
          </div>

          <div className={styles.descriptionArea}>
            <h2 className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique iure reprehenderit numquam asperiores facere saepe provident esse animi et accusamus, rem id labore repudiandae distinctio ipsum architecto commodi eveniet?</h2>

            <button className={styles.button}>Leia Mais</button>
          </div>

          <div className={styles.imageArea}>
            <Image
              className={styles.image}
              src={'/photos_blog/photo_blog_banner_1.jpg'}
              alt='Ivana Beaumond'
              width={1620}
              height={1280}
            />
          </div>
        </aside>

        <aside className={styles.post}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>Ivana faz exposição em paris</h1>
          </div>

          <div className={styles.descriptionArea}>
            <h2 className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique iure reprehenderit numquam asperiores facere saepe provident esse animi et accusamus, rem id labore repudiandae distinctio ipsum architecto commodi eveniet?</h2>

            <button className={styles.button}>Leia Mais</button>
          </div>

          <div className={styles.imageArea}>
            <Image
              className={styles.image}
              src={'/photos_blog/photo_blog_3.jpg'}
              alt='Ivana Beaumond'
              width={1620}
              height={1280}
            />
          </div>
        </aside>

        <aside className={styles.post}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>Ivana faz exposição em paris</h1>
          </div>

          <div className={styles.descriptionArea}>
            <h2 className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique iure reprehenderit numquam asperiores facere saepe provident esse animi et accusamus, rem id labore repudiandae distinctio ipsum architecto commodi eveniet?</h2>

            <button className={styles.button}>Leia Mais</button>
          </div>

          <div className={styles.imageArea}>
            <Image
              className={styles.image}
              src={'/photos_blog/photo_blog_2.jpg'}
              alt='Ivana Beaumond'
              width={1620}
              height={1280}
            />
          </div>
        </aside>


        <aside className={styles.post}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>Ivana Beaumond
              é destaque na mídia com seu novo editorial no Pará</h1>
          </div>

          <div className={styles.descriptionArea}>
            <h2 className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique iure reprehenderit numquam asperiores facere saepe provident esse animi et accusamus, rem id labore repudiandae distinctio ipsum architecto commodi eveniet?</h2>

            <button className={styles.button}>Leia Mais</button>
          </div>

          <div className={styles.imageArea}>
            <Image
              className={styles.image}
              src={'/photos_blog/photo_blog_1.jpeg'}
              alt='Ivana Beaumond'
              width={1620}
              height={1280}
            />
          </div>
        </aside>

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
    </section >
  )
}