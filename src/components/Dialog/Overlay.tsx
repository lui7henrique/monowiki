import {
  DialogOverlay as DialogPrimitiveOverlay,
  DialogOverlayProps,
} from '@radix-ui/react-dialog'

export const DialogOverlay = (props: DialogOverlayProps) => (
  <DialogPrimitiveOverlay
    className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0"
    {...props}
  />
)
