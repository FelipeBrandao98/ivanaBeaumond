import EndUserSeeAllButton from '@/atoms/EndUsersRoute/PAGES/EndUserSeeAllButton'
import getLangDict from '@/utils/getLangDict'
import Link from 'next/link'

export default function EventsSeeAllButton({ lang }) {
  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  return (
    <>
      <EndUserSeeAllButton dark>
        <Link
          href={{
            pathname: '/eventos',
            lang: lang,
          }}
        >
          {languageTraducted.home.news.more}
        </Link>
      </EndUserSeeAllButton>
    </>
  )
}
