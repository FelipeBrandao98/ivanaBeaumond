'use server'

import api from '@/services/api'

export default async function getComments(token) {
  try {
    const res = await api.get('/comments/all', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    return res.data
  } catch (err) {
    console.log(err)
  }
}
