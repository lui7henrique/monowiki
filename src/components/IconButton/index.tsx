import { ReactNode } from 'react'
import { Button, ButtonProps } from '../Button'

type IconButtonProps = {
  children: ReactNode
} & Omit<ButtonProps, 'children' | 'format'>

export const IconButton = (props: IconButtonProps) => {
  return (
    <Button format="squared" type="button" {...props}>
      {props.children}
    </Button>
  )
}
