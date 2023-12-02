'use server'

import api from '@/services/api'

export default async function login(formData) {
  try {
    const res = await api.post('/login', formData)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
