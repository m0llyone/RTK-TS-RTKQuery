import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "./todoSlice";
import usersSlice from "./usersSlice";
import { goodsApi } from "../components/services/GoodsServices";
export const store = configureStore({
  reducer:{
    todos: todoSlice,
    users: usersSlice,
    [goodsApi.reducerPath]: goodsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
