'use client'
import { createContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const LangContext = createContext()

export function LangContextProvider({ children, cookie }) {
  const [lang, setLang] = useState(usePathname().split('/')[0])

  function changeLang(lang) {
    setLang(lang)
  }

  useEffect(() => {
    changeLang(cookie)
  }, [cookie])

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  )
}
