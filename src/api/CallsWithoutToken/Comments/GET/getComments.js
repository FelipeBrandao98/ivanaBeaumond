'use server'

import api from '@/services/api'

export default async function getComments() {
  try {
    const res = await api.get('/comments')

    return res.data
  } catch (err) {
    console.log(err)
  }
}
