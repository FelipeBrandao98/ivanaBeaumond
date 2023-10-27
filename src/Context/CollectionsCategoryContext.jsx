'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const CollectionsCategoryContext = createContext()

// Provider Declaration
export function CollectionsCategoryProvider({ children }) {
  // States declaratios
  const [category, setCategory] = useState({})

  // Functions to manipulate states
  function handleCategory(category) {
    setCategory(category)
  }

  // Return Provider with functions and states
  return (
    <CollectionsCategoryContext.Provider value={{ category, handleCategory }}>
      {children}
    </CollectionsCategoryContext.Provider>
  )
  //
}
