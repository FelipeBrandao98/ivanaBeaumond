const dictionaryPt = {
  loading: {
    title: 'Carregando...',
  },

  home: {
    titlePartOne: 'Confira aqui',
    titlePartTwo: 'Nossas Coleções',
    depositions: {
      title: 'VEJA AQUI O QUE NOSSOS CLIENTES ESTÃO FALANDO DE NOSSA LOJA!',
      more: 'Mais comentários',
    },
    news: {
      more: 'Ver todas as notícias',
    },
  },

  collections: {
    title: 'Coleções',
    subTitle: `Bem-vindo à Ivana Beaumond, a locadora de vestidos de noiva mais charmosa e elegante da cidade! Aqui entendemos que cada ocasião especial merece um traje à altura, por isso nos comprometemos a levar até você as melhores opções. Nossas coleções são cuidadosamente elaboradas, desde os vestidos de noiva até os trajes do noivo, tudo confeccionado com alto padrão de qualidade. E para aqueles momentos memoráveis, como festas de debutantes e eventos sofisticados, também temos opções que vão fazer você brilhar. Inspirados na França, estamos prontos para ajudá-lo a encontrar o vestido dos seus sonhos. Então prepare-se para se apaixonar pelas nossas coleções e mergulhar no mundo encantador de Ivana Beaumond!`,
    seeMore: 'SAIBA TUDO SOBRE A COLEÇÃO',
    moreInfo: 'Clique aqui para mais informações',
  },

  news: {
    title: 'Notícias',
    subTitle: `Bem-vindos à seção de Notícias da galeria Ivana Beaumond | Ateliê Francês! Aqui, você encontrará todas as informações relacionadas a Ivana Beaumond que estão em destaque na mídia, assim como dicas exclusivas para Noivas, Debutantes e muitos outros. Nossa missão é mantê-los atualizados sobre as últimas coleções e tendências do universo da moda e eventos importantes relacionados a Ivana Beaumond. Prepare-se para mergulhar em um mundo de elegância e sofisticação enquanto descobrimos juntos todo o encanto que a marca oferece. Seja bem-vindo a um universo`,
  },

  contact: {
    title: 'Contato',
    subTitle: `Bem-vindos à seção de Contato da renomada galeria Ivana Beaumond | Ateliê Francês! Aqui, oferecemos a você a oportunidade de nos contatar diretamente e descobrir mais sobre nossa extraordinária coleção de arte francesa. Somos uma galeria única, dedicada a promover a beleza e a riqueza cultural da França por meio de obras magníficas. Em nossa seção de Contato, você encontrará todas as formas de entrar em contato conosco, mas o principal destaque é o nosso formulário exclusivo de agendamento. Agora, você terá a chance de reservar uma visita à nossa loja diretamente por aqui!`,
  },

  comments: {
    title: 'Comentários',
    subTitle: `Bem-vindo(a) ao blog do Ateliê Francês Ivana Beaumond! Hoje vamos falar sobre uma seção muito especial em nossa galeria: os Comentários. Neste espaço, nossos clientes têm a oportunidade de expressar suas opiniões e compartilhar suas experiências sobre a nossa loja. Acreditamos que a voz de nossos clientes é essencial para continuarmos aprimorando nossas coleções e oferecer o melhor serviço possível. Portanto, continue lendo para descobrir o que as pessoas estão dizendo sobre o Ivana Beaumond | Ateliê Francês e mergulhe em um mundo de elegância e sofisticação.`,
  },

  events: {
    title: 'Eventos',
    subTitle: `Bem-vindos ao blog do Ateliê Francês de Ivana Beaumond! Nesta postagem, vamos discutir sobre uma seção especial da galeria que certamente chama a atenção de todos os amantes da arte: os eventos. Aqui, você encontrará informações sobre os eventos futuros e passados nos quais a talentosa Ivana Beaumond teve o prazer de participar. Prepare-se para se encantar com as coleções exclusivas e as experiências únicas proporcionadas por esta renomada artista francesa. Pronto para mergulhar nesse incrível mundo de criatividade e beleza? Acompanhe-nos nesta jornada!`,
  },

  layout: {
    menu: {
      appointment: 'Marque um Horário',
      menuItemOne: {
        name: 'Home',
        route: '/',
      },
      menuItemTwo: {
        name: 'Coleções',
        route: '/colecoes',
      },
      menuItemThree: {
        name: 'Notícias',
        route: '/noticias',
      },
      menuItemFour: {
        name: 'Eventos',
        route: '/eventos',
      },
      menuItemFive: {
        name: 'Comentários',
        route: '/comentarios',
      },
      menuItemSix: {
        name: 'Contato',
        route: '/contato',
      },
      appointmentBanner: {
        title: 'Faça seu agendamento',
        yourName: 'Seu Nome:',
        yourEmail: 'Seu E-mail:',
        yourPhone: 'Seu Telefone:',
        rent: 'O que deseja alugar?',
        bride: 'Vestido de Noiva',
        groom: 'Traje do Noivo',
        debutant: 'Vestido de Debutantes',
        bridesmaid: 'Vestido de Daminha',
        party: 'Vestido de Festa',
        merryDate: 'Quando é a data da sua Festa/Casamento?',
        button: {
          send: 'Enviar',
          sending: 'Enviando',
          sent: 'Enviado',
        },
      },
    },
    subscribeItem: {
      text: 'Assine aqui para ficar por dentro de todas as nossas novidades!',
      placeholder: 'Seu melhor e-mail aqui',
      submitText: 'Assinar',
    },
    guideToBottomScroll: {
      titlePartOne: 'Arraste para baixo',
      titlePartTwo: 'para ver mais.',
    },
    events: {
      title: 'Eventos',
      nextEvent: 'Próximo Evento',
      futureEvents: 'Eventos Futuros',
      seeMore: 'Veja Mais',
      barCodeAlt: 'Código de Barras - Ivana Beaumond',
    },
    latestPosts: {
      title: 'Últimas Notícias',
    },
    news: {
      seeMore: 'Ler a Notícia',
    },
  },

  metadata: {
    metadataBase: new URL('https://www.ivanabeaumond.com/pt-BR'),

    keywords: [
      'Noivas',
      'Vestido de Noivas',
      'Traje do Noivo',
      'Vestido de Festa',
    ],

    title: {
      default: 'Ivana Beaumond',
      template: 'Ivana Beaumond - Ateliê Francês | %s',
      absolute: 'Ivana Beaumond - Ateliê Francês | Homepage',
    },

    description:
      'Encontre vestidos de noiva, debutantes e trajes masculinos exclusivos no Atelier Ivana Beaumond. Com mais de 20 anos de experiência, a estilista cria coleções únicas que unem a essência da mulher brasileira com a elegância francesa. Visite nossa loja de noivas no Rio de Janeiro ou Paris para encontrar o vestido perfeito para seu casamento ou festa de 15 anos.',

    openGraph: {
      title: 'Ivana Beaumond',
      description:
        'Ivana Beaumond, a loja de noivas que encanta e realiza sonhos há mais de uma década, apresenta uma vasta e exclusiva coleção de vestidos de noiva para mulheres que desejam se sentir verdadeiras princesas no dia mais especial de suas vidas. Com um toque de elegância e sofisticação, nossos vestidos são cuidadosamente selecionados e confeccionados para proporcionar um visual deslumbrante e inesquecível. Nosso compromisso é oferecer às noivas uma experiência única e personalizada, garantindo que cada detalhe seja perfeitamente alinhado com suas expectativas e estilo.',
      url: 'https://www.ivanabeaumond.com/pt-BR',
    },

    // Pages Metadatas
    news: {
      title: 'Notícias',
      description:
        'Ivana Beaumond Notícias é o seu destino definitivo para todas as novidades e informações sobre moda, mídia, truques e dicas para noivas. Se você está procurando por um site confiável e profissional que ofereça uma cobertura abrangente e atualizada sobre as últimas tendências e notícias relacionadas ao mundo das noivas e mulheres, então você veio ao lugar certo.',
    },
    collections: {
      title: 'Coleções',
      description: `Bem-vindo à Ivana Beaumond, a locadora de vestidos de noiva mais charmosa e elegante da cidade! Aqui entendemos que cada ocasião especial merece um traje à altura, por isso nos comprometemos a levar até você as melhores opções. Nossas coleções são cuidadosamente elaboradas, desde os vestidos de noiva até os trajes do noivo, tudo confeccionado com alto padrão de qualidade. E para aqueles momentos memoráveis, como festas de debutantes e eventos sofisticados, também temos opções que vão fazer você brilhar. Inspirados na França, estamos prontos para ajudá-lo a encontrar o vestido dos seus sonhos. Então prepare-se para se apaixonar pelas nossas coleções e mergulhar no mundo encantador de Ivana Beaumond!`,
    },
  },
}

export default dictionaryPt
