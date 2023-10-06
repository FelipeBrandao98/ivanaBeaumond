import { createContext, useState } from 'react'

export const CollectionsContext = createContext()

export function CollectionsProvider({ children }) {
  const [collections, setCollections] = useState({})

  function handleCollections(collections) {
    setCollections(collections)
  }

  return (
    <CollectionsContext.Provider value={{ collections, handleCollections }}>
      {children}
    </CollectionsContext.Provider>
  )
}
