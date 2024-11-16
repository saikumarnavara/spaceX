import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  loading: false,
  error: null,
  companyDetails: [],
};

const companyDetailsSlice = createSlice({
  name: "companyDetails",
  initialState,
  reducers: {
    getCompanyDetails: (state) => {
      state.loading = true;
    },
    getCompanyDetailsSuccess: (state, action) => {
      state.loading = false;
      state.companyDetails = action.payload;
    },
    getCompanyDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCompanyDetails,
  getCompanyDetailsSuccess,
  getCompanyDetailsFailure,
} = companyDetailsSlice.actions;
export default companyDetailsSlice;