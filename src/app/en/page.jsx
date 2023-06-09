import MenuEN from "@/components/EN/MenuEN"
import BannerHomePageEN from "@/components/EN/BannerHomePageEN"
import CollectionsItemsCardEN from "@/components/EN/CollectionsItemsCardEN"
import SuitBannerHomePageEN from "@/components/EN/SuitBannerHomePageEN"
import ScrollToTopEN from "@/components/EN/ScrollToTopEN"
import SubscribeItemEN from "@/components/EN/SubscribeItemEN"
import DebutantBannerHomePageEN from "@/components/EN/DebutantBannerHomePageEN"
import GuideToBottomScrollEN from "@/components/EN/GuideToBottomScrollEN"
import EventsItemsHomePageEN from "@/components/EN/EventsItemsHomePageEN"
import FooterEN from "@/components/EN/FooterEN"

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
      <MenuEN />
      <main>
        <BannerHomePageEN />
        <CollectionsItemsCardEN />
        <EventsItemsHomePageEN
          data={{ events }}
        />
        <SubscribeItemEN />
        <DebutantBannerHomePageEN />
        <SuitBannerHomePageEN />
      </main>
      <FooterEN />

      <GuideToBottomScrollEN />
      <ScrollToTopEN />
    </LanguageHook>
  )
}
