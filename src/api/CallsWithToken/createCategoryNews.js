'use server'

import api from '@/services/api'

export default async function createCategoryNews(token, createCategory) {
  await api.post('/news/category', createCategory, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
