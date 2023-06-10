'use client'
import detectBrowserLanguage from "detect-browser-language"
import LanguageHook, { LanguageContext } from "@/hooks/LanguageContext"
import { useContext, useEffect } from "react"

import { useRouter } from "next/navigation"

export default function RedirectLanguageComponent({ children }) {
  const languageContext = useContext(LanguageContext)
  const router = useRouter()

  function changeLanguageContext(language) {
    languageContext.setLanguage(language)
  }

  function redirectRouter() {
    router.push(`/${languageContext.language}`)
  }

  useEffect(() => {
    changeLanguageContext(detectBrowserLanguage())
  }, [])

  return (
    <LanguageHook>
      {children}
      {redirectRouter()}
    </LanguageHook>
  )
}