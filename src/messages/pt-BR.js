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
  },

  collections: {
    title: 'Coleções',
    subTitle: `Welcome to Ivana Beaumond, the most charming and elegant wedding dress rental store in town! Here, we understand that every special occasion deserves an attire to match, which is why we are committed to bringing you the best options. Our collections are carefully crafted, from the wedding dresses to the groom's attire, all made to a high standard of quality. And for those memorable moments, like debutante parties and sophisticated events, we also have options that will make you shine. Inspired by France, we are ready to help you find the dress of your dreams. So, get ready to fall in love with our collections and immerse yourself in the enchanting world of Ivana Beaumond!`,
    seeMore: 'SAIBA TUDO SOBRE A COLEÇÃO',
    moreInfo: 'Clique aqui para mais informações',
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
  },
}

export default dictionaryPt
