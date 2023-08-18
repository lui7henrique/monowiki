import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

type SpellButtonProps = {
  checked?: boolean
  asDiv?: boolean
} & ComponentProps<'button'>

export const spellButton = tv({
  base: 'rounded-md aspect-square',
  variants: {
    checked: {
      true: 'bg-zinc-900 flex items-center justify-center text-zinc-900  border border-zinc-800 font-bold text-zinc-400 text-sm',
      false:
        'bg-zinc-950 rounded-md aspect-square border border-zinc-800 cursor-pointer transition-all hover:opacity-50',
    },
  },
})

export const SpellButton = (props: SpellButtonProps) => {
  const { checked, ...buttonProps } = props

  return (
    <button
      className={spellButton({ checked })}
      type="button"
      {...buttonProps}
    />
  )
}
