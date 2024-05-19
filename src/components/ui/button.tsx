import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      colors: {
        default:
          "bg-neutral-200 hover:bg-neutral-300 border border-neutral-200 border-b-neutral-300 ",
        primary:
          "bg-blue-700 hover:bg-blue-600 hover:text-white border border-blue-700 text-white",
        destructive:
          "bg-red-700 hover:bg-red-600 hover:text-white border border-red-700 text-white",
      },
      variant: {
        flat: "bg-transparent border-transparent text-black",
        solid: "border-transparent",
        outline: "bg-opacity-0 text-black",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-9 px-4 py-2",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      colors: "default",
      variant: "solid",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colors, className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ colors, variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
