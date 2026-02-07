import React from "react";
import { Link } from "wouter";
import Seo from "@/components/seo";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Seo title="Blog - AurexAuto" description="AurexAuto blog — guides on booking bots and automation." pathname="/blog" />
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold">Blog</h1>
        <p className="text-muted-foreground mt-2">Guides, tutorials and case studies about booking bots and automation.</p>
      </header>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block">
              <article className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                {post.meta.ogImage && (
                  <img
                    src={post.meta.ogImage.startsWith('http') ? post.meta.ogImage : post.meta.ogImage}
                    alt={post.meta.title}
                    className="w-full h-44 object-cover rounded-md mb-4"
                  />
                )}

                <h2 className="text-2xl font-semibold text-foreground">{post.meta.title}</h2>
                <p className="text-sm text-muted-foreground mt-2">{post.meta.description}</p>
                <div className="text-xs text-muted-foreground mt-4">{post.meta.date} • {post.meta.author}</div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
