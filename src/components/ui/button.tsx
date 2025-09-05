import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap capitalize rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-aegean text-offWhite hover:text-aegean border-aegean border hover:bg-offWhite",
        normal: " border border-black bg-transparent",
        ghost: "hover:bg-black hover:text-white",
        subtle: "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        outline: "border border-offWhite bg-transparent hover:bg-offWhite text-offWhite hover:text-aegean",
        outlineB: "border border-neatBlack hover:border-transparent bg-transparent hover:bg-offWhite text-neatBlack hover:text-neatBlack",
        outlineK: "border border-offWhite bg-transparent hover:bg-offWhite text-offWhite hover:text-purpleTaupe",
        outlineH: "border border-offWhite bg-transparent hover:bg-offWhite text-offWhite hover:text-brownChocolate",
        outlineO: "border border-offWhite bg-transparent hover:bg-offWhite text-offWhite hover:text-azure",
        outlineR: "border border-offWhite bg-transparent hover:bg-offWhite text-offWhite hover:text-policeBlue",
        outlineG: "border border-offWhite bg-transparent hover:bg-offWhite text-offWhite hover:text-greenishBlue",
        linkWhite: "text-offWhite underline-offset-4 hover:underline",
        linkDark: "text-neatBlack underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
