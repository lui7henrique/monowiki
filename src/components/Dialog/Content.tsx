import {
  DialogContent as DialogPrimitiveContent,
  DialogContentProps as DialogPrimitiveContentProps,
} from '@radix-ui/react-dialog'

import { tv } from 'tailwind-variants'

const dialogContent = tv({
  base: 'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-default bg-zinc-950 p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-scroll',
  variants: {
    size: {
      md: 'max-w-[450px]',
      lg: 'max-w-article',
      xl: 'max-w-app',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type DialogContentProps = {
  size?: 'md' | 'lg' | 'xl'
} & DialogPrimitiveContentProps

export const DialogContent = (props: DialogContentProps) => {
  const { size } = props

  return (
    <DialogPrimitiveContent className={dialogContent({ size })} {...props} />
  )
}
