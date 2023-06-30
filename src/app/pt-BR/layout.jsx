import Footer from "@/components/LAYOUT/Footer";
import GuideToBottomScroll from "@/components/LAYOUT/GuideToBottomScroll";
import Menu from "@/components/LAYOUT/Menu";
import ScrollToTop from "@/components/LAYOUT/ScrollToTop";

import LanguageHook from "@/hooks/LanguageContext";

const content = {
  appointment: 'Marque um Horário',
  menu: [
    {
      id: 1,
      name: 'Home',
      route: ''
    },
    {
      id: 2,
      name: 'Coleções',
      route: 'collections',
    },
    {
      id: 3,
      name: 'Notícias',
      route: 'blog',
    },
    {
      id: 4,
      name: 'Eventos',
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

      <GuideToBottomScroll text1={'Arraste para baixo'} text2={'para ver mais.'} />
      <ScrollToTop />
    </LanguageHook>
  )
}