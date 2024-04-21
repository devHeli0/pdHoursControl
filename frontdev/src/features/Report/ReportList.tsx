import React from 'react'

import ListComponent from '../../components/ListComponent'
import type { Report } from '../../services/types'

import { useGetAllReportsQuery } from './reportAPI' // Assuming ReportList.tsx is in the same directory as reportApi.ts

const ReportList: React.FC = () => {
  const { isLoading, error, data } = useGetAllReportsQuery()

  const renderItemButton = () => (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Visitar Report
    </button>
  )

  const reports: Report[] = data?.data.list || [] // potential undefined data.data

  return (
    <div>
      <ListComponent
        title="Lista de Reports"
        items={reports}
        loading={isLoading}
        error={error}
        renderItemButton={renderItemButton}
      />
    </div>
  )
}

export default ReportList
