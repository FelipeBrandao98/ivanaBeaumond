'use client'

// React imports
import { useState } from 'react'

// Next.js Components imports
import Image from 'next/image'
import Link from 'next/link'

// Icons imports
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function CollectionsHome({ lang, data }) {
  // States declaratios
  const [card, setCard] = useState(2)
  const [cardClass, setCardClass] = useState(styles.secondCard)

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Functions to manipulate window object
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
  //

  // Return components, with functions to call API and language
  return (
    <>
      <>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>
            {languageTraducted.home.titlePartOne}
            <br />
            {languageTraducted.home.titlePartTwo}
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
                      src={categorie.cover?.url || ''}
                      alt={categorie.cover?.author || 'Ivana'}
                      width={1080}
                      height={1920}
                    />
                    <div className={styles.comments}>
                      <p>{categorie.subdescription}</p>
                      <button>
                        <Link
                          href={{
                            pathname: '/colecoes',
                            lang: lang,
                          }}
                        >
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
    </>
  )
}
