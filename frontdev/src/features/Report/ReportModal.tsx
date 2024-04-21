import React, { useState } from 'react'

import { useGetEmployeeByIdQuery } from '../Employee/employeeAPI'

import { useCreateReportMutation } from './reportAPI'

interface CreateReportModalProps {
  isOpen: boolean
  onClose: () => void
}

const CreateReportModal: React.FC<CreateReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [userId, setUserId] = useState('')
  const [spentHours, setSpentHours] = useState('')
  const [description, setDescription] = useState('')
  const [createReport, { isLoading, isError }] = useCreateReportMutation()
  const {
    data: employeeData,
    isLoading: isEmployeeLoading,
    error: employeeError,
  } = useGetEmployeeByIdQuery(parseInt(userId, 10))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const reportData = {
        employeeId: parseInt(userId, 10),
        spentHours: parseInt(spentHours, 10),
        description: description,
      }

      await createReport(reportData).unwrap()
      onClose() // Close the modal after successful report creation
    } catch (error) {
      console.error('Error creating report:', error)
    }
  }
  return (
    <div
      className={`fixed z-50 inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 min-w-20 max-w-96 min-h-12 max-h-screen relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-black mb-8 text-center">
          Criar Report
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {isError && (
            <div className="px-10 py-4 bg-red-300 relative whitespace-nowrap rounded-lg mx-auto">
              <div className=" bg-red-300 text-red-500">
                Erro ao criar Report
              </div>
            </div>
          )}
          <div className="relative">
            <label
              className="text-sm font-medium text-gray-500"
              htmlFor="userId"
            >
              ID DO USUÁRIO
            </label>
            <input
              id="userId"
              placeholder="Digite o ID do usuário"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className={`border rounded-lg p-3 w-full focus:outline-none 
    ${isError ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
            />
          </div>
          <div className="relative">
            <label
              className="text-sm font-medium text-gray-500"
              htmlFor="spentHours"
            >
              HORAS GASTAS
            </label>
            <input
              id="spentHours"
              placeholder="Digite as horas gastas"
              type="number"
              value={spentHours}
              onChange={(e) => setSpentHours(e.target.value)}
              className={`border rounded-lg p-3 w-full focus:outline-none 
              ${isError ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
            />
          </div>
          <div className="relative">
            <label
              className="text-sm font-medium text-gray-500"
              htmlFor="description"
            >
              DESCRIÇÃO
            </label>
            <textarea
              id="description"
              placeholder="Digite a descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`border rounded-lg p-3 w-full focus:outline-none 
    ${isError ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
            />
          </div>
          <div className="relative">
            <button
              type="submit"
              className="mt-8 w-full h-12 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none"
            >
              {isLoading ? 'Criando...' : 'Criar Report'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateReportModal
