import BannerHomePage from "@/components/HOME/BannerHomePage"
import CollectionsItemsCardHomePage from "@/components/HOME/CollectionsItemsCardHomePage"
import EventsItemsHomePage from "@/components/HOME/EventsItemsHomePage"
import HighLightsHomePage from "@/components/HOME/HighLightsHomePage"


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

const events = {
  title: 'Eventos',
  nextEventTitle: 'Proximo Evento',
  futureEventsTitle: 'Eventos Futuros',
  seeMore: 'Veja Mais',
  nextEvent: {
    id: 1,
    title: 'São Paulo Fashion Week',
    date: '27 de Setembro de 2023',
    url: ''
  },
  futureEvents: [
    {
      id: 1,
      title: 'Moscow Standard',
      date: '25 de Dezembro de 2023',
      url: ''
    },
    {
      id: 2,
      title: 'Paris Premier',
      date: '28 de Dezembro de 2023',
      url: ''
    },
    {
      id: 1,
      title: 'Tokio Standard',
      date: '01 de Janeiro de 2024',
      url: ''
    },
  ]
}

const highlights = {
  title: 'Últimas Notícias',
  seeMore: 'Leia Mais',
  highlight: [
    {
      id: 1,
      title: 'Ivana faz exposição em paris',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus omnis laudantium sunt commodi magni error aspernatur voluptate ut temporibus deleniti, soluta impedit eveniet quasi eos! Illum, sint? Tenetur, reiciendis.',
      imageUrl: '/photos_blog/photo_blog_3.jpg',
      imageAlt: 'Ivana Beaumond',
    },
    {
      id: 2,
      title: 'Ivana faz exposição em paris',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus omnis laudantium sunt commodi magni error aspernatur voluptate ut temporibus deleniti, soluta impedit eveniet quasi eos! Illum, sint? Tenetur, reiciendis.',
      imageUrl: '/photos_blog/photo_blog_2.jpg',
      imageAlt: 'Ivana Beaumond',
    },
    {
      id: 3,
      title: 'Ivana faz exposição em paris',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus omnis laudantium sunt commodi magni error aspernatur voluptate ut temporibus deleniti, soluta impedit eveniet quasi eos! Illum, sint? Tenetur, reiciendis.',
      imageUrl: '/photos_blog/photo_blog_1.jpeg',
      imageAlt: 'Ivana Beaumond',
    },
    {
      id: 4,
      title: 'Ivana faz exposição em paris',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus omnis laudantium sunt commodi magni error aspernatur voluptate ut temporibus deleniti, soluta impedit eveniet quasi eos! Illum, sint? Tenetur, reiciendis.',
      imageUrl: '/photos_blog/photo_blog_1.jpeg',
      imageAlt: 'Ivana Beaumond',
    },
  ]
}

export default async function Page() {

  return (
    <>
      <main>
        <BannerHomePage />
        <CollectionsItemsCardHomePage
          data={{ categories }}
        />
        <EventsItemsHomePage
          data={{ events }}
        />
        <HighLightsHomePage
          data={{ highlights }}
        />
      </main>
    </>
  )
}
