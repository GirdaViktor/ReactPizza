import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./filterSlice";
import paginationSlice from "./paginationSlice";

const store = configureStore({
  reducer: {
    filterReducer :filterSlice,
    paginationReducer: paginationSlice,
  },
});

export default store;
