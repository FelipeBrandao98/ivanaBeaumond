import FooterBR from "@/components/PTBR/FooterBR";
import GuideToBottomScrollBR from "@/components/PTBR/GuideToBottomScrollBR";
import MenuBR from "@/components/PTBR/MenuBR";
import ScrollToTopBR from "@/components/PTBR/ScrollToTopBR";

import LanguageHook from "@/hooks/LanguageContext";

import '@/styles/blog.css'

export default function HomePageLayout({ children }) {
  return (
    <LanguageHook>
      <MenuBR />
      <main>
        {children}
      </main>
      <FooterBR />

      <GuideToBottomScrollBR />
      <ScrollToTopBR />
    </LanguageHook>
  )
}