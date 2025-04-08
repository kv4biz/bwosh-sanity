import Image from "next/image";
import React from "react";

type LogoProps = {
  width?: number;
  height?: number;
  alt?: string;
};

const Logo: React.FC<LogoProps> = ({
  width,
  height = 32,
  alt = "Bwosh Logo",
}) => {
  const aspectRatio = 130 / 32;
  const calculatedWidth = width || height * aspectRatio;
  return (
    <a href="/" className="flex items-center">
      <Image
        src="/logo.svg"
        alt={alt}
        width={calculatedWidth}
        height={height}
        priority
      />
    </a>
  );
};

export default Logo;
