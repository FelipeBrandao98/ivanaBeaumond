'use client'

// React imports
import { useState } from 'react'

// Next.js Components imports
import Image from 'next/image'

// Icons imports
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai'

// Styles imports
import styles from './styles.module.css'
import likeComment from '@/api/CallsWithoutToken/Comments/PATCH/likeComment'

// Component Declaration
export default function Comment({ data }) {
  // States declaratios
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(data.likes ? data.likes : 0)

  // Variables
  const maxAvaliation = [1, 2, 3, 4, 5]
  const avaliation = data.avaliation

  // Functions to manipulate window object
  async function likeHeart(commentId) {
    if (!liked) {
      setLiked(true)
      setLikes(likes + 1)
      await likeComment(commentId)
    }
  }
  //

  // Return components, with functions to call API and language
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
          <div className={styles.heartArea}>
            <AiFillHeart className={styles.likedHeart} width={50} height={50} />
          </div>
        ) : (
          <div
            onClick={(e) => {
              e.preventDefault()
              likeHeart(data.id)
            }}
            className={styles.heartArea}
          >
            <AiOutlineHeart className={styles.heart} width={50} height={50} />
          </div>
        )}
        <p className={styles.numberOfLike}>{likes}</p>
      </div>
    </aside>
  )
  //
}
