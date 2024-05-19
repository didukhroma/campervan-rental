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
    isLoading: false,
    error: null,
    isModalOpen: false,
    modalId: null,
  },
  reducers: {
    nextPage(state) {
      state.page++;
    },
    openModal(state, { payload }) {
      state.isModalOpen = true;
      state.modalId = payload;
    },
    closeModal(state) {
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
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
    selectIsModalOpen: state => state.isModalOpen,
    selectModalId: state => state.modalId,
  },
});

export const campersReducer = campersSlice.reducer;

export const {
  nextPage,
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
  selectIsLoading,
  selectError,
  selectCampersListLength,
  selectIsModalOpen,
  selectModalId,
} = campersSlice.selectors;
