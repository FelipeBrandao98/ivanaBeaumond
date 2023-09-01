'use client'
import { createContext, useEffect, useState } from 'react'

export const LangContext = createContext()

export function LangContextProvider({ children, cookie }) {
  const [lang, setLang] = useState(cookie)

  function changeLang(lang) {
    setLang(lang)
  }

  useEffect(() => {
    changeLang(cookie)
  }, [cookie, lang])

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  )
}
