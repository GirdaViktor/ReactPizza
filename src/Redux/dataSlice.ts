import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "./Store";
import { IInitialStateFilter } from "./filterSlice";

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface IItem {
  category: number;
  id: number;
  imgUrl: string;
  price: number;
  rating: number;
  size: number[];
  title: string;
  types: number[];
}

export const fetchDataItems = createAsyncThunk<IItem[], IInitialStateFilter>(
  'data/fetchDataStatus', async (params) => {
    let {currentPage, categoryId, sort} = params;

    const { data } =  await axios.get<IItem[]>(`https://63ff64b6571200b7b7dcf348.mockapi.io/items?&page=${currentPage}&limit=${12}&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sort.sort}`)
    return data;
  });

interface IInitialStateData {
  items: IItem[];
  status: Status;
}

const initialState: IInitialStateData = {
  items: [],
  status: Status.LOADING,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<IItem[]>)  {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchDataItems.fulfilled, (state, action:PayloadAction<IItem[]>) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });

    builder.addCase(fetchDataItems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const dataSelector = (state: RootState) => state.dataReducer
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
