import Footer from "@/components/LAYOUT/Footer";
import GuideToBottomScroll from "@/components/LAYOUT/GuideToBottomScroll";
import Menu from "@/components/LAYOUT/Menu";
import ScrollToTop from "@/components/LAYOUT/ScrollToTop";

import LanguageHook from "@/hooks/LanguageContext";

const content = {
  appointment: 'Make an appointment',
  menu: [
    {
      id: 1,
      name: 'Home',
      route: ''
    },
    {
      id: 2,
      name: 'Collections',
      route: 'collections',
    },
    {
      id: 3,
      name: 'Notices',
      route: 'blog',
    },
    {
      id: 4,
      name: 'Events',
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

      <GuideToBottomScroll text1={'Drag down to'} text2={'see more.'} />
      <ScrollToTop />
    </LanguageHook>
  )
}