// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import NewsPageHead from '@/components/BLOG/NewsPageHead'
import NewsPageContent from '@/components/BLOG/NewsPageContent'

// API Service imports
import api from '@/services/api'

// functions to call API
async function getPost(lang, id) {
  const res = await api.get(`/news/${lang}/${id}`)

  return res.data
}
//

// Component Declaration
export default async function Page({ params }) {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie.value

  const { title, id } = params

  const post = await getPost(lang, id)

  // Return components, with data and language
  return (
    <>
      {console.log(post)}
      <NewsPageHead lang={lang} data={post} />
      <NewsPageContent lang={lang} data={post} />
    </>
  )
  //
}
