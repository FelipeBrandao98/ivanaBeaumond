'use client'

// React imports
import { useState } from 'react'

// Atoms imports
import MenuMobileContainer from '@/atoms/EndUsersRoute/Layout/Menu/MenuMobileContainer'

// Component Declaration
export default function MenuMobile({ children }) {
  // States declaratios
  const [isOpen, setIsOpen] = useState(false)

  // Functions to manipulate Events
  function handleIsOpen() {
    setIsOpen(!isOpen)
  }
  //

  // Return components, with functions to call API and language
  return (
    <>
      <MenuMobileContainer isOpen={isOpen} handleIsOpen={handleIsOpen}>
        {children}
      </MenuMobileContainer>
    </>
  )
  //
}
