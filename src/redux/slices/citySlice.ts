// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// export interface CityState {
//   value: string
// }
// const initialState: CityState = {
//   value: 'Moscow'
// }

// export const citySlice = createSlice({
//   name: 'city',
//   initialState,
//   reducers: {
//     chooseCity: (state, action: PayloadAction<string>) => {
//       state.value = action.payload
//     }
//   }
// })

// export const { chooseCity } = citySlice.actions

// export default citySlice.reducer

// 'use client'
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
    chooseCity: (state, action: PayloadAction<string>) => {
      state.value = action.payload || initialState.value
      console.log(state.value)
    }
  }
})

export const { chooseCity } = citySlice.actions

export default citySlice.reducer
