// Cookies imports
import { cookies } from 'next/headers'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Components imports
import CollectionsHeader from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionsHeader'
import Collections from '@/components/EndUsersRoute/PAGES/COLLECTIONS/MainPageCollections/Collections'

// API Service imports
import getCollections from '@/api/CallsWithoutToken/getCollections'

export async function generateMetadata({ params }) {
  const { lang } = params

  const traductedMeta = getLangDict(lang)

  return {
    title: traductedMeta.metadata.collections.title,
    description: traductedMeta.metadata.collections.description,
    openGraph: {
      title: traductedMeta.metadata.collections.title,
      description: traductedMeta.metadata.collections.description,
    },
  }
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
      <CollectionsHeader lang={lang} />

      <Collections lang={lang} data={collections} />
    </>
  )
  //
}
