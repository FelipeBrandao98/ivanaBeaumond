'use server'

import api from '@/services/api'

export default async function editAppointment(formData) {
  try {
    await api.patch('/appointments', formData, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
