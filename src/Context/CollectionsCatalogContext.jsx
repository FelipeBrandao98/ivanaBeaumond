'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const CollectionsCatalogContext = createContext()

// Provider Declaration
export function CollectionsCatalogProvider({ children }) {
  // States declaratios
  const [collection, setCollection] = useState({})

  // Functions to manipulate states
  function handleCollection(collections) {
    setCollection(collections)
  }

  // Return Provider with functions and states
  return (
    <CollectionsCatalogContext.Provider
      value={{ collection, handleCollection }}
    >
      {children}
    </CollectionsCatalogContext.Provider>
  )
  //
}
