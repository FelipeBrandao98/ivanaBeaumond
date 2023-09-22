'use client'

import { AuthContext } from '@/Context/AuthContext'
import AccessUnauthorized from '@/components/LOGIN/AccessUnauthorized'
import Dashboard from '@/components/LOGIN/Dashboard'
import { useContext } from 'react'

export default function CheckIfIsLogged({ children }) {
  const { token } = useContext(AuthContext)

  return (
    <>{token ? <Dashboard>{children}</Dashboard> : <AccessUnauthorized />}</>
  )
}
