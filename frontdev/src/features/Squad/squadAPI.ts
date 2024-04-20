import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { VITE_API_URL } = import.meta.env

export const squadApi = createApi({
  reducerPath: 'squadApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL }),
  endpoints: (builder) => ({
    createSquad: builder.mutation({
      query: (squadData) => ({
        url: '/squads/squad',
        method: 'POST',
        body: squadData,
      }),
    }),
  }),
})

export const { useCreateSquadMutation } = squadApi
