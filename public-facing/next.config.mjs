import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const LEARN_HOST = 'learn.abdullahmujahidali.com'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  async rewrites() {
    return {
      // beforeFiles runs before the filesystem/static assets, and we scope the
      // match to the learn subdomain's homepage only — so the bare subdomain
      // serves the roadmap while _next/* assets and every other path are
      // untouched. Deeper learn pages live at /learn/* and work as-is.
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: LEARN_HOST }],
          destination: '/learn',
        },
      ],
    }
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
