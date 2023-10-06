import NewsPage from '@/components/IB-NEWS/NewsPage'
import api from '@/services/api'

async function getNews(token) {
  'use server'
  const res = await api.get('/news', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

async function deleteNews(token, id) {
  'use server'
  const res = await api.delete(`/news/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}

export default function Page() {
  return <NewsPage functions={{ getNews, deleteNews }} />
}
