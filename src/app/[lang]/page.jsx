import { cookies } from 'next/headers'

import BannerHomePage from '@/components/HOME/BannerHomePage'
import CollectionsItemsCardHomePage from '@/components/HOME/CollectionsItemsCardHomePage'
import DepositionsArea from '@/components/HOME/DepositionsArea'
import EventsItemsHomePage from '@/components/HOME/EventsItemsHomePage'
import HighLightsHomePage from '@/components/HOME/HighLightsHomePage'

import api from '@/services/api'

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

export default async function Page() {
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value

  const categories = await getCollectionsCategoryData(lang)
  const depositions = await getDepositionsData()
  const latestPosts = await getLatestPosts(lang)

  return (
    <>
      <main>
        {
          // Language ✅
        }
        <BannerHomePage lang={lang} />
        {
          // Language ✅
        }
        <CollectionsItemsCardHomePage lang={lang} data={categories} />
        {
          // Language ✅
        }
        <EventsItemsHomePage lang={lang} data={{ events }} />
        {
          // Language ✅
        }
        <DepositionsArea lang={lang} data={depositions} />
        {
          // Language ✅
        }
        <HighLightsHomePage lang={lang} data={latestPosts} />
      </main>
    </>
  )
}
