'use server'

import api from '@/services/api'

export default async function updateHomeSong(token, trackId) {
  try {
    await api.patch(`/tracklist/homesong/${trackId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
