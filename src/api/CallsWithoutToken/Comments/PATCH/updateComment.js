'use server'

import api from '@/services/api'

export default async function updateComments(commentCode, formData) {
  try {
    await api.patch(`/comments/${commentCode}`, formData)
  } catch (err) {
    console.log(err)
  }
}
