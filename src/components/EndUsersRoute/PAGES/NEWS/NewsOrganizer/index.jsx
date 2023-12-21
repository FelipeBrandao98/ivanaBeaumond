// Compontents imports
import NewsSeeAllButton from '../NewsSeeAllButton'
import OtherNews from '../OtherNews'

export default function NewsOrganizer({ lang, latestPosts }) {
  const debutantSpace = []
  const inTheMedia = []
  const ourBrides = []
  const tipsAndTricks = []

  function organize(latestPosts) {
    latestPosts.map((post) => {
      if (post.category.description === 'Espaço Debutantes') {
        debutantSpace.push(post)
      }

      if (post.category.description === 'Debütantenraum') {
        debutantSpace.push(post)
      }

      if (post.category.description === 'Espace Débutantes') {
        debutantSpace.push(post)
      }

      if (post.category.description === 'Debutant Space') {
        debutantSpace.push(post)
      }

      if (post.category.description === 'Na Mídia') {
        inTheMedia.push(post)
      }

      if (post.category.description === 'In den Medien') {
        inTheMedia.push(post)
      }

      if (post.category.description === 'Dans les médias') {
        inTheMedia.push(post)
      }

      if (post.category.description === 'In the Media') {
        inTheMedia.push(post)
      }

      if (post.category.description === 'Nossas Noivas') {
        ourBrides.push(post)
      }

      if (post.category.description === 'Unsere Bräute') {
        ourBrides.push(post)
      }

      if (post.category.description === 'Nos mariées') {
        ourBrides.push(post)
      }

      if (post.category.description === 'Our Brides') {
        ourBrides.push(post)
      }

      if (post.category.description === 'Dicas e Truques') {
        tipsAndTricks.push(post)
      }

      if (post.category.description === 'Tipps und Tricks') {
        tipsAndTricks.push(post)
      }

      if (post.category.description === 'Trucs et astuces') {
        tipsAndTricks.push(post)
      }

      if (post.category.description === 'Tips and tricks') {
        tipsAndTricks.push(post)
      }
    })
  }

  return (
    <>
      {organize(latestPosts)}
      {debutantSpace[0] ? (
        <>
          <OtherNews
            title={debutantSpace[0].category.description}
            data={filterDebutant}
          />
          <NewsSeeAllButton
            lang={lang}
            href={`/noticias/categoria/${debutantSpace[0].category.id}/1`}
          />
        </>
      ) : (
        ''
      )}
      {inTheMedia[0] ? (
        <>
          <OtherNews
            title={inTheMedia[0].category.description}
            data={inTheMedia}
          />
          <NewsSeeAllButton
            lang={lang}
            href={`/noticias/categoria/${inTheMedia[0].category.id}/1`}
          />
        </>
      ) : (
        ''
      )}
      {ourBrides[0] ? (
        <>
          <OtherNews
            title={ourBrides[0].category.description}
            data={ourBrides}
          />
          <NewsSeeAllButton
            lang={lang}
            href={`/noticias/categoria/${ourBrides[0].category.id}/1`}
          />
        </>
      ) : (
        ''
      )}
      {tipsAndTricks[0] ? (
        <>
          <OtherNews
            title={tipsAndTricks[0].category.description}
            data={tipsAndTricks}
          />
          <NewsSeeAllButton
            lang={lang}
            href={`/noticias/categoria/${tipsAndTricks[0].category.id}/1`}
          />
        </>
      ) : (
        ''
      )}
    </>
  )
}
