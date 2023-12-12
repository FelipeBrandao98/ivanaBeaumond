// Next.js Components imports
import Image from 'next/image'
import headerImg from '@/../public/photo_header/_ELC8847.jpg'
import logoImg from '@/../public/photo_header/logo_.png'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

//Atoms imports
import PageHeader from '@/atoms/EndUsersRoute/PageHeader'

// Component Declaration
export default function CommentsHeader({ lang }) {
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
        <h1>{languageTraducted.comments.title}</h1>
        <div>
          <h2>
            {languageTraducted.comments.subTitle}
            <Image
              src={logoImg}
              alt="Ivana Beaumond"
              width={1920}
              height={1080}
            />
          </h2>
        </div>
      </PageHeader>
    </>
  )
  //
}
