import { getAllPosts } from './sanity'

export async function getAllArticles() {
  const posts = await getAllPosts()

  return posts.map(post => ({
    slug: post.slug.current,
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    content: post.content
  }))
}