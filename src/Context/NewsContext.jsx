import { createContext, useState } from 'react'

export const NewsContext = createContext()

export function NewsProvider({ children }) {
  const [news, setNews] = useState([])

  function handleNews(news) {
    setNews(news)
  }

  return (
    <NewsContext.Provider value={{ news, handleNews }}>
      {children}
    </NewsContext.Provider>
  )
}
