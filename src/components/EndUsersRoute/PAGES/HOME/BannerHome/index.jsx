// Next.js Components imports
import Image from 'next/image'
import Link from 'next/link'

// Image import
import homeImage from '@/../public/homeimage.jpg'

// Icons imports
import { FaArrowRight } from 'react-icons/fa'

// Atoms imports
import BannerHomePageContainer from '@/atoms/EndUsersRoute/PAGES/Home/BannerHomePage/BannerHomePageContainer'

// Component Declaration
export default function BannerHome({ lang }) {
  // Return components, with functions to call API and language
  return (
    <>
      <BannerHomePageContainer>
        <h1>
          DÉCOUVREZ LE MONDE MERVEILLEUX DE
          <br />
          IVANA BEAUMOND
        </h1>

        <Image
          src={homeImage}
          placeholder="blur"
          alt="HomePage Ivana Beaumond | Ateliê Francês"
        />

        <Link
          href={{
            pathname: 'colecoes',
            lang: lang,
          }}
        >
          DÉCOUVREZ MAINTENANT
          <FaArrowRight width={50} height={50} />
        </Link>
      </BannerHomePageContainer>
    </>
  )
  //
}
