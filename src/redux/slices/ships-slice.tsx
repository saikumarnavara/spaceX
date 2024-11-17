import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  ships: [],
  error: null,
};

const ShipsSlice = createSlice({
  name: "ships",
  initialState,
  reducers: {
    fetchShips: (state) => {
      state.loading = true;
    },
    fetchShipsSuccess: (state, action) => {
      state.loading = false;
      state.ships = action.payload;
    },
    fetchShipsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchShips, fetchShipsSuccess, fetchShipsFailure } =
  ShipsSlice.actions;
export default ShipsSlice;
