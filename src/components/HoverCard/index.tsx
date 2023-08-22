import * as PrimitiveHoverCard from '@radix-ui/react-hover-card'
import { ReactNode } from 'react'

type HoverCardProps = {
  content: ReactNode | string
  children: ReactNode
}

export const HoverCard = (props: HoverCardProps) => {
  const { content, children } = props

  return (
    <PrimitiveHoverCard.Root>
      <PrimitiveHoverCard.Trigger asChild>
        {children}
      </PrimitiveHoverCard.Trigger>

      <PrimitiveHoverCard.Portal>
        <PrimitiveHoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[400px] rounded-default bg-zinc-900 p-0 text-zinc-400 data-[state=open]:transition-all overflow-hidden"
          sideOffset={5}
        >
          {content}
          <PrimitiveHoverCard.Arrow className="fill-zinc-900" />
        </PrimitiveHoverCard.Content>
      </PrimitiveHoverCard.Portal>
    </PrimitiveHoverCard.Root>
  )
}
