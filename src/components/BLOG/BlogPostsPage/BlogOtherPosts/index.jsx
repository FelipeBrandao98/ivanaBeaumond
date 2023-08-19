'use client'

import Image from 'next/image'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'
import { format } from 'date-fns'

import Link from 'next/link'
import styles from './styles.module.css'
import formatToUrl from '@/utils/formatToUrl'
import formatToSubTitle from '@/utils/formatToSubTitle'

export default function BlogOtherPosts({ title, data }) {
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
      <h4 className={styles.title}>{title || 'Título'}</h4>

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
          className={`
          ${styles.postsArea}
          ${postClass}
          `}
        >
          {data.map((data) => {
            return (
              <aside className={styles.post} key={data.id}>
                <h5 className={styles.postTitle}>{data.title.toUpperCase()}</h5>
                <div className={styles.imageArea}>
                  <Image
                    className={styles.image}
                    src={data.cover.url}
                    alt={data.cover.author}
                    width="320"
                    height="180"
                  />
                  <p className={styles.imageDescription}>{data.coverCredit}</p>
                </div>
                <p className={styles.subTitle}>
                  {formatToSubTitle(data.subtitle)}
                </p>
                <p className={styles.date}>
                  {format(new Date(data.publishDate), 'dd/MM/yyyy')}
                </p>
                <div className={styles.seeMoreArea}>
                  <Link
                    className={styles.seeMoreButton}
                    href={`/noticias/${formatToUrl(data.title)}`}
                  >
                    Leia Mais
                  </Link>
                </div>
              </aside>
            )
          })}
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
