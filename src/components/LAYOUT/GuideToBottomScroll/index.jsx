'use client'

// React imports
import React, { useEffect, useState } from 'react'

// Icons imports
import { BsArrowDownSquareFill } from 'react-icons/bs'

// Function to traduct component imports
import useLangDict from '@/utils/useLangDict'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function GuideToBottomScroll({ lang }) {
  // States declaratios
  const [visible, setVisible] = useState(false)

  // Functions to manipulate window object / state
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled < 300) {
      setVisible(true)
    }
  }

  const toggleInvisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(false)
    }
  }
  //

  // Use Effects
  useEffect(() => {
    window.addEventListener('scroll', toggleInvisible)
    setTimeout(toggleVisible, 3000)
  }, [])

  // Return components, with functions to call API and language
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
  //
}
