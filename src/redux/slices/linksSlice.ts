import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LinkState {
  value: boolean
}

const initialState: LinkState = {
  value: false
}

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    linksReducer: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  }
})

export const { linksReducer } = linksSlice.actions

export default linksSlice.reducer
