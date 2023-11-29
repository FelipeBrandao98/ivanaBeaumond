// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import NewsPageContent from '@/components/BLOG/NewsPageContent'

// Calls api imports
import getUniqueNews from '@/api/CallsWithoutToken/getUniqueNews'

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

  const post = await getUniqueNews(lang, id)

  // Return components, with data and language
  return (
    <>
      <NewsPageContent lang={lang} data={post} />
    </>
  )
  //
}
