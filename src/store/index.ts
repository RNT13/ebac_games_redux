import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

console.log(store.getState())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
