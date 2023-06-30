import BannerHomePageBR from "@/components/PTBR/BannerHomePageBR"
import CollectionsItemsCardBR from "@/components/PTBR/CollectionsItemsCardBR"
import SuitBannerHomePageBR from "@/components/PTBR/SuitBannerHomePageBR"
import SubscribeItemBR from "@/components/PTBR/SubscribeItemBR"
import DebutantBannerHomePageBR from "@/components/PTBR/DebutantBannerHomePageBR"
import EventsItemsHomePageBR from "@/components/PTBR/EventsItemsHomePageBR"
import BlogPostPage from "@/components/BLOG/BlogPostsPage"

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
      <main>
        <BannerHomePageBR />
        <CollectionsItemsCardBR />
        <EventsItemsHomePageBR
          data={{ events }}
        />
        <SubscribeItemBR />
        <DebutantBannerHomePageBR />
        <SuitBannerHomePageBR />
        <BlogPostPage />
      </main>
    </>
  )
}
