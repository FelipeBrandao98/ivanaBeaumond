'use client'
import { redirect } from 'next/navigation'
import { createContext, useState } from 'react'

export const LanguageContext = createContext()

export default function LanguageHook({ children }) {
  const [language, setLanguage] = useState()

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}