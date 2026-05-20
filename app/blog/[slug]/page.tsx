import { notFound } from 'next/navigation'
import { getAllSlugs, getPost } from '@/lib/blogContent'
import BlogPostView from './BlogPostView'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return notFound()
  return <BlogPostView post={post} />
}
