import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { createBrowserHistory } from 'history'
import { combineReducers } from 'redux'
import { createReduxHistoryContext } from 'redux-first-history'

import { employeeApi } from '../features/Employee/employeeAPI'
import { reportApi } from '../features/Report/reportAPI'
import { squadApi } from '../features/Squad/squadAPI'

// Setup redux-first-history
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() })

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      routerMiddleware,
      reportApi.middleware,
      squadApi.middleware,
      employeeApi.middleware,
    ]),
  reducer: combineReducers({
    router: routerReducer,
    [squadApi.reducerPath]: squadApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
export const history = createReduxHistory(store)
