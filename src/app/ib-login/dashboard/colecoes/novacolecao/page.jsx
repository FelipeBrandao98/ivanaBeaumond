import CreateCollectionsPage from '@/components/IB-COLLECTIONS/CreateCollectionsPage'

import api from '@/services/api'

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

export default function Page() {
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
}
