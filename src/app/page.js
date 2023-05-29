import Menu from "@/components/Menu"
import BannerHomePage from "@/components/BannerHomePage"
import CollectionsItemsCard from "@/components/CollectionsItemsCard"
import SuitBannerHomePage from "@/components/SuitBannerHomePage"
import ScrollToTop from "@/components/ScrollToTop"
import SubscribeItem from "@/components/SubscribeItem"
import DebutantBannerHomePage from "@/components/DebutantBannerHomePage"
import GuideToBottomScroll from "@/components/GuideToBottomScroll"

export default function Page({ children }) {
  return (
    <>
      <GuideToBottomScroll />
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
