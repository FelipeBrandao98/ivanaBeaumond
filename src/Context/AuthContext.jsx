'use client'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState('')

  async function handleChangeToken(accessToken) {
    setToken(accessToken)
    console.log(token)
  }

  return (
    <AuthContext.Provider value={{ token, handleChangeToken }}>
      {children}
    </AuthContext.Provider>
  )
}
