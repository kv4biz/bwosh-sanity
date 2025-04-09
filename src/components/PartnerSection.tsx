"use client";
import { Partner } from "@/utils/mockData";
import { useState, useEffect } from "react";
const PartnerSection = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    import("@/utils/mockData").then((data) => setPartners(data.partners));
  }, []);

  return (
    <div className="bg-neatBlack/30 mt-10 lg:mt-16 py-12 px-4 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center container mx-auto">
        <h2 className="text-center font-bold mb-2">Companies That Trust Us</h2>
        <p className="text-justify mb-4">
          Leading businesses rely on our expertise to transform their spaces
          with innovative and exceptional interior design solutions.
        </p>
        <div className="flex justify-center items-center gap-2 lg:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center items-center h-[100px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
