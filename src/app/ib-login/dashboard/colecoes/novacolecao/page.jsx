// Components imports
import CreateCollectionsPage from '@/components/AdminUsersRoute/IB-COLLECTIONS/CreateCollectionsPage'

// API Service imports
import api from '@/services/api'

// functions to call API
async function createCollection(token, createCollection) {
  'use server'
  const res = await api.post('/collections', createCollection, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function editCollection(id, token, createCollection) {
  'use server'
  const res = await api.patch(`/collections/${id}`, createCollection, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function createImage(token, file) {
  'use server'
  const res = await api.post('/images', file, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function getCategories() {
  'use server'
  const res = await api.get('/collections/category/pt-BR')
  return res.data
}
//

// Component Declaration
export default function Page() {
  // Return components, with functions API
  return (
    <CreateCollectionsPage
      functions={{
        createCollection,
        editCollection,
        createImage,
        getCategories,
      }}
    />
  )
  //
}
