'use client'

import React, { useEffect, useState } from 'react'
import { BsArrowDownSquareFill } from 'react-icons/bs'

import styles from './styles.module.css'

import useLangDict from '@/utils/useLangDict'

export default function GuideToBottomScroll({ lang }) {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled < 300) {
      setVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleInvisible)
    setTimeout(toggleVisible, 3000)
  }, [])

  const toggleInvisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(false)
    }
  }

  return (
    <>
      <div className={visible ? styles.visible : styles.invisible}>
        <p className={styles.description}>
          {useLangDict(lang).layout.guideToBottomScroll.titlePartOne} <br />{' '}
          {useLangDict(lang).layout.guideToBottomScroll.titlePartTwo}
        </p>

        <BsArrowDownSquareFill className={styles.icon} size={50} />
      </div>
    </>
  )
}
