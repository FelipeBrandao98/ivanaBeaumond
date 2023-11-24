'use client'

import { useState } from 'react'

import styles from './styles.module.css'
import { useEffect } from 'react'

export default function NewsTitle({ children, color, size }) {
  const [fontColor, setFontColor] = useState(styles.black)
  const [fontSize, setFontSize] = useState(styles.font2rem)

  function getFontColor(color) {
    if (color === 'white') {
      setFontColor(styles.white)
    }
  }

  function getFontSize(size) {
    if (size === '3rem') {
      setFontSize(styles.font3rem)
    }
  }

  useEffect(() => {
    getFontColor(color)
    getFontSize(size)
  }, [])

  return (
    <>
      <h4 className={`${styles.title} ${fontColor} ${fontSize}`}>{children}</h4>
    </>
  )
}
