import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CityState {
  value: string
}

const initialState: CityState = {
  value: 'Moscow'
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    cityReducer: (state, action: PayloadAction<string>) => {
      state.value = action.payload || initialState.value
    }
  }
})

export const { cityReducer } = citySlice.actions

export default citySlice.reducer
