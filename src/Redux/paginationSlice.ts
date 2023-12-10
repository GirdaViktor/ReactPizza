import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface IInitialStatePagination {
  currentPage: number;
}

const initialState: IInitialStatePagination = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  }
});

export const { setCurrentPage } = paginationSlice.actions;
export const paginationSelector = (state: RootState) => state.paginationReducer;
export default paginationSlice.reducer;
