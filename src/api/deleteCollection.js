'use server'

import api from '@/services/api'

export default async function deleteCollection(token, id) {
  const res = await api.delete(`/collections/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
