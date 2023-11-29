'use server'

import api from '@/services/api'

export default async function getCategoryCollections(token) {
  const res = await api.get('/collections/category', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
