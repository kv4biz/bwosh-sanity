import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TeamSection from "@/components/TeamSection";

const Page: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Who are we?"
        images={[
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968400/Bwosh/about/cat-office_wrisyg.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968393/Bwosh/about/cat-home_eeronk.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968394/Bwosh/about/cat-kitchen_qmecqi.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968392/Bwosh/about/cat-hospitality_f3f5cp.jpg",
        ]}
      />
      <IntroSection
        image="https://res.cloudinary.com/dikzx4eyh/image/upload/v1735967643/Bwosh/about/aboutimg_fuarzp.jpg"
        imagePosition="left"
        imagecontainer
        px-2
        lg:px-0ClassName="lg:hex-img-container3"
        title="Your Vision, Our Craftsmanship"
        description1="We are an interior design company, that was established in response to demands for creative, sustainable, functional and captivating spaces."
        description2="Our skilled, well-experienced and equipped team is bent on providing exceptional designs and excellent execution process through the lens of our clients' needs and wants with the drive to deliver exquisite products and services."
        list={{
          listTitle: "Our Sevices",
          listItems: [
            "Home and Office Interior design",
            "Project Management",
            "Renovation and revamp works",
            "3D Visualisation",
            "Furniture and decor sales",
          ],
        }}
        description4="We offer FREE consultation to bring your ideas to life!"
      />
      <TeamSection />
    </main>
  );
};

export default Page;
