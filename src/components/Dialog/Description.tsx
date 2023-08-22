import {
  DialogDescription as DialogPrimitiveDescription,
  DialogDescriptionProps as DialogPrimitiveDescriptionProps,
} from '@radix-ui/react-dialog'

export const DialogDescription = (props: DialogPrimitiveDescriptionProps) => (
  <DialogPrimitiveDescription
    className="text-zinc-400 mt-0 text-sm leading-normal"
    {...props}
  />
)
