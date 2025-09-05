import React from "react";

interface TitleHeaderProps {
  title: string;
  description: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, description, className = "", titleClassName = "", descriptionClassName = "" }) => {
  // Function to render description whether it's a string or ReactNode
  const renderDescription = () => {
    if (typeof description === "string") {
      // Split by double line breaks to create paragraphs
      const paragraphs = description.split(/\n\s*\n/);

      return paragraphs.map((paragraph, index) => (
        <div key={index} className={`text-md lg:text-lg w-full text-muted-foreground ${descriptionClassName}`}>
          {paragraph}
        </div>
      ));
    }

    // If it's already ReactNode, just return it
    return description;
  };
  return (
    <section className="container mx-auto my-8 px-4 py-5 lg:pt-12">
      <div className={`space-y-4 w-full ${className}`}>
        <div className={`lg:text-8xl text-6xl text-center md:text-left font-bold mb-4 lg:mb-10 ${titleClassName}`}>{title}</div>
        <div className="space-y-2">{renderDescription()}</div>
      </div>
    </section>
  );
};

export default TitleHeader;
