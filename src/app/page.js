import Menu from "@/components/Menu"
import BannerHomePage from "@/components/BannerHomePage"
import CollectionsItemsCard from "@/components/CollectionsItemsCard"
import SuitBannerHomePage from "@/components/SuitBannerHomePage"
import ScrollToTop from "@/components/ScrollToTop"
import SubscribeItem from "@/components/SubscribeItem"

export default function Page({ children }) {
  return (
    <>
      <Menu />
      <BannerHomePage />
      <CollectionsItemsCard />
      <SubscribeItem />
      <SuitBannerHomePage />

      <ScrollToTop />
      {children}
    </>
  )
}
