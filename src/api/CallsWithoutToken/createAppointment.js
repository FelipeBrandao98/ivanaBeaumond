'use server'

import api from '@/services/api'

export default async function createAppointment(formData) {
  await api.post('/appointments', formData)
}
