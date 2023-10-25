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
import { cookies } from 'next/headers'
import Head from 'next/head'

import { Providers } from './providers'

import '@/styles/globals.css'

import AdressItem from '@/components/LAYOUT/AdressItem'
import Footer from '@/components/LAYOUT/Footer'
import GuideToBottomScroll from '@/components/LAYOUT/GuideToBottomScroll'
import Menu from '@/components/LAYOUT/Menu'
import ScrollToTop from '@/components/LAYOUT/ScrollToTop'
import SubscribeItem from '@/components/LAYOUT/SubscribeItem'

import api from '@/services/api'
import GoogleAnalytics from '@/services/GoogleAnalytics'

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

export const metadata = {
  title: 'Ivana Beaumond',
  description: 'Seu site de noivas',
}

async function createAppointment(formData) {
  'use server'
  await api.post('/appointments', formData)
}

export default async function RootLayout({ children }) {
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')
  const lang = langCookie?.value || 'pt-BR'

  return (
    <html lang={lang ? lang : 'pt-BR'}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Encontre vestidos de noiva, debutantes e trajes masculinos exclusivos no Atelier Ivana Beaumond. Com mais de 20 anos de experiência, a estilista cria coleções únicas que unem a essência da mulher brasileira com a elegância francesa. Visite nossa loja de noivas no Rio de Janeiro ou Paris para encontrar o vestido perfeito para seu casamento ou festa de 15 anos."
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:title" content="Ivana Beaumond - Ateliê Francês" />
        <meta
          property="og:description"
          content="Descubra os vestidos mais exclusivos e elegantes para noivas, debutantes e convidados no Atelier Ivana Beaumond! Com mais de 20 anos de experiência, a designer une a essência da mulher brasileira com a elegância francesa para criar coleções únicas. Encontre o traje perfeito para o casamento ou 15 anos dos seus sonhos. Visite nossa loja no Rio de Janeiro ou Paris hoje mesmo! Palavras-chave: Vestidos de Noiva, Vestidos de Debutantes, Trajes Masculinos, Casamento, 15 Anos, Loja de Noiva."
        />
        <meta property="og:url" content="https://ivanabeaumond.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
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
        </Providers>
      </body>
    </html>
  )
}
