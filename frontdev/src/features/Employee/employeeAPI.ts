import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ky from 'ky'

import type { getAllEmployeesResponse } from '../../services/types'

const { VITE_API_URL } = import.meta.env

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_API_URL,
    fetchFn: async (...args) => ky(...args),
  }),
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (employeeData) => ({
        url: '/employees/employee',
        method: 'POST',
        body: employeeData,
      }),
    }),
    // Use void Here. Trust me.
    getAllEmployees: builder.query<getAllEmployeesResponse, void>({
      query: () => ({
        url: '/employees',
        method: 'GET',
      }),
    }),
  }),
})

export const { useCreateEmployeeMutation, useGetAllEmployeesQuery } =
  employeeApi
