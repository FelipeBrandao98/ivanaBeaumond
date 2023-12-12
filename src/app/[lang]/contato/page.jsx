// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import ContactHeader from '@/components/EndUsersRoute/PAGES/CONTACT/ContactHeader'
import AppointmentForm from '@/components/EndUsersRoute/PAGES/CONTACT/AppointmentForm'

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
      {/* {console.log(posts)} */}
      <ContactHeader lang={lang} />

      <AppointmentForm lang={lang} />
    </>
  )
  //
}
