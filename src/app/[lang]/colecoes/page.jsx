// Cookies imports
import { cookies } from 'next/headers'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Components imports
import CollectionsHeader from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionsHeader'
import Collections from '@/components/EndUsersRoute/PAGES/COLLECTIONS/Collections'

// API Service imports
import getCol from '@/api/CallsWithoutToken/Collections/GET/getCol'

export async function generateMetadata({ params }) {
  const { lang } = params

  const traductedMeta = getLangDict(lang)

  return {
    title: traductedMeta.metadata.collections.title,
    description: traductedMeta.metadata.collections.description,
    openGraph: {
      title: traductedMeta.metadata.collections.title,
      description: traductedMeta.metadata.collections.description,
      image: 'public/photo_header/_ELC8701 2.jpg',
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
  const collections = await getCol(lang)

  // Return components, with functions to call API and language
  return (
    <>
      <CollectionsHeader lang={lang} />

      <Collections lang={lang} data={collections} />
    </>
  )
  //
}
