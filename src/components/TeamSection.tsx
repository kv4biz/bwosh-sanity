"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/utils/mockData";

const TeamSection = () => {
  return (
    <section className="py-5 lg:py-12 px-5 lg:px-16 bg-offWhite">
      <div className="container mx-auto">
        <div className="pt-4 lg:pt-0">
          <h2 className="text-center">Our Team</h2>
        </div>
        <div className=" flex flex-col lg:grid py-8 items-center gap-16 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="border-2 border-arctic max-w-[400px]">
              <div className="p-4 text-center bg-aegean aspect-square -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h3 className="text-offWhite py-2">{member.name}</h3>
                <h4 className="text-sm text-offWhite py-2">{member.role}</h4>
                <p className="text-sm text-offWhite">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
