"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface ContactInfo {
  address: string;
  email: string;
  phone: string[];
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://bwosh-api.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 py-8 px-8 lg:py-12 lg:px-20 items-start">
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="mb-4">We're Ready, Let's Talk.</h2>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full rounded-md" />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full rounded-md" />
        <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full" rows={6} />
        <Button type="submit" className="w-full">
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
      {/* Contact Info */}
      <div className="space-y-6">
        <h2>Contact Info</h2>
        <div>
          <h4>Address</h4>
          <p>{contactInfo.address}</p>
        </div>
        <div>
          <h4>Email Us</h4>
          <p>{contactInfo.email}</p>
        </div>
        <div>
          <h4>Call Us</h4>
          <p>{contactInfo.phone.join(" ,  ")}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
