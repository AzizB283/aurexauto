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
