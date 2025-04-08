"use client";

import { cn } from "@/lib/utils";
import { ImagesSlider } from "./ui/images-slider";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface HeroSectionProps {
  title?: string;
  tag?: string;
  desc?: string;
  buttonLink?: string;
  buttonText?: string;
  images: string[];
  showSocialLinks?: boolean;
}
const socialMediaLinks = [
  {
    title: "Facebook: Bwosh Interiors",
    icon: <FaFacebook size={30} />,
    href: "https://www.facebook.com/bwoshinteriors/",
    iconClassName: "text-blue-600",
    hoverTitleClassName: "bg-blue-100 border-blue-300 text-blue-600",
  },
  {
    title: "tiktok: @bwoshinteriors",
    icon: <FaTiktok size={30} />,
    href: "https://www.tiktok.com/@bwoshinteriors?is_from_webapp=1&sender_device=pc",
    iconClassName: "text-gray-800",
    hoverTitleClassName: "bg-gray-200 border-gray-400 text-gray-800",
  },
  {
    title: "Ig: @bwoshinteriors",
    icon: <FaInstagram size={30} />,
    href: "https://www.instagram.com/bwoshinteriors/",
    iconClassName: "text-pink-500",
    hoverTitleClassName: "bg-pink-100 border-pink-300 text-pink-500",
  },
  {
    title: "+234 706-911-4249",
    icon: <FaWhatsapp size={30} />,
    href: "https://api.whatsapp.com/send/?phone=+2347069114249&text=Hello%21+I+am+interested+in+starting+a+home+project+with+you.&type=phone_number&app_absent=0",
    iconClassName: "text-green-500",
    hoverTitleClassName: "bg-green-100 border-green-300 text-green-500",
  },
];
const HeroSection = ({
  title,
  tag,
  desc,
  buttonLink,
  buttonText,
  images,
  showSocialLinks = false,
}: HeroSectionProps) => {
  const isSingleImage = images.length === 1;

  return (
    <section className="relative h-[90vh] lg:h-[85vh] xl:h-[80vh] w-full bg-aegean">
      {isSingleImage ? (
        <img
          src={images[0]}
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      ) : (
        <ImagesSlider images={images} direction="down" autoplay={true} />
      )}

      {/* Hero Content */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col items-center justify-center text-center mx-auto text-offWhite px-4"
        )}
      >
        {/* Hero Text */}
        {tag && (
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            viewport={{ once: true }}
            className=" mb-2"
          >
            {tag}
          </motion.h1>
        )}
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          viewport={{ once: true }}
          className="mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          viewport={{ once: true }}
          className="max-w-full lg:max-w-3xl mb-8"
        >
          {desc}
        </motion.p>
        {/* Hero Buttons */}
        <div className="flex gap-4 md:gap-8 lg:gap-20">
          {buttonLink && (
            <a href={buttonLink}>
              <Button size={"lg"} variant={"outline"}>
                {buttonText}
                <ArrowUpRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          )}
        </div>
        {/* Social Media Links */}
        {showSocialLinks && (
          <FloatingDock
            items={socialMediaLinks}
            desktopClassName="mt-10 lg:mt-16 mx-auto"
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
