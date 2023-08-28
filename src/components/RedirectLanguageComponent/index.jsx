'use client'
import { useLanguageContext } from '@/Context/LanguageContext'

export default function RedirectLanguageComponent() {
  const { redirectByLanguageDefault } = useLanguageContext()

  return <>{redirectByLanguageDefault()}</>
}
