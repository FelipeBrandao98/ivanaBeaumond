'use server'

import api from '@/services/api'

export default async function createTrackList(token, createTrack) {
  try {
    await api.post('/tracklist', createTrack, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
