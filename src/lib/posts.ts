// `gray-matter` expects Node's `Buffer` in some environments. Provide a
// tiny shim for browsers so it doesn't throw `Buffer is not defined`.
if (typeof (globalThis as any).Buffer === "undefined") {
  (globalThis as any).Buffer = {
    from(input: any) {
      return {
        toString() {
          return typeof input === "string" ? input : String(input);
        },
      };
    },
    isBuffer() {
      return false;
    },
  };
}

import matter from "gray-matter";

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  slug?: string;
  canonical?: string;
  ogImage?: string;
  readingTime?: string;
  featured?: boolean;
}

export interface Post {
  meta: PostMeta;
  content: string;
  slug: string;
}

// import all markdown files from /src/posts as raw text
const modules = import.meta.glob('/src/posts/*.md', { eager: true, as: 'raw' }) as Record<string, string>;

function filenameToSlug(path: string) {
  const parts = path.split('/');
  const name = parts[parts.length - 1];
  return name.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

export function getAllPosts(): Post[] {
  const posts: Post[] = Object.entries(modules).map(([path, raw]) => {
    const parsed = matter(raw);
    const meta = parsed.data as PostMeta;
    const slug = meta.slug || filenameToSlug(path);
    return {
      meta,
      content: parsed.content,
      slug,
    };
  });

  // sort by date desc
  posts.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export type PostCategory = 'general' | 'clinic';

const CLINIC_KEYWORDS = ['clinic', 'healthcare', 'medical', 'appointment', 'patient', 'receptionist', 'doctor', 'scheduling'];

export function categorizePost(post: Post): PostCategory {
  const tags = (post.meta.tags || []).join(' ').toLowerCase();
  const hasClinicKeyword = CLINIC_KEYWORDS.some(keyword => tags.includes(keyword));
  return hasClinicKeyword ? 'clinic' : 'general';
}

export function getCategories(): { label: string; value: PostCategory }[] {
  return [
    { label: 'General', value: 'general' },
    { label: 'Clinic & Medical', value: 'clinic' },
  ];
}

export interface PaginationResult {
  posts: Post[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export function getPaginatedPosts(
  page: number = 1,
  perPage: number = 10,
  category?: PostCategory
): PaginationResult {
  let allPosts = getAllPosts();
  
  // Filter by category if provided
  if (category) {
    allPosts = allPosts.filter((post) => categorizePost(post) === category);
  }
  
  const total = allPosts.length;
  const totalPages = Math.ceil(total / perPage);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const start = (currentPage - 1) * perPage;
  const posts = allPosts.slice(start, start + perPage);
  
  return { posts, total, totalPages, currentPage };
}
