import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  searchValue: '',
  sort: {
    name: 'популярности',
    sort: 'rating',
  }
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort.sort = action.payload.sort;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    }
  }
});

export const { setCategoryId, setSort, setFilters, setSearchValue } = filterSlice.actions;
export const filterSelector = state => state.filterReducer;
export default filterSlice.reducer;
