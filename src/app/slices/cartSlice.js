
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      basket: [] 
    },
    reducers: {
      add_cart: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      remove_cart: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      clear_cart: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
      }
    }
    
});

export const { add_cart, remove_cart, clear_cart } = cartSlice.actions;

export const cartData = (state) => state.cart;

export default cartSlice.reducer;