import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { RTKUsers } from '../interfaces'

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001'}),
  tagTypes:['Good'],
  endpoints: (build) => ({
    getGoods: build.query<RTKUsers[],number>({
      query: (limit:number) => ({
        url: '/goods',
        params: {
          _limit: limit
        }
      }),
      providesTags: res => ['Good']
      }),
    addGood: build.mutation<RTKUsers, RTKUsers>({
      query: (body) => ({
        url: 'goods',
        method: 'POST',
        body
      }),
      invalidatesTags:['Good']
    }),
    updateGood: build.mutation<RTKUsers, RTKUsers>({
      query: (body) => ({
        url: `goods/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags:['Good']
    }),
    deleteGood: build.mutation<RTKUsers, number>({
      query: (id) => ({
        url: `goods/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags:['Good']
    }),
  })
})

export const {useGetGoodsQuery, useAddGoodMutation ,useDeleteGoodMutation, useUpdateGoodMutation} = goodsApi