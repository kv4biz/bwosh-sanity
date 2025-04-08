"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface IntroSectionProps {
  image: string;
  imagePosition: "left" | "right";
  imageContainerClassName?: string;
  tag?: string;
  title?: string;
  description1: string;
  description2?: string;
  description3?: string;
  description4?: string;
  list?: {
    listTitle: string;
    listItems: string[];
  };
}

const IntroSection: React.FC<IntroSectionProps> = ({
  image,
  imagePosition,
  imageContainerClassName,
  tag,
  title,
  description1,
  description2,
  description3,
  description4,
  list,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="py-10 lg:py-16 w-full px-2 lg:px-10 bg-offWhite">
      <div
        className={`flex flex-col lg:flex-row gap-5 lg:gap-x-4 items-start justify-between ${
          imagePosition === "left" ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div
          className={`flex flex-col items-center gap-y-2 mt-5 lg:mt-0 ${
            imagePosition === "left" ? "lg:items-start" : "lg:items-end"
          }`}
        >
          {/* Tag */}
          {tag && <h4 className=" text-aegean">{tag}</h4>}
          {/* Title */}
          {title && <h2 className=" text-aegean">{title}</h2>}
          {/* Descriptions */}
          <p className=" text-neatBlack">{description1}</p>
          {description2 && <p className=" text-neatBlack">{description2}</p>}
          {description3 && <p className=" text-neatBlack">{description3}</p>}

          {/* Optional List */}
          {list && (
            <div className="text-customColors-black">
              <p className="font-bold text-lg mb-2">{list.listTitle}</p>
              <ul className="list-disc pl-5 space-y-1">
                {list.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {description4 && (
            <p className="font-semibold text-neatBlack">{description4}</p>
          )}
        </div>
        {/* Image Section */}
        <div className="w-full">
          <div
            className={`h-[400px] lg:h-[450px] w-full lg:w-[540px] overflow-hidden ${
              imageContainerClassName || ""
            }`}
          >
            <Image
              src={image}
              width={1000}
              height={1000}
              alt={`bwosh-${image}`}
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
