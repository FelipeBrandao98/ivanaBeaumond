// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import CONSTRUCTOR from '@/components/EndUsersRoute/PAGES/EVENTS/CONSTRUCTOR'
import OtherEvents from '@/components/EndUsersRoute/PAGES/EVENTS/OtherEvents'

// Calls api imports
import getUniqueNews from '@/api/CallsWithoutToken/getUniqueNews'
import getLatestNews from '@/api/CallsWithoutToken/getLatestNews'

// Metadata
export async function generateMetadata({ params }) {
  // getParams
  const { lang, id } = params

  // Fetch to api
  const news = await getUniqueNews(lang ? lang : 'pt-BR', id)

  // return metadata
  return {
    title: news.title,
    description: news.subtitle,
    openGraph: {
      title: news.title,
      description: news.subtitle,
      images: news.cover.url,
    },
  }
  //
}
//

// Component Declaration
export default async function Page({ params }) {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value

  const { id } = params

  // Instantiate response objects from api, by language by the way
  const news = await getUniqueNews(lang, id)
  const otherEvents = await getLatestNews(lang)

  // Return components, with data and language
  return (
    <>
      <CONSTRUCTOR lang={lang} data={news} />
      {
        //
      }
      <OtherEvents title="Espaço Debutantes" data={otherEvents} />
      <OtherEvents title="Na Mídia" data={otherEvents} />
      <OtherEvents title="Nossas Noivas" data={otherEvents} />
      <OtherEvents title="Dicas e Truques" data={otherEvents} />
    </>
  )
  //
}
