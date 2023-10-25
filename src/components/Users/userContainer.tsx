import axios from "axios"
import { FC,JSX, useEffect } from "react"
import { IUser, IUsersPage } from "../interfaces"
import {useState} from 'react'
import { Users } from "./Users"

export const UserContainer: FC = ():JSX.Element =>{
  const [error,setError] = useState('')
  const [users,setUsers] = useState<IUser[] | []> ([])
  useEffect(()=>{
    (async ()=>{
      try {
        const response = await axios.get<IUsersPage>('https://reqres.in/api/users?page=1')
        const {data} = response.data
        setUsers(data)
      } catch(error){
        if(axios.isAxiosError(error)){
          setError(error.message)
        }else {
          setError ('Unknown error')
        }
      }
    })()
  },[])

  if(error) {
    return <div>{error}</div>
  }
  return (
  <div>
    <Users users={users}/>
  </div>)
}