import MainPageCollections from '@/components/COLLECTIONS/MainPageCollections'
import api from '@/services/api'

async function getData() {
  const res = await api.get('/collections')

  return res.data
}

async function getCollectionImages(id) {
  const res = await api.get(`/collection-images/collection-id/${id}`)

  return res.data
}

export default async function Page() {
  let data = await getData()

  data.map(async (collection) => {
    const images = await getCollectionImages(collection.id)

    if (images) {
      collection.collectionImages = images
    }

    return collection
  })

  return (
    <>
      {console.log(data)}
      <MainPageCollections data={data} />
    </>
  )
}
