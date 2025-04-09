import React from "react";
import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/ProjectDetailView";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const projectQuery = groq`
    *[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      location,
      category,
      description,
      images[]{
        asset->{
          _id,
          url
        },
        alt
      },
      "slug": slug.current
    }
  `;

  const project = await client.fetch(projectQuery, { slug });

  if (!project) {
    notFound();
  }

  return (
    <main className="container px-2 lg:px-0 mx-auto py-10">
      <ProjectDetailView project={project} />
    </main>
  );
}
