import {
  DialogTitle as DialogPrimitiveTitle,
  DialogTitleProps as DialogPrimitiveTitleProps,
} from '@radix-ui/react-dialog'

export const DialogTitle = (props: DialogPrimitiveTitleProps) => (
  <DialogPrimitiveTitle
    className="text-zinc-200 m-0 text-lg font-medium"
    {...props}
  />
)
