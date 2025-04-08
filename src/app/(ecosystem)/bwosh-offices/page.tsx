import EcoHeroSection from "@/components/EcoHeroSection";
import AboutProcessSection from "@/components/AboutProcessSection";
import ProjectsViewSection from "@/components/ProjectsViewSection";

const page = () => {
  return (
    <main>
      <EcoHeroSection />
      <AboutProcessSection
        description="
        There are common workplace setbacks that are not prominent, but are inherent in our workplace experiences.</br>
        The modern workplace is evolving, but too many offices still struggle with designs that stifles productivity, creativity, and informal social interactions. Corporate spaces setbacks like: lack of privacy and rigid layouts often leave employees overwhelmed and disengaged, impacting comfort and health.</br>
        Your office interior should be more than just a space for your team — it should inspire them. By lackling common challenges such as clutter, diverse work styles, and health concerns, a well-designed workspace can enhance focus, encourage collaboration. and wellbeing.</br>
        It's time to go beyond conventional office setups and create an interior that delivers impactful results.
        "
        poster="https://res.cloudinary.com/dikzx4eyh/image/upload/v1735978388/Bwosh/poster/poster-office_p2z7wk.jpg"
      />
      <ProjectsViewSection
        title="Office Projects"
        tag="Innovative office spaces tailored for productivity"
        category="offices"
      />
    </main>
  );
};

export default page;
