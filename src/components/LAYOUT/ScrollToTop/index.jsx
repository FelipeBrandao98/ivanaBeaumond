'use client'

// React imports
import { useEffect, useState } from 'react'

// Icons imports
import { FaChevronUp } from 'react-icons/fa'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function ScrollToTop() {
  // States declaratios
  const [visible, setVisible] = useState(false)

  // Functions to manipulate window object / states
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

  // Use Effects
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])
  //

  // Return components, with functions to call API and language
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
  //
}
