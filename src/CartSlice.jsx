import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const hasThisPlant = state.items.find(item => item.name === name);
      hasThisPlant ? hasThisPlant.quantity++ : state.items.push({name, image, cost, quantity:1})
    },
    removeItem: (state, action) => {
      const {payload: item} = action;
      state.items = state.items.filter((i)=> i.name !== item.name);
    },
    updateQuantity: (state, action) => {
      const {type, name} = action.payload;
      const planToUpdate = state.items.find(item => item.name === name);
      type === 'increment' ? planToUpdate.quantity++ : planToUpdate.quantity--;
      console.log(name,type)
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
