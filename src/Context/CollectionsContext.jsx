'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const CollectionsContext = createContext()

// Provider Declaration
export function CollectionsProvider({ children }) {
  // States declaratios
  const [collections, setCollections] = useState({})

  // Functions to manipulate states
  function handleCollections(collections) {
    setCollections(collections)
  }

  // Return Provider with functions and states
  return (
    <CollectionsContext.Provider value={{ collections, handleCollections }}>
      {children}
    </CollectionsContext.Provider>
  )
  //
}
