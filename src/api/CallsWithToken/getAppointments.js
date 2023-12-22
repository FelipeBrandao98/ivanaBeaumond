'use server'

import api from '@/services/api'

export default async function getAppointments(token) {
  const res = await api.get('/appointments', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
