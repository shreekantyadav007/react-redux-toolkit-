import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemName = action.payload.name;
      const existingItem = state.items.find((item) => item.name === itemName);
      if (existingItem) {
        existingItem.quantity += 1; 
      }
    },
    decrease: (state, action) => {
      const itemName = action.payload.name;
      const existingItem = state.items.find((item) => item.name === itemName);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1; 
      } else if (existingItem) {
        state.items = state.items.filter((item) => item.name !== itemName);
      }
    }
  },
});

export const { addToCart, removeFromCart, increase, decrease, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
