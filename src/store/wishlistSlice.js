import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: loadState()?.wishlist || initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find(item => item.id === product.id)
      
      if (!existingItem) {
        state.items.push(product)
      }
    },

    removeFromWishlist: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter(item => item.id !== productId)
    },

    clearWishlist: (state) => {
      state.items = []
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

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer