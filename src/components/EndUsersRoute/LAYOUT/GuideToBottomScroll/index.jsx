'use client'

// React imports
import React, { useEffect, useState } from 'react'

// Icons imports
import { BsArrowDownSquareFill } from 'react-icons/bs'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Atoms imports
import GuideToBottomScrollContainer from '@/atoms/EndUsersRoute/Layout/GuideToBottomScroll/GuideToBottomScrollContainer'

// Component Declaration
export default function GuideToBottomScroll({ lang }) {
  // States declaratios
  const [visible, setVisible] = useState(false)

  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

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
      <GuideToBottomScrollContainer visible={visible}>
        <p>
          {languageTraducted.layout.guideToBottomScroll.titlePartOne} <br />{' '}
          {languageTraducted.layout.guideToBottomScroll.titlePartTwo}
        </p>

        <BsArrowDownSquareFill size={50} />
      </GuideToBottomScrollContainer>
    </>
  )
  //
}
