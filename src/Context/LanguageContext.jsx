'use client'

// React imports
import { createContext, useEffect, useState } from 'react'

// Create Context
export const LangContext = createContext()

// Provider Declaration
export function LangContextProvider({ children, cookie }) {
  // States declaratios
  const [lang, setLang] = useState(cookie)

  // Functions to manipulate states
  function changeLang(lang) {
    setLang(lang)
  }

  function changeLangFromCookie() {
    setLang(cookie)
  }
  //

  // Use Effects
  useEffect(() => {
    changeLang(cookie)
  }, [cookie, lang])
  //

  // Return Provider with functions and states
  return (
    <LangContext.Provider value={{ lang, changeLangFromCookie }}>
      {children}
    </LangContext.Provider>
  )
  //
}
