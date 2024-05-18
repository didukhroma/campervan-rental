import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorites(state, { payload }) {
      !state.includes(payload)
        ? state.push(payload)
        : state.splice(
            state.findIndex(el => el === payload),
            1
          );
    },
  },
  selectors: {
    selectFavorites: state => state,
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { toggleFavorites } = favoritesSlice.actions;

export const { selectFavorites } = favoritesSlice.selectors;
