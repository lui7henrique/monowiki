import React, { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { tv } from 'tailwind-variants'

const tooltipContent = tv({
  base: 'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-zinc-400 select-none rounded-md bg-zinc-900 text-sm leading-none will-change-[transform,opacity] max-w-[480px]',
  variants: {
    padding: {
      true: 'px-3 py-2',
      false: 'px-0 py-0',
    },
  },
  defaultVariants: {
    padding: true,
  },
})

type TooltipProps = {
  children: ReactNode
  content: ReactNode | string
  padding?: boolean
}

const Tooltip = (props: TooltipProps) => {
  const { children, content, padding } = props

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root defaultOpen={true}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={tooltipContent({ padding })}
            sideOffset={5}
          >
            {typeof content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              content
            )}

            <TooltipPrimitive.Arrow className="fill-zinc-900" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export default Tooltip
