'use server'

import api from '@/services/api'

export default async function deleteCategoryCollection(token, id) {
  const res = await api.delete(`/news/category/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
