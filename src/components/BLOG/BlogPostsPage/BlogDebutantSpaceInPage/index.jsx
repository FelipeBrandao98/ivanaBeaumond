'use client'
import Image from 'next/image'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'

export default function BlogDebutantSpaceInPage() {
  const [post, setPost] = useState(1)
  const [postClass, setPostClass] = useState(styles.firstPost)

  function changePostFromRight() {
    if (post === 1) {
      setPost(2)
      setPostClass(styles.secondPost)
    }
    if (post === 2) {
      setPost(3)
      setPostClass(styles.thirdPost)
    }
    if (post === 3) {
      setPost(4)
      setPostClass(styles.fourthPost)
    }
    if (post === 4) {
      setPost(1)
      setPostClass(styles.firstPost)
    }
  }

  function changePostFromLeft() {
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
    <section className={styles.section}>
      <h4 className={styles.title}>Espaço Debutantes</h4>

      <div className={styles.contentArea}>
        <div className={styles.fromLeftArea}>
          <button className={styles.fromLeftButton}>
            <FiArrowLeft
              className={styles.fromLeftImage}
              width={100}
              height={100}
            />
          </button>
        </div>

        <div
          className={
            `
          ${styles.postsArea}
          ${postClass}
          `
          }
        >
          <aside
            className={styles.post}
          >
            <h5 className={styles.postTitle}>Ivana Beaumond assina novo editorial de noivas em Paris</h5>
            <div className={styles.imageArea}>
              <Image
                className={styles.image}
                src={'/homeimage.jpg'}
                alt={'Ivana Beaumond'}
                width={'320'}
                height={'180'}
              />
              <p className={styles.imageDescription}>Soluta: quisquam aliquid.</p>
            </div>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum </p>
            <p className={styles.date}>29/10/2015</p>
            <div className={styles.seeMoreArea}>
              <button className={styles.seeMoreButton}>Leia Mais</button>
            </div>
          </aside>

          <aside className={styles.post}>
            <h5 className={styles.postTitle}>Ivana Beaumond assina novo editorial de noivas em Paris</h5>
            <div className={styles.imageArea}>
              <Image
                className={styles.image}
                src={'/homeimage.jpg'}
                alt={'Ivana Beaumond'}
                width={'320'}
                height={'180'}
              />
              <p className={styles.imageDescription}>Soluta: quisquam aliquid.</p>
            </div>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum </p>
            <p className={styles.date}>29/10/2015</p>
            <div className={styles.seeMoreArea}>
              <button className={styles.seeMoreButton}>Leia Mais</button>
            </div>
          </aside>

          <aside className={styles.post}>
            <h5 className={styles.postTitle}>Ivana Beaumond assina novo editorial de noivas em Paris</h5>
            <div className={styles.imageArea}>
              <Image
                className={styles.image}
                src={'/homeimage.jpg'}
                alt={'Ivana Beaumond'}
                width={'320'}
                height={'180'}
              />
              <p className={styles.imageDescription}>Soluta: quisquam aliquid.</p>
            </div>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum </p>
            <p className={styles.date}>29/10/2015</p>
            <div className={styles.seeMoreArea}>
              <button className={styles.seeMoreButton}>Leia Mais</button>
            </div>
          </aside>

          <aside className={styles.post}>
            <h5 className={styles.postTitle}>Ivana Beaumond assina novo editorial de noivas em Paris</h5>
            <div className={styles.imageArea}>
              <Image
                className={styles.image}
                src={'/homeimage.jpg'}
                alt={'Ivana Beaumond'}
                width={'320'}
                height={'180'}
              />
              <p className={styles.imageDescription}>Soluta: quisquam aliquid.</p>
            </div>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum </p>
            <p className={styles.date}>29/10/2015</p>
            <div className={styles.seeMoreArea}>
              <button className={styles.seeMoreButton}>Leia Mais</button>
            </div>
          </aside>


          <aside className={styles.post}>
            <h5 className={styles.postTitle}>Ivana Beaumond assina novo editorial de noivas em Paris</h5>
            <div className={styles.imageArea}>
              <Image
                className={styles.image}
                src={'/homeimage.jpg'}
                alt={'Ivana Beaumond'}
                width={'320'}
                height={'180'}
              />
              <p className={styles.imageDescription}>Soluta: quisquam aliquid.</p>
            </div>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum </p>
            <p className={styles.date}>29/10/2015</p>
            <div className={styles.seeMoreArea}>
              <button className={styles.seeMoreButton}>Leia Mais</button>
            </div>
          </aside>


          <aside className={styles.post}>
            <h5 className={styles.postTitle}>Ivana Beaumond assina novo editorial de noivas em Paris</h5>
            <div className={styles.imageArea}>
              <Image
                className={styles.image}
                src={'/homeimage.jpg'}
                alt={'Ivana Beaumond'}
                width={'320'}
                height={'180'}
              />
              <p className={styles.imageDescription}>Soluta: quisquam aliquid.</p>
            </div>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum </p>
            <p className={styles.date}>29/10/2015</p>
            <div className={styles.seeMoreArea}>
              <button className={styles.seeMoreButton}>Leia Mais</button>
            </div>
          </aside>
        </div>

        <div className={styles.fromRightArea}>
          <button className={styles.fromRightButton}>
            <FiArrowRight
              className={styles.fromRightImage}
              width={100}
              height={100}
            />
          </button>
        </div>

      </div>
    </section>
  )
}