'use server'

import api from '@/services/api'

export default async function getNews(token) {
  const res = await api.get('/news', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
