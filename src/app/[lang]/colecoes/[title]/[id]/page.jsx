// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import CollectionGrid from '@/components/EndUsersRoute/PAGES/COLLECTIONS/CollectionGrid'

// export async function generateMetadata({ params }) {
//   const { lang } = params

//   const traductedMeta = getLangDict(lang)

//   return {
//     title: traductedMeta.metadata.search.title,
//     description: traductedMeta.metadata.search.description,
//     openGraph: {
//       title: traductedMeta.metadata.search.title,
//       description: traductedMeta.metadata.search.description,
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
      <CollectionGrid lang={lang} />
    </>
  )
  //
}
