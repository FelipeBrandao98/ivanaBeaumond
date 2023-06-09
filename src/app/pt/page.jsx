import MenuBR from "@/components/PTBR/MenuBR"
import BannerHomePageBR from "@/components/PTBR/BannerHomePageBR"
import CollectionsItemsCardBR from "@/components/PTBR/CollectionsItemsCardBR"
import SuitBannerHomePageBR from "@/components/PTBR/SuitBannerHomePageBR"
import ScrollToTopBR from "@/components/PTBR/ScrollToTopBR"
import SubscribeItemBR from "@/components/PTBR/SubscribeItemBR"
import DebutantBannerHomePageBR from "@/components/PTBR/DebutantBannerHomePageBR"
import GuideToBottomScrollBR from "@/components/PTBR/GuideToBottomScrollBR"
import EventsItemsHomePageBR from "@/components/PTBR/EventsItemsHomePageBR"
import FooterBR from "@/components/PTBR/FooterBR"

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
      <MenuBR />
      <main>
        <BannerHomePageBR />
        <CollectionsItemsCardBR />
        <EventsItemsHomePageBR
          data={{ events }}
        />
        <SubscribeItemBR />
        <DebutantBannerHomePageBR />
        <SuitBannerHomePageBR />
      </main>
      <FooterBR />

      <GuideToBottomScrollBR />
      <ScrollToTopBR />
    </LanguageHook>
  )
}
