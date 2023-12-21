// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import NewsHeader from '@/components/EndUsersRoute/PAGES/NEWS/NewsHeader'
import NewsBanner from '@/components/EndUsersRoute/PAGES/NEWS/NewsBanner'
import NewsOrganizer from '@/components/EndUsersRoute/PAGES/NEWS/NewsOrganizer'

// API Service imports
import getLangDict from '@/utils/getLangDict'
import getLatestNews from '@/api/CallsWithoutToken/getLatestNews'
import getNews from '@/api/CallsWithoutToken/getNews'
import getNewsPagesByCat from '@/api/CallsWithoutToken/getNewsPagesByCat'
import getCategoryNews from '@/api/CallsWithoutToken/getCategoryNews'
import getCategoryNewsById from '@/api/CallsWithoutToken/getCategoryNewsById'
import getNewsByCat from '@/api/CallsWithoutToken/getNewsByCat'
import NewsOrganizerPagination from '@/components/EndUsersRoute/PAGES/NEWS/NewsOrganizerPagination'

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
export default async function Page({ params }) {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value
  //

  // Instantiate response objects from api, by language by the way
  const news = await getNewsByCat(lang, params.page, params.categoryId)
  const pages = await getNewsPagesByCat(params.categoryId)
  const category = await getCategoryNewsById(lang, params.categoryId)

  // Return components, with data and language
  return (
    <>
      <NewsHeader lang={lang} category={category} />
      {
        //
      }
      <NewsOrganizerPagination
        lang={lang}
        data={news}
        page={params.page}
        pages={pages}
        categoryId={params.categoryId}
      />
    </>
  )
  //
}
