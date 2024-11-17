import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./slices/history-slice";
import rocketsSlice from "./slices/rockets-slice";
import companyDetailsSlice from "./slices/company-slice";
import launchSlice from "./slices/launch-slice";
import ShipsSlice from "./slices/ships-slice";

const store = configureStore({
  reducer: {
    history: historySlice.reducer,
    rockets: rocketsSlice.reducer,
    companyDetails: companyDetailsSlice.reducer,
    launches: launchSlice.reducer,
    ships: ShipsSlice.reducer,
  },
});

export default store;
