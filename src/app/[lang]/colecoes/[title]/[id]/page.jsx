// Cookies imports
import { cookies } from 'next/headers'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Components imports
import CollectionsHeader from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionsHeader'
import PhotoSlidesCollections from '@/components/EndUsersRoute/PAGES/COLLECTIONS/Collections/Collection/PhotoSlidesCollections'
import CollectionGrid from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionGrid'

// API Calls imports
import getClotCol from '@/api/CallsWithoutToken/Collections/ClothesCollections/GET/getClotCol'
import getUniqueCol from '@/api/CallsWithoutToken/Collections/GET/getUniqueCol'

export async function generateMetadata({ params }) {
  const { lang } = params

  const traductedMeta = getLangDict(lang)

  const collection = await getUniqueCol(lang, params.id)

  return {
    title: collection.title
      ? collection.title
      : traductedMeta.metadata.collections.title,
    description: collection.description
      ? collection.description
      : traductedMeta.metadata.collections.description,
    openGraph: {
      title: collection.title
        ? collection.title
        : traductedMeta.metadata.collections.title,
      description: collection.description
        ? collection.description
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
  const lang = langCookie?.value || 'pt-BR'
  //

  const collection = await getUniqueCol(lang, params.id)
  const mainImages = await getClotCol(lang, params.id)

  // Return components, with data and language
  return (
    <>
      <CollectionsHeader
        lang={lang}
        title={collection.title}
        subTitle={collection.description}
        image={collection.cover.url}
      />
      <PhotoSlidesCollections images={mainImages} />
      <CollectionGrid lang={lang} />
    </>
  )
  //
}
