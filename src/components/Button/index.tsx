import { Slot } from '@radix-ui/react-slot'
import { ComponentPropsWithoutRef } from 'react'
import { StageSpinner } from 'react-spinners-kit'
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'bg-indigo-600 text-zinc-200 rounded-md hover:bg-indigo-700 transition-all text-[16px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2',
  variants: {
    format: {
      rectangle: 'h-[40px] px-4 py-2',
      squared: 'aspect-square p-2',
    },
  },
  defaultVariants: {
    format: 'rectangle',
  },
})

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  isLoading?: boolean
  asChild?: boolean
  format?: 'rectangle' | 'squared'
}

export const Button = (props: ButtonProps) => {
  const { isLoading, asChild, format } = props

  const Comp = asChild ? Slot : 'button'

  const className = button({ format })

  if (isLoading) {
    return (
      <Comp className={className} disabled>
        <StageSpinner size={18} />
      </Comp>
    )
  }

  return <Comp className={className} {...props} />
}
