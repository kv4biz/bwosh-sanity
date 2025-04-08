"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

interface AboutProcessSectionProps {
  description: string;
  poster: string;
}

const bgColors: { [key: string]: string } = {
  "/bwosh-kitchens": "bg-purpleTaupe",
  "/bwosh-offices": "bg-azure",
  "/bwosh-residential": "bg-policeBlue",
  "/bwosh-hospitality": "bg-brownChocolate",
};

const AboutProcessSection: React.FC<AboutProcessSectionProps> = ({
  description,
  poster,
}) => {
  const pathname = usePathname(); // Get the current pathname
  const [bgColor, setBgColor] = useState<string>("bg-slate-200");

  useEffect(() => {
    // Dynamically update the background color based on the pathname
    setBgColor(bgColors[pathname] || "bg-slate-200");
  }, [pathname]);

  return (
    <section
      className={`flex flex-col md:flex-row items-center lg:items-start my-10 ${bgColor}`}
    >
      {/* Text Content */}
      <div className="lg:w-1/2 space-y-4 text-white p-5 lg:pt-10">
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <div className="relative bottom-0">
          <Button
            size="lg"
            onClick={() =>
              window.open(
                `https://wa.me/+2347069114249?text=Hello! I am interested in starting a ${pathname.replace(
                  "/bwosh-",
                  ""
                )} project with you.`,
                "_blank"
              )
            }
            variant="outline"
            className="flex items-center text-customColors-offWhite hover:text-customColors-greenishBlue space-x-4"
          >
            <span>Get in Touch</span>
            <FaWhatsapp />
          </Button>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex w-full lg:w-1/2  min-h-full overflow-hidden">
        <Image
          src={poster}
          height={2000}
          width={2000}
          alt="bwosh"
          className="object-cover h-full"
        />
      </div>
    </section>
  );
};

export default AboutProcessSection;
