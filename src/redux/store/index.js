import { configureStore } from '@reduxjs/toolkit'
import anotherReducer from '../features/another'
import counterReducer from '../features/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    another: anotherReducer,
  },
})
