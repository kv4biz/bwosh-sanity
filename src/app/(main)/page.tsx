import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import PartnerSection from "@/components/PartnerSection";
import ProjectCategorySection from "@/components/ProjectCategorySection";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Transform your space into a Masterpiece"
        desc="Discover expert interior design that blends elegance and comfort, crafting timeless spaces that reflect your style"
        buttonLink="/about"
        buttonText="Learn More"
        images={[
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899323/Bwosh/hero/hero1_ovzfek.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899324/Bwosh/hero/hero2_wozelf.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899330/Bwosh/hero/hero3_hkpse5.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899331/Bwosh/hero/hero4_xbuzbe.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899323/Bwosh/hero/hero5_zlue0n.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899320/Bwosh/hero/hero6_vetwrg.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899328/Bwosh/hero/hero7_ql3lsd.jpg",
        ]}
      />
      <IntroSection
        image="https://res.cloudinary.com/dikzx4eyh/image/upload/v1735982768/Bwosh/home/039_e25kia.jpg"
        imagePosition="left"
        imagecontainer
        px-2
        lg:px-0ClassName="lg:hex-img-container2"
        tag="Your Trusted Partner"
        title="Why Choose Us"
        description1="At our core, we embody values that elevate every design project. Innovation drives our creativity, ensuring groundbreaking solutions. With a commitment to excellent service delivery, we craft seamless experiences. We foster collaboration and encourage work-life balance, making client and team synergy a priority."
        description2="Our design philosophy emphasizes that spaces should seamlessly unite functionality and beauty. By integrating innovation, sustainability, and timeless elegance, we create environments that enrich lifestyles and reflect individuality, ensuring every detail enhances both purpose and aesthetic appeal."
        description3="Guided by our mission to deliver personalized designs that inspire and comfort, we strive to transform spaces into timeless reflections of style. Our vision is to be a globally recognized leader, shaping lives through impactful design."
      />
      <ProjectCategorySection
        container
        px-2
        lg:px-0ClassName="bg-aegean text-offWhite"
        btnVariant="outline"
        title="Luxury Décor for Ultimate Comfort and Style"
        tag="Bwosh Residential"
        category="residential"
        btnLink="/bwosh-residential"
      />
      <ProjectCategorySection
        swapTextAndCarousel
        container
        px-2
        lg:px-0ClassName="bg-offWhite text-aegean"
        btnVariant="default"
        title="Empowering Productivity in Style"
        tag="Bwosh Offices"
        category="offices"
        btnLink="/bwosh-offices"
      />
      <ProjectCategorySection
        container
        px-2
        lg:px-0ClassName="bg-aegean text-offWhite"
        btnVariant="outline"
        title="Transforming Kitchens into Masterpieces"
        tag="Bwosh Kitchens"
        category="kitchens"
        btnLink="/bwosh-kitchens"
      />
      <ProjectCategorySection
        swapTextAndCarousel
        container
        px-2
        lg:px-0ClassName="bg-offWhite text-aegean"
        btnVariant="default"
        title="Designing Spaces That Welcome and Inspire"
        tag="Bwosh Hospitality"
        category="hospitality"
        btnLink="/bwosh-hospitality"
      />

      <PartnerSection />
      <ReviewSection />
    </main>
  );
}
