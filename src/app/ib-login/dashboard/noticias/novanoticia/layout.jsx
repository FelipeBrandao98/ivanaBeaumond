import CheckIfIsLogged from '@/hooks/CheckIfIsLogged'

export default function Layout({ children }) {
  return <CheckIfIsLogged>{children}</CheckIfIsLogged>
}
