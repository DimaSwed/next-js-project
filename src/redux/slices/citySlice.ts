import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface CityState {
	value: string
}

// Define the initial state using that type
const initialState: CityState = {
	value: ''
}

export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		chooseCity: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		}
	}
})

export const { chooseCity } = citySlice.actions

export default citySlice.reducer
