import NewsPagination from './NewsPagination'
import OtherNewsPagination from './OtherNewsPagination'

export default function NewsOrganizerPagination({
  lang,
  data,
  page,
  pages,
  categoryId,
}) {
  return (
    <>
      <NewsPagination
        lang={lang}
        page={page}
        pages={pages}
        categoryId={categoryId}
      />

      <OtherNewsPagination data={data} />

      <NewsPagination
        lang={lang}
        page={page}
        pages={pages}
        categoryId={categoryId}
      />
    </>
  )
}
