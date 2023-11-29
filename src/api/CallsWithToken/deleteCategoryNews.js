'use server'

import api from '@/services/api'

export default async function deleteCategoryNews(token, id) {
  const res = await api.delete(`/collections/category/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
