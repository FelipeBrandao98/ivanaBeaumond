// Components imports
import AddPhotosCollections from '@/components/IB-COLLECTIONS/AddPhotosCollections'

// API Service imports
import api from '@/services/api'

// functions to call API
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
//

// Component Declaration
export default function Page() {
  // Return components, with functions API
  return (
    <AddPhotosCollections
      functions={{ createImagesCollections, getImagesCollections }}
    />
  )
  //
}
