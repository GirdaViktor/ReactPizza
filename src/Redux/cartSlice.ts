import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export type ItemCartType =  {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  count: number;
};

interface initialStateCart {
  totalPrice: number,
  count: number,
  items: ItemCartType[],
}

const initialState: initialStateCart = {
  totalPrice: 0,
  count: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ItemCartType>) {
      const findItem = state.items.find((item: ItemCartType) => item.id === action.payload.id);

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

    removeItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item:ItemCartType) => item.id === action.payload);
      if (findItem) {
        state.totalPrice -= findItem.price * findItem.count;
        state.count -= findItem.count;
      }
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    incItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item:ItemCartType) => item.id === action.payload);

      if (findItem) {
        findItem.count++;
        state.totalPrice += findItem.price;
        state.count++;
      }
    },

    decItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item:ItemCartType) => item.id === action.payload);

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
export const cartSelector = (state: RootState) => state.cartReducer;

export const { addItem, removeItem, clearItems, incItem, decItem } = cartSlice.actions;
export default cartSlice.reducer;
