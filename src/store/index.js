import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { counterSlice } from "./counter";

const store = configureStore({
  reducer: { auth: authSlice.reducer, counter: counterSlice.reducer },
});

export default store;
