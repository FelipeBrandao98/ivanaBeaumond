import BlogBanner from './BlogBanner'
import BlogOtherPosts from './BlogOtherPosts'

import styles from './styles.module.css'

export default function BlogPostPage() {
  return (
    <div className={styles.content}>
      <BlogBanner />
      <BlogOtherPosts title='Espaço Debutantes' />
      <BlogOtherPosts title='Na Mídia' />
      <BlogOtherPosts title='Nossas Noivas' />
      <BlogOtherPosts title='Dicas e Truques' />
    </div>
  )
}