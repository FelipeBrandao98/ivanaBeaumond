import Link from 'next/link'

import EndUserSeeAllButton from '@/atoms/EndUsersRoute/PAGES/EndUserSeeAllButton'

export default function SeeCollectionButton({ lang, collectionId }) {
  return (
    <>
      <EndUserSeeAllButton>
        <Link
          href={{
            pathname: `/colecao/${collectionId}`,
            lang: lang,
          }}
        >
          Ver coleção
        </Link>
      </EndUserSeeAllButton>
    </>
  )
}
