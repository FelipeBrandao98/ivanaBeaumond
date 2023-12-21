'use server'

import api from '@/services/api'

export default async function getNewsPagesByCat(categoryId) {
  try {
    const res = await api.get(`/news/count/${categoryId}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
