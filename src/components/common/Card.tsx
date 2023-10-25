import { FC, useState } from "react"
export enum Options  {
  outlined = 'outlined',
  primary = 'primary'
}

interface ICard {
  width ?: string,
  height?: string,
  variant: Options,
  onClick: ()=> void,
  children?: React.ReactNode
}
export const Card:FC<ICard> = ({width,height,variant,onClick,children}) => {

  return(
  <div style={{width,height,border: variant=== Options.outlined ? '2px solid black': '',  background: variant===Options.primary ? 'lightgrey':' '}} onClick={onClick}>
{children}
  </div>)
}