'use server'

import api from '@/services/api'

export default async function getCategoryNews(lang) {
  if (!lang) {
    lang = 'pt-BR'
  }

  try {
    const res = await api.get(`/news/category/${lang}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
