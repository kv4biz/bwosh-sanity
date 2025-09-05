// ReviewSection.tsx
"use client";

import { FC, useState, useEffect } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { fetchAllReviews } from "@/sanity/lib/fetchers/reviewFetchers";
import { Marquee } from "./magicui/marquee";

// Define the Review interface based on Sanity structure
export interface Review {
  _id: string;
  name: string;
  role: string;
  desc: string;
}

const ReviewCard: FC<Review> = ({ name, role, desc }) => {
  return (
    <figure className="relative w-[400px] h-auto cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow-lg">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-xs">{role}</p>
        </div>
        <RiDoubleQuotesR className="text-gray-500 text-4xl" />
      </div>
      <p className="text-sm mb-4">{desc}</p>
    </figure>
  );
};

const ReviewSection: FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const sanityReviews = await fetchAllReviews();
        setReviews(sanityReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  if (loading) {
    return (
      <div className="py-12 lg:py-24 bg-customColors-offWhite">
        <div className="mx-auto container px-2 lg:px-4">
          <h4 className="text-aegean">Customer Reviews</h4>
          <h2 className="text-aegean">What Our Clients Are Saying</h2>
          <p className="desc text-black">Hear from our happy clients about our exceptional interior décor services!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-24 bg-customColors-offWhite">
      <div className="mx-auto container px-2 lg:px-4">
        <h4 className="text-aegean">Customer Reviews</h4>
        <h2 className="text-aegean">What Our Clients Are Saying</h2>
        <p className="desc text-black">Hear from our happy clients about our exceptional interior décor services!</p>
        <div>
          {reviews.length > 0 ? (
            <Marquee pauseOnHover className="[--duration:100s] mt-5">
              {reviews.map((review) => (
                <ReviewCard key={review._id} {...review} />
              ))}
            </Marquee>
          ) : (
            <p className="mt-5">No reviews found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
