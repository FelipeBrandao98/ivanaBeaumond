'use client'

import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

import styles from './styles.module.css'

export default function ScrollToTopFR() {
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, []);

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

  return (
    <button
      className={styles.button}
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <FaChevronUp size={'1.5rem'} />
    </button>
  );
}
