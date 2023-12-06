'use client'

// Context imports
import { AuthContext } from '@/Context/AuthContext'
import { useContext } from 'react'

// Styles imports
import styles from './styles.module.css'

// Atoms imports
import DashboardContainer from '@/atoms/Dashboard/DashboardContainer'
import DashboardMainTitle from '@/atoms/Dashboard/DashboardMainTitle'

// Component Declaration
export default function MailerPage() {
  // Instanciate and initialize Contexts functions
  const { token } = useContext(AuthContext)

  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMainTitle>Mailer</DashboardMainTitle>
      <DashboardContainer></DashboardContainer>
    </>
  )
  //
}
