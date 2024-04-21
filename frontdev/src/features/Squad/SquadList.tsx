import React, { useState } from 'react'

import type { Squad } from '../../services/types'

import { useGetAllSquadsQuery } from './squadAPI'
import CreateSquadModal from './SquadModal'

const SquadList: React.FC = () => {
  const { isLoading, error, data } = useGetAllSquadsQuery()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const renderItemButton = (squad: Squad) => (
    <button
      key={squad.id}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Visitar Squad
    </button>
  )

  const squads: Squad[] = data?.data.list || []

  const renderListContent = () => {
    if (isLoading) return <p>Loading Lista de Squads...</p>

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
      <div className="overflow-x-auto max-w-screen-md">
        <div className="max-h-72 overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-blue-500 text-white sticky top-0">
              <tr className="text-center whitespace-nowrap">
                <th className="text-center sm:w-2/3 md:w-1/2 lg:w-2/3 rounded-tl-lg">
                  ID
                </th>
                <th className="px-6 py-3 text-center sm:w-2/3 md:w-1/2 lg:w-2/300">
                  Nome
                </th>
                <th className="px-6 py-3 text-center sm:w-2/3 md:w-1/2 lg:w-2/300 ">{` `}</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {squads.map((squad) => (
                <tr key={squad.id}>
                  <td className="text-center px-6 py-3 sm:w-2/3 md:w-1/2 lg:w-2/3 whitespace-nowrap">
                    {squad.id}
                  </td>
                  <td className="px-6 py-3 sm:w-1/6 md:w-1/4 lg:w-1/6 text-center whitespace-nowrap">
                    {squad.name}
                  </td>
                  <td className="px-6 py-3 text-center whitespace-nowrap">
                    {renderItemButton(squad)}
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
          Lista de Squads
        </h2>
        {renderListContent()}
        <button
          onClick={openModal}
          className="whitespace-nowrap bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          Criar Squad
        </button>
        <CreateSquadModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  )
}

export default SquadList
