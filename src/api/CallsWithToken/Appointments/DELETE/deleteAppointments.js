'use server'

import api from '@/services/api'

export default async function deleteAppointments(token, id) {
  const res = await api.delete(`/appointments/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return res.data
}
