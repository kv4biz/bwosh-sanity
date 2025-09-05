"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const getActiveLinkStyle = (pathname: string, href: string) => (pathname === href ? "text-white font-bold underline" : "");

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
          <Link href="/" className={getActiveLinkStyle(pathname, "/")} onClick={handleCloseWithDelay}>
            Home
          </Link>
          <Link href="/consultation" className={getActiveLinkStyle(pathname, "/consultation")} onClick={handleCloseWithDelay}>
            Consultation
          </Link>
          <Link href="/project-reel" className={getActiveLinkStyle(pathname, "/project-reel")} onClick={handleCloseWithDelay}>
            Project Reels
          </Link>
          <Link href="/blog" className={getActiveLinkStyle(pathname, "/blog")} onClick={handleCloseWithDelay}>
            Blog
          </Link>
          <Link href="/store" className={getActiveLinkStyle(pathname, "/store")} onClick={handleCloseWithDelay}>
            Store
          </Link>
          <Link href="/about" className={getActiveLinkStyle(pathname, "/about")} onClick={handleCloseWithDelay}>
            About
          </Link>
          <Link href="/contact" className={getActiveLinkStyle(pathname, "/contact")} onClick={handleCloseWithDelay}>
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
