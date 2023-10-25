// Components imports
import CollectionsPage from '@/components/IB-COLLECTIONS/CollectionsPage'

// API Service imports
import api from '@/services/api'

// functions to call API
async function getCollections(token) {
  'use server'
  const res = await api.get('/collections', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function deleteCollection(token, id) {
  'use server'
  const res = await api.delete(`/collections/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
//

// Component Declaration
export default function Page() {
  // Return components, with functions API
  return <CollectionsPage functions={{ getCollections, deleteCollection }} />
  //
}
