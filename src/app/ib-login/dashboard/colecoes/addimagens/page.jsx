import AddPhotosCollections from '@/components/IB-COLLECTIONS/AddPhotosCollections'
import api from '@/services/api'

async function createImagesCollections(token, file, collectionId) {
  'use server'
  const res = await api.post(`/collections/images/${collectionId}`, file, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function getImagesCollections(id) {
  'use server'
  const res = await api.get(`/collections/images/collection-id/${id}`)
  return res.data
}

export default function Page() {
  return (
    <AddPhotosCollections
      functions={{ createImagesCollections, getImagesCollections }}
    />
  )
}
