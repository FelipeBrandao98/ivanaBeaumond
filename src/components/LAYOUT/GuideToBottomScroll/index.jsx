'use client'

import { BsArrowDownSquareFill } from 'react-icons/bs'

import React, { useEffect, useState } from 'react';

import styles from './styles.module.css'

export default function GuideToBottomScroll({ text1, text2 }) {

  useEffect(() => {
    window.addEventListener('scroll', toggleInvisible)
    setTimeout(toggleVisible, 3000)
  }, []);

  const [visible, setVisible] = useState(false)

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
  };

  return (
    <>
      <div className={visible ? styles.visible : styles.invisible}>
        <p className={styles.description}>{text1} <br /> {text2}</p>
        <BsArrowDownSquareFill className={styles.icon} size={50} />
      </div>
    </>
  )
}