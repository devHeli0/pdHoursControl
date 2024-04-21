import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ky from 'ky'

import type { getAllSquadsResponse } from '../../services/types'

const { VITE_API_URL } = import.meta.env

export const squadApi = createApi({
  reducerPath: 'squadApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_API_URL,
    fetchFn: async (...args) => ky(...args),
  }),
  endpoints: (builder) => ({
    createSquad: builder.mutation({
      query: (squadData) => ({
        url: '/squads/squad',
        method: 'POST',
        body: squadData,
      }),
    }),
    // Use void Here. Trust me.
    getAllSquads: builder.query<getAllSquadsResponse, void>({
      query: () => ({
        url: '/squads',
        method: 'GET',
      }),
    }),
  }),
})

export const { useCreateSquadMutation, useGetAllSquadsQuery } = squadApi
