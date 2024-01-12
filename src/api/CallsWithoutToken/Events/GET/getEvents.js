'use server'

import api from '@/services/api'

export default async function getEvents(lang, page) {
  if (!page) {
    page = 0
  }

  try {
    const res = await api.get(`/news/event/${lang}/page/${page}`)

    return res.data
  } catch (err) {
    console.log(err)
  }
}
