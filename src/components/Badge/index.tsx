import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

type Color =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

type BadgeProps = {
  children: ReactNode
  color?: Color
}

const badge = tv({
  base: 'inline-flex items-center rounded-default px-2 py-1 text-xs font-medium ring-1 ring-inset',
  variants: {
    color: {
      gray: 'bg-gray-800 text-gray-600 ring-gray-500/10',
      red: 'bg-red-800 text-red-700 ring-1 ring-inset ring-red-600/10',
      yellow:
        'bg-yellow-800 text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      green: 'bg-green-800 text-green-700 ring-1 ring-inset ring-green-600/20',
      blue: 'bg-blue-800 text-blue-700 ring-1 ring-inset ring-blue-700/10',
      indigo:
        'bg-indigo-800 text-indigo-100 ring-1 ring-inset ring-indigo-700/10',
      purple:
        'bg-purple-800 text-purple-700 ring-1 ring-inset ring-purple-700/10',
      pink: 'bg-pink-800 text-pink-700 ring-1 ring-inset ring-pink-700/10',
    },
  },
  defaultVariants: {
    color: 'indigo',
  },
})

export const Badge = (props: BadgeProps) => {
  const { children, color } = props

  return <h1 className={badge({ color })}>{children}</h1>
}
