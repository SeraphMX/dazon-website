import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {
  mode: 'store' | 'catalog'
  theme: 'light' | 'dark'
}

const loadSettingsState = (): SettingsState => {
  if (typeof window === 'undefined') {
    return {
      mode: 'store',
      theme: 'light'
    }
  }

  try {
    const serializedState = localStorage.getItem('settingsState')
    if (serializedState === null) {
      return {
        mode: 'store',
        theme: 'light'
      }
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return {
      mode: 'store',
      theme: 'light'
    }
  }
}

const initialState: SettingsState = loadSettingsState()

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<'store' | 'catalog'>) => {
      state.mode = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('settingsState', JSON.stringify(state))
      }
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('settingsState', JSON.stringify(state))
      }
    }
  }
})

export const { setMode, setTheme } = settingsSlice.actions
export default settingsSlice.reducer