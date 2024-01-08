'use server'

import api from '@/services/api'

export default async function getTrackList() {
  try {
    const res = await api.get('/tracklist')

    return res.data
  } catch (err) {
    console.log(err)
  }
}
