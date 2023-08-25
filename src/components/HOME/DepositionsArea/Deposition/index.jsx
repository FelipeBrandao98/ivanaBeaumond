'use client'
import Image from 'next/image'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai'

import styles from './styles.module.css'
import { useState } from 'react'

export default function Deposition({ data }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(data.likes)
  const maxAvaliation = [1, 2, 3, 4, 5]
  const avaliation = data.avaliation

  function likeHeart() {
    if (liked) {
      setLikes(likes - 1)
      setLiked(false)
    } else {
      setLikes(likes + 1)
      setLiked(true)
    }
  }

  return (
    <aside className={styles.container}>
      <div className={styles.avatarArea}>
        <Image
          className={styles.avatar}
          src={data.image.url}
          width={100}
          height={100}
          alt="Ivana Beaumond"
        />
        <p className={styles.avatarName}>{data.userName}</p>
      </div>

      <div className={styles.classificationArea}>
        {maxAvaliation.map((heart) => {
          return heart <= avaliation ? (
            <AiFillStar
              key={heart}
              className={styles.star}
              width={50}
              height={50}
            />
          ) : (
            <AiOutlineStar
              key={heart}
              className={styles.star}
              width={50}
              height={50}
            />
          )
        })}
      </div>

      <div className={styles.depositionArea}>
        <p className={styles.deposition}>{data.description}</p>
      </div>

      <div className={styles.dateArea}>
        <p className={styles.date}>21/02/23</p>
      </div>

      <div className={styles.likeArea}>
        {liked ? (
          <div onClick={likeHeart} className={styles.heartArea}>
            <AiFillHeart className={styles.likedHeart} width={50} height={50} />
          </div>
        ) : (
          <div onClick={likeHeart} className={styles.heartArea}>
            <AiOutlineHeart className={styles.heart} width={50} height={50} />
          </div>
        )}
        <p className={styles.numberOfLike}>{data.likes}</p>
      </div>
    </aside>
  )
}
