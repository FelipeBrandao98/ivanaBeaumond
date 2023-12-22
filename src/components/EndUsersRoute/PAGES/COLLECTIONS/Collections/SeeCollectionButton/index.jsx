import Link from 'next/link'

import EndUserSeeAllButton from '@/atoms/EndUsersRoute/PAGES/EndUserSeeAllButton'
import formatToUrl from '@/utils/formatToUrl'

export default function SeeCollectionButton({
  lang,
  collectionId,
  collectionTitle,
}) {
  return (
    <>
      <EndUserSeeAllButton>
        <Link
          href={{
            pathname: `/colecoes/${formatToUrl(
              collectionTitle,
            )}/${collectionId}`,
            lang: lang,
          }}
        >
          Ver coleção
        </Link>
      </EndUserSeeAllButton>
    </>
  )
}
