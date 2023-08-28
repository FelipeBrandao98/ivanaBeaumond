'use client'
import detectBrowserLanguage from 'detect-browser-language'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export const LanguageContext = createContext()

export function LanguageContextProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState('')
  const lang = pathname.split('/')[1]

  function redirectRouter(language) {
    // router.replace(`/${language}`)
  }

  function redirectByLanguageDefault() {
    // router.push('/', { locale: detectBrowserLanguage() })
    // setLanguage(detectBrowserLanguage())
  }

  function getLangByPath() {
    // if (lang === '') {
    //   return router.replace('/')
    // }
    // if (lang) {
    //   setLanguage(lang)
    // }
  }

  useEffect(() => {
    // getLangByPath()
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        redirectRouter,
        redirectByLanguageDefault,
        language,
        router,
      }}
    >
      {console.log(pathname)}
      {console.log(language)}
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)
