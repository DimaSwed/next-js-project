// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface LinkState {
//   value: string
// }

// const initialState = {
//   currentTheme: 'dark'
// }

// export const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     themeReducer: (state, action: PayloadAction<string>) => {
//       state.currentTheme = action.payload === 'light' ? 'dark' : 'light'
//     }
//   }
// })

// export const { themeReducer } = themeSlice.actions

// export default themeSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTheme: 'dark' // начальное значение
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeReducer: (state, action) => {
      state.currentTheme = action.payload
    }
  }
})

export const { themeReducer } = themeSlice.actions
export default themeSlice.reducer
