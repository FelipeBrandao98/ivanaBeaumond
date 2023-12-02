// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import MainPageCollections from '@/components/COLLECTIONS/MainPageCollections'

// API Service imports
import getCollections from '@/api/CallsWithoutToken/getCollections'

export const metadata = {
  title: 'Coleções',
  description: '',
}

// Component Declaration
export default async function Page() {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'
  //

  // Instantiate response objects from api, by language by the way
  const collections = await getCollections(lang)

  // Return components, with functions to call API and language
  return (
    <>
      {console.log(collections)}
      <MainPageCollections lang={lang} data={collections} />
    </>
  )
  //
}
