import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { fetchCampers, fetchCampersByFilters } from './operations';
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
    filter: '',
  },
  reducers: {
    nextPage(state) {
      state.page++;
    },
    setPage(state) {
      state.page = 1;
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
      const rootRef = document.querySelector('body');
      rootRef.style.overflow = 'hidden';
      state.isModalOpen = true;
      state.modalId = payload;
    },
    closeModal(state) {
      const rootRef = document.querySelector('body');
      rootRef.style.overflow = 'scroll';
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
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        if (state.campersList.length === state.page * 4) return;
        state.campersList.push(...prepareData(payload));
      })
      .addCase(fetchCampersByFilters.fulfilled, (state, { payload }) => {
        state.campersList = [...prepareData(payload)];
      })
      .addMatcher(isPending(fetchCampers, fetchCampersByFilters), handlePending)
      .addMatcher(
        isFulfilled(fetchCampers, fetchCampersByFilters),
        handleFulfilled
      )
      .addMatcher(
        isRejected(fetchCampers, fetchCampersByFilters),
        handleRejected
      );
  },
  selectors: {
    selectCampersList: state => state.campersList,
    selectPage: state => state.page,
    selectFavorites: state => state.favorites,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
    selectIsModalOpen: state => state.isModalOpen,
    selectModalId: state => state.modalId,
    selectFilter: state => state.filter,
  },
});

export const campersReducer = campersSlice.reducer;

export const {
  nextPage,
  setPage,
  toggleFavorites,
  openModal,
  closeModal,
  startLoader,
  stopLoader,
  setError,
  clearError,
  setFilter,
} = campersSlice.actions;

export const {
  selectCampersList,
  selectPage,
  selectFavorites,
  selectIsLoading,
  selectError,
  selectIsModalOpen,
  selectModalId,
  selectFilter,
} = campersSlice.selectors;
