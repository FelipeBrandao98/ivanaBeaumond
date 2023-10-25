// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import BannerHomePage from '@/components/HOME/BannerHomePage'
import CollectionsItemsCardHomePage from '@/components/HOME/CollectionsItemsCardHomePage'
import DepositionsArea from '@/components/HOME/DepositionsArea'
import EventsItemsHomePage from '@/components/HOME/EventsItemsHomePage'
import HighLightsHomePage from '@/components/HOME/HighLightsHomePage'

// API Service imports
import api from '@/services/api'

// functions to call API
async function getCollectionsCategoryData(lang) {
  const res = await api.get(`/collections/category/${lang}`)

  return res.data
}

async function getDepositionsData() {
  const res = await api.get('/comments')

  return res.data
}

async function getLatestPosts(lang) {
  const res = await api.get(`/news/latest/${lang}`)

  return res.data
}
//

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
  const categories = await getCollectionsCategoryData(lang)
  const depositions = await getDepositionsData()
  const latestPosts = await getLatestPosts(lang)
  //

  // Return components, with data and language
  return (
    <>
      <main>
        <BannerHomePage lang={lang} />
        <CollectionsItemsCardHomePage lang={lang} data={categories} />
        <EventsItemsHomePage lang={lang} data={{ events }} />
        <DepositionsArea lang={lang} data={depositions} />
        <HighLightsHomePage lang={lang} data={latestPosts} />
      </main>
    </>
  )
  //
}
