"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { fetchResidentialProjects, fetchOfficeProjects, fetchKitchenProjects, fetchHospitalityProjects } from "@/sanity/lib/fetchers/projectFetchers";
import { Loader } from "./ui/loader";

interface Project {
  _id: string;
  title: string;
  location: string;
  category: string;
  description: any; // Block content from Sanity
  images: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
  slug: string;
}

interface ProjectCategory {
  name: string;
  title: string;
  description: string;
  projects: Project[];
}

const ProjectTypeSection = () => {
  const [categories, setCategories] = useState<ProjectCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch projects for each category
        const [residentialProjects, officeProjects, kitchenProjects, hospitalityProjects] = await Promise.all([
          fetchResidentialProjects(),
          fetchOfficeProjects(),
          fetchKitchenProjects(),
          fetchHospitalityProjects(),
        ]);

        // Define category descriptions (you can customize these)
        const categoryDescriptions = {
          residential:
            "Our residential projects transform houses into homes, creating spaces that reflect your personality while maximizing comfort and functionality. From modern apartments to spacious family homes, we specialize in designing living environments that balance aesthetics with practicality.",
          offices:
            "Transform your workspace with our office design expertise that blends professionalism with innovation. We create environments that boost productivity, foster collaboration, and reflect your company's brand identity.",
          kitchens:
            "The kitchen is the heart of the home, and our designs make it both functional and beautiful. We specialize in creating kitchen spaces that cater to your culinary needs .",
          hospitality:
            "Create memorable experiences for your guests with our hospitality design services. We specialize in hotels, restaurants, cafes, and other hospitality venues that combine comfort with distinctive style.",
        };

        // Format the categories with their projects
        const formattedCategories = [
          {
            name: "residential",
            title: "Residential",
            description: categoryDescriptions.residential,
            projects: residentialProjects.slice(0, 4), // Take first 4 projects
          },
          {
            name: "offices",
            title: "Offices",
            description: categoryDescriptions.offices,
            projects: officeProjects.slice(0, 4),
          },
          {
            name: "kitchens",
            title: "Kitchens",
            description: categoryDescriptions.kitchens,
            projects: kitchenProjects.slice(0, 4),
          },
          {
            name: "hospitality",
            title: "Hospitality",
            description: categoryDescriptions.hospitality,
            projects: hospitalityProjects.slice(0, 4),
          },
        ];

        setCategories(formattedCategories);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="w-full bg-neatBlack/10">
      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              {category.projects.length > 0 ? (
                <div className="p-2">
                  <Carousel
                    className="w-full"
                    plugins={[
                      Autoplay({
                        delay: 15000,
                      }),
                    ]}
                  >
                    <CarouselContent>
                      {category.projects.map((project) => (
                        <CarouselItem key={project._id}>
                          <div className="relative h-64 lg:h-80">
                            <Image
                              src={project.images[0]?.asset.url || "/placeholder-image.jpg"}
                              alt={project.images[0]?.alt || project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  <div className="space-y-1 p-2">
                    <h3 className="text-lg tracking-wide font-semibold">Bwosh {category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                    <Button variant="linkDark">
                      <Link href={`/bwosh-${category.name}`}>View Projects</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p>No {category.title.toLowerCase()} projects found.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypeSection;
