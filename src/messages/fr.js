const dictionaryFr = {
  loading: {
    title: 'Chargement...',
  },

  home: {
    titlePartOne: 'Découvrez nos',
    titlePartTwo: 'collections ici',
    depositions: {
      title: 'VOYEZ CE QUE NOS CLIENTS DISENT DE NOTRE MAGASIN ICI !',
      more: 'Plus de commentaires',
    },
  },

  collections: {
    title: 'Collections',
    subTitle: `Bienvenue chez Ivana Beaumond, le magasin de location de robes de mariée le plus charmant et élégant de la ville ! Ici, nous comprenons que chaque occasion spéciale mérite une tenue vestimentaire assortie, c'est pourquoi nous nous engageons à vous proposer les meilleures options. Nos collections sont soigneusement confectionnées, des robes de mariée aux tenues du marié, toutes confectionnées selon un haut niveau de qualité. Et pour ces moments mémorables, comme les soirées de débutantes et les événements sophistiqués, nous avons également des options qui vous feront briller. Inspirés par la France, nous sommes prêts à vous aider à trouver la robe de vos rêves. Alors préparez-vous à tomber amoureux de nos collections et plongez-vous dans le monde enchanteur d'Ivana Beaumond !`,
    seeMore: 'TOUT SAVOIR SUR LA COLLECTION',
    moreInfo: `Cliquez ici pour plus d'informations`,
  },

  layout: {
    menu: {
      appointment: 'Réservez une heure',
      menuItemOne: {
        name: 'Home',
        route: '/',
      },
      menuItemTwo: {
        name: 'Collections',
        route: '/colecoes',
      },
      menuItemThree: {
        name: 'Nouvelles',
        route: '/noticias',
      },
      menuItemFour: {
        name: 'Événements',
        route: '/eventos',
      },
      appointmentBanner: {
        title: 'Prenez votre rendez-vous',
        yourName: 'Votre Nom :',
        yourEmail: 'Votre Email :',
        yourPhone: 'Votre Téléphone :',
        rent: 'Que veux-tu louer ?',
        bride: 'Robe de mariée',
        groom: 'Tenue du marié',
        debutant: 'Robe Débutante',
        bridesmaid: "Robe de demoiselle d'honneur",
        party: 'Robe de soirée',
        merryDate: 'Quelle est la date de votre fête/mariage ?',
        button: {
          send: 'Envoyer',
          sending: 'Envoi',
          sent: 'Envoyé',
        },
      },
    },
    subscribeItem: {
      text: 'Abonnez-vous ici pour rester informé de toutes nos actualités !',
      placeholder: 'Votre meilleur email ici',
      submitText: 'Signer',
    },
    guideToBottomScroll: {
      titlePartOne: 'Faites glisser vers',
      titlePartTwo: 'le bas pour en voir plus.',
    },
    events: {
      title: 'Événements',
      nextEvent: 'Prochain événement',
      futureEvents: 'Événements futurs',
      seeMore: 'Voir plus',
      barCodeAlt: 'Code-barres - Ivana Beaumond',
    },
    latestPosts: {
      title: 'Dernières nouvelles',
    },
  },

  metadata: {
    metadataBase: new URL('https://www.ivanabeaumond.com/fr'),

    keywords: ['Mariées', 'Robe de mariée', 'Tenue du marié', 'Robe de fête'],

    title: {
      default: 'Ivana Beaumond',
      template: 'Ivana Beaumond - Atelier français | %s',
      absolute: 'Ivana Beaumond - Atelier français | Homepage',
    },

    description: `Trouvez des robes de mariée exclusives, des débutantes et des vêtements pour hommes à l'Atelier Ivana Beaumond. Avec plus de 20 ans d'expérience, la créatrice crée des collections uniques qui allient l'essence de la femme brésilienne à l'élégance à la française. Visitez notre boutique de mariage à Rio de Janeiro ou à Paris pour trouver la robe parfaite pour votre mariage ou votre 15e anniversaire.`,

    openGraph: {
      title: 'Ivana Beaumond',
      description: `Ivana Beaumond, la boutique de mariage qui enchante et réalise les rêves depuis plus d'une décennie, présente une vaste et exclusive collection de robes de mariée pour les femmes qui veulent se sentir comme de vraies princesses le jour le plus spécial de leur vie. Avec une touche d'élégance et de sophistication, nos robes sont soigneusement sélectionnées et confectionnées pour offrir un look époustouflant et inoubliable. Notre engagement est d'offrir aux mariées une expérience unique et personnalisée, en veillant à ce que chaque détail soit parfaitement en adéquation avec leurs attentes et leur style.`,
      url: 'https://www.ivanabeaumond.com/fr',
    },
  },
}

export default dictionaryFr
