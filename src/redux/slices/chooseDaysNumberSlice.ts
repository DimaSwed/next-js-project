import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DaysState {
  value: string
}

const initialState: DaysState = {
  value: ''
}

export const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    daysReducer: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { daysReducer } = daysSlice.actions

export default daysSlice.reducer
