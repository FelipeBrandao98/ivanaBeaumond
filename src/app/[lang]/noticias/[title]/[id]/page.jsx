// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import NewsPageHead from '@/components/BLOG/NewsPageHead'
import NewsPageContent from '@/components/BLOG/NewsPageContent'

import getUniqueNews from '@/api/getUniqueNews'

export async function generateMetadata({ params }) {
  const { lang, id } = params

  const news = await getUniqueNews(lang ? lang : 'pt-BR', id)

  return {
    title: news.title,
    description: news.subtitle,
    openGraph: {
      title: news.title,
      description: news.subtitle,
      images: news.cover.url,
    },
  }
}

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
