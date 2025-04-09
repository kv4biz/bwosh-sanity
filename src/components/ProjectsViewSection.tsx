"use client";

import React, { useEffect, useState } from "react";
import {
  fetchResidentialProjects,
  fetchOfficeProjects,
  fetchKitchenProjects,
  fetchHospitalityProjects,
} from "@/sanity/lib/fetchers/projectFetchers";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Loader } from "./ui/loader";

interface ProjectsViewSectionProps {
  title: string;
  tag: string;
  category: "residential" | "offices" | "kitchens" | "hospitality";
}

const ProjectsViewSection: React.FC<ProjectsViewSectionProps> = ({
  title,
  tag,
  category,
}) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjects() {
      try {
        let data = [];
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
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, [category]);

  // Simple text truncation utility
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(" ")}...`;
    }
    return text;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-10 lg:py-20 container mx-auto">
      {/* Section Header */}
      <div className="text-center gap-4 mb-6 lg:mb-10">
        <h2>{title}</h2>
        <p>{tag}</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 px-4 lg:px-12">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group relative rounded-lg overflow-hidden shadow-sm h-[360px] hover:shadow-md transition-shadow duration-200"
          >
            {/* Project Image */}
            <div className="h-full">
              <img
                src={project.images[0].asset.url}
                alt={project.images[0].alt || project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="absolute bottom-0 left-0 w-full bg-white/80 h-[80px] p-4">
              <div className="flex justify-between items-center">
                <h4>{project.title}</h4>
                <a href={`/bwosh-${project.category}/${project.slug}`}>
                  <Button variant={"linkDark"}>
                    View more <ArrowRight />
                  </Button>
                </a>
              </div>
              <p className="text-sm">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsViewSection;
