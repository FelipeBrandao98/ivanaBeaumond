'use server'

import api from '@/services/api'

export default async function getLatestNews(lang) {
  try {
    const res = await api.get(`/news/latest/${lang}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
