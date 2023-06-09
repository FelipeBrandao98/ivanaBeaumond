import Menu from "@/components/Menu"
import BannerHomePage from "@/components/BannerHomePage"
import CollectionsItemsCard from "@/components/CollectionsItemsCard"
import SuitBannerHomePage from "@/components/SuitBannerHomePage"
import ScrollToTop from "@/components/ScrollToTop"
import SubscribeItem from "@/components/SubscribeItem"
import DebutantBannerHomePage from "@/components/DebutantBannerHomePage"
import GuideToBottomScroll from "@/components/GuideToBottomScroll"
import EventsItemsHomePage from "@/components/EventsItemsHomePage"
import Footer from "@/components/Footer"


export default function Page() {
  return (
    <>
      <Menu />
      <main>
        <BannerHomePage />
        <CollectionsItemsCard />
        <EventsItemsHomePage />
        <SubscribeItem />
        <DebutantBannerHomePage />
        <SuitBannerHomePage />
      </main>
      <Footer />

      <GuideToBottomScroll />
      <ScrollToTop />
    </>
  )
}
