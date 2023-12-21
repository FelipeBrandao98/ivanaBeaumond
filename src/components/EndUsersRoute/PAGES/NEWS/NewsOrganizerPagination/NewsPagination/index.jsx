import Pagination from '@/atoms/EndUsersRoute/PAGES/Pagination'
import Link from 'next/link'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export default async function NewsPagination({
  lang,
  pages,
  page,
  categoryId,
}) {
  const pagesList = []

  for (let i = 1; i <= pages; i++) {
    pagesList.push(i)
  }

  return (
    <>
      <Pagination>
        {page > 1 ? (
          <Link
            href={{
              pathname: `/noticias/categoria/${categoryId}/${Number(page) - 1}`,
              lang: lang,
            }}
          >
            <FiArrowLeft width={100} height={100} />
          </Link>
        ) : (
          <span>
            <FiArrowLeft width={100} height={100} />
          </span>
        )}

        <ul>
          {pagesList.map((item) => {
            return item == page ? (
              <li key={item}>
                <span>
                  <Link
                    href={{
                      pathname: `/noticias/categoria/${categoryId}/${item}`,
                      lang: lang,
                    }}
                  >
                    {item}
                  </Link>
                </span>
              </li>
            ) : (
              <li key={item}>
                <Link
                  href={{
                    pathname: `/noticias/categoria/${categoryId}/${item}`,
                    lang: lang,
                  }}
                >
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>

        {page < pages ? (
          <Link
            href={{
              pathname: `/noticias/categoria/${categoryId}/${Number(page) + 1}`,
              lang: lang,
            }}
          >
            <FiArrowRight width={100} height={100} />
          </Link>
        ) : (
          <span>
            <FiArrowRight width={100} height={100} />
          </span>
        )}
      </Pagination>
    </>
  )
}
