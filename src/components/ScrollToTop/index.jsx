'use client'

import React, { useState } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';

import styles from './styles.module.css'

export default function ScrollToTop() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
        in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={styles.button}
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <FaLongArrowAltUp size={'1.5rem'} />
    </button>
  );
}
