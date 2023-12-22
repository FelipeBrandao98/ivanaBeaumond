// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import CollectionGrid from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionGrid'
import getLangDict from '@/utils/getLangDict'
import CollectionsHeader from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionsHeader'
import getUniqueCollection from '@/api/CallsWithoutToken/getUniqueCollection'
import PhotoSlidesCollections from '@/components/EndUsersRoute/PAGES/COLLECTIONS/Collections/Collection/PhotoSlidesCollections'
import getClothesImages from '@/api/CallsWithoutToken/getClothesImages'

export async function generateMetadata({ params }) {
  const { lang } = params

  const traductedMeta = getLangDict(lang)

  const collection = await getUniqueCollection(lang, params.id)

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
      image: collection.image && collection.image,
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

  const collection = await getUniqueCollection(lang, params.id)
  const mainImages = await getClothesImages(lang, params.id)

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
