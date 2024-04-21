import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import EmployeeList from '../features/Employee/EployeeList'
import ReportList from '../features/Report/ReportList'
import SquadList from '../features/Squad/SquadList'
import SquadPage from '../features/Squad/SquadPage'

import { history, store } from './store'

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/squads" />} />
          <Route path="/squads/:id" element={<SquadPage />} />
          <Route path="/squads" element={<SquadList />} />
          <Route path="/rerports" element={<ReportList />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  )
}

export default App
