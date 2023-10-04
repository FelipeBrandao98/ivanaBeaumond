import CreateCategoryPage from '@/components/IB-CATEGORIES/CreateCategoryPagePage'

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
  return <CreateCategoryPage functions={{ createCategory, createImage }} />
}
