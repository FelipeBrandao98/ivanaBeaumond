// Components imports
import BlogContentOne from './BlogContentOne'
import BlogTitleOne from './BlogTitleOne'
import BlogContentTwo from './BlogContentTwo'
import BlogContentText from './BlogContentText'
import BlogOthersPosts from '../BlogOthersPosts'

// Atoms imports
import NewsContainer from '@/atoms/News/NewsContainer'
import NewsSubtitle from '@/atoms/News/NewsSubtitle'

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
        <NewsSubtitle lang={lang} content={subtitle} />
        <BlogContentOne />
        <BlogTitleOne />
        <BlogContentTwo />
        <BlogContentText />
      </NewsContainer>
      <BlogOthersPosts />
    </>
  )
  //
}
