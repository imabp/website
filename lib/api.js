import posts from '../config/posts.json'

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug && !post.isSection)
}

export function getDocBySlug(structuredPosts, slug) {
  return structuredPosts.find(post => post.slug === slug && !post.isSection)
}