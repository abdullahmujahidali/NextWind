import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source)

export async function getAllPosts() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(date desc) {
      title,
      slug,
      description,
      date,
      author,
      content,
      "coverImage": coverImage.asset->url
    }
  `)
  return posts
}

export async function getPostBySlug(slug) {
  const post = await sanityClient.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      description,
      date,
      author,
      content,
      "coverImage": coverImage.asset->url
    }
  `, { slug })
  return post
}