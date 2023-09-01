import { cookies } from 'next/headers'

import BannerHomePage from '@/components/HOME/BannerHomePage'
import CollectionsItemsCardHomePage from '@/components/HOME/CollectionsItemsCardHomePage'
import DepositionsArea from '@/components/HOME/DepositionsArea'
import EventsItemsHomePage from '@/components/HOME/EventsItemsHomePage'
import HighLightsHomePage from '@/components/HOME/HighLightsHomePage'

import api from '@/services/api'

async function getCollectionsCategoryData() {
  const res = await api.get('/collections-category')

  return res.data
}

async function getDepositionsData() {
  const res = await api.get('/comments')

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
      id: 1,
      title: 'Tokio Standard',
      date: '01 de Janeiro de 2024',
      url: '',
    },
  ],
}

const highlights = {
  title: 'Últimas Notícias',
  seeMore: 'Leia Mais',
  highlight: [
    {
      id: 1,
      title: 'Ivana faz exposição em paris',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus omnis laudantium sunt commodi magni error aspernatur voluptate ut temporibus deleniti, soluta impedit eveniet quasi eos! Illum, sint? Tenetur, reiciendis.',
      imageUrl: '/photos_blog/photo_blog_3.jpg',
      imageAlt: 'Ivana Beaumond',
    },
    {
      id: 2,
      title: 'Ivana faz exposição em paris',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus omnis laudantium sunt commodi magni error aspernatur voluptate ut temporibus deleniti, soluta impedit eveniet quasi eos! Illum, sint? Tenetur, reiciendis.',
      imageUrl: '/photos_blog/photo_blog_2.jpg',
      imageAlt: 'Ivana Beaumond',
    },
    {
      id: 3,
      title: 'Ivana faz exposição em paris',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus omnis laudantium sunt commodi magni error aspernatur voluptate ut temporibus deleniti, soluta impedit eveniet quasi eos! Illum, sint? Tenetur, reiciendis.',
      imageUrl: '/photos_blog/photo_blog_1.jpeg',
      imageAlt: 'Ivana Beaumond',
    },
    {
      id: 4,
      title: 'Ivana faz exposição em paris',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus omnis laudantium sunt commodi magni error aspernatur voluptate ut temporibus deleniti, soluta impedit eveniet quasi eos! Illum, sint? Tenetur, reiciendis.',
      imageUrl: '/photos_blog/photo_blog_1.jpeg',
      imageAlt: 'Ivana Beaumond',
    },
  ],
}

export default async function Page() {
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value

  const categories = await getCollectionsCategoryData()
  const depositions = await getDepositionsData()

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
          // Language
        }
        <EventsItemsHomePage lang={lang} data={{ events }} />
        {
          // Language
        }
        <DepositionsArea lang={lang} data={depositions} />
        {
          // Language
        }
        <HighLightsHomePage lang={lang} data={{ highlights }} />
      </main>
    </>
  )
}
