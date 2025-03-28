import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import authReducer from './features/authSlice'
import settingsReducer from './features/settingsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: process.env.NODE_ENV === 'development' ? false : true,
    }),
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch