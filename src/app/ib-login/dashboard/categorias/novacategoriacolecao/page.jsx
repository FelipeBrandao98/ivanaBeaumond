// Components imports
import CreateCategoryPage from '@/components/IB-CATEGORIES/CreateCategoryPage'

// API Service imports
import api from '@/services/api'

// functions to call API
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
//

// Component Declaration
export default function Page() {
  // Return components, with functions API
  return (
    <CreateCategoryPage
      functions={{ createCategory, editCategory, createImage }}
    />
  )
  //
}
