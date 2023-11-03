export default function getLocalStorage(key) {
  'use client'

  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key)

    return JSON.parse(data)
  }
}
