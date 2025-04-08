import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";

const GalleryPage = () => {
  return (
    <main>
      <HeroSection
        title="Project Reels"
        desc="Discover our portfolio of projects, showcasing exceptional design and craftsmanship in both residential and commercial spaces."
        images={[
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968400/Bwosh/about/cat-office_wrisyg.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968393/Bwosh/about/cat-home_eeronk.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968394/Bwosh/about/cat-kitchen_qmecqi.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968392/Bwosh/about/cat-hospitality_f3f5cp.jpg",
        ]}
      />
      <GallerySection />
    </main>
  );
};

export default GalleryPage;
