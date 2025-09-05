"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { ChevronDownIcon } from "lucide-react";
import { type DateRange } from "react-day-picker";
import { format, addYears } from "date-fns";

interface ConsultationForm {
  name: string;
  email: string;
  location: string;
  budget: string;
  timeframe: DateRange | undefined;
  projectType: string;
}

interface ConsultationSectionProps {
  title?: string;
  description?: string;
}

// Calendar23 component with updated date range restriction
function Calendar23({ value, onValueChange }: { value: DateRange | undefined; onValueChange: (range: DateRange | undefined) => void }) {
  const today = new Date();
  const threeYearsFromNow = addYears(today, 3);

  // Set default month to the start of the selected range or today
  const defaultMonth = value?.from || today;

  return (
    <div className="flex flex-col gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"normal"} id="dates" className="w-full justify-between font-normal rounded-md h-[55px]">
            {value?.from && value?.to ? `${value.from.toLocaleDateString()} - ${value.to.toLocaleDateString()}` : "Select timeframe"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={defaultMonth}
            selected={value}
            onSelect={onValueChange}
            numberOfMonths={1}
            hidden={{
              before: today,
              after: threeYearsFromNow,
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  title = "Start Your Project Consultation",
  description = "Fill out the form below and our team will get back to you within 24 hours to discuss your project needs and schedule a consultation.",
}) => {
  const [formData, setFormData] = useState<ConsultationForm>({
    name: "",
    email: "",
    location: "",
    budget: "",
    timeframe: undefined,
    projectType: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (range: DateRange | undefined) => {
    setFormData((prev) => ({ ...prev, timeframe: range }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.location || !formData.budget || !formData.projectType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://bwosh-api.vercel.app/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timeframe: formData.timeframe
            ? `${formData.timeframe.from ? format(formData.timeframe.from, "PPP") : ""} - ${formData.timeframe.to ? format(formData.timeframe.to, "PPP") : ""}`
            : "Not specified",
        }),
      });

      if (response.ok) {
        toast.success("Consultation request sent successfully!");
        setFormData({
          name: "",
          email: "",
          location: "",
          budget: "",
          timeframe: undefined,
          projectType: "",
        });
      } else {
        toast.error("Failed to send consultation request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-10 py-8 px-4 lg:py-12 lg:px-8 items-start">
      {/* Left side - Title and Description */}
      <div className="space-y-4 text-center lg:text-left w-full lg:w-5/12">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Right side - Consultation Form */}
      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 w-full lg:w-7/12">
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full rounded-md" required />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md"
          required
        />
        {/* Project Type Select */}
        <Select value={formData.projectType} onValueChange={(value) => handleSelectChange("projectType", value)}>
          <SelectTrigger className="w-full rounded-md h-[55px]">
            <SelectValue placeholder="Select Project Type" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="bwosh residential">Bwosh Residential</SelectItem>
            <SelectItem value="bwosh offices">Bwosh Offices</SelectItem>
            <SelectItem value="bwosh kitchens">Bwosh Kitchens</SelectItem>
            <SelectItem value="bwosh hospitality">Bwosh Hospitality</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          name="location"
          placeholder="Project Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full rounded-md"
          required
        />
        <Input
          type="text"
          name="budget"
          placeholder="Project Budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full rounded-md"
          required
        />

        {/* Timeframe Calendar - Using the updated Calendar23 component */}
        <Calendar23 value={formData.timeframe} onValueChange={handleDateChange} />

        <Button type="submit" className="w-full rounded-md" disabled={loading}>
          {loading ? "Submitting..." : "Schedule Consultation"}
        </Button>
      </form>
    </section>
  );
};

export default ConsultationSection;
