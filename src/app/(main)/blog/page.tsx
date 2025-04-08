import AllBlogsSection from "@/components/AllBlogsSection";
import HeroSection from "@/components/HeroSection";
import MainBlogPostSection from "@/components/MainBlogPostSection";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroSection
        title="Bwosh Blog"
        desc="Your Complete Archive of Decor Inspiration and Expert Design Tips."
        images={[
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899323/Bwosh/hero/hero1_ovzfek.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899324/Bwosh/hero/hero2_wozelf.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899330/Bwosh/hero/hero3_hkpse5.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899331/Bwosh/hero/hero4_xbuzbe.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899323/Bwosh/hero/hero5_zlue0n.jpg",
        ]}
      />
      <MainBlogPostSection
        title="Feature Blogs"
        tag="Explore Our Featured Blogs on Interior Style, Design Tips, and Creative Living"
      />
      <AllBlogsSection />
    </main>
  );
};

export default page;
