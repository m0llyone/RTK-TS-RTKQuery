import { UsersWrapper } from "./UsersWrapper"
import { IUser } from "../interfaces"

interface IUsers {
  users: IUser[]
}

export const Users = ({users}: IUsers): JSX.Element => {
  return (
    <>
  <UsersWrapper>
    {users.map((user)=>(
      <div key={user.id} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px',marginBottom:'15px'}}>
        <div>
        <span>{user.first_name} </span>
        <span>
        {user.last_name}
        </span>
        </div>
        <img src={user.avatar} alt="avatar" />
        {user.email}
      </div>
    ))}
  </UsersWrapper>
  </>
  )
}