// Next.js Components imports
import Image from 'next/image'
import headerImg from '@/../public/ivana-beaumond-event-homepage.jpg'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

//Atoms imports
import PageHeader from '@/atoms/EndUsersRoute/PageHeader'

// Component Declaration
export default function NewsHeader({ lang }) {
  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  // Return components, with functions to call API and language
  return (
    <>
      <PageHeader>
        <Image
          src={headerImg}
          alt="Ivana Beaumond"
          placeholder="blur"
          width={1920}
          height={1080}
        />
        <h1>{languageTraducted.news.title}</h1>
        <div>
          <h2>{languageTraducted.news.subTitle}</h2>
        </div>
      </PageHeader>
    </>
  )
  //
}
