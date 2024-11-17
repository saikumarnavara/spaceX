import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  loading: false,
  error: null,
  launches: null,
};

const launchSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    fetchLaunches: (state) => {
      state.loading = true;
    },
    fetchLaunchesSuccess: (state, action) => {
      state.loading = false;
      state.launches = action.payload;
    },
    fetchLaunchesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetLaunches: (state) => {
      state.launches = null;
      state.error = null;
      state.loading = false;
    },
  },
});
export const {
  fetchLaunches,
  fetchLaunchesSuccess,
  fetchLaunchesFailure,
  resetLaunches,
} = launchSlice.actions;
export default launchSlice;
