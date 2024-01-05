'use server'

import api from '@/services/api'

export default async function deleteComment(token, id) {
  const res = await api.delete(`/comments/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
