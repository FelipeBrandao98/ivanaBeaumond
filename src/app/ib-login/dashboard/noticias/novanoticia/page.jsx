import CreateNewsPage from '@/components/IB-NEWS/CreateNewsPage'
import api from '@/services/api'

async function createNews(token, createNews) {
  'use server'
  console.log(createNews)
  await api.post('/news', createNews, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

async function createImage(token, createNews) {
  'use server'
  const res = await api.post('/images', createNews, {
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

export default function Page() {
  return (
    <CreateNewsPage functions={{ createNews, createImage, getCategories }} />
  )
}
