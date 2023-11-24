// Components imports
import NewsOtherPostsSmall from '../NewsOtherPostsSmall'

// Atoms imports
import NewsTitle from '@/atoms/News/NewsTitle'
import NewsRowContent from '@/atoms/News/NewsRowContent'

// Component Declaration
export default function NewsOthersPosts() {
  // Return components, with functions to call API and language
  return (
    <>
      <NewsTitle size="3rem">Outras Postagens</NewsTitle>
      <NewsRowContent center>
        <NewsOtherPostsSmall title={'Na Mídia'} />
        <NewsOtherPostsSmall title={'Nossas Noivas'} />
      </NewsRowContent>
      <NewsRowContent center>
        <NewsOtherPostsSmall title={'Espaço Debutantes'} />
        <NewsOtherPostsSmall title={'Truques e dicas'} />
      </NewsRowContent>
    </>
  )
  //
}
