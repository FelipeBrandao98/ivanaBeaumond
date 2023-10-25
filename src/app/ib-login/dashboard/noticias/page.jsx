// Components imports
import NewsPage from '@/components/IB-NEWS/NewsPage'

// API Service imports
import api from '@/services/api'

// functions to call API
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
//

// Component Declaration
export default function Page() {
  // Return components, with functions API
  return <NewsPage functions={{ getNews, deleteNews }} />
  //
}
