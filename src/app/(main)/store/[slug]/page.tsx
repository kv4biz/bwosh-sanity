import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import ProductDetailView from "@/components/ProductDetailView";

export const revalidate = 60;

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    productId,
    size,
    price,
    availableColors[] {
      colorName,
      colorCode,
      colorImage {
        asset->{ _id, url },
        alt
      }
    },
    otherImages[] {
      asset->{ _id, url },
      alt
    },
    description,
    tags
  }`;

  const product = await client.fetch(query, { slug });

  if (!product) notFound();

  return (
    <main className="container mx-auto px-5 py-10">
      <ProductDetailView product={product} />
    </main>
  );
}
