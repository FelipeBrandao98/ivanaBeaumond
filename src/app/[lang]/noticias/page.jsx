// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import BlogBanner from '@/components/BLOG/BlogBanner'
import BlogOtherPosts from '@/components/BLOG/BlogOtherPosts'

// API Service imports
import getLangDict from '@/utils/getLangDict'
import getLatestNews from '@/api/CallsWithoutToken/getLatestNews'

// Atoms imports
import NewsContainer from '@/atoms/News/NewsContainer'

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
    <NewsContainer>
      <BlogBanner lang={lang} data={latestPosts} />
      <BlogOtherPosts title="Espaço Debutantes" data={latestPosts} />
      <BlogOtherPosts title="Na Mídia" data={latestPosts} />
      <BlogOtherPosts title="Nossas Noivas" data={latestPosts} />
      <BlogOtherPosts title="Dicas e Truques" data={latestPosts} />
    </NewsContainer>
  )
  //
}
