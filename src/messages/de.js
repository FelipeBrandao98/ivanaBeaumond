const dictionaryDe = {
  loading: {
    title: 'Wird geladen...',
  },

  home: {
    titlePartOne: 'Schauen Sie sich hier',
    titlePartTwo: 'unsere Kollektionen an',
    depositions: {
      title: 'SEHEN SIE HIER, WAS UNSERE KUNDEN ÜBER UNSEREN SHOP SAGEN!',
      more: 'Mehr Kommentare',
    },
  },

  collections: {
    title: 'Sammlungen',
    subTitle: `Willkommen bei Ivana Beaumond, dem charmantesten und elegantesten Brautkleidverleih der Stadt! Wir sind uns darüber im Klaren, dass jeder besondere Anlass eine passende Kleidung verdient, weshalb es uns am Herzen liegt, Ihnen die besten Optionen anzubieten. Unsere Kollektionen sind sorgfältig gefertigt, von den Hochzeitskleidern bis zur Kleidung des Bräutigams, alle nach einem hohen Qualitätsstandard. Und für unvergessliche Momente wie Debütantenpartys und anspruchsvolle Veranstaltungen haben wir auch Optionen, die Sie zum Strahlen bringen. Inspiriert von Frankreich helfen wir Ihnen gerne dabei, das Kleid Ihrer Träume zu finden. Machen Sie sich also bereit, sich in unsere Kollektionen zu verlieben und tauchen Sie ein in die bezaubernde Welt von Ivana Beaumond!`,
    seeMore: 'ERFAHREN SIE ALLES ÜBER DIE KOLLEKTION',
    moreInfo: 'Klicken Sie hier für weitere Informationen',
  },

  news: {
    title: 'Nachricht',
    subTitle: `Willkommen im News-Bereich der Ivana Beaumond-Galerie | Französisches Atelier! Hier finden Sie alle in den Medien hervorgehobenen Informationen zu Ivana Beaumond sowie exklusive Tipps für Bräute, Debütantinnen und viele andere. Unsere Mission ist es, Sie über die neuesten Kollektionen und Trends in der Modewelt sowie wichtige Ereignisse im Zusammenhang mit Ivana Beaumond auf dem Laufenden zu halten. Machen Sie sich bereit, in eine Welt voller Eleganz und Raffinesse einzutauchen, während wir gemeinsam den ganzen Charme der Marke entdecken. Willkommen in einem Universum`,
  },

  layout: {
    menu: {
      appointment: 'Buchen Sie einen Termin',
      menuItemOne: {
        name: 'Startseite',
        route: '/',
      },
      menuItemTwo: {
        name: 'Sammlungen',
        route: '/colecoes',
      },
      menuItemThree: {
        name: 'Nachricht',
        route: '/noticias',
      },
      menuItemFour: {
        name: 'Veranstaltungen',
        route: '/eventos',
      },
      menuItemFive: {
        name: 'Kontakt',
        route: '/contato',
      },
      appointmentBanner: {
        title: 'Vereinbaren Sie Ihren Termin',
        yourName: 'Ihr Name:',
        yourEmail: 'Ihre E-Mail:',
        yourPhone: 'Ihr Telefon:',
        rent: 'Was möchten Sie mieten?',
        bride: 'Hochzeitskleid',
        groom: 'Kleidung des Bräutigams',
        debutant: 'Debütantenkleid',
        bridesmaid: 'Brautjungfernkleid',
        party: 'Partykleid',
        merryDate: 'Wann ist das Datum Ihrer Party/Hochzeit?',
        button: {
          send: 'Senden',
          sending: 'Senden',
          sent: 'Gesendet',
        },
      },
    },
    subscribeItem: {
      text: 'Abonnieren Sie hier, um über alle unsere Neuigkeiten auf dem Laufenden zu bleiben!',
      placeholder: 'Ihre beste E-Mail hier',
      submitText: 'Unterschreiben',
    },
    guideToBottomScroll: {
      titlePartOne: 'Ziehen Sie nach unten,',
      titlePartTwo: 'um mehr zu sehen.',
    },
    events: {
      title: 'Veranstaltungen',
      nextEvent: 'Nächstes Ereignis',
      futureEvents: 'Zukünftige Ereignisse',
      seeMore: 'Mehr anzeigen',
      barCodeAlt: 'Barcode - Ivana Beaumond',
    },
    latestPosts: {
      title: 'Neueste Nachrichten',
    },
  },

  metadata: {
    metadataBase: new URL('https://www.ivanabeaumond.com/de'),

    keywords: [
      'Bräute',
      'Brautkleid',
      'Kleidung des Bräutigams',
      'Party Kleid',
    ],

    title: {
      default: 'Ivana Beaumond',
      template: 'Ivana Beaumond - Französisches Atelier | %s',
      absolute: 'Ivana Beaumond - Französisches Atelier | Homepage',
    },

    description: `Im Atelier Ivana Beaumond finden Sie exklusive Brautkleider, Debütanten- und Herrenbekleidung. Mit mehr als 20 Jahren Erfahrung kreiert die Designerin einzigartige Kollektionen, die die Essenz der brasilianischen Frau mit französischer Eleganz verbinden. Besuchen Sie unser Brautmodengeschäft in Rio de Janeiro oder Paris, um das perfekte Kleid für Ihre Hochzeit oder 15. Geburtstagsfeier zu finden.`,

    openGraph: {
      title: 'Ivana Beaumond',
      description: `Ivana Beaumond, das Brautmodengeschäft, das seit über einem Jahrzehnt verzaubert und Träume wahr werden lässt, präsentiert eine umfangreiche und exklusive Kollektion an Brautkleidern für Frauen, die sich am schönsten Tag ihres Lebens wie echte Prinzessinnen fühlen möchten. Mit einem Hauch von Eleganz und Raffinesse werden unsere Kleider sorgfältig ausgewählt und gefertigt, um einen atemberaubenden und unvergesslichen Look zu verleihen. Unser Ziel ist es, den Bräuten ein einzigartiges und persönliches Erlebnis zu bieten und sicherzustellen, dass jedes Detail perfekt auf ihre Erwartungen und ihren Stil abgestimmt ist.`,
      url: 'https://www.ivanabeaumond.com/de',
    },
    // Pages Metadatas
    news: {
      title: 'Nachricht',
      description: `Ivana Beaumond News ist Ihr definitives Ziel für die neuesten Nachrichten und Informationen zu Mode, Medien, Tricks und Tipps für Bräute. Wenn Sie auf der Suche nach einer zuverlässigen und professionellen Website sind, die eine umfassende und aktuelle Berichterstattung über die neuesten Trends und Neuigkeiten aus der Welt der Bräute und Frauen bietet, dann sind Sie bei uns genau richtig.`,
    },
  },
}

export default dictionaryDe
