import CreateCategoryPage from '@/components/IB-CATEGORIES/CreateCategoryPage'

import api from '@/services/api'

async function createCategory(token, createCategory) {
  'use server'
  console.log(createCategory)
  await api.post('/collections/category', createCategory, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

async function editCategory(id, token, createCategory) {
  'use server'
  console.log(createCategory)
  await api.patch(`/collections/category/${id}`, createCategory, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
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

export default function Page() {
  return (
    <CreateCategoryPage
      functions={{ createCategory, editCategory, createImage }}
    />
  )
}