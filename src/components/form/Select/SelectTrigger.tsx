import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { tv } from 'tailwind-variants'

const selectTrigger = tv({
  base: 'inline-flex items-center justify-center rounded px-[15px] text-[16px] leading-none gap-[5px] bg-zinc-900 text-zinc-200  hover:bg-zinc-800  data-[placeholder]:text-zinc-500 outline-none border-none transition-all',
  variants: {
    format: {
      rectangle: 'h-[48px]',
      squared: 'h-[150px] w-[150px]',
    },
  },
})

type SelectTriggerProps = {
  placeholder: string
  format?: 'rectangle' | 'squared'
} & SelectPrimitive.SelectTriggerProps

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { placeholder, format = 'rectangle', ...selectTriggerProps } = props

  return (
    <SelectPrimitive.Trigger
      className={selectTrigger({ format })}
      {...selectTriggerProps}
    >
      <SelectPrimitive.Value placeholder={placeholder} />

      <SelectPrimitive.Icon className="text-zinc-500">
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}
