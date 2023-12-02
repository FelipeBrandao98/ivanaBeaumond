// Cookies imports
import { cookies } from 'next/headers'

// Atoms imports
import Loading from '@/atoms/Loading'

// Component Declaration
export default function Page() {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'
  //

  // Return components, with functions to call API and language
  return (
    <>
      <Loading lang={lang} />
    </>
  )
  //
}
