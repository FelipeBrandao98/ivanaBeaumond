'use server'

import api from '@/services/api'

export default async function createImage(token, file) {
  const res = await api.post('/images', file, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
