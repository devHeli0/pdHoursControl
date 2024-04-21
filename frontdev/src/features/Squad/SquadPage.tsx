import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import type { Report } from '../../services/types'
import { useGetEmployeeSpentHoursQuery } from '../Report/reportAPI'

const SquadPage = () => {
  const { id } = useParams()
  const location = useLocation()
  const squadName = location.state?.squadName
  const defaultStartDate = new Date('2022-01-01').toISOString().split('T')[0]
  const defaultEndDate = new Date('2024-12-12').toISOString().split('T')[0]

  const [startDate, setStartDate] = useState(defaultStartDate)
  const [endDate, setEndDate] = useState(defaultEndDate)

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value)
  }

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value)
  }

  const handleFilterClick = () => {
    // Perform filtering logic based on selected dates
    // For now, let's log the selected dates
    console.log('Start Date:', startDate)
    console.log('End Date:', endDate)
  }

  const { data, error, isLoading } = useGetEmployeeSpentHoursQuery({
    squadId: id,
    startDate: startDate,
    endDate: endDate,
  })

  useEffect(() => {
    if (isLoading) {
      // Handle loading state
    }
    if (error) {
      // Handle error state
    }
  }, [isLoading, error])

  return (
    <div className="flex flex-col items-start w-full">
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4 mt-8">{squadName}</h2>
      </div>
      <div className="justify-center inline-flex gap-10 mt-10 mb-4 mx-auto">
        <div className="datepicker">
          <label htmlFor="start-date" className="label">
            INICIO
          </label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="datepicker">
          <label htmlFor="end-date" className="label">
            FIM
          </label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <button
          onClick={handleFilterClick}
          className="w-48 h-12 bg-blue-500 text-white font-bold rounded-md"
        >
          Filter
        </button>
      </div>

      <div className="overflow-x-auto max-w-screen-md mx-auto">
        <h3 className="text-xl font-bold text-center mb-4">Horas por membro</h3>
        <div className="table-container">
          <table className="w-full table-auto divide-y divide-gray-200">
            <thead className="bg-blue-500 text-white rounded-t-xl">
              <tr>
                <th className="px-6 py-3">Membros</th>
                <th className="px-6 py-3">Descrição</th>
                <th className="px-6 py-3">Horas</th>
                <th className="px-6 py-3">Criado em</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data &&
                data.map((entry: Report, index: any) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : ''}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.employee.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.spentHours}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(entry.createdAt).toISOString().split('T')[0]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SquadPage
