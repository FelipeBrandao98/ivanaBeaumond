'use server'

import api from '@/services/api'

export default async function likeComment(commentCode) {
  try {
    await api.patch(`/comments/like/${commentCode}`)
  } catch (err) {
    console.log(err)
  }
}
