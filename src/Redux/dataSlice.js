import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataItems = createAsyncThunk(
  'data/fetchDataStatus', async (params, thunkAPI) => {
    let {currentPage, categoryId, sort} = params;

    const {data} =  await axios.get(`https://63ff64b6571200b7b7dcf348.mockapi.io/items?&page=${currentPage}&limit=${12}&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sort.sort}`)
    return data;
  });

const initialState = {
  items: [],
  cloneItems: [],
  status: 'loading'
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action)  {
      state.cloneItems.results = action.payload;
    },
  },
  extraReducers: {
    [fetchDataItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
      state.cloneItems = [];
    },
    [fetchDataItems.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
      state.cloneItems = action.payload;
    },
    [fetchDataItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
      state.cloneItems = [];
    }
  }
});

export const dataSelector = state => state.dataReducer
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
