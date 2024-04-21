import React from 'react'

import type { Squad } from '../../services/types'

import { useGetAllSquadsQuery } from './squadAPI' // Assuming SquadList.tsx is in the same directory as squadApi.ts

const SquadList: React.FC = () => {
  const { isLoading, error, data } = useGetAllSquadsQuery()

  const renderItemButton = (squad: Squad) => (
    <button
      key={squad.id}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Visitar Squad
    </button>
  )

  const squads: Squad[] = data?.data.list || [] // potential undefined data.data

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
            <thead className="bg-blue-500 text-white">
              <tr className="text-center whitespace-nowrap">
                <th className="px-6 py-3 sm:w-1/6 md:w-1/4 lg:w-1/6 flex justify-center">
                  ID
                </th>
                <th className="px-6 py-3 text-center sm:w-2/3 md:w-1/2 lg:w-2/300">
                  Nome
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {squads.map((squad) => (
                <tr key={squad.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{squad.id}</td>
                  <td className="px-6 py-3 sm:w-1/6 md:w-1/4 lg:w-1/6 text-center">
                    {squad.name}
                  </td>
                  <td className="px-4 py-2 text-center">
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Squads</h2>
      {renderListContent()}
    </div>
  )
}

export default SquadList
