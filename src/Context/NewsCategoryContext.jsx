'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const NewsCategoryContext = createContext()

// Provider Declaration
export function NewsCategoryProvider({ children }) {
  // States declaratios
  const [category, setCategory] = useState({})

  // Functions to manipulate states
  function handleCategory(category) {
    setCategory(category)
  }
  //

  // Return Provider with functions and states
  return (
    <NewsCategoryContext.Provider value={{ category, handleCategory }}>
      {children}
    </NewsCategoryContext.Provider>
  )
  //
}
