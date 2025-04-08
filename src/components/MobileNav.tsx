"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const ecosystems = [
  {
    title: "Bwosh Residential",
    href: "/bwosh-residential",
  },
  {
    title: "Bwosh Offices",
    href: "/bwosh-offices",
  },
  {
    title: "Bwosh Kitchens",
    href: "/bwosh-kitchens",
  },
  {
    title: "Bwosh Hospitality",
    href: "/bwosh-hospitality",
  },
];

const getActiveLinkStyle = (pathname: string, href: string) =>
  pathname === href ? "text-white font-bold underline" : "";

const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseWithDelay = () => {
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-aegean/90 text-white p-5 txt=nav">
        <SheetTitle>
          <VisuallyHidden>Navigation Menu</VisuallyHidden>
        </SheetTitle>
        <nav className="flex flex-col space-y-8">
          <Link
            href="/"
            className={getActiveLinkStyle(pathname, "/")}
            onClick={handleCloseWithDelay}
          >
            Home
          </Link>
          <Accordion type="single" collapsible>
            <AccordionItem value="projects">
              <AccordionTrigger className="txt-nav">ecosystem</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-8 px-4 py-2">
                  {ecosystems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className={getActiveLinkStyle(pathname, item.href)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleCloseWithDelay}
                      >
                        <p>{item.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="/project-reel"
            className={getActiveLinkStyle(pathname, "/project-reel")}
            onClick={handleCloseWithDelay}
          >
            Project Reel
          </Link>
          <Link
            href="/blog"
            className={getActiveLinkStyle(pathname, "/blog")}
            onClick={handleCloseWithDelay}
          >
            Blog
          </Link>
          <Link
            href="/store"
            className={getActiveLinkStyle(pathname, "/store")}
            onClick={handleCloseWithDelay}
          >
            Store
          </Link>
          <Link
            href="/about"
            className={getActiveLinkStyle(pathname, "/about")}
            onClick={handleCloseWithDelay}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={getActiveLinkStyle(pathname, "/contact")}
            onClick={handleCloseWithDelay}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
