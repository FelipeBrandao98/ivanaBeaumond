import EndUserSeeAllButton from '@/atoms/EndUsersRoute/PAGES/EndUserSeeAllButton'
import getLangDict from '@/utils/getLangDict'
import Link from 'next/link'

export default function NewsSeeAllButton({ lang }) {
  // Instance of Traductor
  const languageTraducted = getLangDict(lang)

  return (
    <>
      <EndUserSeeAllButton>
        <Link
          href={{
            pathname: '/noticias',
            lang: lang,
          }}
        >
          {languageTraducted.home.news.more}
        </Link>
      </EndUserSeeAllButton>
    </>
  )
}
