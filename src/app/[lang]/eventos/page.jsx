// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import EventsHeader from '@/components/EndUsersRoute/PAGES/EVENTS/EventsHeader'
import OtherEvents from '@/components/EndUsersRoute/PAGES/EVENTS/OtherEvents'

// API Service imports
import getLangDict from '@/utils/getLangDict'
import getLatestNews from '@/api/CallsWithoutToken/getLatestNews'

// export async function generateMetadata({ params }) {
//   const { lang } = params

//   const traductedMeta = getLangDict(lang)

//   return {
//     title: traductedMeta.metadata.news.title,
//     description: traductedMeta.metadata.news.description,
//     openGraph: {
//       title: traductedMeta.metadata.news.title,
//       description: traductedMeta.metadata.news.description,
//     },
//   }
// }

// Component Declaration
export default async function Page() {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value
  //

  // Instantiate response objects from api, by language by the way
  const latestPosts = await getLatestNews(lang)

  // Return components, with data and language
  return (
    <>
      <EventsHeader lang={lang} />
      {
        //
      }
      <OtherEvents title="Espaço Debutantes" data={latestPosts} />
      <OtherEvents title="Na Mídia" data={latestPosts} />
      <OtherEvents title="Nossas Noivas" data={latestPosts} />
      <OtherEvents title="Dicas e Truques" data={latestPosts} />
    </>
  )
  //
}
