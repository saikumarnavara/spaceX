import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  loading: false,
  error: null,
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    getHistory: (state) => {
      state.loading = true;
    },
    getHistorySuccess: (state, action) => {
      state.loading = false;
      state.history = action.payload;
    },
    getHistoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getHistory, getHistorySuccess, getHistoryFailure } =
  historySlice.actions;
export default historySlice;