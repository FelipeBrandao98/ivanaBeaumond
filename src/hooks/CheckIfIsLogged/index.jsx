'use client'

// React imports
import { useContext } from 'react'

// Context imports
import { AuthContext } from '@/Context/AuthContext'

// Componentsimports
import AccessUnauthorized from '@/components/LOGIN/AccessUnauthorized'
import Dashboard from '@/components/LOGIN/Dashboard'
import DashboardSpacement from '@/atoms/AdminUsersRoute/DashboardSpacement'

// Component Declaration
export default function CheckIfIsLogged({ children }) {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)

  // Return Dashboard or block if has no token
  return (
    <>
      {token ? (
        <Dashboard>
          <DashboardSpacement>{children}</DashboardSpacement>
        </Dashboard>
      ) : (
        <AccessUnauthorized />
      )}
    </>
  )
  //
}
