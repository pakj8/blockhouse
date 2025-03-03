import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./slice/cryptoSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoSlice,
  },
});
