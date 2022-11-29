import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  thing: 'another',
}

export const anotherSlice = createSlice({
  name: 'another',
  initialState,
  reducers: {
    print: (state) => {
      state.thing += ' brick in the wall'
    },
  },
})

export const { print } = anotherSlice.actions
export default anotherSlice.reducer
