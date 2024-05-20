import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampersByPage } from '../services/api';

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
