"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";

const logos: { [key: string]: string } = {
  "/bwosh-kitchens": "/kitchens-logo.svg",
  "/bwosh-offices": "/offices-logo.svg",
  "/bwosh-residential": "/residential-logo.svg",
  "/bwosh-hospitality": "/hospitality-logo.svg",
};

const headerColors: { [key: string]: string } = {
  "/bwosh-kitchens": "bg-purpleTaupe",
  "/bwosh-offices": "bg-azure",
  "/bwosh-residential": "bg-policeBlue",
  "/bwosh-hospitality": "bg-brownChocolate",
};

const ecoPaths = [
  { path: "/bwosh-residential", label: "Bwosh Residential" },
  { path: "/bwosh-offices", label: "Bwosh Offices" },
  { path: "/bwosh-kitchens", label: "Bwosh Kitchens" },
  { path: "/bwosh-hospitality", label: "Bwosh Hospitality" },
];

const EcoHeader = () => {
  const pathname = usePathname();
  const [basePath, setBasePath] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const matchedPath = Object.keys(headerColors).find((key) =>
      pathname.startsWith(key)
    );
    setBasePath(matchedPath || null);
  }, [pathname]);

  if (basePath === null) {
    return null;
  }

  const logoSrc = logos[basePath] || "/default-logo.svg";
  const headerColor = headerColors[basePath] || "bg-aegean";

  const handleCloseWithDelay = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-30 py-4 ${headerColor} opacity-90 text-offWhite txt-nav`}
    >
      <div className="container px-2 lg:px-0 w-full mx-auto flex items-center justify-between px-4 md:px-20">
        {/* Logo */}
        <Image
          src={logoSrc}
          alt="Page Logo"
          width={150}
          height={40}
          className="h-12 w-auto"
        />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex ml-auto">
          <NavigationMenuList className="flex space-x-4">
            {/* Link to Bwosh Website */}
            <NavigationMenuItem>
              <Link href="/" className="txt-nav text-white hover:underline">
                Bwosh
              </Link>
            </NavigationMenuItem>

            {/* Ecosystem Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="txt-nav text-white">
                Our Ecosystem
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="grid w-[250px] p-4 gap-3 bg-white shadow-md rounded-md">
                  {ecoPaths
                    .filter((item) => item.path !== pathname)
                    .map((item) => (
                      <li
                        key={item.path}
                        className="rounded-md group hover:bg-gray-200"
                      >
                        <Link
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-black hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu className="h-8 w-8 text-white lg:hidden" />
          </SheetTrigger>
          <SheetContent
            className={`flex flex-col txt-nav ${headerColor} text-customColors-offWhite`}
          >
            <SheetTitle className="text-white">
              {" "}
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </SheetTitle>
            <nav className="flex flex-col space-y-8 mt-4">
              <Link
                href="/"
                className={`block px-4 py-2 ${
                  pathname === "/" ? "font-semibold underline" : ""
                }`}
                onClick={handleCloseWithDelay}
              >
                Bwosh Website
              </Link>
              <Accordion type="single" collapsible>
                <AccordionItem value="projects">
                  <AccordionTrigger className="px-4 py-2 text-white">
                    Our Ecosystem
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 px-4 py-2">
                      {ecoPaths
                        .filter((item) => item.path !== pathname)
                        .map((item) => (
                          <li key={item.path}>
                            <Link
                              href={item.path}
                              className={`block px-4 py-2 ${
                                pathname === item.path
                                  ? "font-semibold underline"
                                  : ""
                              }`}
                              onClick={handleCloseWithDelay}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default EcoHeader;
