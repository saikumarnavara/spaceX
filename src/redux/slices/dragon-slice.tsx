import { createSlice } from "@reduxjs/toolkit";

interface DragonState {
  loading: boolean;
  dragons: any[];
  error: string | null;
}
const initialState: DragonState = {
  loading: false,
  dragons: [],
  error: null,
};

const DragonSlice = createSlice({
  name: "dragon",
  initialState,
  reducers: {
    dragonsPending: (state) => {
      state.loading = true;
    },
    dragonsSuccess: (state, { payload }) => {
      state.loading = false;
      state.dragons = payload;
    },
    dragonsFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { dragonsPending, dragonsSuccess, dragonsFail } =
  DragonSlice.actions;
export default DragonSlice;
