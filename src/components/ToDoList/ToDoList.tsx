import {FC} from 'react'
import { useAppSelector } from '../../reducers/hooks'
import TodoItem from './TodoItem'
const ToDoList:FC = () => {
  const todos = useAppSelector(state=>state.todos.list)
  return(
    <div>
      {todos.map((todo)=>(
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default ToDoList