import AdressItem from "@/components/LAYOUT/AdressItem";
import Footer from "@/components/LAYOUT/Footer";
import GuideToBottomScroll from "@/components/LAYOUT/GuideToBottomScroll";
import Menu from "@/components/LAYOUT/Menu";
import ScrollToTop from "@/components/LAYOUT/ScrollToTop";
import SubscribeItem from "@/components/LAYOUT/SubscribeItem";

import LanguageHook from "@/hooks/LanguageContext";

const contentMenu = {
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
      route: 'colecoes',
    },
    {
      id: 3,
      name: 'Notícias',
      route: 'noticias',
    },
    {
      id: 4,
      name: 'Eventos',
      route: 'eventos',
    },
  ]
}

const contentSubscribe = {
  text: 'Assine aqui para ficar por dentro de todas as nossas novidades!',
  placeholder: 'Seu melhor e-mail aqui',
  submitText: 'Assinar',
}

export default function HomePageLayout({ children }) {
  return (
    <LanguageHook>
      <Menu content={contentMenu} />
      <main>
        {children}
      </main>
      <AdressItem />
      <SubscribeItem content={contentSubscribe} />
      <Footer />

      <GuideToBottomScroll text1={'Arraste para baixo'} text2={'para ver mais.'} />
      <ScrollToTop />
    </LanguageHook>
  )
}