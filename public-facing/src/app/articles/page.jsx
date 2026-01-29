import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { ArticlesList } from '@/components/ArticlesList'

export const metadata = {
  title: 'Articles',
  description:
    'Thoughts on software engineering, AI, and building products that matter.',
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  return <ArticlesList articles={articles} />
}
