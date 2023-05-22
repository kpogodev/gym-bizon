import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface AppState {
  test: string
}

const initialState: AppState = {
  test: 'test'
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload
    },
  },
})

export const { setTest } = appSlice.actions

export const selectTest = (state: RootState) => state.app.test
