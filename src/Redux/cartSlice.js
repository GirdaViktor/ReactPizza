import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  count: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0);
      state.count =  state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },

    removeItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload);
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalPrice -= findItem.price * findItem.count;
      state.count -= findItem.count;
    },

    incItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload);

      if (findItem) {
        findItem.count++;
        state.totalPrice += findItem.price;
        state.count++;
      }
    },

    decItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload);

      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalPrice -=  findItem.price;
        state.count--;
      }
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.count = 0;
    },
  }
});
export const cartSelector = state => state.cartReducer;

export const { addItem, removeItem, clearItems, incItem, decItem } = cartSlice.actions;
export default cartSlice.reducer;
