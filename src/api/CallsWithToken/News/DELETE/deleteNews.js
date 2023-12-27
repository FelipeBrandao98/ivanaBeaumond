'use server'

import api from '@/services/api'

export default async function deleteNews(token, id) {
  const res = await api.delete(`/news/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
