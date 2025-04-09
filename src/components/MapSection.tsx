"use client";
import { FC } from "react";

interface MapSectionProps {
  mapSrc: string;
}

const MapSection: FC<MapSectionProps> = ({ mapSrc }) => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container px-2 lg:px-0 mx-auto px-4">
        {/* Map Embed */}
        <div className="aspect-w-16 h-64 lg:h-[400px]">
          <iframe
            src={mapSrc}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
