import SiteMapContainer from '@/atoms/EndUsersRoute/Layout/SiteMapContainer'
import getLangDict from '@/utils/getLangDict'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'

export default function SiteMap({ lang, categoryCollections, categoryNews }) {
  const languageTraducted = getLangDict(lang)

  return (
    <>
      <SiteMapContainer>
        <ul>
          <li>
            <Link
              href={{
                pathname: `${languageTraducted.layout.menu.menuItemOne.route}`,
                lang: lang,
              }}
              lang={lang}
              prefetch
              replace={true}
            >
              {languageTraducted.layout.menu.menuItemOne.name}
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `${languageTraducted.layout.menu.menuItemTwo.route}`,
                lang: lang,
              }}
              lang={lang}
              prefetch
              replace={true}
            >
              {languageTraducted.layout.menu.menuItemTwo.name}{' '}
              <FiChevronDown width={50} height={50} />
            </Link>
            <div>
              <ul>
                {categoryCollections.map((catCollection) => {
                  return (
                    <li key={catCollection.id}>
                      <Link
                        href={{
                          pathname: `/colecoes/categoria/${catCollection.id}`,
                          lang: lang,
                        }}
                        lang={lang}
                        prefetch
                        replace={true}
                      >
                        {catCollection.description}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </li>
          <li>
            <Link
              href={{
                pathname: `${languageTraducted.layout.menu.menuItemThree.route}`,
                lang: lang,
              }}
              lang={lang}
              prefetch
              replace={true}
            >
              {languageTraducted.layout.menu.menuItemThree.name}{' '}
              <FiChevronDown width={50} height={50} />
            </Link>
            <div>
              <ul>
                {categoryNews.map((catNews) => {
                  return (
                    <li key={catNews.id}>
                      <Link
                        href={{
                          pathname: `/noticias/categoria/${catNews.id}/1`,
                          lang: lang,
                        }}
                        lang={lang}
                        prefetch
                        replace={true}
                      >
                        {catNews.description}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </li>
          <li>
            <Link
              href={{
                pathname: `${languageTraducted.layout.menu.menuItemFour.route}`,
                lang: lang,
              }}
              lang={lang}
              prefetch
              replace={true}
            >
              {languageTraducted.layout.menu.menuItemFour.name}
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `${languageTraducted.layout.menu.menuItemFive.route}`,
                lang: lang,
              }}
              lang={lang}
              prefetch
              replace={true}
            >
              {languageTraducted.layout.menu.menuItemFive.name}
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `${languageTraducted.layout.menu.menuItemSix.route}`,
                lang: lang,
              }}
              lang={lang}
              prefetch
              replace={true}
            >
              {languageTraducted.layout.menu.menuItemSix.name}
            </Link>
          </li>
        </ul>
      </SiteMapContainer>
    </>
  )
}
