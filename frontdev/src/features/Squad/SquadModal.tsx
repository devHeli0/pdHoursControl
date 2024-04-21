import React, { useState } from 'react'

import { useCreateSquadMutation } from './squadAPI'

interface CreateSquadModalProps {
  isOpen: boolean
  onClose: () => void
}

const CreateSquadModal: React.FC<CreateSquadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [squadName, setSquadName] = useState('')
  const [createSquad, { isLoading, isError }] = useCreateSquadMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const squadData = { name: squadName }
      await createSquad(squadData).unwrap()
      onClose() // Fechar a modal após a criação bem-sucedida da squad
    } catch (error) {
      console.error('Error creating squad:', error)
    }
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-[414px] h-[396px] relative">
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
          Criar Squad
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="relative">
            <label
              className="text-sm font-medium text-gray-500"
              htmlFor="squadName"
            >
              NOME DA SQUAD
            </label>
            <input
              id="squadName"
              placeholder="Digite o nome da squad"
              type="text"
              value={squadName}
              onChange={(e) => setSquadName(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="mt-8 w-3/4 sm:w-64 h-12 sm:h-[48px] bg-blue-500 text-white font-semibold rounded-lg focus:outline-none"
            >
              {isLoading ? 'Criando...' : 'Criar Squad'}
            </button>
          </div>
          {isError && (
            <div className="text-red-500 mt-4">Erro ao cria Squad</div>
          )}
        </form>
      </div>
    </div>
  )
}

export default CreateSquadModal
