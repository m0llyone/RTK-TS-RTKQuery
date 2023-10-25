import {FC, JSX} from 'react'

type TUserChildren = {
  children?: React.ReactNode
}

export const UsersWrapper: FC<TUserChildren> = ({children}): JSX.Element => {
  return(
  <div>
    {children}
  </div>
  )
}