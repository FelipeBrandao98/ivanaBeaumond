'use server'

import api from '@/services/api'

export default async function getNews(lang) {
  try {
    const res = await api.get(`/news/${lang}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
