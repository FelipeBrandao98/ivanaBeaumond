'use server'

import api from '@/services/api'

export default async function editNews(id, token, updateNews) {
  await api.patch(`/news/${id}`, updateNews, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
