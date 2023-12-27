'use server'

import api from '@/services/api'

export default async function getCollections(token) {
  const res = await api.get('/collections', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
