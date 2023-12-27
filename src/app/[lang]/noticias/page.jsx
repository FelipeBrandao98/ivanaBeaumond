// Cookies imports
import { cookies } from 'next/headers'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Components imports
import NewsHeader from '@/components/EndUsersRoute/PAGES/NEWS/NewsHeader'
import NewsBanner from '@/components/EndUsersRoute/PAGES/NEWS/NewsBanner'
import NewsOrganizer from '@/components/EndUsersRoute/PAGES/NEWS/NewsOrganizer'

// API Service imports
import getLatestNews from '@/api/CallsWithoutToken/News/GET/getLatestNews'
import getNews from '@/api/CallsWithoutToken/News/GET/getNews'

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
  const news = await getNews(lang)

  // Return components, with data and language
  return (
    <>
      <NewsHeader lang={lang} />

      <NewsBanner lang={lang} data={latestPosts} />
      {
        //
      }
      <NewsOrganizer lang={lang} latestPosts={news} />
    </>
  )
  //
}
