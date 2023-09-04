'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import styles from './styles.module.css'

export default function Event({ title }) {
  const [slide, setSlide] = useState(1)
  const [slideClass, setSlideClass] = useState(styles.firstArea)

  function changeSlideFromRight() {
    if (slide === 1) {
      setSlide(2)
      setSlideClass(styles.secondArea)
    }
    if (slide === 2) {
      setSlide(3)
      setSlideClass(styles.thirdArea)
    }
    if (slide === 3) {
      setSlide(4)
      setSlideClass(styles.fourthArea)
    }
    if (slide === 4) {
      setSlide(1)
      setSlideClass(styles.firstArea)
    }
  }

  function changeSlideFromLeft() {
    if (slide === 1) {
      setSlide(4)
      setSlideClass(styles.fourthArea)
    }
    if (slide === 2) {
      setSlide(1)
      setSlideClass(styles.firstArea)
    }
    if (slide === 3) {
      setSlide(2)
      setSlideClass(styles.secondArea)
    }
    if (slide === 4) {
      setSlide(3)
      setSlideClass(styles.thirdArea)
    }
  }

  return (
    <section className={styles.section}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.contentArea}>
        <div className={styles.fromLeftArea}>
          <button className={styles.fromLeftButton} onClick={changeSlideFromLeft}>
            <FiArrowLeft
              className={styles.fromLeftImage}
              width={100}
              height={100}
            />
          </button>
        </div>

        <div className={
          `
        ${styles.postsArea}
        ${slideClass}
        `
        }>
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
    </section>
  )
}