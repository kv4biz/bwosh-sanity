"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://bwosh-api.vercel.app/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "Something went wrong!");
      } else {
        toast.success("Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-neatBlack">
      <div className="w-full container px-2 lg:px-0 mx-auto px-4 lg:px-16">
        <div className="lg:grid lg:grid-cols-2 py-12 lg:py-20 gap-10 lg:items-start justify-between">
          {/* Company Section */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 pb-4 lg:items-start text-justify lg:text-left lg:pb-0 text-offWhite">
            <div>
              <h3>Company</h3>
              <div className="flex flex-col txt-nav">
                <Link href="/about" className="py-1 hover:underline">
                  About
                </Link>
                <Link href="/blog" className="py-1 hover:underline">
                  Blog
                </Link>
                <Link href="/store" className="py-1 hover:underline">
                  Store
                </Link>
                <Link href="/project-reel" className="py-1 hover:underline">
                  Project Reel
                </Link>
                <Link href="/contact" className="py-1 hover:underline">
                  Contact
                </Link>
              </div>
            </div>
            {/* Resources Section */}
            <div>
              <h3>Ecosystem</h3>
              <div className="flex flex-col txt-nav">
                <Link
                  href="/bwosh=-residential"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 hover:underline"
                >
                  Residential
                </Link>
                <Link
                  href="/bwosh-offices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 hover:underline"
                >
                  Offices
                </Link>
                <Link
                  href="/bwosh-kitchens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 hover:underline"
                >
                  Kitchens
                </Link>
                <Link
                  href="/bwosh-hospitality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 hover:underline"
                >
                  Hospitality
                </Link>
              </div>
            </div>
          </div>
          {/* Stay Updated Section */}
          <div className=" flex-1 ">
            <h2 className="pb-2 text-offWhite">
              Stay Updated with <span className="text-aegean">Bwosh</span>
            </h2>
            <div className="relative txt-nav lg:max-w-lg pb-4">
              <Input
                type="email"
                id="email"
                placeholder="Email Address"
                className="text-offWhite px-4 lg:px-8"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="absolute top-2 right-2 rounded-full h-10 px-4"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <p className="text-offWhite">
              Get the latest news, updates, and interior design tips directly to
              your inbox.
            </p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="py-4 bg-aegean text-offWhite">
        <div className="container px-2 lg:px-0 text-center">
          <p className="text-xs font-light tracking-widest">
            &copy; 2025 Bwosh. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
