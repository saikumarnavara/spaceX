import { createSlice } from "@reduxjs/toolkit/react";

interface RocketsState {
  loading: boolean;
  rockets: any[];
  error: string | null;
  rocketDetails: any;
}
const initialState: RocketsState = {
  loading: false,
  rockets: [],
  error: null,
  rocketDetails: null,
};

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    getRockets: (state) => {
      state.loading = true;
    },
    getRocketsSuccess: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
    getRocketsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getRocketDetails: (state, action) => {
      state.rocketDetails = action.payload;
      state.loading = false;
    },
  },
});
export const {
  getRockets,
  getRocketsSuccess,
  getRocketsFailure,
  getRocketDetails,
} = rocketsSlice.actions;
export default rocketsSlice;
