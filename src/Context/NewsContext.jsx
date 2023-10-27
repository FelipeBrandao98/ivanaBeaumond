'use client'

// React imports
import { createContext, useState } from 'react'

// Create Context
export const NewsContext = createContext()

// Provider Declaration
export function NewsProvider({ children }) {
  // States declaratios
  const [news, setNews] = useState([])

  // Functions to manipulate states
  function handleNews(news) {
    setNews(news)
  }
  //

  // Return Provider with functions and states
  return (
    <NewsContext.Provider value={{ news, handleNews }}>
      {children}
    </NewsContext.Provider>
  )
  //
}
