import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./slices/history-slice";
import rocketsSlice from "./slices/rockets-slice";
import companyDetailsSlice from "./slices/company-slice";

const store = configureStore({
  reducer: {
    history: historySlice.reducer,
    rockets: rocketsSlice.reducer,
    companyDetails: companyDetailsSlice.reducer,
  },
});

export default store;
