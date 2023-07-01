import BannerHomePage from "@/components/HOME/BannerHomePage"
import SuitBannerHomePageBR from "@/components/PTBR/SuitBannerHomePageBR"
import SubscribeItemBR from "@/components/PTBR/SubscribeItemBR"
import DebutantBannerHomePageBR from "@/components/PTBR/DebutantBannerHomePageBR"
import EventsItemsHomePageBR from "@/components/PTBR/EventsItemsHomePageBR"
import BlogPostPage from "@/components/BLOG/BlogPostsPage"

import api from "@/services/api"
import CollectionsItemsCard from "@/components/HOME/CollectionsItemsCard"

const categories = [
  {
    id: 1,
    name: 'Vestido de Noiva',
    imageUrl: '/photos_collections_items/vestido_de_noiva_ivana_beaumond.jpg',
    imageAlt: 'Vestido de noiva por Ivana Beaumond',
    description: 'Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!',
    route: ''
  },
  {
    id: 2,
    name: 'Vestidos de Debutante',
    imageUrl: '/photos_collections_items/vestido_de_debutante_ivana_beaumond.jpg',
    imageAlt: 'Vestido de debutante por Ivana Beaumond',
    description: 'Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!',
    route: ''
  },
  {
    id: 3,
    name: 'Traje do Noivo',
    imageUrl: '/photos_collections_items/terno_ivana_beaumond.jpg',
    imageAlt: 'Traje do noivo por Ivana Beaumond',
    description: 'Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!',
    route: ''
  },
  {
    id: 4,
    name: 'Vestidos de Festa',
    imageUrl: '/photos_collections_items/vestido_de_festa_ivana_beaumond.jpg',
    imageAlt: 'Vestido de festa por Ivana Beaumond',
    description: 'Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!',
    route: ''
  },
  {
    id: 5,
    name: 'Vestidos de Dama',
    imageUrl: '/photos_collections_items/vestido_de_dama_ivana_beaumond.jpg',
    imageAlt: 'Vestido de dama por Ivana Beaumond',
    description: 'Descubra nossos vestidos de Noiva, a melhor opção para o seu casamento!',
    route: ''
  },
]

async function getEvents() {
  const res = await api.get('events')

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.data
}


export default async function Page() {
  const events = await getEvents()

  return (
    <>
      <main>
        <BannerHomePage />
        <CollectionsItemsCard
          data={{ categories }}
        />
        <EventsItemsHomePageBR
          data={{ events }}
        />
        <SubscribeItemBR />
        <DebutantBannerHomePageBR />
        <SuitBannerHomePageBR />
        <BlogPostPage />
      </main>
    </>
  )
}
