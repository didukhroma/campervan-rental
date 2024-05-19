import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
import { prepareData } from '../helpers/prepareData';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campersList: [],
    page: 1,
    favorites: [],
    isLoading: false,
    error: null,
    isModalOpen: false,
    modalId: null,
  },
  reducers: {
    nextPage(state) {
      state.page++;
    },
    toggleFavorites(state, { payload }) {
      !state.favorites.includes(payload)
        ? state.favorites.push(payload)
        : state.favorites.splice(
            state.favorites.findIndex(el => el === payload),
            1
          );
    },
    openModal(state, { payload }) {
      const rootRef = document.getElementById('root');
      rootRef.style.position = 'fixed';
      state.isModalOpen = true;
      state.modalId = payload;
    },
    closeModal(state) {
      const rootRef = document.getElementById('root');
      rootRef.style.position = 'relative';
      state.isModalOpen = false;
      state.modalId = null;
    },
    startLoader(state) {
      state.isLoading = true;
    },
    stopLoader(state) {
      state.isLoading = false;
    },
    setError(state, { payload }) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        if (state.campersList.length === state.page * 4) return;
        state.campersList.push(...prepareData(payload));
      })
      .addMatcher(isPending(fetchCampers), handlePending)
      .addMatcher(isFulfilled(fetchCampers), handleFulfilled)
      .addMatcher(isRejected(fetchCampers), handleRejected);
  },
  selectors: {
    selectCampersList: state => state.campersList,
    selectCampersListLength: state => state.campersList.length,
    selectPage: state => state.page,
    selectFavorites: state => state.favorites,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
    selectIsModalOpen: state => state.isModalOpen,
    selectModalId: state => state.modalId,
  },
});

export const campersReducer = campersSlice.reducer;

export const {
  nextPage,
  toggleFavorites,
  openModal,
  closeModal,
  startLoader,
  stopLoader,
  setError,
  clearError,
} = campersSlice.actions;

export const {
  selectCampersList,
  selectPage,
  selectFavorites,
  selectIsLoading,
  selectError,
  selectCampersListLength,
  selectIsModalOpen,
  selectModalId,
} = campersSlice.selectors;
