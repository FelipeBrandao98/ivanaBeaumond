import Footer from "@/components/LAYOUT/Footer";
import GuideToBottomScroll from "@/components/LAYOUT/GuideToBottomScroll";
import Menu from "@/components/LAYOUT/Menu";
import ScrollToTop from "@/components/LAYOUT/ScrollToTop";

import LanguageHook from "@/hooks/LanguageContext";

const content = {
  appointment: 'einen Termin machen',
  menu: [
    {
      id: 1,
      name: 'Startseite',
      route: ''
    },
    {
      id: 2,
      name: 'Sammlungen',
      route: 'collections',
    },
    {
      id: 3,
      name: 'Hinweise',
      route: 'blog',
    },
    {
      id: 4,
      name: 'Veranstaltungen',
      route: 'events',
    },
  ]
}

export default function HomePageLayout({ children }) {
  return (
    <LanguageHook>
      <Menu content={content} />
      <main>
        {children}
      </main>
      <Footer />

      <GuideToBottomScroll text1={'Ziehen Sie nach unten'} text2={'um mehr zu sehen.'} />
      <ScrollToTop />
    </LanguageHook>
  )
}