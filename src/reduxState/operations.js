import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCampersByFiltersQuery,
  fetchCampersByPage,
} from '../services/api';

export const fetchCampers = createAsyncThunk(
  'campers/fetch',
  async (page, thunkAPI) => {
    try {
      const response = await fetchCampersByPage(page);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCampersByFilters = createAsyncThunk(
  'filteredCampers/fetch',
  async (data, thunkAPI) => {
    try {
      const response = await fetchCampersByFiltersQuery(
        data.page,
        data.searchQuery
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
