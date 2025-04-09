"use client";

import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import { SearchIcon } from "lucide-react";

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

import { fetchAllProducts } from "@/sanity/lib/fetchers/productFetchers";
import Link from "next/link";

const PER_PAGE = 15;

interface Product {
  _id: string;
  title: string;
  slug: string;
  productId: string;
  size: string;
  availableColors: {
    colorName: string;
    colorCode: string;
    colorImage: {
      asset: { _id: string; url: string };
      alt: string;
    };
  }[];
  otherImages: {
    asset: { _id: string; url: string };
    alt: string;
  }[];
  description: any; // block content description
  tags: string[];
}

export default function ProductsStorePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await fetchAllProducts();
        setProducts(productsData);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term for name, color, and tags
  const filteredProducts = useMemo(() => {
    if (!search) return products;
    const searchTerm = search.toLowerCase();
    return products.filter((product) => {
      const matchTitle = product.title.toLowerCase().includes(searchTerm);
      const matchColor = product.availableColors.some((color) =>
        color.colorName.toLowerCase().includes(searchTerm)
      );
      const matchTag = product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm)
      );
      return matchTitle || matchColor || matchTag;
    });
  }, [products, search]);

  // Calculate total pages and slice the products for current page
  const totalPages = Math.ceil(filteredProducts.length / PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    return filteredProducts.slice(start, start + PER_PAGE);
  }, [filteredProducts, currentPage]);

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return (
      <section className="container px-2 lg:px-0 mx-auto py-10 lg:py-16 px-4 text-center">
        <p className="text-gray-500 text-lg">
          No products available at the moment.
        </p>
      </section>
    );
  }

  return (
    <div className="w-full">
      <div className="container px-2 lg:px-0 mx-auto space-y-5 py-5">
        <div>
          <h2>Explore Our Exclusive Collection</h2>
          <h4>
            Find unique products in various sizes and colors to complement your
            style.
          </h4>
        </div>
        {/* Search Component */}
        <div className="relative w-full max-w-[350px]">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by name, color, or tags..."
            className="flex h-[36px] w-full rounded-full border border-input bg-transparent px-3 py-1  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
          />
        </div>

        {/* Products Grid - responsive columns: 2 (sm), 3 (md), 5 (lg) */}
        <div className="grid gap-2 px-5 md:px-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {paginatedProducts.map((product) => (
            <Link href={`/store/${product.slug}`} key={product._id}>
              <div className="border border-slate-300 rounded-sm flex flex-col items-center cursor-pointer">
                {product.otherImages && product.otherImages.length > 0 ? (
                  <Image
                    src={product.otherImages[0].asset.url}
                    alt={product.otherImages[0].alt || product.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    No Image
                  </div>
                )}
                <p className="p-2 text-sm">{product.title}</p>
              </div>
            </Link>
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
