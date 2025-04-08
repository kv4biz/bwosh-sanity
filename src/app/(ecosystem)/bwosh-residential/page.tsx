import EcoHeroSection from "@/components/EcoHeroSection";
import AboutProcessSection from "@/components/AboutProcessSection";
import ProjectsViewSection from "@/components/ProjectsViewSection";

const page = () => {
  return (
    <main>
      <EcoHeroSection />
      <AboutProcessSection
        description="Beyond aesthetics, it's about the feeling of belonging and the joy of living in a space that feels like a true extension of oneself.</br>
        At Bwosh Residential, we believe home is more than a place-it's a feeling. It's not just about beautiful designs: it's about creating spaces that resonale with who you are, spaces that feel like a true extension of yourself.</br>
        We design interiors that foster a sense of belonging, where every comer sparks joy and comfort.</br>
        We transform houses into homes-a place that reflects your personality, supports your lifestyle, and brings you the ultimate comfort and happiness."
        poster="https://res.cloudinary.com/dikzx4eyh/image/upload/v1735978389/Bwosh/poster/poster-home_bcr9wj.jpg"
      />
      <ProjectsViewSection
        title="Residential Projects"
        tag="Explore our stunning residential designs"
        category="residential"
      />
    </main>
  );
};

export default page;
