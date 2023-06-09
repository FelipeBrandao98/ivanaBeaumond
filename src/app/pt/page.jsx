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

import api from "@/services/api"

async function getEvents() {
  const res = await api.get('events')

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.data
}


export default async function Page() {
  const events = await getEvents()

  return (
    <>
      <Menu />
      <main>
        <BannerHomePage />
        <CollectionsItemsCard />
        <EventsItemsHomePage
          data={{ events }}
        />
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
