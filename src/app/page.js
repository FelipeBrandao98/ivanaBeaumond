import Menu from "@/components/Menu"
import BannerHomePage from "@/components/BannerHomePage"
import CollectionsItemsCard from "@/components/CollectionsItemsCard"
import SuitBannerHomePage from "@/components/SuitBannerHomePage"
import ScrollToTop from "@/components/ScrollToTop"
import SubscribeItem from "@/components/SubscribeItem"
import DebutantBannerHomePage from "@/components/DebutantBannerHomePage"

export default function Page({ children }) {
  return (
    <>
      <Menu />
      <BannerHomePage />
      <CollectionsItemsCard />
      <SubscribeItem />
      <DebutantBannerHomePage />
      <SuitBannerHomePage />

      <ScrollToTop />
      {children}
    </>
  )
}
