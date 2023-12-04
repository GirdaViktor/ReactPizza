import { configureStore } from '@reduxjs/toolkit'

import filterSlice from "./filterSlice";
import paginationSlice from "./paginationSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    filterReducer :filterSlice,
    paginationReducer: paginationSlice,
    cartReducer: cartSlice,
  },
});

export default store;
