import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

import '../features/Counter/index.module.css'
import Counter from '../features/Counter/index'
import SquadForm from '../features/Squad/SquadForm'
import SquadList from '../features/Squad/SquadList'

import { history, store } from './store'

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/squad" element={<SquadForm />} />
          <Route path="/squads" element={<SquadList />} />
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  )
}

export default App
