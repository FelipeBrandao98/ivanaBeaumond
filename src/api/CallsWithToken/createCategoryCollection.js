'use server'

import api from '@/services/api'

export default async function createCategoryCollection(token, createCategory) {
  await api.post('/collections/category', createCategory, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
