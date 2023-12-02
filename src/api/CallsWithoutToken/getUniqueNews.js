'use server'

import api from '@/services/api'

export default async function getUniqueNews(lang, newsId) {
  try {
    const res = await api.get(`/news/${lang}/${newsId}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
