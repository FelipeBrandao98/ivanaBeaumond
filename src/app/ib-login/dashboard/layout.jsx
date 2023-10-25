// Hooks imports
import CheckIfIsLogged from '@/hooks/CheckIfIsLogged'

// Component Declaration
export default function Layout({ children }) {
  // Return components
  return <CheckIfIsLogged>{children}</CheckIfIsLogged>
  //
}
