import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center font-body font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-cta-gradient text-primary-foreground shadow-warm hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "text-primary underline underline-offset-4 hover:text-primary/80",
      },
      size: {
        default: "h-14 px-8 text-lg rounded-xl",
        lg: "h-16 px-12 text-xl rounded-2xl",
        sm: "h-10 px-6 text-sm rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {}

const CtaButton = forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(ctaButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
CtaButton.displayName = "CtaButton";

export { CtaButton, ctaButtonVariants };
