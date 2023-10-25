// Components imports
import CreateNewsPage from '@/components/IB-NEWS/CreateNewsPage'

// API Service imports
import api from '@/services/api'

// functions to call API
async function createNews(token, createNews) {
  'use server'
  await api.post('/news', createNews, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

async function editNews(id, token, createNews) {
  'use server'
  await api.patch(`/news/${id}`, createNews, {
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

async function getCategories() {
  'use server'
  const res = await api.get('/news/category/pt-BR')
  return res.data
}
//

// Component Declaration
export default function Page() {
  // Return components, with functions API
  return (
    <CreateNewsPage
      functions={{ createNews, editNews, createImage, getCategories }}
    />
  )
  //
}
