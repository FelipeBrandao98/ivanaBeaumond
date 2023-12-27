'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const CollectionsCatalogContext = createContext()

// Provider Declaration
export function CollectionsCatalogProvider({ children }) {
  // States declaratios
  const [collections, setCollections] = useState({})

  // Functions to manipulate states
  function handleCollections(collections) {
    setCollections(collections)
  }

  // Return Provider with functions and states
  return (
    <CollectionsCatalogContext.Provider
      value={{ collections, handleCollections }}
    >
      {children}
    </CollectionsCatalogContext.Provider>
  )
  //
}
