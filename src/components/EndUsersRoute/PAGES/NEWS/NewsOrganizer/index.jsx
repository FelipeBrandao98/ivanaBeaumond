'use client'

// React imports
import { useEffect } from 'react'
import { useState } from 'react'

// Compontents imports
import OtherNews from '../OtherNews'

export default function NewsOrganizer({ latestPosts }) {
  const [debutantSpace, setDebutantSpace] = useState([])
  const [inTheMedia, setInTheMedia] = useState([])
  const [ourBrides, setOurBrides] = useState([])
  const [tipsAndTricks, setTipsAndTricks] = useState([])

  function organize(latestPosts) {
    latestPosts.map((post) => {
      if (post.category.description === 'Espaço Debutantes') {
        setDebutantSpace((oldDebutant) => [...oldDebutant, post])
      }

      if (post.category.description === 'Debütantenraum') {
        setDebutantSpace((oldDebutant) => [...oldDebutant, post])
      }

      if (post.category.description === 'Espace Débutantes') {
        setDebutantSpace((oldDebutant) => [...oldDebutant, post])
      }

      if (post.category.description === 'Debutant Space') {
        setDebutantSpace((oldDebutant) => [...oldDebutant, post])
      }

      if (post.category.description === 'Na Mídia') {
        setInTheMedia((oldMedia) => [...oldMedia, post])
      }

      if (post.category.description === 'In den Medien') {
        setInTheMedia((oldMedia) => [...oldMedia, post])
      }

      if (post.category.description === 'Dans les médias') {
        setInTheMedia((oldMedia) => [...oldMedia, post])
      }

      if (post.category.description === 'In the Media') {
        setInTheMedia((oldMedia) => [...oldMedia, post])
      }

      if (post.category.description === 'Nossas Noivas') {
        setOurBrides((oldBrides) => [...oldBrides, post])
      }

      if (post.category.description === 'Unsere Bräute') {
        setOurBrides((oldBrides) => [...oldBrides, post])
      }

      if (post.category.description === 'Nos mariées') {
        setOurBrides((oldBrides) => [...oldBrides, post])
      }

      if (post.category.description === 'Our Brides') {
        setOurBrides((oldBrides) => [...oldBrides, post])
      }

      if (post.category.description === 'Dicas e Truques') {
        setTipsAndTricks((oldTipsAndTricks) => [...oldTipsAndTricks, post])
      }

      if (post.category.description === 'Tipps und Tricks') {
        setTipsAndTricks((oldTipsAndTricks) => [...oldTipsAndTricks, post])
      }

      if (post.category.description === 'Trucs et astuces') {
        setTipsAndTricks((oldTipsAndTricks) => [...oldTipsAndTricks, post])
      }

      if (post.category.description === 'Tips and tricks') {
        setTipsAndTricks((oldTipsAndTricks) => [...oldTipsAndTricks, post])
      }
    })
  }

  useEffect(() => {
    organize(latestPosts)
  }, [])

  return (
    <>
      {debutantSpace[0] ? (
        <OtherNews
          title={debutantSpace[0].category.description}
          data={filterDebutant}
        />
      ) : (
        ''
      )}
      {inTheMedia[0] ? (
        <OtherNews
          title={inTheMedia[0].category.description}
          data={inTheMedia}
        />
      ) : (
        ''
      )}
      {ourBrides[0] ? (
        <OtherNews title={ourBrides[0].category.description} data={ourBrides} />
      ) : (
        ''
      )}
      {tipsAndTricks[0] ? (
        <OtherNews
          title={tipsAndTricks[0].category.description}
          data={tipsAndTricks}
        />
      ) : (
        ''
      )}
    </>
  )
}
