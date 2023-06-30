import Footer from "@/components/LAYOUT/Footer";
import GuideToBottomScroll from "@/components/LAYOUT/GuideToBottomScroll";
import Menu from "@/components/LAYOUT/Menu";
import ScrollToTop from "@/components/LAYOUT/ScrollToTop";

import LanguageHook from "@/hooks/LanguageContext";

const content = {
  appointment: 'prendre rendez-vous',
  menu: [
    {
      id: 1,
      name: 'Maison',
      route: ''
    },
    {
      id: 2,
      name: 'Collections',
      route: 'collections',
    },
    {
      id: 3,
      name: 'Nouvelles',
      route: 'blog',
    },
    {
      id: 4,
      name: 'Événements',
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

      <GuideToBottomScroll text1={'Faites glisser vers le bas'} text2={'pour en voir plus.'} />
      <ScrollToTop />
    </LanguageHook>
  )
}