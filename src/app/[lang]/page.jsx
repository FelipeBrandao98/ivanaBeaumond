// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import BannerHomePage from '@/components/HOME/BannerHomePage'
import CollectionsItemsCardHomePage from '@/components/HOME/CollectionsItemsCardHomePage'
import DepositionsAreaHomePage from '@/components/HOME/DepositionsAreaHomePage'
import EventsItemsHomePage from '@/components/HOME/EventsItemsHomePage'
import HighLightsHomePage from '@/components/HOME/HighLightsHomePage'

// API Service imports
import getCategoryCollections from '@/api/CallsWithoutToken/getCategoryCollections'
import getLatestNews from '@/api/CallsWithoutToken/getLatestNews'
import getComments from '@/api/CallsWithoutToken/getComments'

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
    <>
      <BannerHomePage lang={lang} />
      <CollectionsItemsCardHomePage lang={lang} data={categories} />
      <EventsItemsHomePage lang={lang} data={{ events }} />
      <DepositionsAreaHomePage lang={lang} data={depositions} />
      <HighLightsHomePage lang={lang} data={latestNews} />
    </>
  )
  //
}
