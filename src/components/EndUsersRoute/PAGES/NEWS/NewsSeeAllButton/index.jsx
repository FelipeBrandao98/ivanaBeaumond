import EndUserSeeAllButton from '@/atoms/EndUsersRoute/PAGES/EndUserSeeAllButton'
import getLangDict from '@/utils/getLangDict'
import Link from 'next/link'

export default function NewsSeeAllButton({ lang, href }) {
  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  return (
    <>
      <EndUserSeeAllButton>
        <Link
          href={{
            pathname: href,
            lang: lang,
          }}
        >
          {languageTraducted.home.news.more}
        </Link>
      </EndUserSeeAllButton>
    </>
  )
}
