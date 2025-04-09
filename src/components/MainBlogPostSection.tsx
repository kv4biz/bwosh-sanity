"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { fetchMainPosts } from "@/sanity/lib/fetchers/postFetchers";
import { cn } from "@/lib/utils";
import { Loader } from "./ui/loader";

interface PostType {
  _id: string;
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

interface MainBlogPostSectionProps {
  title: string;
  tag: string;
}

const MainBlogPostSection: React.FC<MainBlogPostSectionProps> = ({
  title,
  tag,
}) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchMainPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching main blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  // Helper function to add ordinal suffixes (1st, 2nd, 3rd, etc)
  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <section className="container px-2 lg:px-0 mx-auto py-10 lg:py-16 px-4 text-center">
        <h2>{title}</h2>
        <h4>{tag}</h4>
        <p className="text-gray-500 text-lg">
          No featured blog posts available at the moment.
        </p>
      </section>
    );
  }

  return (
    <section className="container px-2 lg:px-0 mx-auto py-10 lg:py-16 px-4">
      {/* Section Header */}
      <div className="text-center lg:text-left mb-10">
        <h2>{title}</h2>
        <p>{tag}</p>
      </div>

      <Carousel className="relative">
        <CarouselPrevious />
        <CarouselContent className="flex">
          {posts.map((post, index) => (
            <CarouselItem
              key={post._id}
              // Display 1 post on small screens, 2 on medium, and 3 on large screens:
              className="p-2 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative bg-white overflow-hidden shadow-md">
                {/* Number indicator */}
                <h4 className="absolute top-2 left-2 z-10 bg-aegean text-white px-3 py-1">
                  {getOrdinal(index + 1)}
                </h4>
                {/* Background Image with padding */}
                <div
                  className="w-full h-88 bg-cover bg-center p-4"
                  style={{
                    backgroundImage: `url(${post.mainImage.asset.url})`,
                  }}
                />
                {/* Semi-transparent white container px-2 lg:px-0 at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <h4 className="text-white mb-2">{post.title}</h4>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ArrowUpRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default MainBlogPostSection;
