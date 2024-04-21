import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ky from 'ky'

import type { getAllReportsResponse } from '../../services/types'

const { VITE_API_URL } = import.meta.env

export const reportApi = createApi({
  reducerPath: 'reportApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_API_URL,
    fetchFn: async (...args) => ky(...args),
  }),
  endpoints: (builder) => ({
    createReport: builder.mutation({
      query: (reportData) => ({
        url: '/reports/report',
        method: 'POST',
        body: reportData,
      }),
    }),
    // Use void Here. Trust me.
    getAllReports: builder.query<getAllReportsResponse, void>({
      query: () => ({
        url: '/reports',
        method: 'GET',
      }),
    }),
  }),
})

export const { useCreateReportMutation, useGetAllReportsQuery } = reportApi
