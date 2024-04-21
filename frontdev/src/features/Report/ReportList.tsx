import React from 'react'

import type { Report } from '../../services/types'

import { useGetAllReportsQuery } from './reportAPI' // Assuming ReportList.tsx is in the same directory as reportApi.ts

const ReportList: React.FC = () => {
  const { isLoading, error, data } = useGetAllReportsQuery()

  const renderItemButton = (report: Report) => (
    <button
      key={report.id}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Visitar Report
    </button>
  )

  const reports: Report[] = data?.data.list || [] // potential undefined data.data

  const renderListContent = () => {
    if (isLoading) return <p>Loading Lista de Reports...</p>

    if (error) {
      const errMsg = error?.message || JSON.stringify(error)
      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    }

    return (
      <table className="border-collapse border border-gray-300 rounded-lg mb-8 w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nome</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td className="px-4 py-2">{report.id}</td>
              <td className="px-4 py-2">{renderItemButton(report)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Reports</h2>
      {renderListContent()}
    </div>
  )
}

export default ReportList
