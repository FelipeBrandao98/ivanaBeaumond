// Next.js Components imports
import Link from 'next/link'
import Image from 'next/image'
import headerImg from '@/../public/photo_header/not-found.jpg'
import logoImg from '@/../public/photo_header/logo_.png'

// Function to traduct component imports
import getLangDict from '@/utils/getLangDict'

//Atoms imports
import PageHeader from '@/atoms/EndUsersRoute/PageHeader'
import { FiAlertTriangle, FiArrowLeft } from 'react-icons/fi'

// Component Declaration
export default function NotFoundHeader({ lang }) {
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
        <h3>
          <FiAlertTriangle width={100} height={100} />
          Error 404, nenhuma página encontrada neste endereço, por favor, volte
          à página principal
          <Link href={'/'}>
            <FiArrowLeft width={50} height={50} />
            Voltar para a página principal
          </Link>
        </h3>
        <div>
          <h2>
            {languageTraducted.news.subTitle}
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
