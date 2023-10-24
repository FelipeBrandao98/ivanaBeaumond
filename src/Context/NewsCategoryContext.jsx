import { createContext, useState } from 'react'

export const NewsCategoryContext = createContext()

export function NewsCategoryProvider({ children }) {
  const [category, setCategory] = useState({})

  function handleCategory(category) {
    setCategory(category)
  }

  return (
    <NewsCategoryContext.Provider value={{ category, handleCategory }}>
      {children}
    </NewsCategoryContext.Provider>
  )
}
