// Cookies imports
import { cookies } from 'next/headers'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Components imports
import CollectionsHeader from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionsHeader'
import Collections from '@/components/EndUsersRoute/PAGES/COLLECTIONS/Collections'

// API Service imports
import getColByCat from '@/api/CallsWithoutToken/Collections/GET/getColByCat'
import getUniqueCatCol from '@/api/CallsWithoutToken/Collections/CategoryCollections/GET/getUniqueCatCol'

export async function generateMetadata({ params }) {
  const { lang } = params

  const traductedMeta = getLangDict(lang)

  const collection = await getUniqueCatCol(lang, params.categoryId)

  return {
    title: collection
      ? collection.description
      : traductedMeta.metadata.collections.title,
    description: collection
      ? collection.subdescription
      : traductedMeta.metadata.collections.description,
    openGraph: {
      title: collection
        ? collection.description
        : traductedMeta.metadata.collections.title,
      description: collection
        ? collection.subdescription
        : traductedMeta.metadata.collections.description,
      image: collection.cover && collection.cover.url,
    },
  }
}

// Component Declaration
export default async function Page({ params }) {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value
  //

  // Instantiate response objects from api, by language by the way
  const collection = await getUniqueCatCol(lang, params.categoryId)
  const collections = await getColByCat(lang, params.categoryId)

  // Return components, with data and language
  return (
    <>
      <CollectionsHeader
        lang={lang}
        title={collection.description}
        image={collection.cover.url}
        subTitle={collection.subdescription}
      />
      {
        //
      }
      <Collections lang={lang} data={collections} />
    </>
  )
  //
}
