import { Inter } from 'next/font/google'
import Head from 'next/head'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ivana Beaumond',
  description: 'Seu site de noivas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name='description' content='Encontre vestidos de noiva, debutantes e trajes masculinos exclusivos no Atelier Ivana Beaumond. Com mais de 20 anos de experiência, a estilista cria coleções únicas que unem a essência da mulher brasileira com a elegância francesa. Visite nossa loja de noivas no Rio de Janeiro ou Paris para encontrar o vestido perfeito para seu casamento ou festa de 15 anos.' />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property='og:title' content='Ivana Beaumond - Ateliê Francês' />
        <meta
          property='og:description'
          content='Descubra os vestidos mais exclusivos e elegantes para noivas, debutantes e convidados no Atelier Ivana Beaumond! Com mais de 20 anos de experiência, a designer une a essência da mulher brasileira com a elegância francesa para criar coleções únicas. Encontre o traje perfeito para o casamento ou 15 anos dos seus sonhos. Visite nossa loja no Rio de Janeiro ou Paris hoje mesmo! Palavras-chave: Vestidos de Noiva, Vestidos de Debutantes, Trajes Masculinos, Casamento, 15 Anos, Loja de Noiva.'
        />
        <meta property='og:url' content='https://ivanabeaumond.com.br/' />
        <meta property='og:type' content='website' />
        <meta property="og:image" content='' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
