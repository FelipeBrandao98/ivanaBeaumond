'use server'

import api from '@/services/api'

export default async function createComment(token, formData) {
  const res = await api.post(`/comments/`, formData, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
