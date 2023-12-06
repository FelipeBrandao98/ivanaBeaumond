// Cookies imports
import { cookies } from 'next/headers'

// export async function generateMetadata({ params }) {
//   const { lang } = params

//   const traductedMeta = getLangDict(lang)

//   return {
//     title: traductedMeta.metadata.events.title,
//     description: traductedMeta.metadata.events.description,
//     openGraph: {
//       title: traductedMeta.metadata.events.title,
//       description: traductedMeta.metadata.events.description,
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
      <h1>Evento</h1>
    </>
  )
  //
}
