'use server'

import api from '@/services/api'

export default async function createCollection(token, formData) {
  const res = await api.post(`/collections/`, formData, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
