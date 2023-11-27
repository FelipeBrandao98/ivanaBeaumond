// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import BlogBanner from '@/components/BLOG/BlogPostsPage/BlogBanner'
import BlogOtherPosts from '@/components/BLOG/BlogOtherPosts'
import BlogPostPage from '@/components/BLOG/BlogPostsPage'

// API Service imports
import api from '@/services/api'

// functions to call API
async function getLatestPosts(lang) {
  const res = await api.get(`/news/latest/${lang}`)

  return res.data
}
//

export const metadata = {
  title: 'Notícias',
  description: '',
}

// Component Declaration
export default async function Page() {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value
  //

  // Instantiate response objects from api, by language by the way
  const latestPosts = await getLatestPosts(lang)

  // Return components, with data and language
  return (
    <BlogPostPage>
      <BlogBanner lang={lang} data={latestPosts} />
      <BlogOtherPosts title="Espaço Debutantes" data={latestPosts} />
      <BlogOtherPosts title="Na Mídia" data={latestPosts} />
      <BlogOtherPosts title="Nossas Noivas" data={latestPosts} />
      <BlogOtherPosts title="Dicas e Truques" data={latestPosts} />
    </BlogPostPage>
  )
  //
}
