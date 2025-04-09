"use client";

import { FC } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { posts, Post } from "@/utils/mockData";
import { Marquee } from "./magicui/marquee";

const ReviewCard: FC<Post> = ({ name, role, desc }) => {
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
  return (
    <div className="py-12 lg:py-24 bg-customColors-offWhite">
      <div className="mx-auto container px-2 lg:px-4">
        <h4 className="text-aegean">Customer Reviews</h4>
        <h2 className="text-aegean">What Our Clients Are Saying</h2>
        <p className="desc text-black">
          Hear from our happy clients about our exceptional interior décor
          services!
        </p>
        <div>
          <Marquee pauseOnHover className="[--duration:60s] mt-5">
            {posts.map((post) => (
              <ReviewCard key={post.id} {...post} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
