"use client";

import React from "react";
import { PortableText } from "@portabletext/react";

interface Project {
  _id: string;
  title: string;
  location: string;
  category: string;
  description: any; // description is block content from Sanity
  images: {
    asset: { _id: string; url: string };
    alt?: string;
  }[];
  slug: string;
}

interface ProjectDetailViewProps {
  project: Project;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  const { title, location, description, images } = project;

  return (
    <article className="space-y-4 container px-2 lg:px-0 mx-auto px-5 lg:px-20">
      {/* Header */}
      <header className="flex flex-col lg:flex-row justify-between">
        <h2>{title}</h2>
        <div className="flex flex-col lg:text-right">
          <p className="text-gray-600">{location}</p>
        </div>
      </header>

      {/* Description */}
      <section>
        <PortableText value={description} />
      </section>

      {/* Grid of Images */}
      <section className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4 w-full">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image.asset.url}
              alt={image.alt || `${title} ${index + 1}`}
              className="w-full h-[500px] object-cover object-center"
            />
          </div>
        ))}
      </section>
    </article>
  );
};

export default ProjectDetailView;
