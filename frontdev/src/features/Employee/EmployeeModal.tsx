import React, { useState } from 'react'

import { useCreateEmployeeMutation } from './employeeAPI'

interface CreateEmployeeModalProps {
  isOpen: boolean
  onClose: () => void
}

const CreateEmployeeModal: React.FC<CreateEmployeeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('')
  const [estimatedHours, setEstimatedHours] = useState('')
  const [squadId, setSquadId] = useState('')

  const [createEmployee, { isLoading, isError, error }] =
    useCreateEmployeeMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createEmployee({ name, estimatedHours, squadId })
      onClose()
    } catch (error) {
      console.error('Failed to create employee:', error)
    }
  }

  return (
    <div
      className={`fixed inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[414px] h-full md:h-[618px] relative">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={onClose} // Fechar a modal quando o botão "X" for clicado
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
            Criar Usuário
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-500"
              >
                NOME DO USUÁRIO
              </label>
              <input
                type="text"
                id="name"
                placeholder="Digite o nome da squad"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="estimatedHours"
                className="text-sm font-medium text-gray-500"
              >
                HORAS ESTIMADAS DE TRRABALHO
              </label>
              <input
                type="number"
                id="estimatedHours"
                placeholder="Digite a quantidade de horas"
                value={estimatedHours}
                onChange={(e) => setEstimatedHours(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="squadId"
                className="text-sm font-medium text-gray-500"
              >
                Squad
              </label>
              <input
                type="number"
                id="squadId"
                placeholder="Digite o Id da squad"
                value={squadId}
                onChange={(e) => setSquadId(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="mt-8 w-3/4 sm:w-64 h-12 sm:h-[48px] bg-blue-500 text-white font-semibold rounded-lg focus:outline-none"
              >
                {isLoading ? 'Criando...' : 'Criar Usuário'}
              </button>
            </div>
            {isError && (
              <p className="text-red-500 mt-2">
                Erro ao criar usuário: {error.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateEmployeeModal
