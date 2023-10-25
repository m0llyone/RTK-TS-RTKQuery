import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsers } from "../components/interfaces";
import { fetchUsers } from "./actionCreators";

interface UserState {
  users: IUsers[],
  isLoading: boolean,
  error:string,
}

const initialState :UserState = {
  users:[],
  isLoading: false,
  error:'',
}

const usersSlice = createSlice({
  name:'users',
  initialState,
  reducers:{},
  extraReducers:{
    [fetchUsers.pending.type]:(state) => {
      state.isLoading = true
    },
    [fetchUsers.fulfilled.type]:(state,action:PayloadAction<IUsers[]>) => {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
      },
    [fetchUsers.pending.type]:(state,action:PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  }
})


export default usersSlice.reducer