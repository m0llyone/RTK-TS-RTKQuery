import { FC } from "react"

interface IList<T> {
  items: T[],
  renderItem: (item:T)=>React.ReactNode
}

export default function List<T>(props:IList<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  )
}