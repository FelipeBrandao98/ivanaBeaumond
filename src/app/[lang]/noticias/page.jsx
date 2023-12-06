// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import NewsHeader from '@/components/EndUsersRoute/PAGES/NEWS/NewsHeader'
import NewsBanner from '@/components/EndUsersRoute/PAGES/NEWS/NewsBanner'
import OtherNews from '@/components/EndUsersRoute/PAGES/NEWS/OtherNews'

// API Service imports
import getLangDict from '@/utils/getLangDict'
import getLatestNews from '@/api/CallsWithoutToken/getLatestNews'

export async function generateMetadata({ params }) {
  const { lang } = params

  const traductedMeta = getLangDict(lang)

  return {
    title: traductedMeta.metadata.news.title,
    description: traductedMeta.metadata.news.description,
    openGraph: {
      title: traductedMeta.metadata.news.title,
      description: traductedMeta.metadata.news.description,
    },
  }
}

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
      <NewsHeader lang={lang} />

      <NewsBanner lang={lang} data={latestPosts} />
      {
        //
      }
      <OtherNews title="Espaço Debutantes" data={latestPosts} />
      <OtherNews title="Na Mídia" data={latestPosts} />
      <OtherNews title="Nossas Noivas" data={latestPosts} />
      <OtherNews title="Dicas e Truques" data={latestPosts} />
    </>
  )
  //
}
