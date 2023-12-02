'use server'

import api from '@/services/api'

export default async function getCategoryNews() {
  try {
    const res = await api.get('/news/category/pt-BR')

    return res.data
  } catch (err) {
    console.log(err)
  }
}
