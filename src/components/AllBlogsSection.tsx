"use client";

import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  SearchIcon,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader } from "@/components/ui/loader";

import Image from "next/image";

import {
  fetchAllPostsAsc,
  fetchAllPostsDesc,
} from "@/sanity/lib/fetchers/postFetchers";
import { urlFor } from "@/sanity/lib/image";

const PER_PAGE = 12;

type Blog = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  mainImage: string;
  publishedAt: string;
};

export default function AllBlogsSection() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<
    "day" | "week" | "month" | "year" | "all"
  >("all");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async (order: "asc" | "desc") => {
    setLoading(true);
    try {
      const data =
        order === "asc" ? await fetchAllPostsAsc() : await fetchAllPostsDesc();
      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(sortOrder);
  }, [sortOrder]);

  const filteredPosts = useMemo(() => {
    let result = posts;

    // Filter by search
    if (search) {
      result = result.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by date
    const now = new Date();
    result = result.filter((post) => {
      const published = new Date(post.publishedAt);
      switch (filter) {
        case "day":
          return (
            (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24) <= 1
          );
        case "week":
          return (
            (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24) <= 7
          );
        case "month":
          return (
            now.getMonth() === published.getMonth() &&
            now.getFullYear() === published.getFullYear()
          );
        case "year":
          return now.getFullYear() === published.getFullYear();
        default:
          return true;
      }
    });

    return result;
  }, [posts, search, filter]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    return filteredPosts.slice(start, start + PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / PER_PAGE);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <section className="container mx-auto py-10 lg:py-16 px-4 text-center">
        <p className="text-gray-500 text-lg">
          No blog posts available at the moment.
        </p>
      </section>
    );
  }

  return (
    <div className="w-full">
      <div className="container px-2 lg:px-0 mx-auto border-t-4 border-gray-400 space-y-10 py-5">
        {/* Filter & Search Section */}
        <h2>All blogs</h2>
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div className="relative w-full sm:w-1/2">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blog posts..."
              className="flex h-[36px] w-full rounded-full border border-input bg-transparent px-3 py-1  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
                setCurrentPage(1);
              }}
            >
              {sortOrder === "asc" ? (
                <ArrowUpWideNarrow />
              ) : (
                <ArrowDownWideNarrow />
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="sm" className="px-10">
                  Filter: {filter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {["day", "week", "month", "year", "all"].map((f) => (
                  <DropdownMenuCheckboxItem
                    key={f}
                    checked={filter === f}
                    onCheckedChange={() => {
                      setFilter(f as any);
                      setCurrentPage(1);
                    }}
                  >
                    {f}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-3 px-5 md:px-0 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <div
              key={post._id}
              className="rounded-sm overflow-hidden border border-slate-300"
            >
              <Image
                src={urlFor(post.mainImage).width(400).height(200).url()}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h4 className="text-[12px]">{post.title}</h4>
                <div className="flex justify-between items-center">
                  <p className="text-sm">By {post.author}</p>
                  <Button variant="linkDark" asChild>
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
