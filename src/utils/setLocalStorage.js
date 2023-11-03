export default function setLocalStorage(key, value) {
  'use client'

  if (typeof window !== 'undefined') {
    const data = JSON.stringify(value)

    return localStorage.setItem(key, value)
  }
}
