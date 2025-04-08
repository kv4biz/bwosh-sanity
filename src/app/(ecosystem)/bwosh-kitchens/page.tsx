import EcoHeroSection from "@/components/EcoHeroSection";
import AboutProcessSection from "@/components/AboutProcessSection";
import ProjectsViewSection from "@/components/ProjectsViewSection";
const page = () => {
  return (
    <main>
      <EcoHeroSection />
      <AboutProcessSection
        description="The kitchen is a person's signature - a reflection of their taste, standard, and way of living.</br>
        Whether its a cozy family hub or a sleek culinary masterpiece, or a sleek modern layouts, lo timeless classic designs, we craft spaces that inspire creativity, foster connection, and elevate your cooking/kitchen experience, we design kitchens that make a statement and transform the heart of your home.
        "
        poster="https://res.cloudinary.com/dikzx4eyh/image/upload/v1735978388/Bwosh/poster/poster-kitchen_nfjkqp.jpg"
      />
      <ProjectsViewSection
        title="Kitchen Projects"
        tag="Functional and stylish kitchen designs for every home"
        category="kitchens"
      />
    </main>
  );
};

export default page;
