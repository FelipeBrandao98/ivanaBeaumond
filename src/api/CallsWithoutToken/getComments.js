'use server'

import api from '@/services/api'

export default async function getComments() {
  const res = await api.get('/comments')

  return res.data
}
