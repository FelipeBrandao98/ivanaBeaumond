'use client'
import Image from 'next/image'
import { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import styles from './styles.module.css'

export default function ItemCollection() {
  const [hoverPoint, setHoverPoint] = useState(0)
  const [point, setPoint] = useState(0)

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

  return (
    <aside className={styles.container}>
      <Image
        className={styles.image}
        src={'/photos_collections_items/vestido_de_dama_ivana_beaumond.jpg'}
        alt='Ivana Beaumond'
        width={300}
        height={300}
      />
      <div className={styles.starArea}>
        <h2 className={styles.title}>Debutantes 1</h2>
        <div className={styles.row}>
          <span className={styles.starSpan} onClick={handlePointOne}>
            {point >= 1 ?
              <AiFillStar
                className={styles.star}
                width={40}
                height={40}
              />
              :
              <AiOutlineStar
                className={styles.star}
                width={40}
                height={40}
              />
            }
          </span>
          <span className={styles.starSpan} onClick={handlePointTwo}>
            {point >= 2 ?
              <AiFillStar
                className={styles.star}
                width={40}
                height={40}
              />
              :
              <AiOutlineStar
                className={styles.star}
                width={40}
                height={40}
              />
            }
          </span>
          <span className={styles.starSpan} onClick={handlePointThree}>
            {point >= 3 ?
              <AiFillStar
                className={styles.star}
                width={40}
                height={40}
              />
              :
              <AiOutlineStar
                className={styles.star}
                width={40}
                height={40}
              />
            }
          </span>
          <span className={styles.starSpan} onClick={handlePointFour}>
            {point >= 4 ?
              <AiFillStar
                className={styles.star}
                width={40}
                height={40}
              />
              :
              <AiOutlineStar
                className={styles.star}
                width={40}
                height={40}
              />
            }
          </span>
          <span className={styles.starSpan} onClick={handlePointFive}>
            {point >= 5 ?
              <AiFillStar
                className={styles.star}
                width={40}
                height={40}
              />
              :
              <AiOutlineStar
                className={styles.star}
                width={40}
                height={40}
              />
            }
          </span>
        </div>
      </div>
    </aside>
  )
}