import { configureStore } from '@reduxjs/toolkit'

import filterSlice from "./filterSlice";
import paginationSlice from "./paginationSlice";
import cartSlice from "./cartSlice";
import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: {
    dataReducer: dataSlice,
    filterReducer: filterSlice,
    paginationReducer: paginationSlice,
    cartReducer: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
