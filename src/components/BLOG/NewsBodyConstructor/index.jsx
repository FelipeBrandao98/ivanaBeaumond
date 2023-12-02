// Next.js imports
import Image from 'next/image'

// Atoms imports
import NewsParagraph from '@/atoms/News/NewsParagraph'
import NewsTitle from '@/atoms/News/NewsTitle'

export default function NewsBodyConstructor({ lang, data }) {
  function getTitle(text) {
    var isTitle = text.search('<[title]>')

    if (!isTitle) {
      return -1
    }

    var string = text.split('<[title]>')
    var newString = string[1]

    return newString.replaceAll('<[/title]>', '')
  }

  function getParagraph(text) {
    var isParagraph = text.search('<[p]>')

    if (!isParagraph) {
      return -1
    }

    var string = text.split('<[p]>')
    var newString = string[1]

    return newString.replaceAll('<[/p]>', '')
  }

  function getImage(text) {
    var isImage = text.search('<[img]>')

    if (!isImage) {
      return -1
    }

    var string = text.split('<[img]>')
    var newString = string[1]

    return newString.replaceAll('<[/img]>', '')
  }

  function construct(text) {
    var stringArray = text.split('<[div]>')
    var newArray = []

    stringArray.map((item) => {
      if (item === '') {
        return null
      }

      newArray.push(item.replaceAll('<[/div]>', ''))
    })

    return newArray
  }

  return (
    <>
      <div>
        {construct(data).map((element, index) => {
          var typeElement = element.split('<[')[1]

          if (typeElement?.startsWith('title')) {
            return (
              <NewsTitle key={index} color="black" size="1rem">
                {getTitle(element)}
              </NewsTitle>
            )
          }

          if (typeElement?.startsWith('p')) {
            return (
              <NewsParagraph key={index}>{getParagraph(element)}</NewsParagraph>
            )
          }

          if (typeElement?.startsWith('img')) {
            return (
              <Image
                key={index}
                src={getImage(element)}
                alt="Ivana"
                width={980}
                height={980}
              />
            )
          }

          if (typeElement?.startsWith('spcm')) {
            return <br key={index} />
          }
        })}
      </div>
    </>
  )
}
