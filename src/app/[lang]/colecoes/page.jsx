import { cookies } from 'next/headers'
import MainPageCollections from '@/components/COLLECTIONS/MainPageCollections'
import api from '@/services/api'

async function getData(lang) {
  const res = await api.get(`/collections/${lang}`)

  return res.data
}

// async function getCollectionImages(id) {
//   const res = await api.get(`/collection-images/collection-id/${id}`)

//   return res.data
// }

export default async function Page() {
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value

  let data = await getData(lang)

  // data.map(async (collection) => {
  //   const images = await getCollectionImages(collection.id)

  //   if (images) {
  //     collection.collectionImages = images
  //   }

  //   return collection
  // })

  return (
    <>
      <MainPageCollections lang={lang} data={data} />
    </>
  )
}
