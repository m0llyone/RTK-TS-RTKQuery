import { useAppDispatch } from "../../reducers/hooks";
import { toggleComplete,removeTodo } from "../../reducers/todoSlice";
import {FC} from 'react'
import { Todo } from "../interfaces";

const TodoItem: FC<Todo> = ({id,title,completed}) => {

  const dispatch = useAppDispatch();

  return (
    <div>
      <input style={{cursor:'pointer'}}  type="checkbox" checked={completed}
        onChange={()=> dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
    <span style={{cursor:'pointer'}} onClick={()=> dispatch(removeTodo(id))}>&times;</span>
    </div>
  )
}

export default TodoItem