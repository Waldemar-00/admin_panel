import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api_Slice = createApi({
  reducerPath: 'api',             //! it is default setting
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-dfaa6-default-rtdb.firebaseio.com' }), 
  endpoints: builder => ({
    getHeroes: builder.query({
      query: () => '/heroes.json'
    })
  })
})
export const { useGetHeroesQuery } = api_Slice