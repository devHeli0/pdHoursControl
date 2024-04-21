import React, { useState } from 'react'

import type { Employee } from '../../services/types'

import { useGetAllEmployeesQuery } from './employeeAPI'
import CreateEmployeeModal from './EmployeeModal'

const EmployeeList: React.FC = () => {
  const { isLoading, error, data } = useGetAllEmployeesQuery()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const employees: Employee[] = data?.data.list.list || []

  const renderListContent = () => {
    if (isLoading) return <p>Loading Lista de Employees...</p>

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
      <div className="overflow-x-auto max-w-screen-lg">
        <div className="max-h-72 overflow-y-auto min-w-96">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-blue-500 text-white sticky top-0">
              <tr className="text-center whitespace-nowrap">
                <th className="px-6 py-3 text-left sm:w-2/3 md:w-1/2 lg:w-2/3 rounded-tl-lg">
                  Nome
                </th>
                <th className="px-6 py-3 sm:w-1/6 md:w-1/4 lg:w-1/6 flex justify-center">
                  Horas
                </th>
                <th className="px-6 py-3 sm:w-1/6 md:w-1/4 lg:w-1/6 text-center">
                  Squad ID
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.estimatedHours}
                  </td>
                  <td className="px-6 py-3 sm:w-1/6 md:w-1/4 lg:w-1/6 text-center">
                    {employee.squadId}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center w-screen">
      <div>
        <h2 className="text-left text-2xl font-bold mt-12 mb-16">
          Lista de Usuários
        </h2>
        {renderListContent()}
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          Criar Usuário
        </button>
        <CreateEmployeeModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  )
}

export default EmployeeList
