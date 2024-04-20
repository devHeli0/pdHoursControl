import React, { useState } from 'react'

import { useCreateSquadMutation } from './squadAPI'

const NewSquadPage: React.FC = () => {
  const [squadName, setSquadName] = useState('')
  const [createSquad, { isLoading, isError }] = useCreateSquadMutation()

  const handleCreateSquad = async () => {
    try {
      const squadData = { name: squadName }
      await createSquad(squadData).unwrap()
    } catch (error) {
      console.error('Error creating squad:', error)
    }
  }

  return (
    <div>
      <h1>New Squad</h1>
      <input
        type="text"
        value={squadName}
        onChange={(e) => setSquadName(e.target.value)}
      />
      <button onClick={handleCreateSquad} disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Squad'}
      </button>
      {isError && <div>Error creating squad</div>}
    </div>
  )
}

export default NewSquadPage
