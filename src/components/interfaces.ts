
export interface IUser {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface IUsersPage {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IUser[]
}

export interface IAddress {
  street:string,
  suite:string,
  city:string,
  zipcode:string,
}

export interface IUser2 {
  id:number,
  name:string,
  username:string,
  email:string,
  address: IAddress
}

export interface ITodos {
  id:number,
  title:string,
  completed:boolean,
}

export interface Todo {
  id:string,
  title:string,
  completed:boolean
}

export interface TodoFormProps {
  value:string,
  updateText: (str: string) => void,
  handleAction: ()=>void
}

export interface IUsers {
  id:number,
  name:string,
  email:string
}

export interface RTKUsers {
  id: number,
  name: string
}