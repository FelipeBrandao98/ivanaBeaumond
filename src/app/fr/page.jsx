import MenuFR from "@/components/FR/MenuFR"
import BannerHomePageFR from "@/components/FR/BannerHomePageFR"
import CollectionsItemsCardFR from "@/components/FR/CollectionsItemsCardFR"
import SuitBannerHomePageFR from "@/components/FR/SuitBannerHomePageFR"
import ScrollToTopFR from "@/components/FR/ScrollToTopFR"
import SubscribeItemFR from "@/components/FR/SubscribeItemFR"
import DebutantBannerHomePageFR from "@/components/FR/DebutantBannerHomePageFR"
import GuideToBottomScrollFR from "@/components/FR/GuideToBottomScrollFR"
import EventsItemsHomePageFR from "@/components/FR/EventsItemsHomePageFR"
import FooterFR from "@/components/FR/FooterFR"

import api from "@/services/api"

import LanguageHook from "@/hooks/LanguageContext"

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
    <LanguageHook>
      <MenuFR />
      <main>
        <BannerHomePageFR />
        <CollectionsItemsCardFR />
        <EventsItemsHomePageFR
          data={{ events }}
        />
        <SubscribeItemFR />
        <DebutantBannerHomePageFR />
        <SuitBannerHomePageFR />
      </main>
      <FooterFR />

      <GuideToBottomScrollFR />
      <ScrollToTopFR />
    </LanguageHook>
  )
}
