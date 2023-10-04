import CategoriesPage from '@/components/IB-CATEGORIES/CategoriesPage'
import api from '@/services/api'

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

export default function Page() {
  return (
    <CategoriesPage
      functions={{ getCategoriesCollections, getCategoriesNews }}
    />
  )
}
