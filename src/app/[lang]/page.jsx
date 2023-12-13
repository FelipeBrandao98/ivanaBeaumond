// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import BannerHome from '@/components/EndUsersRoute/PAGES/HOME/BannerHome'
import CollectionsHome from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionsHome'
import EventsHome from '@/components/EndUsersRoute/PAGES/EVENTS/EventsHome'
import CommentsHome from '@/components/EndUsersRoute/PAGES/COMMENTS/CommentsHome'
import NewsBanner from '@/components/EndUsersRoute/PAGES/NEWS/NewsBanner'

// API Service imports
import getCategoryCollections from '@/api/CallsWithoutToken/getCategoryCollections'
import getLatestNews from '@/api/CallsWithoutToken/getLatestNews'
import getComments from '@/api/CallsWithoutToken/getComments'
import OtherNews from '@/components/EndUsersRoute/PAGES/NEWS/OtherNews'
import OtherEvents from '@/components/EndUsersRoute/PAGES/EVENTS/OtherEvents'
import NewsSeeAllButton from '@/components/EndUsersRoute/PAGES/NEWS/NewsSeeAllButton'
import EventsSeeAllButton from '@/components/EndUsersRoute/PAGES/EVENTS/EventsSeeAllButton'

const events = {
  title: 'Eventos',
  nextEventTitle: 'Proximo Evento',
  futureEventsTitle: 'Eventos Futuros',
  seeMore: 'Veja Mais',
  nextEvent: {
    id: 1,
    title: 'São Paulo Fashion Week',
    date: '27 de Setembro de 2023',
    url: '',
  },
  futureEvents: [
    {
      id: 1,
      title: 'Moscow Standard',
      date: '25 de Dezembro de 2023',
      url: '',
    },
    {
      id: 2,
      title: 'Paris Premier',
      date: '28 de Dezembro de 2023',
      url: '',
    },
    {
      id: 3,
      title: 'Tokio Standard',
      date: '01 de Janeiro de 2024',
      url: '',
    },
  ],
}

// Component Declaration
export default async function Page() {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'
  //

  // Instantiate response objects from api, by language by the way
  const categories = await getCategoryCollections(lang)
  const latestNews = await getLatestNews(lang)
  const depositions = await getComments()
  //

  // Return components, with data and language
  return (
    <div className="home">
      <BannerHome lang={lang} />

      <CollectionsHome lang={lang} data={categories} />

      <EventsHome lang={lang} data={{ events }} />

      <CommentsHome lang={lang} data={depositions} />

      <NewsBanner lang={lang} data={latestNews} />

      <OtherNews lang={lang} data={latestNews} title="Notícias" />

      <NewsSeeAllButton lang={lang} />

      <OtherEvents lang={lang} data={latestNews} title="Eventos" />

      <EventsSeeAllButton lang={lang} />
    </div>
  )
  //
}
