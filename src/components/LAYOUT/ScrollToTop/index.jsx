'use client'

import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

import styles from './styles.module.css'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
        in place of 'smooth' */
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <>
      <button
        className={styles.button}
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      >
        <FaChevronUp size={20} />
      </button>
    </>
  )
}
