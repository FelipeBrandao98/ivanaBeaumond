import CreateCategoryNewsPage from '@/components/IB-CATEGORIES/CreateCategoryNewsPage'

import api from '@/services/api'

async function createCategory(token, createCategory) {
  'use server'
  console.log(createCategory)
  await api.post('/news/category', createCategory, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

async function editCategory(id, token, createCategory) {
  'use server'
  console.log(createCategory)
  await api.patch(`/news/category/${id}`, createCategory, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

export default function Page() {
  return <CreateCategoryNewsPage functions={{ createCategory, editCategory }} />
}
