import EcoHeroSection from "@/components/EcoHeroSection";
import AboutProcessSection from "@/components/AboutProcessSection";
import ProjectsViewSection from "@/components/ProjectsViewSection";
const page = () => {
  return (
    <main>
      <EcoHeroSection />
      <AboutProcessSection
        description="First impression matters in the business of hospitality, it sets the tone for everything that follows. It ignites the eagerness to experience the facility.</br>
        Bwosh Hospitality is a hospitality interior design firm driven by the belief that the look and feel of a hospitality space is the first thing guests notice, and its a vital determining factor of the success of any outlet.</br>
        This initial impression sparks a feeling-a sense of what to expect-which compels them to experience the space.</br>
        A thoughtfully designed environment creates memorable experiences, and a positive experience fosters repeat visits. turning guests into loyal advocates for your brand.</br>
        At Bwosh Hospitality, we specialize in crafting interiors that leave lasting impressions. ensuring guests feel welcomed, thrilled, and eager to return. Positioning B. H. as the sage of hospitality business.</br>
        "
        poster="https://res.cloudinary.com/dikzx4eyh/image/upload/v1735978388/Bwosh/poster/poster-hospitality_voil4s.jpg"
      />
      <ProjectsViewSection
        title="Hospitality Projects"
        tag="Elegant and inviting spaces for the hospitality industry"
        category="hospitality"
      />
    </main>
  );
};

export default page;
