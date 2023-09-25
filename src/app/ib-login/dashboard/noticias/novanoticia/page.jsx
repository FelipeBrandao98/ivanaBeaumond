import CreateNewsPage from '@/components/IB-NEWS/CreateNewsPage'
import api from '@/services/api'

async function createNews(token, createNews) {
  'use server'
  await api.post('/news', createNews, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

async function getCategories() {
  'use server'
  const res = await api.get('/news/category/pt-BR')
  return res.data
}

export default function Page() {
  return <CreateNewsPage functions={{ createNews, getCategories }} />
}
