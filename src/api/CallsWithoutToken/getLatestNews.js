'use server'

import api from '@/services/api'

export default async function getLatestNews(lang) {
  const res = await api.get(`/news/latest/${lang}`)

  return res.data
}
