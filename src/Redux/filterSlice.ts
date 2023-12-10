import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export type SortType = {
  name: string;
  sort: 'rating' | 'title' | 'price';
}

export interface IInitialStateFilter {
  categoryId: number;
  searchValue: string;
  currentPage: number;
  sort: SortType;
}

const initialState: IInitialStateFilter = {
  categoryId: 0,
  searchValue: '',
  currentPage: 0,
  sort: {
    name: 'популярности',
    sort: 'rating',
  }
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<IInitialStateFilter>) {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    }
  }
});

export const { setCategoryId, setSort, setFilters, setSearchValue } = filterSlice.actions;
export const filterSelector = (state: RootState) => state.filterReducer;
export default filterSlice.reducer;
