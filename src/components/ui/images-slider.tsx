"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 15000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay]);

  const slideVariants = {
    initial: (custom: string) => ({
      opacity: 0,
      x: custom === "left" ? "-100%" : custom === "right" ? "100%" : 0,
      y: custom === "up" ? "-100%" : custom === "down" ? "100%" : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 2.0,
        ease: [0.45, 0.045, 0.255, 1.4],
      },
    },
    exit: (custom: string) => ({
      opacity: 0,
      x: custom === "left" ? "100%" : custom === "right" ? "-100%" : 0,
      y: custom === "up" ? "100%" : custom === "down" ? "-100%" : 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-white/5 to-black/25 z-20",
            overlayClassName
          )}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence custom={direction}>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            custom={direction}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
