// Cookies imports
import getComments from '@/api/CallsWithoutToken/Comments/GET/getComments'
import AddComment from '@/components/EndUsersRoute/PAGES/COMMENTS/AddComment'
import CommentsHeader from '@/components/EndUsersRoute/PAGES/COMMENTS/CommentsHeader'
import CommentsHome from '@/components/EndUsersRoute/PAGES/COMMENTS/CommentsHome'
import CommentsPage from '@/components/EndUsersRoute/PAGES/COMMENTS/CommentsPage'
import { cookies } from 'next/headers'

// export async function generateMetadata({ params }) {
//   const { lang } = params

//   const traductedMeta = getLangDict(lang)

//   return {
//     title: traductedMeta.metadata.comments.title,
//     description: traductedMeta.metadata.comments.description,
//     openGraph: {
//       title: traductedMeta.metadata.comments.title,
//       description: traductedMeta.metadata.comments.description,
//     },
//   }
// }

// Component Declaration
export default async function Page() {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'
  //

  const comments = await getComments()

  // Return components, with data and language
  return (
    <>
      {console.log(comments)}
      <CommentsHeader lang={lang} />
      <AddComment lang={lang} />
      <CommentsPage lang={lang} data={comments} />
    </>
  )
  //
}
