import { useAppDispatch } from "../reducers/hooks"
import {useState} from 'react'
import { addTodo } from "../reducers/todoSlice"
import TodoForm from "../components/ToDoList/ToDoForm"
import ToDoList from "../components/ToDoList/ToDoList"
const ToDoPage = () => {
  const [text,setText] = useState<string>(' ')
  const dispatch = useAppDispatch()

  const handleAction = () => {
    if(text.trim().length){
      dispatch(addTodo(text))
      setText('')
    }
  }

  return(
    <div className="ToDoPageContainer">
      <TodoForm value={text} handleAction={handleAction} updateText={setText} />
      <ToDoList/>
    </div>
  )
}

export default ToDoPage