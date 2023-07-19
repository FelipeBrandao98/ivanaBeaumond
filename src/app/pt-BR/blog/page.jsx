import BlogBanner from "@/components/BLOG/BlogPostsPage/BlogBanner";
import BlogOtherPosts from "@/components/BLOG/BlogPostsPage/BlogOtherPosts";
import BlogPostPage from "@/components/BLOG/BlogPostsPage";

const posts1 = [
  {
    id: 1,
    title: 'Ivana Beaumond assina novo editorial de noivas em Paris',
    imageSource: '/homeimage.jpg',
    imageAlt: 'Ivana Beaumond',
    imageCredits: 'Soluta: quisquam aliquid.',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum',
    date: '29/10/2015',
    fullLink: '',
  },
  {
    id: 2,
    title: 'Ivana Beaumond na Amazônia',
    imageSource: '/photos_blog/photo_blog_1.jpeg',
    imageAlt: 'Ivana Beaumond',
    imageCredits: 'Soluta: quisquam aliquid.',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum',
    date: '29/10/2015',
    fullLink: '',
  },
  {
    id: 3,
    title: 'Ivana Beaumond assina novo editorial de noivas em Paris',
    imageSource: '/photos_blog/photo_blog_3.jpg',
    imageAlt: 'Ivana Beaumond',
    imageCredits: 'Soluta: quisquam aliquid.',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum',
    date: '29/10/2015',
    fullLink: '',
  },
  {
    id: 4,
    title: 'Ivana Beaumond assina novo editorial de noivas em Paris',
    imageSource: '/photos_blog/photo_blog_3.jpg',
    imageAlt: 'Ivana Beaumond',
    imageCredits: 'Soluta: quisquam aliquid.',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum',
    date: '29/10/2015',
    fullLink: '',
  },
]

const posts2 = [
  {
    id: 1,
    title: 'Ivana Beaumond assina novo editorial de noivas em Paris',
    imageSource: '/photos_collections_items/suit_banner_homepage/terno_bege_homem_deitado_ivana_beaumond.jpg',
    imageAlt: 'Ivana Beaumond',
    imageCredits: 'Soluta: quisquam aliquid.',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum',
    date: '29/10/2015',
    fullLink: '',
  },
  {
    id: 2,
    title: 'Ivana Beaumond na Amazônia',
    imageSource: '/photos_blog/photo_blog_1.jpeg',
    imageAlt: 'Ivana Beaumond',
    imageCredits: 'Soluta: quisquam aliquid.',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum',
    date: '29/10/2015',
    fullLink: '',
  },
  {
    id: 3,
    title: 'Ivana Beaumond assina novo editorial de noivas em Paris',
    imageSource: '/photos_collections_items/debutant_banner_homepage/vestido_debutante_preto_ivana_beaumond.jpg',
    imageAlt: 'Ivana Beaumond',
    imageCredits: 'Soluta: quisquam aliquid.',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum',
    date: '29/10/2015',
    fullLink: '',
  },
  {
    id: 4,
    title: 'Ivana Beaumond assina novo editorial de noivas em Paris',
    imageSource: '/photos_blog/photo_blog_3.jpg',
    imageAlt: 'Ivana Beaumond',
    imageCredits: 'Soluta: quisquam aliquid.',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum',
    date: '29/10/2015',
    fullLink: '',
  },
]

export default function Page() {

  return (
    <BlogPostPage>
      <BlogBanner />
      <BlogOtherPosts
        title='Espaço Debutantes'
        data={posts1}
      />
      <BlogOtherPosts
        title='Na Mídia'
        data={posts2}
      />
      <BlogOtherPosts
        title='Nossas Noivas'
        data={posts1}
      />
      <BlogOtherPosts
        title='Dicas e Truques'
        data={posts2}
      />
    </BlogPostPage>
  )
}