// Global Styles imports
import '@/styles/globals.css'

// Cookies imports
import { cookies } from 'next/headers'

export default function RootLayout({ children }) {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'
  //

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}
