import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/features/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
