// Next.js Components imports
import Image from 'next/image'
import Link from 'next/link'
import homeImage from '@/../public/homeimage.jpg'

// Icons imports
import { FaArrowRight } from 'react-icons/fa'

// Atoms imports
import BannerHomePageContainer from '@/atoms/Home/BannerHomePage/BannerHomePageContainer'

// Component Declaration
export default function BannerHomePage() {
  // Return components, with functions to call API and language
  return (
    <>
      <BannerHomePageContainer>
        <Image
          src={homeImage}
          placeholder="blur"
          alt="HomePage Ivana Beaumond | Ateliê Francês"
        />
        <h1>
          DÉCOUVREZ LE MONDE MERVEILLEUX DE
          <br />
          IVANA BEAUMOND
        </h1>
        <h3>
          <Link href="pt-BR/collections">
            DÉCOUVREZ MAINTENANT
            <FaArrowRight width={50} height={50} />
          </Link>
        </h3>
      </BannerHomePageContainer>
    </>
  )
  //
}
