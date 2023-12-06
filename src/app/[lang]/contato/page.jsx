// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import ContactPage from '@/components/CONTACT/ContactPage'

// export async function generateMetadata({ params }) {
//   const { lang } = params

//   const traductedMeta = getLangDict(lang)

//   return {
//     title: traductedMeta.metadata.contact.title,
//     description: traductedMeta.metadata.contact.description,
//     openGraph: {
//       title: traductedMeta.metadata.contact.title,
//       description: traductedMeta.metadata.contact.description,
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
      <ContactPage lang={lang} />
    </>
  )
  //
}
