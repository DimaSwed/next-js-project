// redux/slices/sessionSlice.ts
import { createSlice } from '@reduxjs/toolkit'

interface SessionState {
  user: {
    name: string
    email: string
    image: string
  } | null
}

const initialState: SessionState = {
  user: null
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession(state, action) {
      state.user = action.payload.user
    },
    clearSession(state) {
      state.user = null
    }
  }
})

export const { setSession, clearSession } = sessionSlice.actions
export default sessionSlice.reducer
