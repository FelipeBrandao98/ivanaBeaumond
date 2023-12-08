// Components imports
import LogoutButton from './LogoutButton/LogoutButton'
import DashboardMenuNavigation from './DashboardMenuNavigation'

// Atoms imports
import DashboardMenuContainer from '@/atoms/AdminUsersRoute/Dashboard/DashboardMenuContainer'

// Component Declaration
export default function DashboardMenu({ children }) {
  // Return components, with functions to call API and language
  return (
    <>
      <DashboardMenuContainer>
        <DashboardMenuNavigation />
        <LogoutButton />
      </DashboardMenuContainer>
      {children}
    </>
  )
  //
}
