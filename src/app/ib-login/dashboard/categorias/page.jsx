import CategoriesPage from '@/components/IB-CATEGORIES/CategoriesPage'
import api from '@/services/api'

async function getCategories(token) {
  'use server'
  const res = await api.get('/collections/category', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

export default function Page() {
  return <CategoriesPage functions={{ getCategories }} />
}
