import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
  total: number
  isOpen: boolean
  lastAddedItem: CartItem | null
}

// Recuperar el estado del carrito del localStorage
const loadCartState = (): CartState => {
  if (typeof window === 'undefined') {
    return {
      items: [],
      total: 0,
      isOpen: false,
      lastAddedItem: null
    }
  }

  try {
    const serializedState = localStorage.getItem('cartState')
    if (serializedState === null) {
      return {
        items: [],
        total: 0,
        isOpen: false,
        lastAddedItem: null
      }
    }
    const state = JSON.parse(serializedState)
    return {
      ...state,
      isOpen: false, // Siempre iniciar con el carrito cerrado
      lastAddedItem: null
    }
  } catch (err) {
    return {
      items: [],
      total: 0,
      isOpen: false,
      lastAddedItem: null
    }
  }
}

const initialState: CartState = loadCartState()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      state.isOpen = true
      state.lastAddedItem = action.payload
      // Guardar en localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cartState', JSON.stringify({
          items: state.items,
          total: state.total
        }))
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      // Guardar en localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cartState', JSON.stringify({
          items: state.items,
          total: state.total
        }))
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
        // Guardar en localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('cartState', JSON.stringify({
            items: state.items,
            total: state.total
          }))
        }
      }
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
      state.isOpen = false
      state.lastAddedItem = null
      // Limpiar localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cartState')
      }
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
      state.lastAddedItem = null
    }
  },
})

export const { addItem, removeItem, updateQuantity, clearCart, openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer