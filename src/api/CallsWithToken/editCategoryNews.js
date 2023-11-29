'use server'

import api from '@/services/api'

export default async function editCategoryNews(id, token, createCategory) {
  await api.patch(`/news/category/${id}`, createCategory, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
