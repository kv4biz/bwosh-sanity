"use client";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 py-2.5 lg:py-4 bg-aegean/90 text-offWhite txt-nav">
      <div className="container px-2 lg:px-0 mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <Navigation />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
