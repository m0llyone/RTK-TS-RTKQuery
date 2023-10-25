import { createAsyncThunk } from "@reduxjs/toolkit"
import { IUsers } from "../components/interfaces"
import axios from "axios"

export const fetchUsers = createAsyncThunk(
'users/fetchAll', async (_,thunkAPI) => {
    try {
      const response = await axios.get<IUsers[]>('')
      return response.data
    } catch(e) {
      return thunkAPI.rejectWithValue("Error!Try again later!")
    }
}
)