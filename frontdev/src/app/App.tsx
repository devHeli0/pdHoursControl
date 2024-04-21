import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

import '../features/Counter/index.module.css'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Counter from '../features/Counter/index'
import EmployeeList from '../features/Employee/EployeeList'
import ReportList from '../features/Report/ReportList'
import SquadList from '../features/Squad/SquadList'

import { history, store } from './store'

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/squads" element={<SquadList />} />
          <Route path="/rerports" element={<ReportList />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  )
}

export default App
