// Components imports
import BlogContentOne from './BlogContentOne'
import BlogTitleOne from './BlogTitleOne'
import BlogContentTwo from './BlogContentTwo'

// Atoms imports
import NewsContainer from '@/atoms/News/NewsContainer'
import NewsSubtitle from '@/atoms/News/NewsSubtitle'
import NewsPageHead from '../NewsPageHead'
import NewsBodyConstructor from '../NewsBodyConstructor'
import NewsOthersPosts from '../NewsOthersPosts'

// Component Declaration
export default function NewsPageContent({ lang, data }) {
  const subtitle = {
    text: data.subtitle,
    imageUrl: data.cover.url,
    imageCredit: data.cover.author,
  }

  // Return components, with functions to call API and language
  return (
    <>
      <NewsContainer>
        <NewsPageHead lang={lang} data={data} />
        <NewsSubtitle lang={lang} data={subtitle} />
        <NewsBodyConstructor lang={lang} data={data.body} />
        {
          //
        }
        <NewsOthersPosts />
      </NewsContainer>
    </>
  )
  //
}
