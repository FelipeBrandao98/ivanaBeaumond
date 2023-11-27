// Cookies imports
import { cookies } from 'next/headers'

// Components imports
import AdressItem from '@/components/LAYOUT/AdressItem'
import Footer from '@/components/LAYOUT/Footer'
import GuideToBottomScroll from '@/components/LAYOUT/GuideToBottomScroll'
import Menu from '@/components/LAYOUT/Menu'
import ScrollToTop from '@/components/LAYOUT/ScrollToTop'
import SubscribeItem from '@/components/LAYOUT/SubscribeItem'

// Next.js Components imports
import Head from 'next/head'

// API Service imports
import api from '@/services/api'

// Fonts from google, resource of next.js imports
import {
  Inter,
  Poppins,
  Roboto,
  Tilt_Prism,
  Merriweather,
  Josefin_Sans,
  Bebas_Neue,
  Indie_Flower,
  Orbitron,
  Cinzel,
  Rouge_Script,
  Oooh_Baby,
  Playfair_Display,
} from 'next/font/google'

// Providers imports
import { Providers } from './providers'

// Google Analytics imports
import GoogleAnalytics from '@/services/GoogleAnalytics'

// Global Styles imports
import '@/styles/globals.css'
import CookieNotice from '@/hooks/CookieNotice'
import useLangDict from '@/utils/useLangDict'

// Font instances to pass as variables
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '900'],
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const tilt_prism = Tilt_Prism({
  variable: '--font-tilt-prism',
  subsets: ['latin'],
})

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const josephin_sans = Josefin_Sans({
  variable: '--font-josephin-sans',
  subsets: ['latin'],
})

const bebas_neue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: '400',
})

const indie_flower = Indie_Flower({
  variable: '--font-indie-flower',
  subsets: ['latin'],
  weight: '400',
})

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
})

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
})

const rouge_script = Rouge_Script({
  variable: '--font-rouge-script',
  subsets: ['latin'],
  weight: '400',
})

const oh_baby = Oooh_Baby({
  variable: '--font-oh-baby',
  subsets: ['latin'],
  weight: '400',
})

const playfair_display = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '700'],
})
//

export async function generateMetadata({ params }) {
  const { lang } = params

  const traductedMeta = useLangDict(lang)

  return {
    //
    //
    metadataBase: traductedMeta.metadata.metadataBase,
    generator: 'Next.js',
    applicationName: 'Website - Ivana Beaumond',
    creator: 'Felipe Brandão',
    keywords: traductedMeta.metadata.keywords,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
      languages: {
        'pt-BR': '/pt-BR',
        'de-DE': '/de',
        'fr-FR': '/fr',
        'en-US': '/en',
      },
    },
    title: traductedMeta.metadata.title,
    description: traductedMeta.metadata.description,
    //
    //
    openGraph: {
      title: traductedMeta.metadata.openGraph.title,
      description: traductedMeta.metadata.openGraph.description,
      url: traductedMeta.metadata.openGraph.url,
      images: [
        {
          url: 'https://ivana-backend-0a6d1ff75854.herokuapp.com/images/homeimage-d3c53481-7236-44da-ad04-2da9beae9ea6',
          width: 800,
          heigh: 600,
          alt: 'Ivana Beaumond Homepage',
        },
      ],
      type: 'website',
    },
    //
    //
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
    //
    //
    alternates: {
      canonical: 'https://www.ivanabeaumond.com',
      languages: {
        'pt-BR': 'https://www.ivanabeaumond.com/pt-BR',
        'de-DE': 'https://www.ivanabeaumond.com/de',
        'fr-FR': 'https://www.ivanabeaumond.com/fr',
        'en-US': 'https://www.ivanabeaumond.com/en',
        'en-UK': 'https://www.ivanabeaumond.com/en',
      },
      media: {
        'only screen and (max-width: 720px)':
          'https://www.ivanabeaumond.com/mobile',
      },
    },
  }
}

// functions to call API
async function createAppointment(formData) {
  'use server'
  await api.post('/appointments', formData)
}

// Component Declaration
export default async function RootLayout({ children }) {
  // Try to get cookies from language
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'
  //

  // Return components, with functions to call API and language
  return (
    <html lang={lang}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <body
        className={`
        ${inter.variable}
        ${poppins.variable}
        ${roboto.variable}
        ${tilt_prism.variable}
        ${merriweather.variable}
        ${josephin_sans.variable}
        ${bebas_neue.variable}
        ${indie_flower.variable}
        ${orbitron.variable}
        ${cinzel.variable}
        ${rouge_script.variable}
        ${oh_baby.variable}
        ${playfair_display.variable}
        `}
      >
        <Providers>
          <Menu createAppointment={createAppointment} lang={lang}>
            <GoogleAnalytics />
            <main>{children}</main>
            <AdressItem />
            <SubscribeItem lang={lang} />
            <Footer />
            <GuideToBottomScroll lang={lang} />
            <ScrollToTop />
          </Menu>
          <CookieNotice />
        </Providers>
      </body>
    </html>
  )
  //
}
