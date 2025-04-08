"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  fetchResidentialProjects,
  fetchOfficeProjects,
  fetchKitchenProjects,
  fetchHospitalityProjects,
} from "@/sanity/lib/fetchers/projectFetchers";
import { Loader } from "./ui/loader";

type ProjectCategorySectionProps = {
  containerClassName?: string;
  title: string;
  tag: string;
  category: "residential" | "offices" | "kitchens" | "hospitality";
  btnVariant: "default" | "outline";
  btnLink: string;
  swapTextAndCarousel?: boolean;
};

interface ProjectType {
  _id: string;
  title: string;
  location: string;
  category: string;
  description: any; // block content from Sanity; not used here
  images: {
    asset: { _id: string; url: string };
    alt?: string;
  }[];
  slug: string;
}

const ProjectCategorySection: React.FC<ProjectCategorySectionProps> = ({
  containerClassName,
  title,
  tag,
  category,
  btnLink,
  btnVariant,
  swapTextAndCarousel = false,
}) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      let data: ProjectType[] = [];
      if (category === "residential") {
        data = await fetchResidentialProjects();
      } else if (category === "offices") {
        data = await fetchOfficeProjects();
      } else if (category === "kitchens") {
        data = await fetchKitchenProjects();
      } else if (category === "hospitality") {
        data = await fetchHospitalityProjects();
      }
      setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  // Map projects to a simplified format
  const filteredProjects = projects.map(
    ({ images, slug, title, location }) => ({
      image: images[0]?.asset?.url,
      slug: slug,
      title,
      category,
      location,
    })
  );

  return (
    <section className={`m-4 lg:mx-10 ${containerClassName}`}>
      <div
        className={`flex flex-col items-center lg:items-start justify-between lg:flex-row ${
          swapTextAndCarousel ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div
          className={`w-full lg:w-1/2 space-y-4 lg:space-y-6 p-10 text-center ${
            swapTextAndCarousel ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <h4>{tag}</h4>
          <h2>{title}</h2>

          <Button variant={btnVariant} size={"lg"} className="mt-5">
            <a href={btnLink} target="_blank" rel="noopener noreferrer">
              View More
            </a>
            <ArrowUpRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {/* Carousel Section */}
        <div className="w-full lg:w-1/2">
          <Carousel className="relative">
            <CarouselPrevious />
            <CarouselContent className="flex">
              {filteredProjects.map((project, index) => (
                <CarouselItem key={index} className="relative">
                  <div className="block">
                    <div className="group relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-96 lg:h-[400px]"
                      />
                      <div className="absolute w-full bottom-4 px-5 text-white">
                        <h4 className="font-semibold">{project.title}</h4>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-sm font-semibold flex-1">
                            {project.location}
                          </p>
                          <Button variant={"linkWhite"}>
                            <a
                              href={`/bwosh-${project.category}/${project.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategorySection;
