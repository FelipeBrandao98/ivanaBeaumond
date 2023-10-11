import { createContext, useState } from 'react'

export const CollectionsCategoryContext = createContext()

export function CollectionsCategoryProvider({ children }) {
  const [category, setCategory] = useState({})

  function handleCategory(category) {
    setCategory(category)
  }

  return (
    <CollectionsCategoryContext.Provider value={{ category, handleCategory }}>
      {children}
    </CollectionsCategoryContext.Provider>
  )
}
