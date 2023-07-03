'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

import styles from './styles.module.css'

export default function CollectionsItemsCard({ data }) {
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
      setSlide(5)
      setSlideClass(styles.fifthSlide)
    }
    if (slide === 5) {
      setSlide(1)
      setSlideClass(styles.firstSlide)
    }
  }

  function changeSlideFromLeft() {
    if (slide === 1) {
      setSlide(5)
      setSlideClass(styles.fifthSlide)
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
    if (slide === 5) {
      setSlide(4)
      setSlideClass(styles.fourthSlide)
    }
  }

  return (
    <>
      <div className={styles.titleArea}>
        <h1 className={styles.title}>Confira Nossas<br />Categorias de Roupas</h1>
        <HiOutlineArrowNarrowDown
          className={styles.arrowDown}
          width={100}
          height={100}
        />
      </div>
      <section className={styles.section}>
        <div className={styles.fromLeftArea}>
          <button className={styles.fromLeftButton} onClick={changeSlideFromLeft}>
            <FiArrowLeft
              className={styles.fromLeftImage}
              width={100}
              height={100}
            />
          </button>
        </div>

        <div className={styles.slides}>
          <div className={
            `
        ${styles.SlideArea}
        ${slideClass}
        `
          }>


            {data.categories.map((categorie) => {
              return (
                <aside
                  key={categorie.id}
                  className={styles.aside}
                >
                  <h3>{categorie.name}</h3>
                  <Image
                    className={styles.image}
                    src={categorie.imageUrl}
                    alt={categorie.imageAlt}
                    width={1080}
                    height={1920}
                  />
                  <div className={styles.comments}>
                    <p>{categorie.description}</p>
                    <button><Link href={categorie.route}>Descubra Agora <FaArrowRight /></Link></button>
                  </div>
                </aside>
              )
            })}

          </div>


        </div >

        <div className={styles.fromRightArea} onClick={changeSlideFromRight}>
          <button className={styles.fromRightButton}>
            <FiArrowRight
              className={styles.fromRightImage}
              width={100}
              height={100}
            />
          </button>

        </div >
      </section>
    </>
  )
}