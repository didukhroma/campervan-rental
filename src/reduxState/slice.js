import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

const handleRejected = state => {
  state.isLoading = false;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: { campersList: [], page: 1, isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        if (state.campersList.length === state.page * 4) return;
        state.campersList.push(...action.payload);
      })
      .addMatcher(isPending(fetchCampers), handlePending)
      .addMatcher(isFulfilled(fetchCampers), handleFulfilled)
      .addMatcher(isRejected(fetchCampers), handleRejected);
  },
  selectors: {
    selectCampersList: state => state.campersList,
    selectPage: state => state.page,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
  },
});

export const campersReducer = campersSlice.reducer;

export const { selectCampersList, selectPage, selectIsLoading, selectError } =
  campersSlice.selectors;
