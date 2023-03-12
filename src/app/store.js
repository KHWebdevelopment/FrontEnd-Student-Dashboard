import { configureStore } from "@reduxjs/toolkit"
import dataSlice from "../features/data/dataSlice"

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;