// Components imports
import AddCatPage from '@/components/AdminUsersRoute/IB-COLLECTIONS/AddCatPage'

// API Service imports
import api from '@/services/api'

// functions to call API
async function createCoverCatalog(token, file) {
  'use server'
  const res = await api.post(`/images/`, file, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function createCatalog(token, createCatalog) {
  'use server'
  const res = await api.post(`/collections/clothes`, createCatalog, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function deleteCatalog(token, catalogId) {
  'use server'
  const res = await api.delete(`/collections/clothes/${catalogId}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function getCatalog(token, collectionId) {
  'use server'
  const res = await api.get(`/collections/clothes/${collectionId}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
//

// Component Declaration
export default function Page() {
  return <AddCatPage functions={{ createCatalog, deleteCatalog, getCatalog }} />
}
