import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../util'

const buttonVariants = cva(
  "inline-flex font-montserrat items-center !border-transparent !border-solid !border-[1px] justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-[700] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive !transition-all !duration-300 hover:scale-105 hover:-rotate-[0.5deg] text-[16px] will-change-transform",
  {
    variants: {
      variant: {
        base: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 bg-white text-black border-none',
        default:
          'rounded-lg opacity-100 bg-gradient-to-br from-[rgba(134,71,203,0.6)] to-[rgba(140,124,247,0.66)] hover:from-[rgba(134,71,203)] hover:to-[rgba(140,124,247,0.83)] shadow-[inset_5px_5px_12px_rgba(222,191,255,0.13),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33)] hover:shadow-[inset_5px_5px_12px_rgba(222,191,255,0.25),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33),0px_0px_10px_0px_rgba(189,130,253,0.5)]',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: cn(
          'bg-gradient-to-br from-[rgba(189,130,253,0.05)] to-[rgba(189,130,253,0.05)]',
          'hover:from-[rgba(189,130,253,0.15)] hover:to-[rgba(189,130,253,0.15)]',
          'text-white hover:!border-[#BD82FD] hover:text-white',
          'shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset]',
          'hover:shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset,#bd82fdaa_0_0_10px]',
          'hover:bg-[#bd82fd0d]',
        ),

        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-min-content px-[15px] py-[10px] has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-min-content rounded-[12px] px-[36px] py-[18px] has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
