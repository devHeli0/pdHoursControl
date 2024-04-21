import React from 'react'

import ListComponent from '../../components/ListComponent'
import type { Squad } from '../../services/types'

import { useGetAllSquadsQuery } from './squadAPI' // Assuming SquadList.tsx is in the same directory as squadApi.ts

const SquadList: React.FC = () => {
  const { isLoading, error, data } = useGetAllSquadsQuery()

  const renderItemButton = () => (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Visitar Squad
    </button>
  )

  const squads: Squad[] = data?.data.list || [] // potential undefined data.data

  return (
    <div>
      <ListComponent
        title="Lista de Squads"
        items={squads}
        loading={isLoading}
        error={error}
        renderItemButton={renderItemButton}
      />
    </div>
  )
}

export default SquadList
