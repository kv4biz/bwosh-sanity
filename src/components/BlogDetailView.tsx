"use client";
import React from "react";
import { PortableText } from "@portabletext/react";

interface BlogPost {
  _id: string;
  title: string;
  author: string;
  description: any; // description is block content from Sanity
  mainImage: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  slug: string;
  publishedAt: string;
}

interface BlogDetailViewProps {
  post: BlogPost;
}

const BlogDetailView: React.FC<BlogDetailViewProps> = ({ post }) => {
  const { title, author, description, mainImage, publishedAt } = post;

  return (
    <article className="space-y-4 container  mx-auto px-5 lg:px-20">
      {/* Header */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h2>{title}</h2>
        <div className="flex flex-col lg:text-right">
          <p className="text-gray-600">By {author}</p>
          <p className="text-gray-400">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
      </header>

      {/* Main Image */}
      <section>
        {mainImage && (
          <img
            src={mainImage.asset.url}
            alt={mainImage.alt || title}
            className="w-full h-[350px] object-cover object-center rounded-md"
          />
        )}
      </section>

      {/* Description */}

      <section>
        <PortableText value={description} />
      </section>
    </article>
  );
};

export default BlogDetailView;
