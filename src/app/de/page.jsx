import MenuDE from "@/components/DE/MenuDE"
import BannerHomePageDE from "@/components/DE/BannerHomePageDE"
import CollectionsItemsCardDE from "@/components/DE/CollectionsItemsCardDE"
import SuitBannerHomePageDE from "@/components/DE/SuitBannerHomePageDE"
import ScrollToTopDE from "@/components/DE/ScrollToTopDE"
import SubscribeItemDE from "@/components/DE/SubscribeItemDE"
import DebutantBannerHomePageDE from "@/components/DE/DebutantBannerHomePageDE"
import GuideToBottomScrollDE from "@/components/DE/GuideToBottomScrollDE"
import EventsItemsHomePageDE from "@/components/DE/EventsItemsHomePageDE"
import FooterDE from "@/components/DE/FooterDE"

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
      <MenuDE />
      <main>
        <BannerHomePageDE />
        <CollectionsItemsCardDE />
        <EventsItemsHomePageDE
          data={{ events }}
        />
        <SubscribeItemDE />
        <DebutantBannerHomePageDE />
        <SuitBannerHomePageDE />
      </main>
      <FooterDE />

      <GuideToBottomScrollDE />
      <ScrollToTopDE />
    </LanguageHook>
  )
}
