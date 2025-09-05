// TeamSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchAllTeamMembers } from "@/sanity/lib/fetchers/teamFetchers";

// Define the TeamMember interface based on Sanity structure
export interface TeamMember {
  _id: string;
  name: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  role: string;
}

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTeamMembers = async () => {
      try {
        const sanityTeamMembers = await fetchAllTeamMembers();
        setTeamMembers(sanityTeamMembers);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };

    getTeamMembers();
  }, []);

  if (loading) {
    return (
      <section className="py-5 lg:py-12 px-5 lg:px-16 bg-offWhite">
        <div className="container mx-auto">
          <div className="pt-4 lg:pt-0">
            <h2 className="text-center">Our Team</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 lg:py-12 px-5 lg:px-16 bg-offWhite">
      <div className="container mx-auto">
        <div className="pt-4 lg:pt-0">
          <h2 className="text-center">Our Team</h2>
        </div>
        <div className="flex flex-wrap py-8 items-center justify-center gap-6 lg:gap-16">
          {teamMembers.length > 0 ? (
            teamMembers.map((member) => (
              <div key={member._id} className="border-2 border-arctic max-w-[350px]">
                <div className="p-4 text-center bg-aegean aspect-square -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                  <Image
                    src={member.image.asset.url}
                    alt={member.image.alt || member.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-full"
                  />
                  <h3 className="text-offWhite py-2">{member.name}</h3>
                  <h4 className="text-sm text-offWhite py-2">{member.role}</h4>
                </div>
              </div>
            ))
          ) : (
            <p>No team members found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
