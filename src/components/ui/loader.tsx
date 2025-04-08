// components/ui/loader.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const loaderVariants = cva(
  "flex flex-col items-center justify-center py-40 gap-4",
  {
    variants: {
      variant: {
        default: "text-neatBlack",
        light: "text-offWhite",
        subtle: "text-muted",
      },
      size: {
        default: "text-xl",
        sm: "text-base",
        lg: "text-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {}

export function Loader({ className, variant, size, ...props }: LoaderProps) {
  return (
    <div
      className={cn(loaderVariants({ variant, size, className }))}
      {...props}
    >
      <h1 className="font-bold tracking-wide">Bwosh</h1>
      <div className="loader" />
    </div>
  );
}
