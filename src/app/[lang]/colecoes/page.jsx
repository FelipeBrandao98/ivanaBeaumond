// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import CollectionsPage from '@/components/COLLECTIONS/CollectionsPage'

// API Service imports
import getCollections from '@/api/CallsWithToken/getCollections'

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
      <CollectionsPage lang={lang} data={collections} />
    </>
  )
  //
}
