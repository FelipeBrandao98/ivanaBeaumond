'use client'

// React imports
import { useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function ItemCollection({ product }) {
  // States declaratios
  const [hoverPoint, setHoverPoint] = useState(0)
  const [point, setPoint] = useState(0)

  // Functions to manipulate window object
  function handlePointOne() {
    setPoint(1)
  }
  function handlePointTwo() {
    setPoint(2)
  }
  function handlePointThree() {
    setPoint(3)
  }
  function handlePointFour() {
    setPoint(4)
  }
  function handlePointFive() {
    setPoint(5)
  }
  //

  // Return components, with functions to call API and language
  return (
    <aside className={styles.container}>
      <Image
        className={styles.image}
        src={product.cover.url}
        alt={product.name}
        width={300}
        height={300}
      />
      <div className={styles.starArea}>
        <h2 className={styles.title}>{product.name}</h2>
        <div className={styles.row}>
          <span className={styles.starSpan} onClick={handlePointOne}>
            {point >= 1 ? (
              <AiFillStar className={styles.star} width={40} height={40} />
            ) : (
              <AiOutlineStar className={styles.star} width={40} height={40} />
            )}
          </span>
          <span className={styles.starSpan} onClick={handlePointTwo}>
            {point >= 2 ? (
              <AiFillStar className={styles.star} width={40} height={40} />
            ) : (
              <AiOutlineStar className={styles.star} width={40} height={40} />
            )}
          </span>
          <span className={styles.starSpan} onClick={handlePointThree}>
            {point >= 3 ? (
              <AiFillStar className={styles.star} width={40} height={40} />
            ) : (
              <AiOutlineStar className={styles.star} width={40} height={40} />
            )}
          </span>
          <span className={styles.starSpan} onClick={handlePointFour}>
            {point >= 4 ? (
              <AiFillStar className={styles.star} width={40} height={40} />
            ) : (
              <AiOutlineStar className={styles.star} width={40} height={40} />
            )}
          </span>
          <span className={styles.starSpan} onClick={handlePointFive}>
            {point >= 5 ? (
              <AiFillStar className={styles.star} width={40} height={40} />
            ) : (
              <AiOutlineStar className={styles.star} width={40} height={40} />
            )}
          </span>
        </div>
      </div>
    </aside>
  )
  //
}
