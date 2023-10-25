import {FC} from 'react'
import { TodoFormProps } from '../interfaces'

const TodoForm:FC<TodoFormProps> = ({value,updateText,handleAction}) => {
  return (
    <div style={{display:'flex',gap:'10px',marginBottom:'15px'}}>
      <input className='inputToDoList'  placeholder='Add Todo' type="'text"
      value={value} onChange={e => updateText(e.target.value)} />
      <button className='button' onClick={handleAction}>Add Todo</button>
    </div>
  )
}

export default TodoForm