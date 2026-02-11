import React from "react";
import { useRoute } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import rehypeRaw from "rehype-raw";
import Seo from "@/components/seo";
import { getPostBySlug } from "@/lib/posts";

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:slug');
  const slug = params?.slug as string | undefined;
  if (!slug) return <div className="container mx-auto px-4 sm:px-6 py-12">Post not found</div>;

  const post = getPostBySlug(slug);
  if (!post) return <div className="container mx-auto px-4 sm:px-6 py-12">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Seo
        title={post.meta.title}
        description={post.meta.description}
        pathname={`/blog/${post.slug}`}
        image={post.meta.ogImage}
        canonical={post.meta.canonical}
      />

      <article>
        {post.meta.ogImage && (
          <img
            src={post.meta.ogImage.startsWith('http') ? post.meta.ogImage : post.meta.ogImage}
            alt={post.meta.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}

        <header className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold mb-2">{post.meta.title}</h1>
          <div className="text-sm text-muted-foreground">{post.meta.date} • {post.meta.author}</div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkSlug]} rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
