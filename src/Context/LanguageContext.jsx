'use client'
import { createContext, useEffect, useState } from 'react'

export const LangContext = createContext()

export function LangContextProvider({ children, cookie }) {
  const [lang, setLang] = useState(cookie)

  function changeLang(lang) {
    setLang(lang)
  }

  function changeLangFromCookie() {
    setLang(cookie)
  }

  useEffect(() => {
    changeLang(cookie)
  }, [cookie, lang])

  return (
    <LangContext.Provider value={{ lang, changeLangFromCookie }}>
      {console.log(`Cookie Context: ${cookie}`)}
      {console.log(`Lang Context: ${lang}`)}
      {children}
    </LangContext.Provider>
  )
}
