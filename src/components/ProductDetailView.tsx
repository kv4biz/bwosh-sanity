// 📦 components/ProductDetailView.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

type Product = {
  _id: string;
  title: string;
  slug: string;
  productId: string;
  size: string;
  description: any;
  tags: string[];
  otherImages: {
    _id: string;
    url: string;
    alt: string;
  }[];
  availableColors: {
    colorName: string;
    colorCode: string;
    colorImage: {
      asset: {
        _id: string;
        url: string;
      };
      alt: string;
    };
  }[];
};

export default function ProductDetailView({ product }: { product: Product }) {
  // Set the default selected color image to the first available one if it exists.
  const [selectedColorImage, setSelectedColorImage] = useState<string | null>(
    product.availableColors?.[0]?.colorImage?.asset?.url || null
  );

  return (
    <div className="w-full">
      <div className="container px-2 lg:px-0 mx-auto space-y-5">
        {/* Tags */}
        {product.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 rounded-full border"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Main Section */}
        <section className="flex flex-col lg:flex-row gap-5">
          {/* Product Info */}
          <div className="flex-1 space-y-4 bg-white rounded-sm shadow-sm p-4">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p>
              <strong>Size:</strong> {product.size}
            </p>
            <p>
              <strong>Product ID:</strong> {product.productId}
            </p>

            {/* Available Colors */}
            <div className="space-y-1">
              <p>
                <strong>Available Colors:</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                {product.availableColors.map((color) => (
                  <button
                    key={color.colorCode}
                    className="flex flex-col items-center gap-1 p-2"
                    onClick={() =>
                      setSelectedColorImage(
                        color.colorImage?.asset?.url || null
                      )
                    }
                  >
                    <div
                      className="w-10 h-10 rounded-md"
                      style={{ backgroundColor: color.colorCode }}
                    />
                    <span className="text-sm">{color.colorName}</span>
                  </button>
                ))}
              </div>
              <p>(select the color)</p>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/+2347069114249?text=Hi, I'm interested in this product: ${product.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-4">Ask on WhatsApp</Button>
            </a>
          </div>

          {/* Display Selected Available Color Image */}
          <div className="flex-1 max-h-[460px] rounded-sm shadow-sm overflow-hidden">
            {selectedColorImage && (
              <Image
                src={selectedColorImage}
                alt={product.title}
                width={800}
                height={600}
                className="w-full object-scale-down"
              />
            )}
          </div>
        </section>

        {/* Product Description */}
        <section>
          <h2 className="mb-2">Description</h2>
          <div className="p-4 rounded-sm shadow-sm bg-white">
            <PortableText value={product.description} />
          </div>
        </section>

        {/* Gallery Section */}
        {/* Gallery Section */}
        <section>
          <h2 className="mb-2">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.otherImages?.map((img) => {
              // Build the URL using the image helper if needed.
              const imageUrl = urlFor(img).width(800).height(600).url();

              return (
                <div
                  key={img.alt}
                  className="w-full overflow-hidden rounded-sm"
                >
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={img.alt || product.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-scale-down"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
