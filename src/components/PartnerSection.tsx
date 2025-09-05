"use client";
import { useState, useEffect } from "react";
import { fetchAllPartners } from "@/sanity/lib/fetchers/partnerFetchers";

// Define the Partner interface based on Sanity structure
export interface Partner {
  _id: string;
  logo: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  name: string;
  slug: string;
}

const PartnerSection = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPartners = async () => {
      try {
        const sanityPartners = await fetchAllPartners();
        setPartners(sanityPartners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setLoading(false);
      }
    };

    getPartners();
  }, []);

  if (loading) {
    return (
      <div className="bg-neatBlack/10 mt-10 lg:mt-16 py-12 px-4 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center container mx-auto">
          <h2 className="text-center font-bold mb-2">Companies That Trust Us</h2>
          <p className="text-justify mb-4">
            Leading businesses rely on our expertise to transform their spaces with innovative and exceptional interior design solutions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neatBlack/10 mt-10 lg:mt-16 py-12 px-2 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center container mx-auto">
        <h2 className="text-center font-bold mb-2">Companies That Trust Us</h2>
        <p className="text-justify mb-4">
          Leading businesses rely on our expertise to transform their spaces with innovative and exceptional interior design solutions.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-10">
          {partners.length > 0 ? (
            partners.map((partner) => (
              <div key={partner._id} className="flex justify-center items-center h-[90px] lg:h-[120px]">
                <img src={partner.logo.asset.url} alt={partner.logo.alt || partner.name} className="w-auto h-full object-contain" />
              </div>
            ))
          ) : (
            <p>No partners found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
