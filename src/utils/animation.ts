import { Variants } from "framer-motion";

export const containerVariants = (delay: number = 0): Variants => ({
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.2,
      delay,
    },
  },
});

export const tagVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 8,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0.2,
    },
  },
};

export const titleVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      delay: 0.2,
      bounce: 0.25,
    },
  },
};

export const desVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 15,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.2,
    },
  },
};
