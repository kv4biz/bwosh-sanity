import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";

const contactInfo = {
  address: "11, Olaide Benson St, Maryland, Lagos.",
  email: "bwoshinteriors@gmail.com",
  phone: ["+234 706 911 4249", "+234 808 910 7641"],
};

const Page = () => {
  return (
    <main>
      <HeroSection
        title="Stay Connected !"
        desc="Reach out to us on social media and stay in the loop!"
        images={[
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968400/Bwosh/about/cat-office_wrisyg.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968393/Bwosh/about/cat-home_eeronk.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968394/Bwosh/about/cat-kitchen_qmecqi.jpg",
          "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735968392/Bwosh/about/cat-hospitality_f3f5cp.jpg",
        ]}
        showSocialLinks={true}
      />
      <ContactSection contactInfo={contactInfo} />
      <MapSection
        mapSrc={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6098732728633!2d3.3624291102112336!3d6.5708224933950925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b927696a1e129%3A0x3ed2ed53048a8e71!2s11%20Olaide%20Benson%20St%2C%20Maryland%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736419391787!5m2!1sen!2sng"
        }
      />
    </main>
  );
};

export default Page;
