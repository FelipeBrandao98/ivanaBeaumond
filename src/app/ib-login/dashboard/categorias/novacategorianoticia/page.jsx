// Components imports
import CreateCategoryNewsPage from '@/components/IB-CATEGORIES/CreateCategoryNewsPage'

// API Service imports
import api from '@/services/api'

// functions to call API
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
//

// Component Declaration
export default function Page() {
  // Return components, with functions API
  return <CreateCategoryNewsPage functions={{ createCategory, editCategory }} />
  //
}
