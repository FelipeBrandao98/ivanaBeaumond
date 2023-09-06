import { cookies } from 'next/headers'
import BlogBanner from '@/components/BLOG/BlogPostsPage/BlogBanner'
import BlogOtherPosts from '@/components/BLOG/BlogPostsPage/BlogOtherPosts'
import BlogPostPage from '@/components/BLOG/BlogPostsPage'
import api from '@/services/api'

async function getLatestPosts(lang) {
  const res = await api.get(`/news/latest/${lang}`)

  return res.data
}

export default async function Page() {
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value

  const latestPosts = await getLatestPosts(lang)

  return (
    <BlogPostPage>
      <BlogBanner lang={lang} data={latestPosts} />
      <BlogOtherPosts title="Espaço Debutantes" data={latestPosts} />
      <BlogOtherPosts title="Na Mídia" data={latestPosts} />
      <BlogOtherPosts title="Nossas Noivas" data={latestPosts} />
      <BlogOtherPosts title="Dicas e Truques" data={latestPosts} />
    </BlogPostPage>
  )
}
