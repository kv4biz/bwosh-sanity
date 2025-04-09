"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const ecoPaths = [
  { path: "/bwosh-residential", label: "Residential" },
  { path: "/bwosh-offices", label: "Offices" },
  { path: "/bwosh-kitchens", label: "Kitchens" },
  { path: "/bwosh-hospitality", label: "Hospitality" },
];

const bgColorClassMap: { [key: string]: string } = {
  "/bwosh-kitchens": "bg-purpleTaupe",
  "/bwosh-offices": "bg-azure",
  "/bwosh-residential": "bg-policeBlue",
  "/bwosh-hospitality": "bg-brownChocolate",
};

const EcoFooter = () => {
  const pathname = usePathname();
  const [basePath, setBasePath] = useState<string>("");

  useEffect(() => {
    // Determine the base path from the current pathname
    const matchedPath = Object.keys(bgColorClassMap).find((key) =>
      pathname.startsWith(key)
    );
    setBasePath(matchedPath || "");
  }, [pathname]);

  const otherEcoLinks = ecoPaths.filter((eco) => eco.path !== basePath);
  const bgColorClass = bgColorClassMap[basePath] || "bg-default-header";

  return (
    <footer className="flex flex-col">
      {/* First Layer */}
      <div className="bg-black text-white py-10 lg:py-12">
        <div className="container px-2 lg:px-0 mx-auto flex flex-col lg:flex-row justify-center lg:justify-between gap-4 items-center px-4 lg:px-28">
          {/* Logo */}
          <Logo height={80} />
          {/* Ecosystem Links */}
          <div className="flex flex-col text-center lg:text-right gap-4">
            <h3 className="tag">Explore More of Bwosh Ecosystem</h3>
            {otherEcoLinks.map((eco) => (
              <Link
                key={eco.path}
                href={eco.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                <p>{eco.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Second Layer */}
      <p
        className={`${bgColorClass} text-white py-2 text-center text-xs font-light tracking-widest`}
      >
        © 2025 Bwosh. All Rights Reserved.
      </p>
    </footer>
  );
};

export default EcoFooter;
