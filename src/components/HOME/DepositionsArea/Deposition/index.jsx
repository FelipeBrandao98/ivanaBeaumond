'use client'
import Image from 'next/image'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar
} from 'react-icons/ai'

import styles from './styles.module.css'
import { useState } from 'react'

export default function Deposition() {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(2)
  const maxAvaliation = [1, 2, 3, 4, 5]
  const avaliation = 4

  function likeHeart() {
    if (liked) {
      setLikes(likes - 1)
      setLiked(false)
    }
    else {
      setLikes(likes + 1)
      setLiked(true)
    }
  }

  return (
    <aside className={styles.container}>
      <div className={styles.avatarArea}>
        <Image
          className={styles.avatar}
          src={'/avatar.jpg'}
          width={100}
          height={100}
          alt='Ivana Beaumond'
        />
        <p className={styles.avatarName}>John Maynard Keynes</p>
      </div>

      <div className={styles.classificationArea}>
        {
          maxAvaliation.map(heart => {
            return (
              heart <= avaliation ?
                <AiFillStar
                  className={styles.star}
                  width={50}
                  height={50}
                />
                :
                <AiOutlineStar
                  className={styles.star}
                  width={50}
                  height={50}
                />
            )
          })
        }
      </div>

      <div className={styles.depositionArea}>
        <p className={styles.deposition}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ullam id labore neque inventore animi? At nisi quibusdam sit quia, nesciunt voluptates exercitationem ipsam? Incidunt deleniti ullam nam animi explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit voluptatum deserunt sapiente hic recusandae rem quae, vitae inventore molestiae iusto similique laboriosam nesciunt odio, perspiciatis aut beatae, nobis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse ad sequi tenetur odio. Vitae quam at, libero ad magnam temporibus odit laboriosam consequuntur ipsam placeat sit quas error labore!</p>
      </div>

      <div className={styles.dateArea}>
        <p className={styles.date}>21/02/23</p>
      </div>

      <div className={styles.likeArea}>
        {
          liked ?
            <div
              onClick={likeHeart}
              className={styles.heartArea}
            >
              <AiFillHeart
                className={styles.likedHeart}
                width={50}
                height={50}
              />
            </div>
            :
            <div
              onClick={likeHeart}
              className={styles.heartArea}
            >
              <AiOutlineHeart
                className={styles.heart}
                width={50}
                height={50}
              />
            </div>
        }
        <p className={styles.numberOfLike}>{likes}</p>
      </div>
    </aside >
  )
}