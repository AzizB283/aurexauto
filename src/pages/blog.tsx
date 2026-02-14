import React, { useState } from "react";
import { Link, useSearch } from "wouter";
import Seo from "@/components/seo";
import { getPaginatedPosts, getCategories, PostCategory } from "@/lib/posts";

export default function BlogIndex() {
  const search = useSearch();
  const queryParams = new URLSearchParams(search);
  const pageParam = parseInt(queryParams.get("page") || "1", 10);
  const categoryParam = (queryParams.get("category") || "general") as PostCategory;
  
  const [selectedCategory, setSelectedCategory] = useState<PostCategory>(categoryParam);
  const categories = getCategories();
  const { posts, totalPages, currentPage } = getPaginatedPosts(pageParam, 10, selectedCategory);

  const handleCategoryChange = (category: PostCategory) => {
    setSelectedCategory(category);
    window.history.pushState({}, "", `/blog?category=${category}&page=1`);
    window.location.reload();
  };

  const handlePageClick = (page: number) => {
    window.history.pushState({}, "", `/blog?category=${selectedCategory}&page=${page}`);
    window.location.reload();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <Seo title="Blog - AurexAuto" description="AurexAuto blog — guides on booking bots and automation." pathname="/blog" />
      
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold">Blog</h1>
        <p className="text-muted-foreground mt-2">Guides, tutorials and case studies about booking bots and automation.</p>
      </header>

      {/* Category Dropdown */}
      <div className="mb-10 flex items-center gap-3">
        <label htmlFor="category-select" className="text-sm font-semibold text-foreground">Filter by Category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value as PostCategory)}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground font-medium cursor-pointer hover:bg-secondary transition-colors"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <article className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
              {post.meta.ogImage && (
                <img
                  src={post.meta.ogImage.startsWith('http') ? post.meta.ogImage : post.meta.ogImage}
                  alt={post.meta.title}
                  className="w-full h-48 object-cover"
                />
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">{post.meta.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{post.meta.description}</p>
                
                {post.meta.tags && post.meta.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.meta.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="text-xs text-muted-foreground">{post.meta.date} • {post.meta.author}</div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* No posts message */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No posts found in this category.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              className="px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              ← Previous
            </button>
          )}

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`min-w-10 h-10 rounded-lg font-medium transition-colors ${
                  page === currentPage
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border hover:bg-secondary'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              className="px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              Next →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
