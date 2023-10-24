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
  const [card, setCard] = useState(2)
  const [cardClass, setCardClass] = useState(styles.secondCard)

  function changeCardFromRight() {
    if (card === 1) {
      setCard(2)
      setCardClass(styles.secondCard)
    }
    if (card === 2) {
      setCard(3)
      setCardClass(styles.thirdCard)
    }
    if (card === 3) {
      setCard(4)
      setCardClass(styles.fourthCard)
    }
    if (card === 4) {
      setCard(5)
      setCardClass(styles.fifthCard)
    }
    if (card === 5) {
      setCard(1)
      setCardClass(styles.firstCard)
    }
  }

  function changeCardFromLeft() {
    if (card === 1) {
      setCard(5)
      setCardClass(styles.fifthCard)
    }
    if (card === 2) {
      setCard(1)
      setCardClass(styles.firstCard)
    }
    if (card === 3) {
      setCard(2)
      setCardClass(styles.secondCard)
    }
    if (card === 4) {
      setCard(3)
      setCardClass(styles.thirdCard)
    }
    if (card === 5) {
      setCard(4)
      setCardClass(styles.fourthCard)
    }
  }

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
            onClick={changeCardFromLeft}
          >
            <FiArrowLeft
              className={styles.fromLeftImage}
              width={100}
              height={100}
            />
          </button>
        </div>

        <div className={styles.cards}>
          <div
            className={`
        ${styles.CardArea}
        ${cardClass}
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

        <div className={styles.fromRightArea} onClick={changeCardFromRight}>
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
