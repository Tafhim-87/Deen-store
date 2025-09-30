import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState()?.cart || initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id && item.size === newItem.size)
      
      if (existingItem) {
        existingItem.quantity += newItem.quantity
        existingItem.totalPrice = existingItem.quantity * existingItem.price
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.quantity * newItem.price
        })
      }
      
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)
    },

    removeFromCart: (state, action) => {
      const { id, size } = action.payload
      state.items = state.items.filter(item => !(item.id === id && item.size === size))
      
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)
    },

    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload
      const item = state.items.find(item => item.id === id && item.size === size)
      
      if (item) {
        item.quantity = quantity
        item.totalPrice = item.quantity * item.price
      }
      
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)
    },

    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    }
  }
})

// Helper function to load state from localStorage
function loadState() {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer