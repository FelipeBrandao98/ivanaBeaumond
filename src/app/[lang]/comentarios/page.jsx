// Cookies imports
import CommentsHeader from '@/components/EndUsersRoute/PAGES/COMMENTS/CommentsHeader'
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

  // Return components, with data and language
  return (
    <>
      <CommentsHeader lang={lang} />
    </>
  )
  //
}
