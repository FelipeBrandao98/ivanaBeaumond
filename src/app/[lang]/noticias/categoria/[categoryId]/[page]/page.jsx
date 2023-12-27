// Cookies imports
import { cookies } from 'next/headers'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

// Components imports
import NewsHeader from '@/components/EndUsersRoute/PAGES/NEWS/NewsHeader'
import NewsOrganizerPagination from '@/components/EndUsersRoute/PAGES/NEWS/NewsOrganizerPagination'

// API Service imports
import getNewsLenghtByCat from '@/api/CallsWithoutToken/News/GET/getNewsLenghtByCat'
import getCategoryNewsById from '@/api/CallsWithoutToken/News/CategoryNews/GET/getCategoryNewsById'
import getNewsByCat from '@/api/CallsWithoutToken/News/GET/getNewsByCat'

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
  const pages = await getNewsLenghtByCat(params.categoryId)
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
