"use client";

import { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { fetchAllProjects } from "@/sanity/lib/fetchers/projectFetchers";

interface ProjectType {
  _id: string;
  title: string;
  location: string;
  category: string;
  description: any; // block content from Sanity, not used here
  images: {
    asset: { _id: string; url: string };
    alt?: string;
  }[];
  slug: string;
}

const GallerySection = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchAllProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const openViewer = (project: ProjectType) => {
    setSelectedProject(project);
  };

  const closeViewer = () => {
    setSelectedProject(null);
  };

  const getGridClass = (index: number) => {
    const pattern = [
      "md:col-span-2 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-2 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
    ];
    return pattern[index % 7] || "md:col-span-1 md:row-span-1";
  };

  if (loading) {
    return <div>Loading gallery...</div>;
  }

  return (
    <div className="px-4 lg:px-16 py-10 lg:py-20">
      {/* Bento Grid for Projects */}
      <BentoGrid className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 auto-rows-[20rem]">
        {projects.map((project, index) => (
          <BentoGridItem
            key={project.slug}
            title={project.title}
            header={
              <img
                src={project.images[0]?.asset?.url}
                alt={project.title}
                className="w-full h-full object-cover"
                onClick={() => openViewer(project)}
              />
            }
            className={getGridClass(index)}
          />
        ))}
      </BentoGrid>

      {/* Expanded Project Viewer */}
      {selectedProject && (
        <div className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center p-10 lg:p-24 justify-center">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-50 text-white text-2xl"
            onClick={closeViewer}
          >
            ✕
          </button>

          {/* Carousel and Project Name */}
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="absolute top-4 left-4 z-50 text-white text-xl font-bold">
              {selectedProject.title}
            </div>
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {selectedProject.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image.asset.url}
                      alt={`${selectedProject.title}-${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
