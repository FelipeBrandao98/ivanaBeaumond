import CollectionsPage from '@/components/IB-COLLECTIONS/CollectionsPage'
import api from '@/services/api'

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

export default function Page() {
  return <CollectionsPage functions={{ getCollections, deleteCollection }} />
}
