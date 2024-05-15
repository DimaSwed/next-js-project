import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LinkState {
  value: string
}

const initialState = {
  currentTheme: 'dark'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeReducer: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload === 'dark' ? 'light' : 'dark'
    }
  }
})

export const { themeReducer } = themeSlice.actions

export default themeSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// const initialState = {
//   lightTheme: 'true'
// }

// export const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: (state, action: PayloadAction<string>) => {
//       state.lightTheme = action.payload
//     }
//   }
// })

// export const { toggleTheme } = themeSlice.actions
// export default themeSlice.reducer
