import Menu from "@/components/Menu"
import BannerHomePage from "@/components/BannerHomePage"
import CollectionsItemsCard from "@/components/CollectionsItemsCard"
import SuitBannerHomePage from "@/components/SuitBannerHomePage"
import ScrollToTop from "@/components/ScrollToTop"

export default function Page({ children }) {
  return (
    <>
      <Menu />
      <BannerHomePage />
      <CollectionsItemsCard />
      <SuitBannerHomePage />

      <ScrollToTop />
      {children}
    </>
  )
}
