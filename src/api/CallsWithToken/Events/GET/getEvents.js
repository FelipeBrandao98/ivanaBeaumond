'use server'

import api from '@/services/api'

export default async function getEvents(token) {
  const res = await api.get('/news/event', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
