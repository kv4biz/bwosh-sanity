import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import BlogDetailView from "@/components/BlogDetailView";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const blogQuery = groq`
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      author,
      description,
      publishedAt,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  `;

  const post = await client.fetch(blogQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto py-10">
      <BlogDetailView post={post} />
    </main>
  );
}
