import BlogBanner from '@/components/BLOG/BlogPostsPage/BlogBanner'
import BlogOtherPosts from '@/components/BLOG/BlogPostsPage/BlogOtherPosts'
import BlogPostPage from '@/components/BLOG/BlogPostsPage'
import api from '@/services/api'

async function getData() {
  const res = await api.get('/news')

  return res.data
}

export default async function Page() {
  const posts1 = await getData()

  return (
    <BlogPostPage>
      <BlogBanner />
      <BlogOtherPosts title="Espaço Debutantes" data={posts1} />
      <BlogOtherPosts title="Na Mídia" data={posts1} />
      <BlogOtherPosts title="Nossas Noivas" data={posts1} />
      <BlogOtherPosts title="Dicas e Truques" data={posts1} />
    </BlogPostPage>
  )
}
