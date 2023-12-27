'use server'

import api from '@/services/api'

export default async function getNewsByCat(lang, page, categoryId) {
  try {
    const res = await api.get(
      `/news/${lang}/page/${page}/categoryId/${categoryId}`,
    )

    return res.data
  } catch (err) {
    console.log(err)
  }
}
