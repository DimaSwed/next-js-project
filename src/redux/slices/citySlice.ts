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
//     cityReducer: (state, action: PayloadAction<string>) => {
//       state.value = action.payload || initialState.value
//     }
//   }
// })

// export const { cityReducer } = citySlice.actions

// export default citySlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CityState {
  value: string
  searchTerm: string
}

const initialState: CityState = {
  value: 'Moscow',
  searchTerm: ''
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    cityReducer: (state, action: PayloadAction<string>) => {
      state.value = action.payload || initialState.value
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    }
  }
})

export const { cityReducer, setSearchTerm } = citySlice.actions

export default citySlice.reducer
