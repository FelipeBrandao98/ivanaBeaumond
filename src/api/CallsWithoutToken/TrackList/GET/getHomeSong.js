'use server'

import api from '@/services/api'

export default async function getHomeSong() {
  try {
    const res = await api.get('/tracklist/homesong')

    return res.data
  } catch (err) {
    console.log(err)
  }
}
