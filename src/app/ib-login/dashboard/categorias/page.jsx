// Components imports
import CategoriesPage from '@/components/IB-CATEGORIES/CategoriesPage'

// API Service imports
import api from '@/services/api'

// functions to call API
async function getCategoriesCollections(token) {
  'use server'
  const res = await api.get('/collections/category', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function getCategoriesNews(token) {
  'use server'
  const res = await api.get('/news/category', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function deleteCategoriesCollection(token, id) {
  'use server'
  const res = await api.delete(`/news/category/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

async function deleteCategoriesNews(token, id) {
  'use server'
  const res = await api.delete(`/collections/category/${id}`, {
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
  return (
    <CategoriesPage
      functions={{
        getCategoriesCollections,
        getCategoriesNews,
        deleteCategoriesCollection,
        deleteCategoriesNews,
      }}
    />
  )
  //
}
