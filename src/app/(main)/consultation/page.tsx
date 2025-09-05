import ConsultationSection from "@/components/ConsultationSection";
import ProjectTypeSection from "@/components/ProjectTypeSection";
import TitleHeader from "@/components/TitleHeader";
const Page: React.FC = () => {
  return (
    <main>
      <TitleHeader
        title={"Book a consultation"}
        description={`Your journey into sound starts here. At Bwosh, we craft experiences that merge rhythm, creativity, and energy.\n\n
Explore the styles below and choose the one that resonates most with your vibe. This way, we can shape the perfect session that matches your unique taste.`}
        className="space-y-4 "
        titleClassName="tracking-wide leading-[75px] max-w-lg "
        descriptionClassName="lg:max-w-xl"
      />
      <ProjectTypeSection />
      <ConsultationSection />
    </main>
  );
};

export default Page;
