'use client'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState('')

  async function handleChangeToken(accessToken) {
    setToken(accessToken)
  }

  async function handleLogout() {
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, handleChangeToken, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
