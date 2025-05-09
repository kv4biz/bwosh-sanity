"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

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

// ListItem Component
const ListItem: React.FC<{
  title: string;
  href: string;
}> = ({ title, href }) => {
  const pathname = usePathname();

  return (
    <li className="rounded-md group hover:bg-aegean">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div
          className={`block p-2 rounded-md ${
            pathname === href ? "bg-aegean" : ""
          }`}
        >
          {/* Title */}
          <div
            className={`tracking-wide text-neatBlack ${
              pathname === href ? "" : "group-hover:text-offWhite"
            }`}
          >
            {title}
          </div>
        </div>
      </Link>
    </li>
  );
};

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    `relative p-2 ${
      pathname === href
        ? "decoration-offWhite underline underline-offset-8"
        : ""
    }`;

  return (
    <NavigationMenu className="flex items-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger className="text-[16px]">
            Ecosystem
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[215px] p-2 gap-3">
              {ecosystems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" className={getLinkClass("/blog")}>
            Blog
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/store" className={getLinkClass("/store")}>
            Store
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/project-reel" className={getLinkClass("/project-reel")}>
            Project Reel
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
