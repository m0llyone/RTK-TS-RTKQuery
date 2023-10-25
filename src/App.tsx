import React, {JSX, useEffect, useState} from 'react';
import './App.css';
import { UserContainer } from './components/Users/userContainer';
import { Form } from './components/Form/Form';
import { Card, Options } from './components/common/Card';
import List from './components/common/List';
import axios from 'axios';
import { ITodos, RTKUsers } from './components/interfaces';
import ToDoPage from './pages/ToDoPage';
import { useAppDispatch, useAppSelector } from './reducers/hooks';
import { fetchUsers } from './reducers/actionCreators';
import { useGetGoodsQuery, useAddGoodMutation, useDeleteGoodMutation, useUpdateGoodMutation } from './components/services/GoodsServices';


function App():JSX.Element {
  const[todos,setTodos] = useState<ITodos[]>([])
  const [state, setState] = useState<number>(1)
  const dispatch = useAppDispatch()
  const {users,error,isLoading} = useAppSelector(state=>state.users)
  const [count,setCount] = useState<string>('10')

  const {data: goodsArray, isError, isLoading:loading} = useGetGoodsQuery(Number(count))
  const [addProduct, {}] = useAddGoodMutation()
  const [deleteProduct, {}] = useDeleteGoodMutation()
  const [updateProduct, {}]= useUpdateGoodMutation()

  useEffect(()=>
  {
    getTodos()
    dispatch(fetchUsers())
  },[])

  const getTodos = async ()=>{
    try{
    const response = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos/?_limit=10')
    setTodos(response.data)
  } catch(e) {
    console.log(e)
  }
  }

  if(loading) return <h1 style={{textAlign:'center',marginTop:'50px'}}>Loading...</h1>
  if(isError) return <h1 style={{textAlign:'center',marginTop:'50px'}}>Error..!</h1>

  const handleCreate = async () => {
    const good = prompt('Введите товар')
    if(good?.trim() !== '') {
      await addProduct({name:good} as RTKUsers)
    }
  }

  const handleDelete = async (id:number) => {
    await deleteProduct(id).unwrap()
  }

  const handleUpdate = (goodsArray: RTKUsers) => {
    const name = prompt('Edit name of product:') || ''
    updateProduct ({...goodsArray,name})
  }

  return (
    <div className="App">
      <UserContainer/>
      <ToDoPage/>
      <div>
      <div className='inputContainerQuery'>
        <button className='button' onClick={handleCreate}>Add new good</button>
        <select value={count} onChange={(e):void => setCount(e.target.value)} className='selectQuery'>
          <option value="10">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className='containerQuery'>
       { goodsArray && goodsArray.map((item)=>(
          <div key={item.id} style={{border:'1px solid black', width:'300px',padding:'15px',borderRadius:'10px'}}>
          <span className='nameQuery'>{item.name}</span>
          <div className='buttonContainer'>
            <button className='button' onClick={()=>handleDelete(item.id)}>Delete</button>
            <button className='button' onClick={()=>handleUpdate(item)}>Edit name</button>
          </div>
          </div>
        ))
      }
      </div>
      </div>
    </div>

  );
}

export default App;
