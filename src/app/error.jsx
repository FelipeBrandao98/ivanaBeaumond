import AdressItem from '@/components/EndUsersRoute/LAYOUT/AdressItem'
import Footer from '@/components/EndUsersRoute/LAYOUT/Footer'
import Menu from '@/components/EndUsersRoute/LAYOUT/Menu'
import ScrollToTop from '@/components/EndUsersRoute/LAYOUT/ScrollToTop'
import NewsHeader from '@/components/EndUsersRoute/PAGES/NEWS/NewsHeader'
import Link from 'next/link'
import { Providers } from './providers'
import NotFoundHeader from '@/components/EndUsersRoute/PAGES/NotFoundHeader'

export default async function NotFound() {
  return (
    <div>
      <NotFoundHeader lang={'pt-BR'} />
      <AdressItem lang={'pt-BR'} />
      <Footer lang={'pt-BR'} />
      <ScrollToTop lang={'pt-BR'} />
    </div>
  )
}
