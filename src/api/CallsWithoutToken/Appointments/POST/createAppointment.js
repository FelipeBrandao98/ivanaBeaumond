'use server'

import api from '@/services/api'

export default async function createAppointment(formData) {
  try {
    await api.post('/appointments', formData)
  } catch (err) {
    console.log(err)
  }
}
