"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "@/utils/animation";

const ecoContent: {
  [key: string]: { title: string; desc: string; images: string[] };
} = {
  "/bwosh-kitchens": {
    title: "Bwosh Kitchens",
    desc: "Creating kitchens that are as functional as they are beautiful.",
    images: [
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899320/Bwosh/hero/hero6_vetwrg.jpg",
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899328/Bwosh/hero/hero7_ql3lsd.jpg",
    ],
  },
  "/bwosh-offices": {
    title: "Bwosh Offices",
    desc: "Crafting workspaces that inspire productivity and creativity.",
    images: [
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899331/Bwosh/hero/hero4_xbuzbe.jpg",
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899323/Bwosh/hero/hero5_zlue0n.jpg",
    ],
  },
  "/bwosh-residential": {
    title: "Bwosh Residential",
    desc: "Creating personalized interiors that redefine comfort and beauty.",
    images: [
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899323/Bwosh/hero/hero1_ovzfek.jpg",
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899330/Bwosh/hero/hero3_hkpse5.jpg",
    ],
  },
  "/bwosh-hospitality": {
    title: "Bwosh Hospitality",
    desc: "Creating unforgettable experiences through thoughtful design.",
    images: [
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735978186/Bwosh/hero/hero9_y1dazm.jpg",
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735978186/Bwosh/hero/hero10_j4jklv.jpg",
    ],
  },
};

const bgClassMap: { [key: string]: string } = {
  "/bwosh-kitchens": "bg-purpleTaupe",
  "/bwosh-offices": "bg-azure",
  "/bwosh-residential": "bg-policeBlue",
  "/bwosh-hospitality": "bg-brownChocolate",
};

const EcoHeroSection = () => {
  const pathname = usePathname();

  const content = ecoContent[pathname] || {
    title: "Welcome to Bwosh",
    desc: "Discover designs that inspire and transform spaces.",
    images: ["/images/default.jpg"],
  };

  const bgClass = bgClassMap[pathname] || "bg-default-header";
  const { title, desc, images } = content;
  const isSingleImage = images.length === 1;

  return (
    <section
      className={cn(
        "relative h-[90vh] lg:h-[85vh] xl:h-[80vh] w-full",
        bgClass
      )}
    >
      {isSingleImage ? (
        <img
          src={images[0]}
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      ) : (
        <ImagesSlider images={images} direction="up" autoplay={true} />
      )}

      {/* Hero Content */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col items-center justify-center text-center mx-auto text-offWhite px-4"
        )}
      >
        {/* Hero Text */}
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          viewport={{ once: true }}
          className="big-title font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          viewport={{ once: true }}
          className="desc max-w-full lg:max-w-3xl mb-8"
        >
          {desc}
        </motion.p>
      </div>
    </section>
  );
};

export default EcoHeroSection;
