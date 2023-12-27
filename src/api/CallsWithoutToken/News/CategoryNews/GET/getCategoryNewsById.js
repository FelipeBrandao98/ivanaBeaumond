'use server'

import api from '@/services/api'

export default async function getCategoryNewsById(lang, categoryId) {
  try {
    const res = await api.get(`/news/category/${lang}/${categoryId}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
