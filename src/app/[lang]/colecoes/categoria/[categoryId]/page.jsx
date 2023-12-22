// Cookies imports
import { cookies } from 'next/headers'

// Components imports

// API Service imports
import getLangDict from '@/utils/getLangDict'
import getCollectionByCat from '@/api/CallsWithoutToken/getCollectionByCat'
import CollectionsHeader from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionsHeader'
import Collections from '@/components/EndUsersRoute/PAGES/COLLECTIONS/Collections'
import getUniqueCategoryCollections from '@/api/CallsWithoutToken/getUniqueCategoryCollections'

export async function generateMetadata({ params }) {
  const { lang } = params

  const traductedMeta = getLangDict(lang)

  return {
    title: traductedMeta.metadata.news.title,
    description: traductedMeta.metadata.news.description,
    openGraph: {
      title: traductedMeta.metadata.news.title,
      description: traductedMeta.metadata.news.description,
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
  const collection = await getUniqueCategoryCollections(lang, params.categoryId)
  const collections = await getCollectionByCat(lang, params.categoryId)

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
